<?php
declare(strict_types=1);

// TempMailApiByBoomlify SDK exists test

require_once __DIR__ . '/../tempmailapibyboomlify_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TempMailApiByBoomlifySDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
