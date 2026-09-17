
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'TempMailApiByBoomlify',
        slug: "temp-mail-api-by-boomlify",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://boomlify.com/api/v1",

    auth: {
      prefix: '',
      name: 'X-API-Key',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        domain: {
        },
  
        email: {
        },
  
        inbox: {
        },
  
    }
  }


  entity = {
    "domain": {
      "fields": [
        {
          "name": "domains",
          "type": "`$ARRAY`"
        }
      ],
      "name": "domain",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/domains",
              "segments": [
                {
                  "lit": "domains"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "domains"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "email": {
      "fields": [],
      "name": "email",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/email/create",
              "segments": [
                {
                  "lit": "email"
                },
                {
                  "lit": "create"
                }
              ],
              "select": {
                "$action": "create"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "email",
                "create"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "inbox": {
      "fields": [
        {
          "format": "email",
          "name": "email",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "messageCount",
          "type": "`$INTEGER`"
        },
        {
          "name": "messages",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "inbox",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "user123@boomlify.com",
                    "kind": "param",
                    "name": "id",
                    "orig": "email",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 20,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": true,
                    "kind": "query",
                    "name": "preview",
                    "orig": "preview",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                    "kind": "query",
                    "name": "token",
                    "orig": "token",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/inbox/{email}",
              "rename": {
                "param": {
                  "email": "id"
                }
              },
              "segments": [
                {
                  "lit": "inbox"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "limit",
                  "preview",
                  "token"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "inbox",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

