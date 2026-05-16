<?php
declare(strict_types=1);

// TempMailApiByBoomlify SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

TempMailApiByBoomlifyUtility::setRegistrar(function (TempMailApiByBoomlifyUtility $u): void {
    $u->clean = [TempMailApiByBoomlifyClean::class, 'call'];
    $u->done = [TempMailApiByBoomlifyDone::class, 'call'];
    $u->make_error = [TempMailApiByBoomlifyMakeError::class, 'call'];
    $u->feature_add = [TempMailApiByBoomlifyFeatureAdd::class, 'call'];
    $u->feature_hook = [TempMailApiByBoomlifyFeatureHook::class, 'call'];
    $u->feature_init = [TempMailApiByBoomlifyFeatureInit::class, 'call'];
    $u->fetcher = [TempMailApiByBoomlifyFetcher::class, 'call'];
    $u->make_fetch_def = [TempMailApiByBoomlifyMakeFetchDef::class, 'call'];
    $u->make_context = [TempMailApiByBoomlifyMakeContext::class, 'call'];
    $u->make_options = [TempMailApiByBoomlifyMakeOptions::class, 'call'];
    $u->make_request = [TempMailApiByBoomlifyMakeRequest::class, 'call'];
    $u->make_response = [TempMailApiByBoomlifyMakeResponse::class, 'call'];
    $u->make_result = [TempMailApiByBoomlifyMakeResult::class, 'call'];
    $u->make_point = [TempMailApiByBoomlifyMakePoint::class, 'call'];
    $u->make_spec = [TempMailApiByBoomlifyMakeSpec::class, 'call'];
    $u->make_url = [TempMailApiByBoomlifyMakeUrl::class, 'call'];
    $u->param = [TempMailApiByBoomlifyParam::class, 'call'];
    $u->prepare_auth = [TempMailApiByBoomlifyPrepareAuth::class, 'call'];
    $u->prepare_body = [TempMailApiByBoomlifyPrepareBody::class, 'call'];
    $u->prepare_headers = [TempMailApiByBoomlifyPrepareHeaders::class, 'call'];
    $u->prepare_method = [TempMailApiByBoomlifyPrepareMethod::class, 'call'];
    $u->prepare_params = [TempMailApiByBoomlifyPrepareParams::class, 'call'];
    $u->prepare_path = [TempMailApiByBoomlifyPreparePath::class, 'call'];
    $u->prepare_query = [TempMailApiByBoomlifyPrepareQuery::class, 'call'];
    $u->result_basic = [TempMailApiByBoomlifyResultBasic::class, 'call'];
    $u->result_body = [TempMailApiByBoomlifyResultBody::class, 'call'];
    $u->result_headers = [TempMailApiByBoomlifyResultHeaders::class, 'call'];
    $u->transform_request = [TempMailApiByBoomlifyTransformRequest::class, 'call'];
    $u->transform_response = [TempMailApiByBoomlifyTransformResponse::class, 'call'];
});
