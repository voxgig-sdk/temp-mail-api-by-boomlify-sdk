# Inbox direct test

require "minitest/autorun"
require "json"
require_relative "../TempMailApiByBoomlify_sdk"
require_relative "runner"

class InboxDirectTest < Minitest::Test
  def test_direct_load_inbox
    setup = inbox_direct_setup({ "id" => "direct01" })
    _should_skip, _reason = Runner.is_control_skipped("direct", "direct-load-inbox", setup[:live] ? "live" : "unit")
    if _should_skip
      skip(_reason || "skipped via sdk-test-control.json")
      return
    end
    client = setup[:client]

    params = {}
    query = {}
    if setup[:live]
      query["token"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
      params["id"] = "user123@boomlify.com"
    else
      params["id"] = "direct01"
    end

    result, err = client.direct({
      "path" => "inbox/{id}",
      "method" => "GET",
      "params" => params,
      "query" => query,
    })
    if setup[:live]
      # Live mode is lenient: synthetic IDs frequently 4xx. Skip rather
      # than fail when the load endpoint isn't reachable with the IDs
      # we can construct from setup.idmap.
      if !err.nil?
        skip("load call failed (likely synthetic IDs against live API): #{err}")
        return
      end
      unless result["ok"]
        skip("load call not ok (likely synthetic IDs against live API)")
        return
      end
      status = Helpers.to_int(result["status"])
      if status < 200 || status >= 300
        skip("expected 2xx status, got #{status}")
        return
      end
    else
      assert_nil err
      assert result["ok"]
      assert_equal 200, Helpers.to_int(result["status"])
      assert !result["data"].nil?
      if result["data"].is_a?(Hash)
        assert_equal "direct01", result["data"]["id"]
      end
      assert_equal 1, setup[:calls].length
    end
  end

end


def inbox_direct_setup(mockres)
  Runner.load_env_local

  calls = []

  env = Runner.env_override({
    "TEMPMAILAPIBYBOOMLIFY_TEST_INBOX_ENTID" => {},
    "TEMPMAILAPIBYBOOMLIFY_TEST_LIVE" => "FALSE",
    "TEMPMAILAPIBYBOOMLIFY_APIKEY" => "NONE",
  })

  live = env["TEMPMAILAPIBYBOOMLIFY_TEST_LIVE"] == "TRUE"

  if live
    merged_opts = {
      "apikey" => env["TEMPMAILAPIBYBOOMLIFY_APIKEY"],
    }
    client = TempMailApiByBoomlifySDK.new(merged_opts)
    return {
      client: client,
      calls: calls,
      live: true,
      idmap: {},
    }
  end

  mock_fetch = ->(url, init) {
    calls.push({ "url" => url, "init" => init })
    return {
      "status" => 200,
      "statusText" => "OK",
      "headers" => {},
      "json" => ->() {
        if !mockres.nil?
          return mockres
        end
        return { "id" => "direct01" }
      },
      "body" => "mock",
    }, nil
  }

  client = TempMailApiByBoomlifySDK.new({
    "base" => "http://localhost:8080",
    "system" => {
      "fetch" => mock_fetch,
    },
  })

  {
    client: client,
    calls: calls,
    live: false,
    idmap: {},
  }
end
