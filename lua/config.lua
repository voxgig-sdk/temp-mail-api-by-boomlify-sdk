-- TempMailApiByBoomlify SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "TempMailApiByBoomlify",
      slug = "temp-mail-api-by-boomlify",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://boomlify.com/api/v1",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["domain"] = {},
        ["email"] = {},
        ["inbox"] = {},
      },
    },
    entity = {
      ["domain"] = {
        ["fields"] = {
          {
            ["name"] = "domains",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "domain",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/domains",
                ["parts"] = {
                  "domains",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["email"] = {
        ["fields"] = {
          {
            ["name"] = "createdAt",
            ["short"] = "Creation timestamp",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "domain",
            ["short"] = "Domain to use for the email address.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "email",
            ["short"] = "The generated temporary email address",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "expiresAt",
            ["short"] = "Expiration timestamp of the email address",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "expiry",
            ["short"] = "Expiry duration for the email address",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "token",
            ["short"] = "Access token for managing this email address",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "username",
            ["short"] = "Desired username for the email address.",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "email",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/email/create",
                ["parts"] = {
                  "email",
                  "create",
                },
                ["select"] = {
                  ["$action"] = "create",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["inbox"] = {
        ["fields"] = {
          {
            ["name"] = "email",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "messageCount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "messages",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "inbox",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "user123@boomlify.com",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "email",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = 20,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "preview",
                      ["orig"] = "preview",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                      ["kind"] = "query",
                      ["name"] = "token",
                      ["orig"] = "token",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/inbox/{email}",
                ["parts"] = {
                  "inbox",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["email"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "limit",
                    "preview",
                    "token",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
