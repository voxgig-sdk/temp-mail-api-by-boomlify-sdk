"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "domain",
        "accessor": "Domain",
        "op": "load",
        "method": "GET",
        "path": "/domains",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-api-key"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "success": true,
            "data": {
                "domains": [
                    {
                        "active": true,
                        "domain": "boomlify.com",
                        "type": "default"
                    }
                ]
            }
        },
        "idField": "id"
    },
    {
        "entity": "email",
        "accessor": "Email",
        "op": "create",
        "method": "POST",
        "path": "/email/create",
        "action": "create",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-api-key"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "success": true,
            "data": {
                "email": "user123@boomlify.com",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                "expiresAt": "2024-01-20T12:00:00Z",
                "createdAt": "2024-01-19T12:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "inbox",
        "accessor": "Inbox",
        "op": "load",
        "method": "GET",
        "path": "/inbox/{email}",
        "args": [
            {
                "name": "id",
                "wire": "email",
                "value": "user123@boomlify.com"
            }
        ],
        "select": {
            "limit": 20,
            "preview": "v1",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
        "headers": [],
        "query": [
            "token",
            "limit",
            "preview"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "x-api-key"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "success": true,
            "data": {
                "email": "user123@boomlify.com",
                "messageCount": 5,
                "messages": [
                    {
                        "id": "msg_abc123xyz",
                        "from": "noreply@service.com",
                        "fromName": "Service Notifications",
                        "to": "user123@boomlify.com",
                        "subject": "Verify your account",
                        "body": "Click here to verify: https://example.com/verify?token=abc123",
                        "preview": "Click here to verify: https://example.com/verify?...",
                        "html": "<html><body><p>Click here to verify...</p></body></html>",
                        "attachments": [
                            {
                                "filename": "document.pdf",
                                "contentType": "application/pdf",
                                "size": 12345
                            }
                        ],
                        "receivedAt": "2024-01-19T12:30:00Z",
                        "read": false
                    }
                ]
            }
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map