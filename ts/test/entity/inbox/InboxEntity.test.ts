

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TempMailApiByBoomlifySDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('InboxEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE=TRUE.
  afterEach(liveDelay('TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TempMailApiByBoomlifySDK.test()
    const ent = testsdk.Inbox()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'inbox.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"email","name":"email","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"messageCount","req":false,"type":"`$INTEGER`","index$":2},{"active":true,"name":"messages","req":false,"type":"`$ARRAY`","index$":3}],"id":{"field":"id","name":"id"},"name":"inbox","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"user123@boomlify.com","kind":"param","name":"id","orig":"email","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":20,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":true,"kind":"query","name":"preview","orig":"preview","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"example":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /inbox/{email}","json":"{\"operationId\":\"getInboxMessages\",\"parameters\":[{\"description\":\"The temporary email address to retrieve messages for\",\"in\":\"path\",\"name\":\"email\",\"required\":true,\"schema\":{\"example\":\"user123@boomlify.com\",\"format\":\"email\",\"type\":\"string\"}},{\"description\":\"Access token for the email address\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"schema\":{\"example\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\",\"type\":\"string\"}},{\"description\":\"Maximum number of messages to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":50,\"example\":20,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Enable smart inbox preview mode for quick content viewing\",\"in\":\"query\",\"name\":\"preview\",\"required\":false,\"schema\":{\"default\":false,\"example\":true,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"email\":{\"example\":\"user123@boomlify.com\",\"format\":\"email\",\"type\":\"string\"},\"messageCount\":{\"example\":5,\"type\":\"integer\"},\"messages\":{\"items\":{\"properties\":{\"attachments\":{\"description\":\"List of email attachments\",\"items\":{\"properties\":{\"contentType\":{\"example\":\"application/pdf\",\"type\":\"string\"},\"filename\":{\"example\":\"document.pdf\",\"type\":\"string\"},\"size\":{\"description\":\"Size in bytes\",\"example\":12345,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"body\":{\"description\":\"Full email body content\",\"example\":\"Click here to verify: https://example.com/verify?token=abc123\",\"type\":\"string\"},\"from\":{\"description\":\"Sender's email address\",\"example\":\"noreply@service.com\",\"format\":\"email\",\"type\":\"string\"},\"fromName\":{\"description\":\"Sender's display name\",\"example\":\"Service Notifications\",\"type\":\"string\"},\"html\":{\"description\":\"HTML version of the email body\",\"example\":\"<html><body><p>Click here to verify...</p></body></html>\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the message\",\"example\":\"msg_abc123xyz\",\"type\":\"string\"},\"preview\":{\"description\":\"Smart preview excerpt of the email content\",\"example\":\"Click here to verify: https://example.com/verify?...\",\"type\":\"string\"},\"read\":{\"description\":\"Whether the message has been read\",\"example\":false,\"type\":\"boolean\"},\"receivedAt\":{\"description\":\"Timestamp when the email was received\",\"example\":\"2024-01-19T12:30:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"subject\":{\"description\":\"Email subject line\",\"example\":\"Verify your account\",\"type\":\"string\"},\"to\":{\"description\":\"Recipient's email address\",\"example\":\"user123@boomlify.com\",\"format\":\"email\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Inbox messages retrieved successfully\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":\"INVALID_TOKEN\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"example\":\"The provided token is invalid or has expired\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Invalid or missing access token\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":\"INVALID_TOKEN\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"example\":\"The provided token is invalid or has expired\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Email address not found or expired\"}},\"security\":[{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication (optional for free tier)\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"},\"TokenAuth\":{\"description\":\"Email-specific access token obtained when creating a temporary email\",\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/inbox/{email}","rename":{"param":{"email":"id"}},"segments":[{"lit":"inbox"},{"var":"id"}],"select":{"exist":["id","limit","preview","token"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"inbox","name__orig":"inbox","Name":"Inbox","name_":"inbox","name-":"inbox","NAME":"INBOX","index$":2}, {"active":true,"entity":"inbox","key$":"BasicInboxFlow","kind":"basic","name":"BasicInboxFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"inbox_ref01","srcdatavar":"inbox_ref01_data","suffix":"_dt0"},"match":{"id":"inbox01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-inbox_ref01"}}],"index$":0}]}, 'Inbox')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let inbox_ref01_data = Object.values(setup.data.existing.inbox)[0] as any

    // LOAD
    const inbox_ref01_ent = client.Inbox()
    const inbox_ref01_match_dt0: any = {}
    inbox_ref01_match_dt0.id = inbox_ref01_data.id
    const inbox_ref01_data_dt0 = (await inbox_ref01_ent.load(inbox_ref01_match_dt0)).data()
    assert(inbox_ref01_data_dt0.id === inbox_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/inbox/InboxTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TempMailApiByBoomlifySDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['inbox01','inbox02','inbox03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TEMP_MAIL_API_BY_BOOMLIFY_TEST_INBOX_ENTID': idmap,
    'TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE': 'FALSE',
    'TEMP_MAIL_API_BY_BOOMLIFY_TEST_EXPLAIN': 'FALSE',
    'TEMP_MAIL_API_BY_BOOMLIFY_APIKEY': '',
  })

  idmap = env['TEMP_MAIL_API_BY_BOOMLIFY_TEST_INBOX_ENTID']

  const live = 'TRUE' === env.TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TEMP_MAIL_API_BY_BOOMLIFY_TEST_INBOX_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TempMailApiByBoomlifySDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.TEMP_MAIL_API_BY_BOOMLIFY_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.TEMP_MAIL_API_BY_BOOMLIFY_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
