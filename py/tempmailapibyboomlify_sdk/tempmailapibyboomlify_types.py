# Typed models for the TempMailApiByBoomlify SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Domain(TypedDict, total=False):
    domains: list


class DomainLoadMatch(TypedDict, total=False):
    domains: list


class Email(TypedDict):
    pass


class EmailCreateData(TypedDict):
    pass


class Inbox(TypedDict, total=False):
    email: str
    id: str
    messageCount: int
    messages: list


class InboxLoadMatchRequired(TypedDict):
    id: str
    token: str


class InboxLoadMatch(InboxLoadMatchRequired, total=False):
    limit: int
    preview: bool
