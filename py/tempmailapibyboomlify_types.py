# Typed models for the TempMailApiByBoomlify SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Domain:
    data: Optional[dict] = None
    success: Optional[bool] = None


@dataclass
class DomainLoadMatch:
    data: Optional[dict] = None
    success: Optional[bool] = None


@dataclass
class Email:
    data: Optional[dict] = None
    domain: Optional[str] = None
    expiry: Optional[str] = None
    success: Optional[bool] = None
    username: Optional[str] = None


@dataclass
class EmailCreateData:
    data: Optional[dict] = None
    domain: Optional[str] = None
    expiry: Optional[str] = None
    success: Optional[bool] = None
    username: Optional[str] = None


@dataclass
class Inbox:
    data: Optional[dict] = None
    success: Optional[bool] = None


@dataclass
class InboxLoadMatch:
    id: str

