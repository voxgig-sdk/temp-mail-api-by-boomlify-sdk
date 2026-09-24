
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


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
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
          "title": "Domains",
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
              "kind": "http",
              "method": "GET",
              "orig": "/domains",
              "segments": [
                {
                  "lit": "domains"
                }
              ],
              "parts": [
                "domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {},
              "select": {}
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
              "parts": [
                "email",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {},
              "select": {
                "$action": "create"
              }
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
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "format": "email"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "messageCount",
          "title": "Message Count",
          "type": "`$INTEGER`"
        },
        {
          "name": "messages",
          "title": "Messages",
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
              "kind": "http",
              "method": "GET",
              "orig": "/inbox/{email}",
              "segments": [
                {
                  "lit": "inbox"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "inbox",
                "{id}"
              ],
              "rename": {
                "param": {
                  "email": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "email",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "user123@boomlify.com"
                  }
                ],
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "preview",
                    "orig": "preview",
                    "type": "`$BOOLEAN`",
                    "kind": "query",
                    "example": true
                  },
                  {
                    "name": "token",
                    "orig": "token",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "limit",
                  "preview",
                  "token"
                ]
              }
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

