<?php
declare(strict_types=1);

// TempMailApiByBoomlify SDK utility: feature_hook

class TempMailApiByBoomlifyFeatureHook
{
    public static function call(TempMailApiByBoomlifyContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
