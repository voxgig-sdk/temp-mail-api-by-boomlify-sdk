# TempMailApiByBoomlify SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module TempMailApiByBoomlifyFeatures
  def self.make_feature(name)
    case name
    when "base"
      TempMailApiByBoomlifyBaseFeature.new
    when "test"
      TempMailApiByBoomlifyTestFeature.new
    else
      TempMailApiByBoomlifyBaseFeature.new
    end
  end
end
