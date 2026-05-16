# TempMailApiByBoomlify SDK utility: feature_add
module TempMailApiByBoomlifyUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
