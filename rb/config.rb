# TempMailApiByBoomlify SDK configuration

module TempMailApiByBoomlifyConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "TempMailApiByBoomlify",
        "slug" => "temp-mail-api-by-boomlify",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://boomlify.com/api/v1",
        "auth" => {
          "prefix" => "",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "domain" => {},
          "email" => {},
          "inbox" => {},
        },
      },
      "entity" => {
        "domain" => {
          "fields" => [
            {
              "name" => "domains",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "domain",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/domains",
                  "segments" => [
                    {
                      "lit" => "domains",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "domains",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "email" => {
          "fields" => [
            {
              "format" => "date-time",
              "name" => "createdAt",
              "short" => "Creation timestamp",
              "type" => "`$STRING`",
            },
            {
              "name" => "domain",
              "short" => "Domain to use for the email address.",
              "type" => "`$STRING`",
            },
            {
              "format" => "email",
              "name" => "email",
              "short" => "The generated temporary email address",
              "type" => "`$STRING`",
            },
            {
              "format" => "date-time",
              "name" => "expiresAt",
              "short" => "Expiration timestamp of the email address",
              "type" => "`$STRING`",
            },
            {
              "name" => "expiry",
              "short" => "Expiry duration for the email address",
              "type" => "`$STRING`",
            },
            {
              "name" => "token",
              "short" => "Access token for managing this email address",
              "type" => "`$STRING`",
            },
            {
              "name" => "username",
              "short" => "Desired username for the email address.",
              "type" => "`$STRING`",
            },
          ],
          "name" => "email",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/email/create",
                  "segments" => [
                    {
                      "lit" => "email",
                    },
                    {
                      "lit" => "create",
                    },
                  ],
                  "select" => {
                    "$action" => "create",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "email",
                    "create",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "inbox" => {
          "fields" => [
            {
              "format" => "email",
              "name" => "email",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "messageCount",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "messages",
              "type" => "`$ARRAY`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "inbox",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "user123@boomlify.com",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "email",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => 20,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => true,
                        "kind" => "query",
                        "name" => "preview",
                        "orig" => "preview",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                        "kind" => "query",
                        "name" => "token",
                        "orig" => "token",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/inbox/{email}",
                  "rename" => {
                    "param" => {
                      "email" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "lit" => "inbox",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                      "limit",
                      "preview",
                      "token",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "inbox",
                    "{id}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    TempMailApiByBoomlifyFeatures.make_feature(name)
  end
end
