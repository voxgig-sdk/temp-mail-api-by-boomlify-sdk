# TempMailApiByBoomlify SDK feature factory

from tempmailapibyboomlify_sdk.feature.base_feature import TempMailApiByBoomlifyBaseFeature
from tempmailapibyboomlify_sdk.feature.ratelimit_feature import TempMailApiByBoomlifyRatelimitFeature
from tempmailapibyboomlify_sdk.feature.retry_feature import TempMailApiByBoomlifyRetryFeature
from tempmailapibyboomlify_sdk.feature.test_feature import TempMailApiByBoomlifyTestFeature
from tempmailapibyboomlify_sdk.feature.timeout_feature import TempMailApiByBoomlifyTimeoutFeature


_FEATURES = {
    "base": lambda: TempMailApiByBoomlifyBaseFeature(),
    "ratelimit": lambda: TempMailApiByBoomlifyRatelimitFeature(),
    "retry": lambda: TempMailApiByBoomlifyRetryFeature(),
    "test": lambda: TempMailApiByBoomlifyTestFeature(),
    "timeout": lambda: TempMailApiByBoomlifyTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
