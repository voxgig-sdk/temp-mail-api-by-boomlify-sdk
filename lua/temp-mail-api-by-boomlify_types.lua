-- Typed models for the TempMailApiByBoomlify SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Domain
---@field domains? table

---@class DomainLoadMatch
---@field domains? table

---@class Email
---@field createdAt? string
---@field domain? string
---@field email? string
---@field expiresAt? string
---@field expiry? string
---@field token? string
---@field username? string

---@class EmailCreateData
---@field createdAt? string
---@field domain? string
---@field email? string
---@field expiresAt? string
---@field expiry? string
---@field token? string
---@field username? string

---@class Inbox
---@field email? string
---@field messageCount? number
---@field messages? table

---@class InboxLoadMatch
---@field id string

local M = {}

return M
