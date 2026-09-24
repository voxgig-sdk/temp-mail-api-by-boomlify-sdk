
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TempMailApiByBoomlifySDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TempMailApiByBoomlifySDK.test()
    equal(testsdk instanceof TempMailApiByBoomlifySDK, true,
      'TempMailApiByBoomlifySDK.test() must return a client synchronously')
  })

})
