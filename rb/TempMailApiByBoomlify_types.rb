# frozen_string_literal: true

# Typed models for the TempMailApiByBoomlify SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Domain entity data model.
#
# @!attribute [rw] domains
#   @return [Array, nil]
Domain = Struct.new(
  :domains,
  keyword_init: true
)

# Request payload for Domain#load.
#
# @!attribute [rw] domains
#   @return [Array, nil]
DomainLoadMatch = Struct.new(
  :domains,
  keyword_init: true
)

# Email entity data model.
class Email
end

# Request payload for Email#create.
class EmailCreateData
end

# Inbox entity data model.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messageCount
#   @return [Integer, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
Inbox = Struct.new(
  :email,
  :id,
  :messageCount,
  :messages,
  keyword_init: true
)

# Request payload for Inbox#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] preview
#   @return [Boolean, nil]
#
# @!attribute [rw] token
#   @return [String]
InboxLoadMatch = Struct.new(
  :id,
  :limit,
  :preview,
  :token,
  keyword_init: true
)

