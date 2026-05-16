# TempMailApiByBoomlify SDK utility: make_context
require_relative '../core/context'
module TempMailApiByBoomlifyUtilities
  MakeContext = ->(ctxmap, basectx) {
    TempMailApiByBoomlifyContext.new(ctxmap, basectx)
  }
end
