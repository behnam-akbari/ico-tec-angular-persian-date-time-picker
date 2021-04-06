/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { IcoTecDatetimePickerUtility } from '../classes/ico-tec-datetime-picker.utility';
var PersianNumberPipe = /** @class */ (function () {
    function PersianNumberPipe() {
    }
    /**
     * @param {?} value
     * @param {?} isPersian
     * @return {?}
     */
    PersianNumberPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} isPersian
     * @return {?}
     */
    function (value, isPersian) {
        if (!isPersian)
            return value;
        return IcoTecDatetimePickerUtility.toPersianNumber(value);
    };
    PersianNumberPipe.decorators = [
        { type: Pipe, args: [{ name: 'persianNumber' },] }
    ];
    return PersianNumberPipe;
}());
export { PersianNumberPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lhbi1udW1iZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ljby10ZWMtYW5ndWxhci1wZXJzaWFuLWRhdGUtdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvcGVyc2lhbi1udW1iZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFekY7SUFBQTtJQU1BLENBQUM7Ozs7OztJQUpDLHFDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLFNBQWtCO1FBQ3pDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDN0IsT0FBTywyQkFBMkIsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBTEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTs7SUFNL0Isd0JBQUM7Q0FBQSxBQU5ELElBTUM7U0FMWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkgfSBmcm9tICcuLi9jbGFzc2VzL2ljby10ZWMtZGF0ZXRpbWUtcGlja2VyLnV0aWxpdHknO1xuXG5AUGlwZSh7IG5hbWU6ICdwZXJzaWFuTnVtYmVyJyB9KVxuZXhwb3J0IGNsYXNzIFBlcnNpYW5OdW1iZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBpc1BlcnNpYW46IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmICghaXNQZXJzaWFuKSByZXR1cm4gdmFsdWU7XG4gICAgcmV0dXJuIEljb1RlY0RhdGV0aW1lUGlja2VyVXRpbGl0eS50b1BlcnNpYW5OdW1iZXIodmFsdWUpO1xuICB9XG59Il19