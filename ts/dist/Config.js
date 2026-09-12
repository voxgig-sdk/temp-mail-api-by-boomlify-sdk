"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'TempMailApiByBoomlify',
        slug: "temp-mail-api-by-boomlify",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://boomlify.com/api/v1",
        auth: {
            prefix: '',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            domain: {},
            email: {},
            inbox: {},
        }
    };
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
            "fields": [
                {
                    "format": "date-time",
                    "name": "createdAt",
                    "short": "Creation timestamp",
                    "type": "`$STRING`"
                },
                {
                    "name": "domain",
                    "short": "Domain to use for the email address.",
                    "type": "`$STRING`"
                },
                {
                    "format": "email",
                    "name": "email",
                    "short": "The generated temporary email address",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "expiresAt",
                    "short": "Expiration timestamp of the email address",
                    "type": "`$STRING`"
                },
                {
                    "name": "expiry",
                    "short": "Expiry duration for the email address",
                    "type": "`$STRING`"
                },
                {
                    "name": "token",
                    "short": "Access token for managing this email address",
                    "type": "`$STRING`"
                },
                {
                    "name": "username",
                    "short": "Desired username for the email address.",
                    "type": "`$STRING`"
                }
            ],
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
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map