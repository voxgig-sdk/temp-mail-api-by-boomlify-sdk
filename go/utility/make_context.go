package utility

import "github.com/voxgig-sdk/temp-mail-api-by-boomlify-sdk/go/core"

func makeContextUtil(ctxmap map[string]any, basectx *core.Context) *core.Context {
	return core.NewContext(ctxmap, basectx)
}
