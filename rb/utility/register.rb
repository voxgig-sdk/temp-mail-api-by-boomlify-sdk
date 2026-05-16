# TempMailApiByBoomlify SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

TempMailApiByBoomlifyUtility.registrar = ->(u) {
  u.clean = TempMailApiByBoomlifyUtilities::Clean
  u.done = TempMailApiByBoomlifyUtilities::Done
  u.make_error = TempMailApiByBoomlifyUtilities::MakeError
  u.feature_add = TempMailApiByBoomlifyUtilities::FeatureAdd
  u.feature_hook = TempMailApiByBoomlifyUtilities::FeatureHook
  u.feature_init = TempMailApiByBoomlifyUtilities::FeatureInit
  u.fetcher = TempMailApiByBoomlifyUtilities::Fetcher
  u.make_fetch_def = TempMailApiByBoomlifyUtilities::MakeFetchDef
  u.make_context = TempMailApiByBoomlifyUtilities::MakeContext
  u.make_options = TempMailApiByBoomlifyUtilities::MakeOptions
  u.make_request = TempMailApiByBoomlifyUtilities::MakeRequest
  u.make_response = TempMailApiByBoomlifyUtilities::MakeResponse
  u.make_result = TempMailApiByBoomlifyUtilities::MakeResult
  u.make_point = TempMailApiByBoomlifyUtilities::MakePoint
  u.make_spec = TempMailApiByBoomlifyUtilities::MakeSpec
  u.make_url = TempMailApiByBoomlifyUtilities::MakeUrl
  u.param = TempMailApiByBoomlifyUtilities::Param
  u.prepare_auth = TempMailApiByBoomlifyUtilities::PrepareAuth
  u.prepare_body = TempMailApiByBoomlifyUtilities::PrepareBody
  u.prepare_headers = TempMailApiByBoomlifyUtilities::PrepareHeaders
  u.prepare_method = TempMailApiByBoomlifyUtilities::PrepareMethod
  u.prepare_params = TempMailApiByBoomlifyUtilities::PrepareParams
  u.prepare_path = TempMailApiByBoomlifyUtilities::PreparePath
  u.prepare_query = TempMailApiByBoomlifyUtilities::PrepareQuery
  u.result_basic = TempMailApiByBoomlifyUtilities::ResultBasic
  u.result_body = TempMailApiByBoomlifyUtilities::ResultBody
  u.result_headers = TempMailApiByBoomlifyUtilities::ResultHeaders
  u.transform_request = TempMailApiByBoomlifyUtilities::TransformRequest
  u.transform_response = TempMailApiByBoomlifyUtilities::TransformResponse
}
