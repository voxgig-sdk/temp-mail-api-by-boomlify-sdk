-- TempMailApiByBoomlify SDK error

local TempMailApiByBoomlifyError = {}
TempMailApiByBoomlifyError.__index = TempMailApiByBoomlifyError


function TempMailApiByBoomlifyError.new(code, msg, ctx)
  local self = setmetatable({}, TempMailApiByBoomlifyError)
  self.is_sdk_error = true
  self.sdk = "TempMailApiByBoomlify"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TempMailApiByBoomlifyError:error()
  return self.msg
end


function TempMailApiByBoomlifyError:__tostring()
  return self.msg
end


return TempMailApiByBoomlifyError
