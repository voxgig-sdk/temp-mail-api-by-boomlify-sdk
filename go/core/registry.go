package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDomainEntityFunc func(client *TempMailApiByBoomlifySDK, entopts map[string]any) TempMailApiByBoomlifyEntity

var NewEmailEntityFunc func(client *TempMailApiByBoomlifySDK, entopts map[string]any) TempMailApiByBoomlifyEntity

var NewInboxEntityFunc func(client *TempMailApiByBoomlifySDK, entopts map[string]any) TempMailApiByBoomlifyEntity

