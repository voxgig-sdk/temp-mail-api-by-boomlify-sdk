# TempMailApiByBoomlify SDK exists test

require "minitest/autorun"
require_relative "../TempMailApiByBoomlify_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = TempMailApiByBoomlifySDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
