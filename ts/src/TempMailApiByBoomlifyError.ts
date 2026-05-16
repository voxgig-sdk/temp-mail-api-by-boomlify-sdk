
import { Context } from './Context'


class TempMailApiByBoomlifyError extends Error {

  isTempMailApiByBoomlifyError = true

  sdk = 'TempMailApiByBoomlify'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  TempMailApiByBoomlifyError
}

