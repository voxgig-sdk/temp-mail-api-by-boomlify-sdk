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
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
Domain = Struct.new(
  :data,
  :success,
  keyword_init: true
)

# Request payload for Domain#load.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
DomainLoadMatch = Struct.new(
  :data,
  :success,
  keyword_init: true
)

# Email entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] expiry
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
Email = Struct.new(
  :data,
  :domain,
  :expiry,
  :success,
  :username,
  keyword_init: true
)

# Request payload for Email#create.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] expiry
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
EmailCreateData = Struct.new(
  :data,
  :domain,
  :expiry,
  :success,
  :username,
  keyword_init: true
)

# Inbox entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
Inbox = Struct.new(
  :data,
  :success,
  keyword_init: true
)

# Request payload for Inbox#load.
#
# @!attribute [rw] id
#   @return [String]
InboxLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

