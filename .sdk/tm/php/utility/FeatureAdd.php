<?php
declare(strict_types=1);

// TempMailApiByBoomlify SDK utility: feature_add

class TempMailApiByBoomlifyFeatureAdd
{
    public static function call(TempMailApiByBoomlifyContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
