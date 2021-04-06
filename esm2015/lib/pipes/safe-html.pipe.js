/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class SafeHtmlPipe {
    /**
     * @param {?} sanitized
     */
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return 'this.sanitized.bypassSecurityTrustHtml(value)';
    }
}
SafeHtmlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'safeHtml'
            },] }
];
/** @nocollapse */
SafeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SafeHtmlPipe.prototype.sanitized;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pY28tdGVjLWFuZ3VsYXItcGVyc2lhbi1kYXRlLXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3NhZmUtaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLekQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFDdkIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMzQyxDQUFDOzs7OztJQUNELFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sK0NBQStDLENBQUM7SUFDekQsQ0FBQzs7O1lBUkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxVQUFVO2FBQ2pCOzs7O1lBSlEsWUFBWTs7Ozs7OztJQU1QLGlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdzYWZlSHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2FmZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVkOiBEb21TYW5pdGl6ZXIpIHtcbiAgfVxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiAndGhpcy5zYW5pdGl6ZWQuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWUpJztcbiAgfVxufVxuIl19