/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { IcoTecDatetimePickerUtility } from '../classes/ico-tec-datetime-picker.utility';
export class PersianNumberPipe {
    /**
     * @param {?} value
     * @param {?} isPersian
     * @return {?}
     */
    transform(value, isPersian) {
        if (!isPersian)
            return value;
        return IcoTecDatetimePickerUtility.toPersianNumber(value);
    }
}
PersianNumberPipe.decorators = [
    { type: Pipe, args: [{ name: 'persianNumber' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lhbi1udW1iZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ljby10ZWMtYW5ndWxhci1wZXJzaWFuLWRhdGUtdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvcGVyc2lhbi1udW1iZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFHekYsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBQzVCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsU0FBa0I7UUFDekMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUM3QixPQUFPLDJCQUEyQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7WUFMRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5IH0gZnJvbSAnLi4vY2xhc3Nlcy9pY28tdGVjLWRhdGV0aW1lLXBpY2tlci51dGlsaXR5JztcblxuQFBpcGUoeyBuYW1lOiAncGVyc2lhbk51bWJlcicgfSlcbmV4cG9ydCBjbGFzcyBQZXJzaWFuTnVtYmVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgaXNQZXJzaWFuOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAoIWlzUGVyc2lhbikgcmV0dXJuIHZhbHVlO1xuICAgIHJldHVybiBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkudG9QZXJzaWFuTnVtYmVyKHZhbHVlKTtcbiAgfVxufSJdfQ==