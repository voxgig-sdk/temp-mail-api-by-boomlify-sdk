# TempMailApiByBoomlify SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TempMailApiByBoomlifyFeatures
  def self.make_feature(name)
    case name
    when "base"
      TempMailApiByBoomlifyBaseFeature.new
    when "ratelimit"
      TempMailApiByBoomlifyRatelimitFeature.new
    when "retry"
      TempMailApiByBoomlifyRetryFeature.new
    when "test"
      TempMailApiByBoomlifyTestFeature.new
    when "timeout"
      TempMailApiByBoomlifyTimeoutFeature.new
    else
      TempMailApiByBoomlifyBaseFeature.new
    end
  end
end
