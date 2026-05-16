
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TempMailApiByBoomlifySDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TempMailApiByBoomlifySDK.test()
    equal(null !== testsdk, true)
  })

})
