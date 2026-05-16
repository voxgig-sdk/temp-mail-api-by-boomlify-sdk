<?php
declare(strict_types=1);

// TempMailApiByBoomlify SDK base feature

class TempMailApiByBoomlifyBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TempMailApiByBoomlifyContext $ctx, array $options): void {}
    public function PostConstruct(TempMailApiByBoomlifyContext $ctx): void {}
    public function PostConstructEntity(TempMailApiByBoomlifyContext $ctx): void {}
    public function SetData(TempMailApiByBoomlifyContext $ctx): void {}
    public function GetData(TempMailApiByBoomlifyContext $ctx): void {}
    public function GetMatch(TempMailApiByBoomlifyContext $ctx): void {}
    public function SetMatch(TempMailApiByBoomlifyContext $ctx): void {}
    public function PrePoint(TempMailApiByBoomlifyContext $ctx): void {}
    public function PreSpec(TempMailApiByBoomlifyContext $ctx): void {}
    public function PreRequest(TempMailApiByBoomlifyContext $ctx): void {}
    public function PreResponse(TempMailApiByBoomlifyContext $ctx): void {}
    public function PreResult(TempMailApiByBoomlifyContext $ctx): void {}
    public function PreDone(TempMailApiByBoomlifyContext $ctx): void {}
    public function PreUnexpected(TempMailApiByBoomlifyContext $ctx): void {}
}
