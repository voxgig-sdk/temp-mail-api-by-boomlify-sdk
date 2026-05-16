<?php
declare(strict_types=1);

// TempMailApiByBoomlify SDK utility: prepare_body

class TempMailApiByBoomlifyPrepareBody
{
    public static function call(TempMailApiByBoomlifyContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
