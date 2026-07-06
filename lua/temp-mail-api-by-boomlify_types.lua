-- Typed models for the TempMailApiByBoomlify SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Domain
---@field data? table
---@field success? boolean

---@class DomainLoadMatch
---@field data? table
---@field success? boolean

---@class Email
---@field data? table
---@field domain? string
---@field expiry? string
---@field success? boolean
---@field username? string

---@class EmailCreateData
---@field data? table
---@field domain? string
---@field expiry? string
---@field success? boolean
---@field username? string

---@class Inbox
---@field data? table
---@field success? boolean

---@class InboxLoadMatch
---@field id string

local M = {}

return M
