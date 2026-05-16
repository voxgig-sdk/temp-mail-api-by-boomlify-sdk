# TempMailApiByBoomlify SDK utility: make_context

from core.context import TempMailApiByBoomlifyContext


def make_context_util(ctxmap, basectx):
    return TempMailApiByBoomlifyContext(ctxmap, basectx)
