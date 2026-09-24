

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


describe('EmailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE=TRUE.
  afterEach(liveDelay('TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TempMailApiByBoomlifySDK.test()
    const ent = testsdk.Email()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'email.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"email","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /email/create","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/email/create","q":{"$action":"create"},"r":{},"s":[{"lit":"email"},{"lit":"create"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"email","name__orig":"email","Name":"Email","name_":"email","name-":"email","NAME":"EMAIL","index$":1}, {"active":true,"entity":"email","key$":"BasicEmailFlow","kind":"basic","name":"BasicEmailFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"email_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Email', {"POST /email/create":{"protocol":"http","operationId":"createTempEmail","requestBody":{"description":"Configuration for the temporary email to be created","required":false,"content":{"application/json":{"schema":{"type":"object","properties":{"username":{"type":"string","description":"Desired username for the email address. If not provided, a random one will be generated.","example":"user123"},"domain":{"type":"string","description":"Domain to use for the email address. If not provided, a default Boomlify domain will be used.","example":"boomlify.com"},"expiry":{"type":"string","description":"Expiry duration for the email address","enum":["10m","1h","24h","7d","30d","60d"],"example":"24h"}}}}}},"responses":{"200":{"description":"Temporary email address created successfully","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":true},"data":{"type":"object","properties":{"email":{"type":"string","format":"email","description":"The generated temporary email address","example":"user123@boomlify.com"},"token":{"type":"string","description":"Access token for managing this email address","example":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."},"expiresAt":{"type":"string","format":"date-time","description":"Expiration timestamp of the email address","example":"2024-01-20T12:00:00Z"},"createdAt":{"type":"string","format":"date-time","description":"Creation timestamp","example":"2024-01-19T12:00:00Z"}}}}}}}},"400":{"description":"Invalid request parameters","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string","description":"Error code","example":"INVALID_TOKEN"},"message":{"type":"string","description":"Human-readable error message","example":"The provided token is invalid or has expired"}}}},"x-ref":"#/components/schemas/Error"}}}},"429":{"description":"Rate limit exceeded","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string","description":"Error code","example":"INVALID_TOKEN"},"message":{"type":"string","description":"Human-readable error message","example":"The provided token is invalid or has expired"}}}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"security":[{"ApiKeyAuth":[]}],"securitySource":"definition","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication (optional for free tier)"},"TokenAuth":{"type":"apiKey","in":"query","name":"token","description":"Email-specific access token obtained when creating a temporary email"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const email_ref01_ent = client.Email()
    let email_ref01_data = setup.data.new.email['email_ref01']

    email_ref01_data = (await email_ref01_ent.create(email_ref01_data)).data()
    assert(null != email_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/email/EmailTestData.json')

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
    ['email01','email02','email03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TEMP_MAIL_API_BY_BOOMLIFY_TEST_EMAIL_ENTID': idmap,
    'TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE': 'FALSE',
    'TEMP_MAIL_API_BY_BOOMLIFY_TEST_EXPLAIN': 'FALSE',
    'TEMP_MAIL_API_BY_BOOMLIFY_APIKEY': '',
  })

  idmap = env['TEMP_MAIL_API_BY_BOOMLIFY_TEST_EMAIL_ENTID']

  const live = 'TRUE' === env.TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TEMP_MAIL_API_BY_BOOMLIFY_TEST_EMAIL_ENTID']
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
  
