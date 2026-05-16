# ProjectName SDK exists test

import pytest
from tempmailapibyboomlify_sdk import TempMailApiByBoomlifySDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TempMailApiByBoomlifySDK.test(None, None)
        assert testsdk is not None
