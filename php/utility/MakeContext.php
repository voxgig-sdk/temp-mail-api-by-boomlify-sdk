<?php
declare(strict_types=1);

// TempMailApiByBoomlify SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TempMailApiByBoomlifyMakeContext
{
    public static function call(array $ctxmap, ?TempMailApiByBoomlifyContext $basectx): TempMailApiByBoomlifyContext
    {
        return new TempMailApiByBoomlifyContext($ctxmap, $basectx);
    }
}
