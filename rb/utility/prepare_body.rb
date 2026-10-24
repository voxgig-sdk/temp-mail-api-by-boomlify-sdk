# TempMailApiByBoomlify SDK utility: prepare_body
require_relative 'media'
module TempMailApiByBoomlifyUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return TempMailApiByBoomlifyUtilities.raw_body(ctx.reqdata) if TempMailApiByBoomlifyUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
