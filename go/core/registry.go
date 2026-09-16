package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewDomainEntityFunc func(client *TempMailApiByBoomlifySDK, entopts map[string]any) TempMailApiByBoomlifyEntity

var NewEmailEntityFunc func(client *TempMailApiByBoomlifySDK, entopts map[string]any) TempMailApiByBoomlifyEntity

var NewInboxEntityFunc func(client *TempMailApiByBoomlifySDK, entopts map[string]any) TempMailApiByBoomlifyEntity

