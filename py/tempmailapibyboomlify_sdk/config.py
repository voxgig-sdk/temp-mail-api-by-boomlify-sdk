# TempMailApiByBoomlify SDK configuration


def make_config():
    return {
        "main": {
            "name": "TempMailApiByBoomlify",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://boomlify.com/api/v1",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "domain": {},
                "email": {},
                "inbox": {},
            },
        },
        "entity": {
      "domain": {
        "fields": [
          {
            "active": True,
            "name": "domains",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "domain",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/domains",
                "parts": [
                  "domains",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "email": {
        "fields": [
          {
            "active": True,
            "name": "createdAt",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "domain",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "email",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "expiresAt",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "expiry",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "token",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "username",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
        ],
        "name": "email",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/email/create",
                "parts": [
                  "email",
                  "create",
                ],
                "select": {
                  "$action": "create",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "inbox": {
        "fields": [
          {
            "active": True,
            "name": "email",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "messageCount",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "messages",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 2,
          },
        ],
        "name": "inbox",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "user123@boomlify.com",
                      "kind": "param",
                      "name": "id",
                      "orig": "email",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 20,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": True,
                      "kind": "query",
                      "name": "preview",
                      "orig": "preview",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "example": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/inbox/{email}",
                "parts": [
                  "inbox",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "email": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "limit",
                    "preview",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
