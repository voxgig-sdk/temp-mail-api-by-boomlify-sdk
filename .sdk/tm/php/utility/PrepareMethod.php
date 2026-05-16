<?php
declare(strict_types=1);

// TempMailApiByBoomlify SDK utility: prepare_method

class TempMailApiByBoomlifyPrepareMethod
{
    private const METHOD_MAP = [
        'create' => 'POST',
        'update' => 'PUT',
        'load' => 'GET',
        'list' => 'GET',
        'remove' => 'DELETE',
        'patch' => 'PATCH',
    ];

    public static function call(TempMailApiByBoomlifyContext $ctx): string
    {
        return self::METHOD_MAP[$ctx->op->name] ?? 'GET';
    }
}
