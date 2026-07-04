-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "TempMailApiByBoomlify",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://boomlify.com/api/v1",
      auth = {
        prefix = "Bearer",
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
            ["active"] = true,
            ["name"] = "data",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "success",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 1,
          },
        },
        ["name"] = "domain",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/domains",
                ["parts"] = {
                  "domains",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["email"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "data",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "domain",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "expiry",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "success",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "username",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
        },
        ["name"] = "email",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
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
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "create",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["inbox"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "data",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "success",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 1,
          },
        },
        ["name"] = "inbox",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "user123@boomlify.com",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "email",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = 20,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "preview",
                      ["orig"] = "preview",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                      ["kind"] = "query",
                      ["name"] = "token",
                      ["orig"] = "token",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
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
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
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
