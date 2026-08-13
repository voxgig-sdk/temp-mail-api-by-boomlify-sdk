# TempMailApiByBoomlify SDK feature factory

from tempmailapibyboomlify_sdk.feature.base_feature import TempMailApiByBoomlifyBaseFeature
from tempmailapibyboomlify_sdk.feature.test_feature import TempMailApiByBoomlifyTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TempMailApiByBoomlifyBaseFeature(),
        "test": lambda: TempMailApiByBoomlifyTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
