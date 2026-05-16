<?php
declare(strict_types=1);

// TempMailApiByBoomlify SDK utility: result_headers

class TempMailApiByBoomlifyResultHeaders
{
    public static function call(TempMailApiByBoomlifyContext $ctx): ?TempMailApiByBoomlifyResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
