// Typed models for the TempMailApiByBoomlify SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Domain {
  data?: Record<string, any>
  success?: boolean
}

export interface DomainLoadMatch {
  data?: Record<string, any>
  success?: boolean
}

export interface Email {
  data?: Record<string, any>
  domain?: string
  expiry?: string
  success?: boolean
  username?: string
}

export interface EmailCreateData {
  data?: Record<string, any>
  domain?: string
  expiry?: string
  success?: boolean
  username?: string
}

export interface Inbox {
  data?: Record<string, any>
  success?: boolean
}

export interface InboxLoadMatch {
  id: string
}

