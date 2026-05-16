<?php
declare(strict_types=1);

// TempMailApiByBoomlify SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class TempMailApiByBoomlifyFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new TempMailApiByBoomlifyBaseFeature();
            case "test":
                return new TempMailApiByBoomlifyTestFeature();
            default:
                return new TempMailApiByBoomlifyBaseFeature();
        }
    }
}
