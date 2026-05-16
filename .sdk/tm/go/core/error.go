package core

type TempMailApiByBoomlifyError struct {
	IsTempMailApiByBoomlifyError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTempMailApiByBoomlifyError(code string, msg string, ctx *Context) *TempMailApiByBoomlifyError {
	return &TempMailApiByBoomlifyError{
		IsTempMailApiByBoomlifyError: true,
		Sdk:              "TempMailApiByBoomlify",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TempMailApiByBoomlifyError) Error() string {
	return e.Msg
}
