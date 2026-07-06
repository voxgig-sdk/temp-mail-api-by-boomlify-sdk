// Typed models for the TempMailApiByBoomlify SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Domain is the typed data model for the domain entity.
type Domain struct {
	Data *map[string]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// DomainLoadMatch is the typed request payload for Domain.LoadTyped.
type DomainLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// Email is the typed data model for the email entity.
type Email struct {
	Data *map[string]any `json:"data,omitempty"`
	Domain *string `json:"domain,omitempty"`
	Expiry *string `json:"expiry,omitempty"`
	Success *bool `json:"success,omitempty"`
	Username *string `json:"username,omitempty"`
}

// EmailCreateData is the typed request payload for Email.CreateTyped.
type EmailCreateData struct {
	Data *map[string]any `json:"data,omitempty"`
	Domain *string `json:"domain,omitempty"`
	Expiry *string `json:"expiry,omitempty"`
	Success *bool `json:"success,omitempty"`
	Username *string `json:"username,omitempty"`
}

// Inbox is the typed data model for the inbox entity.
type Inbox struct {
	Data *map[string]any `json:"data,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// InboxLoadMatch is the typed request payload for Inbox.LoadTyped.
type InboxLoadMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
