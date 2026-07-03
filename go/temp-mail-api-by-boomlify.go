package voxgigtempmailapibyboomlifysdk

import (
	"github.com/voxgig-sdk/temp-mail-api-by-boomlify-sdk/go/core"
	"github.com/voxgig-sdk/temp-mail-api-by-boomlify-sdk/go/entity"
	"github.com/voxgig-sdk/temp-mail-api-by-boomlify-sdk/go/feature"
	_ "github.com/voxgig-sdk/temp-mail-api-by-boomlify-sdk/go/utility"
)

// Type aliases preserve external API.
type TempMailApiByBoomlifySDK = core.TempMailApiByBoomlifySDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TempMailApiByBoomlifyEntity = core.TempMailApiByBoomlifyEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TempMailApiByBoomlifyError = core.TempMailApiByBoomlifyError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDomainEntityFunc = func(client *core.TempMailApiByBoomlifySDK, entopts map[string]any) core.TempMailApiByBoomlifyEntity {
		return entity.NewDomainEntity(client, entopts)
	}
	core.NewEmailEntityFunc = func(client *core.TempMailApiByBoomlifySDK, entopts map[string]any) core.TempMailApiByBoomlifyEntity {
		return entity.NewEmailEntity(client, entopts)
	}
	core.NewInboxEntityFunc = func(client *core.TempMailApiByBoomlifySDK, entopts map[string]any) core.TempMailApiByBoomlifyEntity {
		return entity.NewInboxEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTempMailApiByBoomlifySDK = core.NewTempMailApiByBoomlifySDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewTempMailApiByBoomlifySDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *TempMailApiByBoomlifySDK  { return NewTempMailApiByBoomlifySDK(nil) }
func Test() *TempMailApiByBoomlifySDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
