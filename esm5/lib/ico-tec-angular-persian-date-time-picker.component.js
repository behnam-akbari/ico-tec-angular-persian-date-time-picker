/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TemplateTypeEnum, TextBoxTypeEnum } from './classes/enums';
import { IcoTecDatetimePickerUtility } from './classes/ico-tec-datetime-picker.utility';
import { IcoTecAngularPersianDateTimePickerCoreComponent } from './core/ico-tec-angular-persian-date-time-picker-core.component';
var IcoTecAngularPersianDateTimePickerComponent = /** @class */ (function () {
    function IcoTecAngularPersianDateTimePickerComponent(element) {
        var _this = this;
        this.element = element;
        this._persianChar = true;
        this._isPersian = true;
        this.myControl = new FormControl();
        this.afterViewInit = false;
        this.inClearFunction = false;
        this.showingDateTimePickerLocked = false;
        this.showDatePicker = false;
        this._selectedDateTime = null;
        this._selectedDateTimeRanges = null;
        //#region Input OutPut
        /**
         * از بوت استرپ استفاده شود یا متریال
         * TemplateTypeEnum
         */
        this.templateType = TemplateTypeEnum.bootstrap;
        /**
         * نوع نمایش تکس باکس
         * TextBoxTypeEnum
         */
        this.textBoxType = TextBoxTypeEnum.withButton;
        /**
           * مقدار اولیه
           */
        // @Input() initialValue = '';
        /**
         * نوع نمایش دیت پیکر به صورت این لاین باشد یا نه
         */
        this.inLine = true;
        /**
         * آیا دیت پیکر به شکل انتخاب رنج تاریخی باشد یا نه
         */
        this.rangeSelector = false;
        /**
         * آیا تایم پیکر نمایش داده بشود یا نه
         * در نوع انتخاب رنج تاریخی بدون تاثیر است
         */
        this.timePicker = true;
        /**
         * PlaceHolder
         */
        this.placeHolder = '';
        /**
         * آیکون
         */
        this.buttonIcon = '📅';
        /**
         * فرمت پیش فرض 1393/09/14   13:49:40
         * yyyy: سال چهار رقمی
         * yy: سال دو رقمی
         * MMMM: نام فارسی ماه
         * MM: عدد دو رقمی ماه
         * M: عدد یک رقمی ماه
         * dddd: نام فارسی روز هفته
         * dd: عدد دو رقمی روز ماه
         * d: عدد یک رقمی روز ماه
         * HH: ساعت دو رقمی با فرمت 00 تا 24
         * H: ساعت یک رقمی با فرمت 0 تا 24
         * hh: ساعت دو رقمی با فرمت 00 تا 12
         * h: ساعت یک رقمی با فرمت 0 تا 12
         * mm: عدد دو رقمی دقیقه
         * m: عدد یک رقمی دقیقه
         * ss: ثانیه دو رقمی
         * s: ثانیه یک رقمی
         * fff: میلی ثانیه 3 رقمی
         * ff: میلی ثانیه 2 رقمی
         * f: میلی ثانیه یک رقمی
         * tt: ب.ظ یا ق.ظ
         * t: حرف اول از ب.ظ یا ق.ظ
         *
         */
        this.format = '';
        /**
         * وقتی تاریخ انتخابی عوض می شود این اونت فراخوانی می شود
         */
        this.dateChanged = new EventEmitter();
        /**
         * وقتی رنج تاریخی انتخاب شده عوض می شود این اونت فراخوانی می شود
         */
        this.rangeDateChanged = new EventEmitter();
        /**
         * وقتی کلیدی روی تکس باکس انتخاب تاریخ فشرده می شود این اونت فراخوانی می شود
         */
        this.textBoxKeyDown = new EventEmitter();
        /**
         * وقتی روی تکس باکس انتخاب تاریخ بلور می شود این اونت فراخوانی می شود
         */
        this.textBoxBlur = new EventEmitter();
        /**
         * وقتی روی تکس باکس انتخاب تاریخ فوکوس می شود این اونت فراخوانی می شود
         */
        this.textBoxFocus = new EventEmitter();
        /**
         * وقتی روی تکس باکس انتخاب تاریخ تغییری ایجاد می شود این اونت فراخوانی می شود
         */
        this.textBoxChange = new EventEmitter();
        //#region ControlValueAccessor
        this.propagateChange = (/**
         * @return {?}
         */
        function () { });
        this.valIIcoTecAngularDateTimePickerDateFn = (/**
         * @return {?}
         */
        function () { });
        /** @type {?} */
        var doc = document.getElementsByTagName('html')[0];
        doc.addEventListener('click', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var targetElement = (/** @type {?} */ (event.target));
            if (_this.showDatePicker && event.target &&
                _this.element.nativeElement != event.target &&
                !_this.element.nativeElement.contains(event.target) &&
                !targetElement.hasAttribute('data-ico-tec-persian-datetimepicker')) {
                _this.showDatePicker = false;
                _this.icoTecDateTimePickerCore.hideSelecMonthAndYearBlock();
                _this.icoTecDateTimePickerCore.resetIncompleteRanges();
            }
        }), false);
    }
    Object.defineProperty(IcoTecAngularPersianDateTimePickerComponent.prototype, "selectedDateTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedDateTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!this.icoTecDateTimePickerCore) {
                return;
            }
            try {
                this.icoTecDateTimePickerCore.setDateTimeByDate(!value ? null : new Date(value));
                if (value == null) {
                    this._selectedDateTime = null;
                    this.myControl.setValue("");
                }
                else {
                    this._selectedDateTime = new Date(value);
                    this.myControl.setValue(this.icoTecDateTimePickerCore.getSelectedDate.formatString);
                }
            }
            catch (e) {
                this.clear();
                console.error(e);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerComponent.prototype, "selectedDateTimeRanges", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedDateTimeRanges;
        },
        set: /**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            if (!this.icoTecDateTimePickerCore) {
                return;
            }
            try {
                if (values == null || values.length < 2) {
                    return;
                }
                this.icoTecDateTimePickerCore.setDateTimeRangesByDate(values[0] == null ? null : new Date(values[0]), values[1] == null ? null : new Date(values[1]));
                this._selectedDateTimeRanges = [values[0], values[1]];
            }
            catch (e) {
                this.clear();
                console.error(e);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerComponent.prototype, "persianChar", {
        /**
         * آیا از کاراکترهای فارسی استفاده شود
         * وقتی تقویم میلادی است بدون تاثیر می شود
         */
        get: /**
         * آیا از کاراکترهای فارسی استفاده شود
         * وقتی تقویم میلادی است بدون تاثیر می شود
         * @return {?}
         */
        function () {
            return this._persianChar;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value == this._persianChar) {
                return;
            }
            this._persianChar = value;
            /** @type {?} */
            var controlValue = this.myControl.value;
            if (this._persianChar) {
                controlValue = IcoTecDatetimePickerUtility.toPersianNumber(controlValue);
            }
            else {
                controlValue = IcoTecDatetimePickerUtility.toEnglishString(controlValue);
            }
            this.myControl.setValue(controlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerComponent.prototype, "isPersian", {
        /**
         * تقویم میلادی باشد یا شمسی
         */
        get: /**
         * تقویم میلادی باشد یا شمسی
         * @return {?}
         */
        function () {
            return this._isPersian;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value == this._isPersian) {
                return;
            }
            this._isPersian = value;
            if (!this.icoTecDateTimePickerCore) {
                return;
            }
            this.clear();
        },
        enumerable: true,
        configurable: true
    });
    //#endregion
    //#endregion
    /**
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.ngOnInit = 
    //#endregion
    /**
     * @return {?}
     */
    function () {
        if (!this.isPersian) {
            this.persianChar = false;
        }
    };
    /**
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.afterViewInit = true;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.getEventObject = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            eventArgs: event,
            selectedDate: this.icoTecDateTimePickerCore.getSelectedDate,
            selectedRangeDates: this.icoTecDateTimePickerCore.getSelectedRangeDates
        };
    };
    /**
     * @private
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.getSelectedDateObject = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            selectedDate: this.icoTecDateTimePickerCore.getSelectedDate,
            selectedRangeDates: this.icoTecDateTimePickerCore.getSelectedRangeDates
        };
    };
    /**
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.showDatePickerButtonClicked = /**
     * @return {?}
     */
    function () {
        this.showDatePicker = !this.showDatePicker;
        // if (this.showDatePicker) {
        // const rectObject = this.element.nativeElement.getBoundingClientRect();
        // this.topOffset = rectObject.top;
        // this.leftOffset = rectObject.left;
        // }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.dateChangedHandler = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (!this.afterViewInit) {
            return;
        }
        this.dateChanged.emit(date);
        if (date != null) {
            this.myControl.setValue(date.formatString);
            this.selectedDateTime = new Date(date.utcDateTime);
            if (!this.showingDateTimePickerLocked) {
                this.showDatePicker = false;
            }
            this.propagateChange(this.getSelectedDateObject());
        }
    };
    /**
     * @param {?} rangeDate
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.rangeDateChangedHandler = /**
     * @param {?} rangeDate
     * @return {?}
     */
    function (rangeDate) {
        if (!this.afterViewInit) {
            return;
        }
        this.myControl.setValue('');
        if (rangeDate == null) {
            this.rangeDateChanged.emit(rangeDate);
            this.selectedDateTimeRanges = [null, null];
            this.propagateChange(this.getSelectedDateObject());
            return;
        }
        if (rangeDate.startDate.formatString != '' && rangeDate.endDate.formatString != '') {
            this.myControl.setValue(rangeDate.startDate.formatString + " - " + rangeDate.endDate.formatString);
        }
        this.rangeDateChanged.emit(rangeDate);
        if (rangeDate.startDate.formatString != '' && rangeDate.endDate.formatString != '' && !this.showingDateTimePickerLocked) {
            this.showDatePicker = false;
        }
        this.selectedDateTimeRanges = [rangeDate.startDate.utcDateTime, rangeDate.endDate.utcDateTime];
        this.propagateChange(this.getSelectedDateObject());
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.dateTimeTextBoxOnFocusHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        document.getElementsByTagName('html')[0].click();
        try {
            if (this.selectedDateTime != null) {
                this.icoTecDateTimePickerCore.setDateTimeByDate(this.selectedDateTime);
            }
        }
        catch (e) {
            this.clear();
            console.error(e);
        }
        this.showDatePickerButtonClicked();
        this.textBoxFocus.emit(this.getEventObject(event));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.dateTimeTextBoxOnBlurHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var value = !this.myControl.value ? '' : this.myControl.value.trim();
        if (this.persianChar) {
            value = IcoTecDatetimePickerUtility.toPersianNumber(value);
        }
        else {
            value = IcoTecDatetimePickerUtility.toEnglishString(value);
        }
        /** @type {?} */
        var targetElement = (/** @type {?} */ (event.target));
        if (!targetElement.hasAttribute('data-ico-tec-persian-datetimepicker')) {
            this.showingDateTimePickerLocked = true;
            this.icoTecDateTimePickerCore.setDateTimeByString(value);
            this.showingDateTimePickerLocked = false;
        }
        this.textBoxBlur.emit(this.getEventObject(event));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.dateTimeTextBoxOnKeyupHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var value = event.target.value.trim();
        if (value && event.keyCode != 13) {
            this.textBoxKeyDown.emit(this.getEventObject(event));
            return;
        }
        if (!value) {
            this.icoTecDateTimePickerCore.clearDateTimePicker();
        }
        else {
            this.icoTecDateTimePickerCore.setDateTimeByString(value);
        }
        this.showDatePicker = false;
        this.textBoxKeyDown.emit(this.getEventObject(event));
    };
    /**
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        if (this.inClearFunction || !this.icoTecDateTimePickerCore) {
            return;
        }
        // this.initialValue = '';
        this.inClearFunction = true;
        this.myControl.setValue('');
        this.selectedDateTime = null;
        this.selectedDateTimeRanges = [null, null];
        this.icoTecDateTimePickerCore.clearDateTimePicker();
        this.inClearFunction = false;
    };
    /**
     * @param {?} dateTime
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.setDateTime = /**
     * @param {?} dateTime
     * @return {?}
     */
    function (dateTime) {
        try {
            this.icoTecDateTimePickerCore.setDateTimeByDate(dateTime);
        }
        catch (e) {
            this.clear();
            console.error(e);
        }
    };
    /**
     * @param {?} startDateTime
     * @param {?} endDateTime
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.setDateTimeRanges = /**
     * @param {?} startDateTime
     * @param {?} endDateTime
     * @return {?}
     */
    function (startDateTime, endDateTime) {
        try {
            this.icoTecDateTimePickerCore.setDateTimeRangesByDate(startDateTime, endDateTime);
        }
        catch (e) {
            this.clear();
            console.error(e);
        }
    };
    /**
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.showDateTimePicker = /**
     * @return {?}
     */
    function () {
        this.showDatePicker = true;
    };
    /**
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.hideDateTimePicker = /**
     * @return {?}
     */
    function () {
        this.showDatePicker = false;
    };
    /**
     * @param {?} model
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.writeValue = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        if (!model || (!model.selectedDate && !model.selectedRangeDates)) {
            this.clear();
            return;
        }
        if (this.rangeSelector && model.selectedRangeDates) {
            this.selectedDateTimeRanges = model.selectedRangeDates;
            // this.initialValue = this.selectedDateTimeRanges[0].toString() + '-' + this.selectedDateTimeRanges[1].toString();
            this.icoTecDateTimePickerCore.setDateTimeRangesByDate(this.selectedDateTimeRanges[0], this.selectedDateTimeRanges[1]);
        }
        else if (model.selectedDate) {
            this.selectedDateTime = model.selectedDate;
            // this.initialValue = this.selectedDateTime.toString();
            this.icoTecDateTimePickerCore.setDateTimeByDate(this.selectedDateTime);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        // this.disabled = isDisabled
        if (isDisabled) {
            this.myControl.disable();
        }
        else {
            this.myControl.enable();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.valIIcoTecAngularDateTimePickerDate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this.valIIcoTecAngularDateTimePickerDateFn(c.value);
    };
    IcoTecAngularPersianDateTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ico-tec-angular-persian-datetimepicker',
                    template: "<div *ngIf=\"inLine\" class=\"datepicker-box\">\n  <ico-tec-datetime-picker-core *ngIf=\"inLine\" [rangeSelector]=\"rangeSelector\" [persianChar]=\"persianChar\"\n    [minDate]=\"minDate\" [maxDate]=\"maxDate\"   \n    [isPersian]=\"isPersian\" [timePicker]=\"timePicker\" [format]=\"format\" [templateType]=\"templateType\" #icoTecDateTimePickerCore\n    (dateChanged)=\"dateChangedHandler($event)\" (rangeDateChanged)=\"rangeDateChangedHandler($event)\">\n  </ico-tec-datetime-picker-core>\n</div>\n\n<div *ngIf=\"!inLine && templateType == 2\" class=\"datepicker-container\">\n  <mat-form-field>\n    <input matInput type=\"text\" [placeholder]=\"placeHolder\" [formControl]=\"myControl\" readonly (focus)=\"dateTimeTextBoxOnFocusHandler($event)\"\n      (blur)=\"dateTimeTextBoxOnBlurHandler($event)\" (keyup)=\"dateTimeTextBoxOnKeyupHandler($event)\" data-ico-tec-persian-datetimepicker>\n    <span matPrefix>\n      <span *ngIf=\"textBoxType == 1\" mat-button class=\"calendar-icon cursor-pointer\">\n        <span [innerHTML]=\"buttonIcon\"></span>\n      </span>\n    </span>\n  </mat-form-field>\n  <div class=\"datepicker\" [hidden]=\"!showDatePicker\">\n    <ico-tec-datetime-picker-core #icoTecDateTimePickerCore [rangeSelector]=\"rangeSelector\" [persianChar]=\"persianChar\"\n    [minDate]=\"minDate\" [maxDate]=\"maxDate\"   \n      [isPersian]=\"isPersian\" [timePicker]=\"timePicker\" [format]=\"format\" [templateType]=\"2\" (dateChanged)=\"dateChangedHandler($event)\"\n      (rangeDateChanged)=\"rangeDateChangedHandler($event)\">\n    </ico-tec-datetime-picker-core>\n  </div>\n</div>\n\n<div *ngIf=\"!inLine && templateType == 1\" class=\"datepicker-container\">\n  <div class=\"input-group\" *ngIf=\"textBoxType == 1\">\n    <!-- <div class=\"input-group-prepend cursor-pointer calendar-icon\" (click)=\"showDatePickerButtonClicked()\">\n      <span class=\"input-group-text\" [innerHTML]=\"buttonIcon\"></span>\n    </div> -->\n    <input type=\"text\" class=\"form-control\" [placeholder]=\"placeHolder\" [formControl]=\"myControl\" readonly style=\"background-color: white;\" (focus)=\"dateTimeTextBoxOnFocusHandler($event)\"\n      (blur)=\"dateTimeTextBoxOnBlurHandler($event)\" (keyup)=\"dateTimeTextBoxOnKeyupHandler($event)\" data-ico-tec-persian-datetimepicker>\n  </div>\n  <input type=\"text\" *ngIf=\"textBoxType == 2\" [placeholder]=\"placeHolder\" class=\"form-control\" [formControl]=\"myControl\" (focus)=\"dateTimeTextBoxOnFocusHandler($event)\"\n    (blur)=\"dateTimeTextBoxOnBlurHandler($event)\" (keyup)=\"dateTimeTextBoxOnKeyupHandler($event)\" data-ico-tec-persian-datetimepicker>\n  <div class=\"datepicker datepicker-bootstrap\" [hidden]=\"!showDatePicker\">\n    <ico-tec-datetime-picker-core #icoTecDateTimePickerCore [rangeSelector]=\"rangeSelector\" [persianChar]=\"persianChar\"\n    [minDate]=\"minDate\" [maxDate]=\"maxDate\"   \n      [isPersian]=\"isPersian\" [timePicker]=\"timePicker\" [format]=\"format\" [templateType]=\"1\" (dateChanged)=\"dateChangedHandler($event)\"\n      (rangeDateChanged)=\"rangeDateChangedHandler($event)\">\n    </ico-tec-datetime-picker-core>\n  </div>\n</div>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return IcoTecAngularPersianDateTimePickerComponent; })),
                            multi: true
                        }
                    ],
                    styles: [".datepicker-container{position:relative;direction:ltr}.datepicker{background:#fff;position:absolute;z-index:999999;top:53px;left:0;min-width:300px;border:1px solid #f7f7f7;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.datepicker-bootstrap{top:34px}.hidden{display:none}.cursor-pointer{cursor:pointer}.datepicker-box{border:1px solid #ccc;position:relative}.mat-form-field{width:100%}.calendar-icon{font-size:18px}.calendar-icon[mat-button]{margin-right:6px;float:left}"]
                }] }
    ];
    /** @nocollapse */
    IcoTecAngularPersianDateTimePickerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    IcoTecAngularPersianDateTimePickerComponent.propDecorators = {
        icoTecDateTimePickerCore: [{ type: ViewChild, args: ['icoTecDateTimePickerCore',] }],
        templateType: [{ type: Input }],
        textBoxType: [{ type: Input }],
        inLine: [{ type: Input }],
        minDate: [{ type: Input }],
        maxDate: [{ type: Input }],
        persianChar: [{ type: Input }],
        rangeSelector: [{ type: Input }],
        isPersian: [{ type: Input }],
        timePicker: [{ type: Input }],
        placeHolder: [{ type: Input }],
        buttonIcon: [{ type: Input }],
        format: [{ type: Input }],
        dateChanged: [{ type: Output }],
        rangeDateChanged: [{ type: Output }],
        textBoxKeyDown: [{ type: Output }],
        textBoxBlur: [{ type: Output }],
        textBoxFocus: [{ type: Output }],
        textBoxChange: [{ type: Output }]
    };
    return IcoTecAngularPersianDateTimePickerComponent;
}());
export { IcoTecAngularPersianDateTimePickerComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype._persianChar;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype._isPersian;
    /** @type {?} */
    IcoTecAngularPersianDateTimePickerComponent.prototype.myControl;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.afterViewInit;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.inClearFunction;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.showingDateTimePickerLocked;
    /** @type {?} */
    IcoTecAngularPersianDateTimePickerComponent.prototype.showDatePicker;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype._selectedDateTime;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype._selectedDateTimeRanges;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.icoTecDateTimePickerCore;
    /**
     * از بوت استرپ استفاده شود یا متریال
     * TemplateTypeEnum
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.templateType;
    /**
     * نوع نمایش تکس باکس
     * TextBoxTypeEnum
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.textBoxType;
    /**
     * نوع نمایش دیت پیکر به صورت این لاین باشد یا نه
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.inLine;
    /**
     * کمترین مقدار
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.minDate;
    /**
     * بیشترین مقدار
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.maxDate;
    /**
     * آیا دیت پیکر به شکل انتخاب رنج تاریخی باشد یا نه
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.rangeSelector;
    /**
     * آیا تایم پیکر نمایش داده بشود یا نه
     * در نوع انتخاب رنج تاریخی بدون تاثیر است
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.timePicker;
    /**
     * PlaceHolder
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.placeHolder;
    /**
     * آیکون
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.buttonIcon;
    /**
     * فرمت پیش فرض 1393/09/14   13:49:40
     * yyyy: سال چهار رقمی
     * yy: سال دو رقمی
     * MMMM: نام فارسی ماه
     * MM: عدد دو رقمی ماه
     * M: عدد یک رقمی ماه
     * dddd: نام فارسی روز هفته
     * dd: عدد دو رقمی روز ماه
     * d: عدد یک رقمی روز ماه
     * HH: ساعت دو رقمی با فرمت 00 تا 24
     * H: ساعت یک رقمی با فرمت 0 تا 24
     * hh: ساعت دو رقمی با فرمت 00 تا 12
     * h: ساعت یک رقمی با فرمت 0 تا 12
     * mm: عدد دو رقمی دقیقه
     * m: عدد یک رقمی دقیقه
     * ss: ثانیه دو رقمی
     * s: ثانیه یک رقمی
     * fff: میلی ثانیه 3 رقمی
     * ff: میلی ثانیه 2 رقمی
     * f: میلی ثانیه یک رقمی
     * tt: ب.ظ یا ق.ظ
     * t: حرف اول از ب.ظ یا ق.ظ
     *
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.format;
    /**
     * وقتی تاریخ انتخابی عوض می شود این اونت فراخوانی می شود
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.dateChanged;
    /**
     * وقتی رنج تاریخی انتخاب شده عوض می شود این اونت فراخوانی می شود
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.rangeDateChanged;
    /**
     * وقتی کلیدی روی تکس باکس انتخاب تاریخ فشرده می شود این اونت فراخوانی می شود
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.textBoxKeyDown;
    /**
     * وقتی روی تکس باکس انتخاب تاریخ بلور می شود این اونت فراخوانی می شود
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.textBoxBlur;
    /**
     * وقتی روی تکس باکس انتخاب تاریخ فوکوس می شود این اونت فراخوانی می شود
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.textBoxFocus;
    /**
     * وقتی روی تکس باکس انتخاب تاریخ تغییری ایجاد می شود این اونت فراخوانی می شود
     * @type {?}
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.textBoxChange;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.propagateChange;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.valIIcoTecAngularDateTimePickerDateFn;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvLXRlYy1hbmd1bGFyLXBlcnNpYW4tZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pY28tdGVjLWFuZ3VsYXItcGVyc2lhbi1kYXRlLXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2ljby10ZWMtYW5ndWxhci1wZXJzaWFuLWRhdGUtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSSxPQUFPLEVBQXdCLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUdwRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RixPQUFPLEVBQUUsK0NBQStDLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUlqSTtJQWVFLHFEQUFvQixPQUFtQjtRQUF2QyxpQkFhQztRQWJtQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBZS9CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDMUIsY0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsZ0NBQTJCLEdBQUcsS0FBSyxDQUFDO1FBQzVDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRWYsc0JBQWlCLEdBQVMsSUFBSSxDQUFDO1FBQy9CLDRCQUF1QixHQUFXLElBQUksQ0FBQzs7Ozs7O1FBK0N0QyxpQkFBWSxHQUFxQixnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7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ZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNZHMgfSBmcm9tICdtZHMucGVyc2lhbi5kYXRldGltZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGVFbnVtLCBUZXh0Qm94VHlwZUVudW0gfSBmcm9tICcuL2NsYXNzZXMvZW51bXMnO1xuaW1wb3J0IHsgSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGFNb2RlbCwgSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGUsIElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlTW9kZWwsXG4gICBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRXZlbnRNb2RlbCwgSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlclJhbmdlRGF0ZSB9IGZyb20gJy4vY2xhc3Nlcy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEljb1RlY0RhdGV0aW1lUGlja2VyVXRpbGl0eSB9IGZyb20gJy4vY2xhc3Nlcy9pY28tdGVjLWRhdGV0aW1lLXBpY2tlci51dGlsaXR5JztcbmltcG9ydCB7IEljb1RlY0FuZ3VsYXJQZXJzaWFuRGF0ZVRpbWVQaWNrZXJDb3JlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL2ljby10ZWMtYW5ndWxhci1wZXJzaWFuLWRhdGUtdGltZS1waWNrZXItY29yZS5jb21wb25lbnQnO1xuaW1wb3J0IFBlcnNpYW5EYXRlVGltZSA9IE1kcy5QZXJzaWFuRGF0ZVRpbWU7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWNvLXRlYy1hbmd1bGFyLXBlcnNpYW4tZGF0ZXRpbWVwaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvLXRlYy1hbmd1bGFyLXBlcnNpYW4tZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ljby10ZWMtYW5ndWxhci1wZXJzaWFuLWRhdGUtdGltZS1waWNrZXIuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6XG4gICAgW1xuICAgICAge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSWNvVGVjQW5ndWxhclBlcnNpYW5EYXRlVGltZVBpY2tlckNvbXBvbmVudCksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBJY29UZWNBbmd1bGFyUGVyc2lhbkRhdGVUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5zaG93RGF0ZVBpY2tlciAmJiBldmVudC50YXJnZXQgJiZcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgIT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICAgICF0YXJnZXRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1pY28tdGVjLXBlcnNpYW4tZGF0ZXRpbWVwaWNrZXInKSkge1xuICAgICAgICB0aGlzLnNob3dEYXRlUGlja2VyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlLmhpZGVTZWxlY01vbnRoQW5kWWVhckJsb2NrKCk7XG4gICAgICAgIHRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlLnJlc2V0SW5jb21wbGV0ZVJhbmdlcygpO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3BlcnNpYW5DaGFyID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaXNQZXJzaWFuID0gdHJ1ZTtcbiAgbXlDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIHByaXZhdGUgYWZ0ZXJWaWV3SW5pdCA9IGZhbHNlO1xuICBwcml2YXRlIGluQ2xlYXJGdW5jdGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIHNob3dpbmdEYXRlVGltZVBpY2tlckxvY2tlZCA9IGZhbHNlO1xuICBzaG93RGF0ZVBpY2tlciA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3NlbGVjdGVkRGF0ZVRpbWU6IERhdGUgPSBudWxsO1xuICBwcml2YXRlIF9zZWxlY3RlZERhdGVUaW1lUmFuZ2VzOiBEYXRlW10gPSBudWxsO1xuXG4gIGdldCBzZWxlY3RlZERhdGVUaW1lKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGVUaW1lO1xuICB9XG4gIHNldCBzZWxlY3RlZERhdGVUaW1lKHZhbHVlOiBEYXRlKSB7XG4gICAgaWYgKCF0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZSkgeyByZXR1cm47IH1cbiAgICB0cnkge1xuICAgICAgdGhpcy5pY29UZWNEYXRlVGltZVBpY2tlckNvcmUuc2V0RGF0ZVRpbWVCeURhdGUoIXZhbHVlID8gbnVsbCA6IG5ldyBEYXRlKHZhbHVlKSk7XG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGVUaW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5teUNvbnRyb2wuc2V0VmFsdWUoXCJcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGVUaW1lID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICB0aGlzLm15Q29udHJvbC5zZXRWYWx1ZSh0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZS5nZXRTZWxlY3RlZERhdGUuZm9ybWF0U3RyaW5nKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBnZXQgc2VsZWN0ZWREYXRlVGltZVJhbmdlcygpOiBEYXRlW10ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGVUaW1lUmFuZ2VzO1xuICB9XG4gIHNldCBzZWxlY3RlZERhdGVUaW1lUmFuZ2VzKHZhbHVlczogRGF0ZVtdKSB7XG4gICAgaWYgKCF0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZSkgeyByZXR1cm47IH1cbiAgICB0cnkge1xuICAgICAgaWYgKHZhbHVlcyA9PSBudWxsIHx8IHZhbHVlcy5sZW5ndGggPCAyKSB7IHJldHVybjsgfVxuICAgICAgdGhpcy5pY29UZWNEYXRlVGltZVBpY2tlckNvcmUuc2V0RGF0ZVRpbWVSYW5nZXNCeURhdGUoXG4gICAgICAgIHZhbHVlc1swXSA9PSBudWxsID8gbnVsbCA6IG5ldyBEYXRlKHZhbHVlc1swXSksXG4gICAgICAgIHZhbHVlc1sxXSA9PSBudWxsID8gbnVsbCA6IG5ldyBEYXRlKHZhbHVlc1sxXSkpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWREYXRlVGltZVJhbmdlcyA9IFt2YWx1ZXNbMF0sIHZhbHVlc1sxXV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBAVmlld0NoaWxkKCdpY29UZWNEYXRlVGltZVBpY2tlckNvcmUnKSBwcml2YXRlIGljb1RlY0RhdGVUaW1lUGlja2VyQ29yZTogSWNvVGVjQW5ndWxhclBlcnNpYW5EYXRlVGltZVBpY2tlckNvcmVDb21wb25lbnQ7XG5cbiAgLy8jcmVnaW9uIElucHV0IE91dFB1dFxuXG5cbiAgLyoqXG4gICAqINin2LIg2KjZiNiqINin2LPYqtix2b4g2KfYs9iq2YHYp9iv2Ycg2LTZiNivINuM2Kcg2YXYqtix24zYp9mEXG4gICAqIFRlbXBsYXRlVHlwZUVudW1cbiAgICovXG4gIEBJbnB1dCgpIHRlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlRW51bSA9IFRlbXBsYXRlVHlwZUVudW0uYm9vdHN0cmFwO1xuXG4gIC8qKlxuICAgKiDZhtmI2Lkg2YbZhdin24zYtCDYqtqp2LMg2KjYp9qp2LNcbiAgICogVGV4dEJveFR5cGVFbnVtXG4gICAqL1xuICBASW5wdXQoKSB0ZXh0Qm94VHlwZTogVGV4dEJveFR5cGVFbnVtID0gVGV4dEJveFR5cGVFbnVtLndpdGhCdXR0b247XG4gIC8qKlxuICAgKiDZhdmC2K/Yp9ixINin2YjZhNuM2YdcbiAgICovXG4gIC8vIEBJbnB1dCgpIGluaXRpYWxWYWx1ZSA9ICcnO1xuICAvKipcbiAgICog2YbZiNi5INmG2YXYp9uM2LQg2K/bjNiqINm+24zaqdixINio2Ycg2LXZiNix2Kog2KfbjNmGINmE2KfbjNmGINio2KfYtNivINuM2Kcg2YbZh1xuICAgKi9cbiAgQElucHV0KCkgaW5MaW5lID0gdHJ1ZTtcbiAgLyoqXG4gICAqINqp2YXYqtix24zZhiDZhdmC2K/Yp9ixXG4gICAqLyAgXG4gIEBJbnB1dCgpIG1pbkRhdGU6RGF0ZTsgIFxuICAvKipcbiAgKiDYqNuM2LTYqtix24zZhiDZhdmC2K/Yp9ixXG4gICovXG4gIEBJbnB1dCgpIG1heERhdGU6RGF0ZTsgXG5cblxuICAvKipcbiAgICog2KLbjNinINin2LIg2qnYp9ix2Kfaqdiq2LHZh9in24wg2YHYp9ix2LPbjCDYp9iz2KrZgdin2K/ZhyDYtNmI2K9cbiAgICog2YjZgtiq24wg2KrZgtmI24zZhSDZhduM2YTYp9iv24wg2KfYs9iqINio2K/ZiNmGINiq2KfYq9uM2LEg2YXbjCDYtNmI2K9cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBwZXJzaWFuQ2hhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyc2lhbkNoYXI7XG4gIH1cbiAgc2V0IHBlcnNpYW5DaGFyKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IHRoaXMuX3BlcnNpYW5DaGFyKSB7IHJldHVybjsgfVxuICAgIHRoaXMuX3BlcnNpYW5DaGFyID0gdmFsdWU7XG4gICAgbGV0IGNvbnRyb2xWYWx1ZSA9IHRoaXMubXlDb250cm9sLnZhbHVlO1xuICAgIGlmICh0aGlzLl9wZXJzaWFuQ2hhcikge1xuICAgICAgY29udHJvbFZhbHVlID0gSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LnRvUGVyc2lhbk51bWJlcihjb250cm9sVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250cm9sVmFsdWUgPSBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkudG9FbmdsaXNoU3RyaW5nKGNvbnRyb2xWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMubXlDb250cm9sLnNldFZhbHVlKGNvbnRyb2xWYWx1ZSk7XG4gIH1cbiAgLyoqXG4gICAqINii24zYpyDYr9uM2Kog2b7bjNqp2LEg2KjZhyDYtNqp2YQg2KfZhtiq2K7Yp9ioINix2YbYrCDYqtin2LHbjNiu24wg2KjYp9i02K8g24zYpyDZhtmHXG4gICAqL1xuICBASW5wdXQoKSByYW5nZVNlbGVjdG9yID0gZmFsc2U7XG4gIC8qKlxuICAgKiDYqtmC2YjbjNmFINmF24zZhNin2K/bjCDYqNin2LTYryDbjNinINi02YXYs9uMXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNQZXJzaWFuKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1BlcnNpYW47XG4gIH1cbiAgc2V0IGlzUGVyc2lhbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSB0aGlzLl9pc1BlcnNpYW4pIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5faXNQZXJzaWFuID0gdmFsdWU7XG4gICAgaWYgKCF0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZSkgeyByZXR1cm47IH1cbiAgICB0aGlzLmNsZWFyKCk7XG4gIH1cbiAgLyoqXG4gICAqINii24zYpyDYqtin24zZhSDZvtuM2qnYsSDZhtmF2KfbjNi0INiv2KfYr9mHINio2LTZiNivINuM2Kcg2YbZh1xuICAgKiDYr9ixINmG2YjYuSDYp9mG2KrYrtin2Kgg2LHZhtisINiq2KfYsduM2K7bjCDYqNiv2YjZhiDYqtin2KvbjNixINin2LPYqlxuICAgKi9cbiAgQElucHV0KCkgdGltZVBpY2tlciA9IHRydWU7XG4gIC8qKlxuICAgKiBQbGFjZUhvbGRlclxuICAgKi9cbiAgQElucHV0KCkgcGxhY2VIb2xkZXIgPSAnJztcbiAgLyoqXG4gICAqINii24zaqdmI2YZcbiAgICovXG4gIEBJbnB1dCgpIGJ1dHRvbkljb24gPSAn8J+ThSc7XG4gIC8qKlxuICAgICog2YHYsdmF2Kog2b7bjNi0INmB2LHYtiAxMzkzLzA5LzE0ICAgMTM6NDk6NDBcbiAgICAqIHl5eXk6INiz2KfZhCDahtmH2KfYsSDYsdmC2YXbjFxuICAgICogeXk6INiz2KfZhCDYr9mIINix2YLZhduMXG4gICAgKiBNTU1NOiDZhtin2YUg2YHYp9ix2LPbjCDZhdin2YdcbiAgICAqIE1NOiDYudiv2K8g2K/ZiCDYsdmC2YXbjCDZhdin2YdcbiAgICAqIE06INi52K/YryDbjNqpINix2YLZhduMINmF2KfZh1xuICAgICogZGRkZDog2YbYp9mFINmB2KfYsdiz24wg2LHZiNiyINmH2YHYqtmHXG4gICAgKiBkZDog2LnYr9ivINiv2Ygg2LHZgtmF24wg2LHZiNiyINmF2KfZh1xuICAgICogZDog2LnYr9ivINuM2qkg2LHZgtmF24wg2LHZiNiyINmF2KfZh1xuICAgICogSEg6INiz2KfYudiqINiv2Ygg2LHZgtmF24wg2KjYpyDZgdix2YXYqiAwMCDYqtinIDI0XG4gICAgKiBIOiDYs9in2LnYqiDbjNqpINix2YLZhduMINio2Kcg2YHYsdmF2KogMCDYqtinIDI0XG4gICAgKiBoaDog2LPYp9i52Kog2K/ZiCDYsdmC2YXbjCDYqNinINmB2LHZhdiqIDAwINiq2KcgMTJcbiAgICAqIGg6INiz2KfYudiqINuM2qkg2LHZgtmF24wg2KjYpyDZgdix2YXYqiAwINiq2KcgMTJcbiAgICAqIG1tOiDYudiv2K8g2K/ZiCDYsdmC2YXbjCDYr9mC24zZgtmHXG4gICAgKiBtOiDYudiv2K8g24zaqSDYsdmC2YXbjCDYr9mC24zZgtmHXG4gICAgKiBzczog2KvYp9mG24zZhyDYr9mIINix2YLZhduMXG4gICAgKiBzOiDYq9in2YbbjNmHINuM2qkg2LHZgtmF24xcbiAgICAqIGZmZjog2YXbjNmE24wg2KvYp9mG24zZhyAzINix2YLZhduMXG4gICAgKiBmZjog2YXbjNmE24wg2KvYp9mG24zZhyAyINix2YLZhduMXG4gICAgKiBmOiDZhduM2YTbjCDYq9in2YbbjNmHINuM2qkg2LHZgtmF24xcbiAgICAqIHR0OiDYqC7YuCDbjNinINmCLti4XG4gICAgKiB0OiDYrdix2YEg2KfZiNmEINin2LIg2Kgu2Lgg24zYpyDZgi7YuFxuICAgICoqL1xuICBASW5wdXQoKSBmb3JtYXQgPSAnJztcblxuICAvKipcbiAgICog2YjZgtiq24wg2KrYp9ix24zYriDYp9mG2KrYrtin2KjbjCDYudmI2LYg2YXbjCDYtNmI2K8g2KfbjNmGINin2YjZhtiqINmB2LHYp9iu2YjYp9mG24wg2YXbjCDYtNmI2K9cbiAgICovXG4gIEBPdXRwdXQoKSBkYXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGU+KCk7XG4gIC8qKlxuICAgKiDZiNmC2KrbjCDYsdmG2Kwg2KrYp9ix24zYrtuMINin2YbYqtiu2KfYqCDYtNiv2Ycg2LnZiNi2INmF24wg2LTZiNivINin24zZhiDYp9mI2YbYqiDZgdix2KfYrtmI2KfZhtuMINmF24wg2LTZiNivXG4gICAqL1xuICBAT3V0cHV0KCkgcmFuZ2VEYXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlclJhbmdlRGF0ZT4oKTtcbiAgLyoqXG4gICAqINmI2YLYqtuMINqp2YTbjNiv24wg2LHZiNuMINiq2qnYsyDYqNin2qnYsyDYp9mG2KrYrtin2Kgg2KrYp9ix24zYriDZgdi02LHYr9mHINmF24wg2LTZiNivINin24zZhiDYp9mI2YbYqiDZgdix2KfYrtmI2KfZhtuMINmF24wg2LTZiNivXG4gICAqL1xuICBAT3V0cHV0KCkgdGV4dEJveEtleURvd24gPSBuZXcgRXZlbnRFbWl0dGVyPElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJFdmVudE1vZGVsPigpO1xuICAvKipcbiAgICog2YjZgtiq24wg2LHZiNuMINiq2qnYsyDYqNin2qnYsyDYp9mG2KrYrtin2Kgg2KrYp9ix24zYriDYqNmE2YjYsSDZhduMINi02YjYryDYp9uM2YYg2KfZiNmG2Kog2YHYsdin2K7ZiNin2YbbjCDZhduMINi02YjYr1xuICAgKi9cbiAgQE91dHB1dCgpIHRleHRCb3hCbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRXZlbnRNb2RlbD4oKTtcbiAgLyoqXG4gICAqINmI2YLYqtuMINix2YjbjCDYqtqp2LMg2KjYp9qp2LMg2KfZhtiq2K7Yp9ioINiq2KfYsduM2K4g2YHZiNqp2YjYsyDZhduMINi02YjYryDYp9uM2YYg2KfZiNmG2Kog2YHYsdin2K7ZiNin2YbbjCDZhduMINi02YjYr1xuICAgKi9cbiAgQE91dHB1dCgpIHRleHRCb3hGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8SUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckV2ZW50TW9kZWw+KCk7XG4gIC8qKlxuICAgKiDZiNmC2KrbjCDYsdmI24wg2KraqdizINio2KfaqdizINin2YbYqtiu2KfYqCDYqtin2LHbjNiuINiq2LrbjNuM2LHbjCDYp9uM2KzYp9ivINmF24wg2LTZiNivINin24zZhiDYp9mI2YbYqiDZgdix2KfYrtmI2KfZhtuMINmF24wg2LTZiNivXG4gICAqL1xuICBAT3V0cHV0KCkgdGV4dEJveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckV2ZW50TW9kZWw+KCk7XG5cbiAgLy8jZW5kcmVnaW9uXG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNQZXJzaWFuKSB7IHRoaXMucGVyc2lhbkNoYXIgPSBmYWxzZTsgfVxuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmFmdGVyVmlld0luaXQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFdmVudE9iamVjdChldmVudDogYW55KTogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckV2ZW50TW9kZWwge1xuICAgIHJldHVybiB7XG4gICAgICBldmVudEFyZ3M6IGV2ZW50LFxuICAgICAgc2VsZWN0ZWREYXRlOiB0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZS5nZXRTZWxlY3RlZERhdGUsXG4gICAgICBzZWxlY3RlZFJhbmdlRGF0ZXM6IHRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlLmdldFNlbGVjdGVkUmFuZ2VEYXRlc1xuICAgIH07XG4gIH1cbiAgcHJpdmF0ZSBnZXRTZWxlY3RlZERhdGVPYmplY3QoKTogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGVNb2RlbCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkRGF0ZTogdGhpcy5pY29UZWNEYXRlVGltZVBpY2tlckNvcmUuZ2V0U2VsZWN0ZWREYXRlLFxuICAgICAgc2VsZWN0ZWRSYW5nZURhdGVzOiB0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZS5nZXRTZWxlY3RlZFJhbmdlRGF0ZXNcbiAgICB9O1xuICB9XG4gIHNob3dEYXRlUGlja2VyQnV0dG9uQ2xpY2tlZCgpIHtcbiAgICB0aGlzLnNob3dEYXRlUGlja2VyID0gIXRoaXMuc2hvd0RhdGVQaWNrZXI7XG4gICAgLy8gaWYgKHRoaXMuc2hvd0RhdGVQaWNrZXIpIHtcbiAgICAvLyBjb25zdCByZWN0T2JqZWN0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgLy8gdGhpcy50b3BPZmZzZXQgPSByZWN0T2JqZWN0LnRvcDtcbiAgICAvLyB0aGlzLmxlZnRPZmZzZXQgPSByZWN0T2JqZWN0LmxlZnQ7XG4gICAgLy8gfVxuICB9XG4gIGRhdGVDaGFuZ2VkSGFuZGxlcihkYXRlOiBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZSkge1xuICAgIGlmICghdGhpcy5hZnRlclZpZXdJbml0KSB7IHJldHVybjsgfVxuICAgIHRoaXMuZGF0ZUNoYW5nZWQuZW1pdChkYXRlKTtcbiAgICBpZiAoZGF0ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLm15Q29udHJvbC5zZXRWYWx1ZShkYXRlLmZvcm1hdFN0cmluZyk7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUgPSBuZXcgRGF0ZShkYXRlLnV0Y0RhdGVUaW1lKTtcbiAgICAgIGlmICghdGhpcy5zaG93aW5nRGF0ZVRpbWVQaWNrZXJMb2NrZWQpIHtcbiAgICAgICAgdGhpcy5zaG93RGF0ZVBpY2tlciA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5nZXRTZWxlY3RlZERhdGVPYmplY3QoKSk7XG4gICAgfVxuICB9XG4gIHJhbmdlRGF0ZUNoYW5nZWRIYW5kbGVyKHJhbmdlRGF0ZTogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlclJhbmdlRGF0ZSkge1xuICAgIGlmICghdGhpcy5hZnRlclZpZXdJbml0KSB7IHJldHVybjsgfVxuICAgIHRoaXMubXlDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICBpZiAocmFuZ2VEYXRlID09IG51bGwpIHtcbiAgICAgIHRoaXMucmFuZ2VEYXRlQ2hhbmdlZC5lbWl0KHJhbmdlRGF0ZSk7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZVRpbWVSYW5nZXMgPSBbbnVsbCwgbnVsbF07XG4gICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLmdldFNlbGVjdGVkRGF0ZU9iamVjdCgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJhbmdlRGF0ZS5zdGFydERhdGUuZm9ybWF0U3RyaW5nICE9ICcnICYmIHJhbmdlRGF0ZS5lbmREYXRlLmZvcm1hdFN0cmluZyAhPSAnJykge1xuICAgICAgdGhpcy5teUNvbnRyb2wuc2V0VmFsdWUoYCR7cmFuZ2VEYXRlLnN0YXJ0RGF0ZS5mb3JtYXRTdHJpbmd9IC0gJHtyYW5nZURhdGUuZW5kRGF0ZS5mb3JtYXRTdHJpbmd9YCk7XG4gICAgfVxuICAgIHRoaXMucmFuZ2VEYXRlQ2hhbmdlZC5lbWl0KHJhbmdlRGF0ZSk7XG4gICAgaWYgKHJhbmdlRGF0ZS5zdGFydERhdGUuZm9ybWF0U3RyaW5nICE9ICcnICYmIHJhbmdlRGF0ZS5lbmREYXRlLmZvcm1hdFN0cmluZyAhPSAnJyAmJiAhdGhpcy5zaG93aW5nRGF0ZVRpbWVQaWNrZXJMb2NrZWQpIHtcbiAgICAgIHRoaXMuc2hvd0RhdGVQaWNrZXIgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZERhdGVUaW1lUmFuZ2VzID0gW3JhbmdlRGF0ZS5zdGFydERhdGUudXRjRGF0ZVRpbWUsIHJhbmdlRGF0ZS5lbmREYXRlLnV0Y0RhdGVUaW1lXTtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLmdldFNlbGVjdGVkRGF0ZU9iamVjdCgpKTtcbiAgfVxuICBkYXRlVGltZVRleHRCb3hPbkZvY3VzSGFuZGxlcihldmVudDogYW55KSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5jbGljaygpO1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGVUaW1lICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5pY29UZWNEYXRlVGltZVBpY2tlckNvcmUuc2V0RGF0ZVRpbWVCeURhdGUodGhpcy5zZWxlY3RlZERhdGVUaW1lKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgICB0aGlzLnNob3dEYXRlUGlja2VyQnV0dG9uQ2xpY2tlZCgpO1xuICAgIHRoaXMudGV4dEJveEZvY3VzLmVtaXQodGhpcy5nZXRFdmVudE9iamVjdChldmVudCkpO1xuICB9XG4gIGRhdGVUaW1lVGV4dEJveE9uQmx1ckhhbmRsZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGxldCB2YWx1ZSA9ICF0aGlzLm15Q29udHJvbC52YWx1ZSA/ICcnIDogdGhpcy5teUNvbnRyb2wudmFsdWUudHJpbSgpO1xuICAgIGlmICh0aGlzLnBlcnNpYW5DaGFyKSB7XG4gICAgICB2YWx1ZSA9IEljb1RlY0RhdGV0aW1lUGlja2VyVXRpbGl0eS50b1BlcnNpYW5OdW1iZXIodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IEljb1RlY0RhdGV0aW1lUGlja2VyVXRpbGl0eS50b0VuZ2xpc2hTdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghdGFyZ2V0RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtaWNvLXRlYy1wZXJzaWFuLWRhdGV0aW1lcGlja2VyJykpIHtcbiAgICAgIHRoaXMuc2hvd2luZ0RhdGVUaW1lUGlja2VyTG9ja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlLnNldERhdGVUaW1lQnlTdHJpbmcodmFsdWUpO1xuICAgICAgdGhpcy5zaG93aW5nRGF0ZVRpbWVQaWNrZXJMb2NrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy50ZXh0Qm94Qmx1ci5lbWl0KHRoaXMuZ2V0RXZlbnRPYmplY3QoZXZlbnQpKTtcbiAgfVxuICBkYXRlVGltZVRleHRCb3hPbktleXVwSGFuZGxlcihldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgIGlmICh2YWx1ZSAmJiBldmVudC5rZXlDb2RlICE9IDEzKSB7XG4gICAgICB0aGlzLnRleHRCb3hLZXlEb3duLmVtaXQodGhpcy5nZXRFdmVudE9iamVjdChldmVudCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZS5jbGVhckRhdGVUaW1lUGlja2VyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlLnNldERhdGVUaW1lQnlTdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnNob3dEYXRlUGlja2VyID0gZmFsc2U7XG4gICAgdGhpcy50ZXh0Qm94S2V5RG93bi5lbWl0KHRoaXMuZ2V0RXZlbnRPYmplY3QoZXZlbnQpKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGlmICh0aGlzLmluQ2xlYXJGdW5jdGlvbiB8fCAhdGhpcy5pY29UZWNEYXRlVGltZVBpY2tlckNvcmUpIHsgcmV0dXJuOyB9XG4gICAgLy8gdGhpcy5pbml0aWFsVmFsdWUgPSAnJztcbiAgICB0aGlzLmluQ2xlYXJGdW5jdGlvbiA9IHRydWU7XG4gICAgdGhpcy5teUNvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlVGltZSA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZERhdGVUaW1lUmFuZ2VzID0gW251bGwsIG51bGxdO1xuXG4gICAgdGhpcy5pY29UZWNEYXRlVGltZVBpY2tlckNvcmUuY2xlYXJEYXRlVGltZVBpY2tlcigpO1xuICAgIHRoaXMuaW5DbGVhckZ1bmN0aW9uID0gZmFsc2U7XG4gIH1cbiAgc2V0RGF0ZVRpbWUoZGF0ZVRpbWU6IERhdGUpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5pY29UZWNEYXRlVGltZVBpY2tlckNvcmUuc2V0RGF0ZVRpbWVCeURhdGUoZGF0ZVRpbWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIHNldERhdGVUaW1lUmFuZ2VzKHN0YXJ0RGF0ZVRpbWU6IERhdGUsIGVuZERhdGVUaW1lOiBEYXRlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlLnNldERhdGVUaW1lUmFuZ2VzQnlEYXRlKHN0YXJ0RGF0ZVRpbWUsIGVuZERhdGVUaW1lKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBzaG93RGF0ZVRpbWVQaWNrZXIoKSB7XG4gICAgdGhpcy5zaG93RGF0ZVBpY2tlciA9IHRydWU7XG4gIH1cbiAgaGlkZURhdGVUaW1lUGlja2VyKCkge1xuICAgIHRoaXMuc2hvd0RhdGVQaWNrZXIgPSBmYWxzZTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiBDb250cm9sVmFsdWVBY2Nlc3NvclxuXG4gIHByaXZhdGUgcHJvcGFnYXRlQ2hhbmdlOiBhbnkgPSAoKSA9PiB7IH07XG4gIHByaXZhdGUgdmFsSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGVGbjogYW55ID0gKCkgPT4geyB9O1xuXG4gIHdyaXRlVmFsdWUobW9kZWw6IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRhTW9kZWwpOiB2b2lkIHtcbiAgICBpZiAoIW1vZGVsIHx8ICghbW9kZWwuc2VsZWN0ZWREYXRlICYmICFtb2RlbC5zZWxlY3RlZFJhbmdlRGF0ZXMpKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICBcblxuICAgIGlmICh0aGlzLnJhbmdlU2VsZWN0b3IgJiYgbW9kZWwuc2VsZWN0ZWRSYW5nZURhdGVzKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZVRpbWVSYW5nZXMgPSBtb2RlbC5zZWxlY3RlZFJhbmdlRGF0ZXM7XG4gICAgICAvLyB0aGlzLmluaXRpYWxWYWx1ZSA9IHRoaXMuc2VsZWN0ZWREYXRlVGltZVJhbmdlc1swXS50b1N0cmluZygpICsgJy0nICsgdGhpcy5zZWxlY3RlZERhdGVUaW1lUmFuZ2VzWzFdLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZS5zZXREYXRlVGltZVJhbmdlc0J5RGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZVRpbWVSYW5nZXNbMF0sIHRoaXMuc2VsZWN0ZWREYXRlVGltZVJhbmdlc1sxXSk7XG4gICAgfSBlbHNlIGlmIChtb2RlbC5zZWxlY3RlZERhdGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlVGltZSA9IG1vZGVsLnNlbGVjdGVkRGF0ZTtcbiAgICAgIC8vIHRoaXMuaW5pdGlhbFZhbHVlID0gdGhpcy5zZWxlY3RlZERhdGVUaW1lLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZS5zZXREYXRlVGltZUJ5RGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZVRpbWUpO1xuICAgIH1cbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcblxuICB9XG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZFxuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLm15Q29udHJvbC5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXlDb250cm9sLmVuYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHZhbElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlKGM6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnZhbElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlRm4oYy52YWx1ZSk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cbn1cbiJdfQ==