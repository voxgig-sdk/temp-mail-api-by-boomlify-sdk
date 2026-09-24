

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


describe('DomainEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE=TRUE.
  afterEach(liveDelay('TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TempMailApiByBoomlifySDK.test()
    const ent = testsdk.Domain()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'domain.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"domains":{"a":true,"h":"Domains","n":"domains","r":false,"t":"`$ARRAY`","key$":"domains","index$":0}},"name":"domain","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /domains","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/domains","q":{},"r":{},"s":[{"lit":"domains"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"domain","name__orig":"domain","Name":"Domain","name_":"domain","name-":"domain","NAME":"DOMAIN","index$":0}, {"active":true,"entity":"domain","key$":"BasicDomainFlow","kind":"basic","name":"BasicDomainFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"domain_ref01","srcdatavar":"domain_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_ref01"}}],"index$":0}]}, 'Domain', {"GET /domains":{"protocol":"http","operationId":"getAvailableDomains","responses":{"200":{"description":"Available domains retrieved successfully","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"example":true,"key$":"success","type":"boolean"},"data":{"key$":"data","properties":{"domains":{"items":{"properties":{"active":{"description":"Whether the domain is currently active","example":true,"type":"boolean"},"domain":{"description":"Domain name","example":"boomlify.com","type":"string"},"type":{"description":"Type of domain","enum":["default","custom"],"example":"default","type":"string"}},"type":"object"},"type":"array","key$":"domains"}},"type":"object","index$":0}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string","description":"Error code","example":"INVALID_TOKEN"},"message":{"type":"string","description":"Human-readable error message","example":"The provided token is invalid or has expired"}}}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"security":[{"ApiKeyAuth":[]}],"securitySource":"definition","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication (optional for free tier)"},"TokenAuth":{"type":"apiKey","in":"query","name":"token","description":"Email-specific access token obtained when creating a temporary email"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let domain_ref01_data = Object.values(setup.data.existing.domain)[0] as any

    // LOAD
    const domain_ref01_ent = client.Domain()
    const domain_ref01_match_dt0: any = {}
    const domain_ref01_data_dt0 = (await domain_ref01_ent.load(domain_ref01_match_dt0)).data()
    assert(null != domain_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/domain/DomainTestData.json')

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
    ['domain01','domain02','domain03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TEMP_MAIL_API_BY_BOOMLIFY_TEST_DOMAIN_ENTID': idmap,
    'TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE': 'FALSE',
    'TEMP_MAIL_API_BY_BOOMLIFY_TEST_EXPLAIN': 'FALSE',
    'TEMP_MAIL_API_BY_BOOMLIFY_APIKEY': '',
  })

  idmap = env['TEMP_MAIL_API_BY_BOOMLIFY_TEST_DOMAIN_ENTID']

  const live = 'TRUE' === env.TEMP_MAIL_API_BY_BOOMLIFY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TEMP_MAIL_API_BY_BOOMLIFY_TEST_DOMAIN_ENTID']
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
  
