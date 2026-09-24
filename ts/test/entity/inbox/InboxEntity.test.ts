

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"email":{"a":true,"fo":"email","h":"Email","n":"email","r":false,"t":"`$STRING`","key$":"email","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"messageCount":{"a":true,"h":"Message Count","n":"messageCount","r":false,"t":"`$INTEGER`","key$":"messageCount","index$":2},"messages":{"a":true,"h":"Messages","n":"messages","r":false,"t":"`$ARRAY`","key$":"messages","index$":3}},"id":{"field":"id","name":"id"},"name":"inbox","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /inbox/{email}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"user123@boomlify.com","k":"param","n":"id","or":"email","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":20,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":true,"k":"query","n":"preview","or":"preview","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","k":"query","n":"token","or":"token","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/inbox/{email}","q":{"exist":["id","limit","preview","token"]},"r":{"param":{"email":"id"}},"s":[{"lit":"inbox"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"inbox","name__orig":"inbox","Name":"Inbox","name_":"inbox","name-":"inbox","NAME":"INBOX","index$":2}, {"active":true,"entity":"inbox","key$":"BasicInboxFlow","kind":"basic","name":"BasicInboxFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"inbox_ref01","srcdatavar":"inbox_ref01_data","suffix":"_dt0"},"m":{"id":"inbox01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-inbox_ref01"}}],"index$":0}]}, 'Inbox', {"GET /inbox/{email}":{"protocol":"http","operationId":"getInboxMessages","responses":{"200":{"description":"Inbox messages retrieved successfully","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":true},"data":{"type":"object","properties":{"email":{"type":"string","format":"email","example":"user123@boomlify.com","key$":"email"},"messageCount":{"type":"integer","example":5,"key$":"messageCount"},"messages":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier for the message","example":"msg_abc123xyz"},"from":{"type":"string","format":"email","description":"Sender's email address","example":"noreply@service.com"},"fromName":{"type":"string","description":"Sender's display name","example":"Service Notifications"},"to":{"type":"string","format":"email","description":"Recipient's email address","example":"user123@boomlify.com"},"subject":{"type":"string","description":"Email subject line","example":"Verify your account"},"body":{"type":"string","description":"Full email body content","example":"Click here to verify: https://example.com/verify?token=abc123"},"preview":{"type":"string","description":"Smart preview excerpt of the email content","example":"Click here to verify: https://example.com/verify?..."},"html":{"type":"string","description":"HTML version of the email body","example":"<html><body><p>Click here to verify...</p></body></html>"},"attachments":{"type":"array","description":"List of email attachments","items":{"type":"object","properties":{"filename":{"type":"string","example":"document.pdf"},"contentType":{"type":"string","example":"application/pdf"},"size":{"type":"integer","description":"Size in bytes","example":12345}}}},"receivedAt":{"type":"string","format":"date-time","description":"Timestamp when the email was received","example":"2024-01-19T12:30:00Z"},"read":{"type":"boolean","description":"Whether the message has been read","example":false}},"x-ref":"#/components/schemas/Message"},"key$":"messages"}},"index$":0}}}}}},"401":{"description":"Invalid or missing access token","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string","description":"Error code","example":"INVALID_TOKEN"},"message":{"type":"string","description":"Human-readable error message","example":"The provided token is invalid or has expired"}}}},"x-ref":"#/components/schemas/Error"}}}},"404":{"description":"Email address not found or expired","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string","description":"Error code","example":"INVALID_TOKEN"},"message":{"type":"string","description":"Human-readable error message","example":"The provided token is invalid or has expired"}}}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"email","in":"path","required":true,"description":"The temporary email address to retrieve messages for","schema":{"type":"string","format":"email","example":"user123@boomlify.com"},"index$":0},{"name":"token","in":"query","required":true,"description":"Access token for the email address","schema":{"type":"string","example":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."},"index$":1},{"name":"limit","in":"query","required":false,"description":"Maximum number of messages to return","schema":{"type":"integer","default":50,"minimum":1,"maximum":100,"example":20},"index$":2},{"name":"preview","in":"query","required":false,"description":"Enable smart inbox preview mode for quick content viewing","schema":{"type":"boolean","default":false,"example":true},"index$":3}],"security":[{"ApiKeyAuth":[]}],"securitySource":"definition","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication (optional for free tier)"},"TokenAuth":{"type":"apiKey","in":"query","name":"token","description":"Email-specific access token obtained when creating a temporary email"}}}})
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
  
