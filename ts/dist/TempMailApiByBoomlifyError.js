"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempMailApiByBoomlifyError = void 0;
class TempMailApiByBoomlifyError extends Error {
    isTempMailApiByBoomlifyError = true;
    sdk = 'TempMailApiByBoomlify';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.TempMailApiByBoomlifyError = TempMailApiByBoomlifyError;
//# sourceMappingURL=TempMailApiByBoomlifyError.js.map