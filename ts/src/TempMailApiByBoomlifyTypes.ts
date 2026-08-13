// Typed models for the TempMailApiByBoomlify SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Domain {
  domains?: any[]
}

export interface DomainLoadMatch {
  domains?: any[]
}

export interface Email {
  createdAt?: string
  domain?: string
  email?: string
  expiresAt?: string
  expiry?: string
  token?: string
  username?: string
}

export interface EmailCreateData {
  createdAt?: string
  domain?: string
  email?: string
  expiresAt?: string
  expiry?: string
  token?: string
  username?: string

  // Selects a custom action instead of the plain create:
  //   'create'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Inbox {
  email?: string
  messageCount?: number
  messages?: any[]
}

export interface InboxLoadMatch {
  id: string
}

