<?php
declare(strict_types=1);

// TempMailApiByBoomlify SDK utility: result_body

class TempMailApiByBoomlifyResultBody
{
    public static function call(TempMailApiByBoomlifyContext $ctx): ?TempMailApiByBoomlifyResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
