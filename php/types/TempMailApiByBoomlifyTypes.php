<?php
declare(strict_types=1);

// Typed models for the TempMailApiByBoomlify SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Domain entity data model. */
class Domain
{
    public ?array $data = null;
    public ?bool $success = null;
}

/** Request payload for Domain#load. */
class DomainLoadMatch
{
    public ?array $data = null;
    public ?bool $success = null;
}

/** Email entity data model. */
class Email
{
    public ?array $data = null;
    public ?string $domain = null;
    public ?string $expiry = null;
    public ?bool $success = null;
    public ?string $username = null;
}

/** Request payload for Email#create. */
class EmailCreateData
{
    public ?array $data = null;
    public ?string $domain = null;
    public ?string $expiry = null;
    public ?bool $success = null;
    public ?string $username = null;
}

/** Inbox entity data model. */
class Inbox
{
    public ?array $data = null;
    public ?bool $success = null;
}

/** Request payload for Inbox#load. */
class InboxLoadMatch
{
    public string $id;
}

