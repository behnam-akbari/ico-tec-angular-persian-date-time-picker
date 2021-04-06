/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TemplateTypeEnum, TextBoxTypeEnum } from './classes/enums';
import { IcoTecDatetimePickerUtility } from './classes/ico-tec-datetime-picker.utility';
import { IcoTecAngularPersianDateTimePickerCoreComponent } from './core/ico-tec-angular-persian-date-time-picker-core.component';
export class IcoTecAngularPersianDateTimePickerComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
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
        () => { });
        this.valIIcoTecAngularDateTimePickerDateFn = (/**
         * @return {?}
         */
        () => { });
        /** @type {?} */
        const doc = document.getElementsByTagName('html')[0];
        doc.addEventListener('click', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const targetElement = (/** @type {?} */ (event.target));
            if (this.showDatePicker && event.target &&
                this.element.nativeElement != event.target &&
                !this.element.nativeElement.contains(event.target) &&
                !targetElement.hasAttribute('data-ico-tec-persian-datetimepicker')) {
                this.showDatePicker = false;
                this.icoTecDateTimePickerCore.hideSelecMonthAndYearBlock();
                this.icoTecDateTimePickerCore.resetIncompleteRanges();
            }
        }), false);
    }
    /**
     * @return {?}
     */
    get selectedDateTime() {
        return this._selectedDateTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedDateTime(value) {
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
    }
    /**
     * @return {?}
     */
    get selectedDateTimeRanges() {
        return this._selectedDateTimeRanges;
    }
    /**
     * @param {?} values
     * @return {?}
     */
    set selectedDateTimeRanges(values) {
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
    }
    /**
     * آیا از کاراکترهای فارسی استفاده شود
     * وقتی تقویم میلادی است بدون تاثیر می شود
     * @return {?}
     */
    get persianChar() {
        return this._persianChar;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set persianChar(value) {
        if (value == this._persianChar) {
            return;
        }
        this._persianChar = value;
        /** @type {?} */
        let controlValue = this.myControl.value;
        if (this._persianChar) {
            controlValue = IcoTecDatetimePickerUtility.toPersianNumber(controlValue);
        }
        else {
            controlValue = IcoTecDatetimePickerUtility.toEnglishString(controlValue);
        }
        this.myControl.setValue(controlValue);
    }
    /**
     * تقویم میلادی باشد یا شمسی
     * @return {?}
     */
    get isPersian() {
        return this._isPersian;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isPersian(value) {
        if (value == this._isPersian) {
            return;
        }
        this._isPersian = value;
        if (!this.icoTecDateTimePickerCore) {
            return;
        }
        this.clear();
    }
    //#endregion
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.isPersian) {
            this.persianChar = false;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.afterViewInit = true;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    getEventObject(event) {
        return {
            eventArgs: event,
            selectedDate: this.icoTecDateTimePickerCore.getSelectedDate,
            selectedRangeDates: this.icoTecDateTimePickerCore.getSelectedRangeDates
        };
    }
    /**
     * @private
     * @return {?}
     */
    getSelectedDateObject() {
        return {
            selectedDate: this.icoTecDateTimePickerCore.getSelectedDate,
            selectedRangeDates: this.icoTecDateTimePickerCore.getSelectedRangeDates
        };
    }
    /**
     * @return {?}
     */
    showDatePickerButtonClicked() {
        this.showDatePicker = !this.showDatePicker;
        // if (this.showDatePicker) {
        // const rectObject = this.element.nativeElement.getBoundingClientRect();
        // this.topOffset = rectObject.top;
        // this.leftOffset = rectObject.left;
        // }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    dateChangedHandler(date) {
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
    }
    /**
     * @param {?} rangeDate
     * @return {?}
     */
    rangeDateChangedHandler(rangeDate) {
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
            this.myControl.setValue(`${rangeDate.startDate.formatString} - ${rangeDate.endDate.formatString}`);
        }
        this.rangeDateChanged.emit(rangeDate);
        if (rangeDate.startDate.formatString != '' && rangeDate.endDate.formatString != '' && !this.showingDateTimePickerLocked) {
            this.showDatePicker = false;
        }
        this.selectedDateTimeRanges = [rangeDate.startDate.utcDateTime, rangeDate.endDate.utcDateTime];
        this.propagateChange(this.getSelectedDateObject());
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dateTimeTextBoxOnFocusHandler(event) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dateTimeTextBoxOnBlurHandler(event) {
        /** @type {?} */
        let value = !this.myControl.value ? '' : this.myControl.value.trim();
        if (this.persianChar) {
            value = IcoTecDatetimePickerUtility.toPersianNumber(value);
        }
        else {
            value = IcoTecDatetimePickerUtility.toEnglishString(value);
        }
        /** @type {?} */
        const targetElement = (/** @type {?} */ (event.target));
        if (!targetElement.hasAttribute('data-ico-tec-persian-datetimepicker')) {
            this.showingDateTimePickerLocked = true;
            this.icoTecDateTimePickerCore.setDateTimeByString(value);
            this.showingDateTimePickerLocked = false;
        }
        this.textBoxBlur.emit(this.getEventObject(event));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dateTimeTextBoxOnKeyupHandler(event) {
        /** @type {?} */
        const value = event.target.value.trim();
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
    }
    /**
     * @return {?}
     */
    clear() {
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
    }
    /**
     * @param {?} dateTime
     * @return {?}
     */
    setDateTime(dateTime) {
        try {
            this.icoTecDateTimePickerCore.setDateTimeByDate(dateTime);
        }
        catch (e) {
            this.clear();
            console.error(e);
        }
    }
    /**
     * @param {?} startDateTime
     * @param {?} endDateTime
     * @return {?}
     */
    setDateTimeRanges(startDateTime, endDateTime) {
        try {
            this.icoTecDateTimePickerCore.setDateTimeRangesByDate(startDateTime, endDateTime);
        }
        catch (e) {
            this.clear();
            console.error(e);
        }
    }
    /**
     * @return {?}
     */
    showDateTimePicker() {
        this.showDatePicker = true;
    }
    /**
     * @return {?}
     */
    hideDateTimePicker() {
        this.showDatePicker = false;
    }
    /**
     * @param {?} model
     * @return {?}
     */
    writeValue(model) {
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
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        // this.disabled = isDisabled
        if (isDisabled) {
            this.myControl.disable();
        }
        else {
            this.myControl.enable();
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    valIIcoTecAngularDateTimePickerDate(c) {
        return this.valIIcoTecAngularDateTimePickerDateFn(c.value);
    }
}
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
                        () => IcoTecAngularPersianDateTimePickerComponent)),
                        multi: true
                    }
                ],
                styles: [".datepicker-container{position:relative;direction:ltr}.datepicker{background:#fff;position:absolute;z-index:999999;top:53px;left:0;min-width:300px;border:1px solid #f7f7f7;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.datepicker-bootstrap{top:34px}.hidden{display:none}.cursor-pointer{cursor:pointer}.datepicker-box{border:1px solid #ccc;position:relative}.mat-form-field{width:100%}.calendar-icon{font-size:18px}.calendar-icon[mat-button]{margin-right:6px;float:left}"]
            }] }
];
/** @nocollapse */
IcoTecAngularPersianDateTimePickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvLXRlYy1hbmd1bGFyLXBlcnNpYW4tZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pY28tdGVjLWFuZ3VsYXItcGVyc2lhbi1kYXRlLXRpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2ljby10ZWMtYW5ndWxhci1wZXJzaWFuLWRhdGUtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSSxPQUFPLEVBQXdCLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUdwRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RixPQUFPLEVBQUUsK0NBQStDLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQWlCakksTUFBTSxPQUFPLDJDQUEyQzs7OztJQUV0RCxZQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBZS9CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDMUIsY0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsZ0NBQTJCLEdBQUcsS0FBSyxDQUFDO1FBQzVDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRWYsc0JBQWlCLEdBQVMsSUFBSSxDQUFDO1FBQy9CLDRCQUF1QixHQUFXLElBQUksQ0FBQzs7Ozs7O1FBK0N0QyxpQkFBWSxHQUFxQixnQkFBZ0IsQ0FBQyxT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TCxLQUFLO3FCQXlCTCxLQUFLOzBCQUtMLE1BQU07K0JBSU4sTUFBTTs2QkFJTixNQUFNOzBCQUlOLE1BQU07MkJBSU4sTUFBTTs0QkFJTixNQUFNOzs7Ozs7O0lBbkxQLG1FQUE0Qjs7Ozs7SUFDNUIsaUVBQTBCOztJQUMxQixnRUFBOEI7Ozs7O0lBQzlCLG9FQUE4Qjs7Ozs7SUFDOUIsc0VBQWdDOzs7OztJQUNoQyxrRkFBNEM7O0lBQzVDLHFFQUF1Qjs7Ozs7SUFFdkIsd0VBQXVDOzs7OztJQUN2Qyw4RUFBK0M7Ozs7O0lBc0MvQywrRUFBeUg7Ozs7OztJQVN6SCxtRUFBcUU7Ozs7OztJQU1yRSxrRUFBbUU7Ozs7O0lBUW5FLDZEQUF1Qjs7Ozs7SUFJdkIsOERBQXNCOzs7OztJQUl0Qiw4REFBc0I7Ozs7O0lBeUJ0QixvRUFBK0I7Ozs7OztJQWtCL0IsaUVBQTJCOzs7OztJQUkzQixrRUFBMEI7Ozs7O0lBSTFCLGlFQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBeUIzQiw2REFBcUI7Ozs7O0lBS3JCLGtFQUE2RTs7Ozs7SUFJN0UsdUVBQXVGOzs7OztJQUl2RixxRUFBc0Y7Ozs7O0lBSXRGLGtFQUFtRjs7Ozs7SUFJbkYsbUVBQW9GOzs7OztJQUlwRixvRUFBcUY7Ozs7O0lBK0lyRixzRUFBeUM7Ozs7O0lBQ3pDLDRGQUErRDs7Ozs7SUFsVm5ELDhEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1kcyB9IGZyb20gJ21kcy5wZXJzaWFuLmRhdGV0aW1lJztcbmltcG9ydCB7IFRlbXBsYXRlVHlwZUVudW0sIFRleHRCb3hUeXBlRW51bSB9IGZyb20gJy4vY2xhc3Nlcy9lbnVtcyc7XG5pbXBvcnQgeyBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0YU1vZGVsLCBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZSwgSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGVNb2RlbCxcbiAgIElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJFdmVudE1vZGVsLCBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyUmFuZ2VEYXRlIH0gZnJvbSAnLi9jbGFzc2VzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5IH0gZnJvbSAnLi9jbGFzc2VzL2ljby10ZWMtZGF0ZXRpbWUtcGlja2VyLnV0aWxpdHknO1xuaW1wb3J0IHsgSWNvVGVjQW5ndWxhclBlcnNpYW5EYXRlVGltZVBpY2tlckNvcmVDb21wb25lbnQgfSBmcm9tICcuL2NvcmUvaWNvLXRlYy1hbmd1bGFyLXBlcnNpYW4tZGF0ZS10aW1lLXBpY2tlci1jb3JlLmNvbXBvbmVudCc7XG5pbXBvcnQgUGVyc2lhbkRhdGVUaW1lID0gTWRzLlBlcnNpYW5EYXRlVGltZTtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpY28tdGVjLWFuZ3VsYXItcGVyc2lhbi1kYXRldGltZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY28tdGVjLWFuZ3VsYXItcGVyc2lhbi1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaWNvLXRlYy1hbmd1bGFyLXBlcnNpYW4tZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczpcbiAgICBbXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJY29UZWNBbmd1bGFyUGVyc2lhbkRhdGVUaW1lUGlja2VyQ29tcG9uZW50KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEljb1RlY0FuZ3VsYXJQZXJzaWFuRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0aGlzLnNob3dEYXRlUGlja2VyICYmIGV2ZW50LnRhcmdldCAmJlxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCAhPSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgIXRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICAgIXRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWljby10ZWMtcGVyc2lhbi1kYXRldGltZXBpY2tlcicpKSB7XG4gICAgICAgIHRoaXMuc2hvd0RhdGVQaWNrZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pY29UZWNEYXRlVGltZVBpY2tlckNvcmUuaGlkZVNlbGVjTW9udGhBbmRZZWFyQmxvY2soKTtcbiAgICAgICAgdGhpcy5pY29UZWNEYXRlVGltZVBpY2tlckNvcmUucmVzZXRJbmNvbXBsZXRlUmFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGVyc2lhbkNoYXIgPSB0cnVlO1xuICBwcml2YXRlIF9pc1BlcnNpYW4gPSB0cnVlO1xuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHJpdmF0ZSBhZnRlclZpZXdJbml0ID0gZmFsc2U7XG4gIHByaXZhdGUgaW5DbGVhckZ1bmN0aW9uID0gZmFsc2U7XG4gIHByaXZhdGUgc2hvd2luZ0RhdGVUaW1lUGlja2VyTG9ja2VkID0gZmFsc2U7XG4gIHNob3dEYXRlUGlja2VyID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWREYXRlVGltZTogRGF0ZSA9IG51bGw7XG4gIHByaXZhdGUgX3NlbGVjdGVkRGF0ZVRpbWVSYW5nZXM6IERhdGVbXSA9IG51bGw7XG5cbiAgZ2V0IHNlbGVjdGVkRGF0ZVRpbWUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkRGF0ZVRpbWU7XG4gIH1cbiAgc2V0IHNlbGVjdGVkRGF0ZVRpbWUodmFsdWU6IERhdGUpIHtcbiAgICBpZiAoIXRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlKSB7IHJldHVybjsgfVxuICAgIHRyeSB7XG4gICAgICB0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZS5zZXREYXRlVGltZUJ5RGF0ZSghdmFsdWUgPyBudWxsIDogbmV3IERhdGUodmFsdWUpKTtcbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZVRpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLm15Q29udHJvbC5zZXRWYWx1ZShcIlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZVRpbWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMubXlDb250cm9sLnNldFZhbHVlKHRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlLmdldFNlbGVjdGVkRGF0ZS5mb3JtYXRTdHJpbmcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZERhdGVUaW1lUmFuZ2VzKCk6IERhdGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkRGF0ZVRpbWVSYW5nZXM7XG4gIH1cbiAgc2V0IHNlbGVjdGVkRGF0ZVRpbWVSYW5nZXModmFsdWVzOiBEYXRlW10pIHtcbiAgICBpZiAoIXRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlKSB7IHJldHVybjsgfVxuICAgIHRyeSB7XG4gICAgICBpZiAodmFsdWVzID09IG51bGwgfHwgdmFsdWVzLmxlbmd0aCA8IDIpIHsgcmV0dXJuOyB9XG4gICAgICB0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZS5zZXREYXRlVGltZVJhbmdlc0J5RGF0ZShcbiAgICAgICAgdmFsdWVzWzBdID09IG51bGwgPyBudWxsIDogbmV3IERhdGUodmFsdWVzWzBdKSxcbiAgICAgICAgdmFsdWVzWzFdID09IG51bGwgPyBudWxsIDogbmV3IERhdGUodmFsdWVzWzFdKSk7XG4gICAgICB0aGlzLl9zZWxlY3RlZERhdGVUaW1lUmFuZ2VzID0gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2ljb1RlY0RhdGVUaW1lUGlja2VyQ29yZScpIHByaXZhdGUgaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlOiBJY29UZWNBbmd1bGFyUGVyc2lhbkRhdGVUaW1lUGlja2VyQ29yZUNvbXBvbmVudDtcblxuICAvLyNyZWdpb24gSW5wdXQgT3V0UHV0XG5cblxuICAvKipcbiAgICog2KfYsiDYqNmI2Kog2KfYs9iq2LHZviDYp9iz2KrZgdin2K/ZhyDYtNmI2K8g24zYpyDZhdiq2LHbjNin2YRcbiAgICogVGVtcGxhdGVUeXBlRW51bVxuICAgKi9cbiAgQElucHV0KCkgdGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGVFbnVtID0gVGVtcGxhdGVUeXBlRW51bS5ib290c3RyYXA7XG5cbiAgLyoqXG4gICAqINmG2YjYuSDZhtmF2KfbjNi0INiq2qnYsyDYqNin2qnYs1xuICAgKiBUZXh0Qm94VHlwZUVudW1cbiAgICovXG4gIEBJbnB1dCgpIHRleHRCb3hUeXBlOiBUZXh0Qm94VHlwZUVudW0gPSBUZXh0Qm94VHlwZUVudW0ud2l0aEJ1dHRvbjtcbiAgLyoqXG4gICAqINmF2YLYr9in2LEg2KfZiNmE24zZh1xuICAgKi9cbiAgLy8gQElucHV0KCkgaW5pdGlhbFZhbHVlID0gJyc7XG4gIC8qKlxuICAgKiDZhtmI2Lkg2YbZhdin24zYtCDYr9uM2Kog2b7bjNqp2LEg2KjZhyDYtdmI2LHYqiDYp9uM2YYg2YTYp9uM2YYg2KjYp9i02K8g24zYpyDZhtmHXG4gICAqL1xuICBASW5wdXQoKSBpbkxpbmUgPSB0cnVlO1xuICAvKipcbiAgICog2qnZhdiq2LHbjNmGINmF2YLYr9in2LFcbiAgICovICBcbiAgQElucHV0KCkgbWluRGF0ZTpEYXRlOyAgXG4gIC8qKlxuICAqINio24zYtNiq2LHbjNmGINmF2YLYr9in2LFcbiAgKi9cbiAgQElucHV0KCkgbWF4RGF0ZTpEYXRlOyBcblxuXG4gIC8qKlxuICAgKiDYotuM2Kcg2KfYsiDaqdin2LHYp9qp2KrYsdmH2KfbjCDZgdin2LHYs9uMINin2LPYqtmB2KfYr9mHINi02YjYr1xuICAgKiDZiNmC2KrbjCDYqtmC2YjbjNmFINmF24zZhNin2K/bjCDYp9iz2Kog2KjYr9mI2YYg2KrYp9ir24zYsSDZhduMINi02YjYr1xuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHBlcnNpYW5DaGFyKCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJzaWFuQ2hhcjtcbiAgfVxuICBzZXQgcGVyc2lhbkNoYXIodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gdGhpcy5fcGVyc2lhbkNoYXIpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5fcGVyc2lhbkNoYXIgPSB2YWx1ZTtcbiAgICBsZXQgY29udHJvbFZhbHVlID0gdGhpcy5teUNvbnRyb2wudmFsdWU7XG4gICAgaWYgKHRoaXMuX3BlcnNpYW5DaGFyKSB7XG4gICAgICBjb250cm9sVmFsdWUgPSBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkudG9QZXJzaWFuTnVtYmVyKGNvbnRyb2xWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2xWYWx1ZSA9IEljb1RlY0RhdGV0aW1lUGlja2VyVXRpbGl0eS50b0VuZ2xpc2hTdHJpbmcoY29udHJvbFZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5teUNvbnRyb2wuc2V0VmFsdWUoY29udHJvbFZhbHVlKTtcbiAgfVxuICAvKipcbiAgICog2KLbjNinINiv24zYqiDZvtuM2qnYsSDYqNmHINi02qnZhCDYp9mG2KrYrtin2Kgg2LHZhtisINiq2KfYsduM2K7bjCDYqNin2LTYryDbjNinINmG2YdcbiAgICovXG4gIEBJbnB1dCgpIHJhbmdlU2VsZWN0b3IgPSBmYWxzZTtcbiAgLyoqXG4gICAqINiq2YLZiNuM2YUg2YXbjNmE2KfYr9uMINio2KfYtNivINuM2Kcg2LTZhdiz24xcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBpc1BlcnNpYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUGVyc2lhbjtcbiAgfVxuICBzZXQgaXNQZXJzaWFuKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IHRoaXMuX2lzUGVyc2lhbikgeyByZXR1cm47IH1cbiAgICB0aGlzLl9pc1BlcnNpYW4gPSB2YWx1ZTtcbiAgICBpZiAoIXRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlKSB7IHJldHVybjsgfVxuICAgIHRoaXMuY2xlYXIoKTtcbiAgfVxuICAvKipcbiAgICog2KLbjNinINiq2KfbjNmFINm+24zaqdixINmG2YXYp9uM2LQg2K/Yp9iv2Ycg2KjYtNmI2K8g24zYpyDZhtmHXG4gICAqINiv2LEg2YbZiNi5INin2YbYqtiu2KfYqCDYsdmG2Kwg2KrYp9ix24zYrtuMINio2K/ZiNmGINiq2KfYq9uM2LEg2KfYs9iqXG4gICAqL1xuICBASW5wdXQoKSB0aW1lUGlja2VyID0gdHJ1ZTtcbiAgLyoqXG4gICAqIFBsYWNlSG9sZGVyXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZUhvbGRlciA9ICcnO1xuICAvKipcbiAgICog2KLbjNqp2YjZhlxuICAgKi9cbiAgQElucHV0KCkgYnV0dG9uSWNvbiA9ICfwn5OFJztcbiAgLyoqXG4gICAgKiDZgdix2YXYqiDZvtuM2LQg2YHYsdi2IDEzOTMvMDkvMTQgICAxMzo0OTo0MFxuICAgICogeXl5eTog2LPYp9mEINqG2YfYp9ixINix2YLZhduMXG4gICAgKiB5eTog2LPYp9mEINiv2Ygg2LHZgtmF24xcbiAgICAqIE1NTU06INmG2KfZhSDZgdin2LHYs9uMINmF2KfZh1xuICAgICogTU06INi52K/YryDYr9mIINix2YLZhduMINmF2KfZh1xuICAgICogTTog2LnYr9ivINuM2qkg2LHZgtmF24wg2YXYp9mHXG4gICAgKiBkZGRkOiDZhtin2YUg2YHYp9ix2LPbjCDYsdmI2LIg2YfZgdiq2YdcbiAgICAqIGRkOiDYudiv2K8g2K/ZiCDYsdmC2YXbjCDYsdmI2LIg2YXYp9mHXG4gICAgKiBkOiDYudiv2K8g24zaqSDYsdmC2YXbjCDYsdmI2LIg2YXYp9mHXG4gICAgKiBISDog2LPYp9i52Kog2K/ZiCDYsdmC2YXbjCDYqNinINmB2LHZhdiqIDAwINiq2KcgMjRcbiAgICAqIEg6INiz2KfYudiqINuM2qkg2LHZgtmF24wg2KjYpyDZgdix2YXYqiAwINiq2KcgMjRcbiAgICAqIGhoOiDYs9in2LnYqiDYr9mIINix2YLZhduMINio2Kcg2YHYsdmF2KogMDAg2KrYpyAxMlxuICAgICogaDog2LPYp9i52Kog24zaqSDYsdmC2YXbjCDYqNinINmB2LHZhdiqIDAg2KrYpyAxMlxuICAgICogbW06INi52K/YryDYr9mIINix2YLZhduMINiv2YLbjNmC2YdcbiAgICAqIG06INi52K/YryDbjNqpINix2YLZhduMINiv2YLbjNmC2YdcbiAgICAqIHNzOiDYq9in2YbbjNmHINiv2Ygg2LHZgtmF24xcbiAgICAqIHM6INir2KfZhtuM2Ycg24zaqSDYsdmC2YXbjFxuICAgICogZmZmOiDZhduM2YTbjCDYq9in2YbbjNmHIDMg2LHZgtmF24xcbiAgICAqIGZmOiDZhduM2YTbjCDYq9in2YbbjNmHIDIg2LHZgtmF24xcbiAgICAqIGY6INmF24zZhNuMINir2KfZhtuM2Ycg24zaqSDYsdmC2YXbjFxuICAgICogdHQ6INioLti4INuM2Kcg2YIu2LhcbiAgICAqIHQ6INit2LHZgSDYp9mI2YQg2KfYsiDYqC7YuCDbjNinINmCLti4XG4gICAgKiovXG4gIEBJbnB1dCgpIGZvcm1hdCA9ICcnO1xuXG4gIC8qKlxuICAgKiDZiNmC2KrbjCDYqtin2LHbjNiuINin2YbYqtiu2KfYqNuMINi52YjYtiDZhduMINi02YjYryDYp9uM2YYg2KfZiNmG2Kog2YHYsdin2K7ZiNin2YbbjCDZhduMINi02YjYr1xuICAgKi9cbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZT4oKTtcbiAgLyoqXG4gICAqINmI2YLYqtuMINix2YbYrCDYqtin2LHbjNiu24wg2KfZhtiq2K7Yp9ioINi02K/ZhyDYudmI2LYg2YXbjCDYtNmI2K8g2KfbjNmGINin2YjZhtiqINmB2LHYp9iu2YjYp9mG24wg2YXbjCDYtNmI2K9cbiAgICovXG4gIEBPdXRwdXQoKSByYW5nZURhdGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyUmFuZ2VEYXRlPigpO1xuICAvKipcbiAgICog2YjZgtiq24wg2qnZhNuM2K/bjCDYsdmI24wg2KraqdizINio2KfaqdizINin2YbYqtiu2KfYqCDYqtin2LHbjNiuINmB2LTYsdiv2Ycg2YXbjCDYtNmI2K8g2KfbjNmGINin2YjZhtiqINmB2LHYp9iu2YjYp9mG24wg2YXbjCDYtNmI2K9cbiAgICovXG4gIEBPdXRwdXQoKSB0ZXh0Qm94S2V5RG93biA9IG5ldyBFdmVudEVtaXR0ZXI8SUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckV2ZW50TW9kZWw+KCk7XG4gIC8qKlxuICAgKiDZiNmC2KrbjCDYsdmI24wg2KraqdizINio2KfaqdizINin2YbYqtiu2KfYqCDYqtin2LHbjNiuINio2YTZiNixINmF24wg2LTZiNivINin24zZhiDYp9mI2YbYqiDZgdix2KfYrtmI2KfZhtuMINmF24wg2LTZiNivXG4gICAqL1xuICBAT3V0cHV0KCkgdGV4dEJveEJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJFdmVudE1vZGVsPigpO1xuICAvKipcbiAgICog2YjZgtiq24wg2LHZiNuMINiq2qnYsyDYqNin2qnYsyDYp9mG2KrYrtin2Kgg2KrYp9ix24zYriDZgdmI2qnZiNizINmF24wg2LTZiNivINin24zZhiDYp9mI2YbYqiDZgdix2KfYrtmI2KfZhtuMINmF24wg2LTZiNivXG4gICAqL1xuICBAT3V0cHV0KCkgdGV4dEJveEZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRXZlbnRNb2RlbD4oKTtcbiAgLyoqXG4gICAqINmI2YLYqtuMINix2YjbjCDYqtqp2LMg2KjYp9qp2LMg2KfZhtiq2K7Yp9ioINiq2KfYsduM2K4g2KrYutuM24zYsduMINin24zYrNin2K8g2YXbjCDYtNmI2K8g2KfbjNmGINin2YjZhtiqINmB2LHYp9iu2YjYp9mG24wg2YXbjCDYtNmI2K9cbiAgICovXG4gIEBPdXRwdXQoKSB0ZXh0Qm94Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRXZlbnRNb2RlbD4oKTtcblxuICAvLyNlbmRyZWdpb25cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5pc1BlcnNpYW4pIHsgdGhpcy5wZXJzaWFuQ2hhciA9IGZhbHNlOyB9XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYWZ0ZXJWaWV3SW5pdCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIGdldEV2ZW50T2JqZWN0KGV2ZW50OiBhbnkpOiBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRXZlbnRNb2RlbCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV2ZW50QXJnczogZXZlbnQsXG4gICAgICBzZWxlY3RlZERhdGU6IHRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlLmdldFNlbGVjdGVkRGF0ZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VEYXRlczogdGhpcy5pY29UZWNEYXRlVGltZVBpY2tlckNvcmUuZ2V0U2VsZWN0ZWRSYW5nZURhdGVzXG4gICAgfTtcbiAgfVxuICBwcml2YXRlIGdldFNlbGVjdGVkRGF0ZU9iamVjdCgpOiBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZU1vZGVsIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0ZWREYXRlOiB0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZS5nZXRTZWxlY3RlZERhdGUsXG4gICAgICBzZWxlY3RlZFJhbmdlRGF0ZXM6IHRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlLmdldFNlbGVjdGVkUmFuZ2VEYXRlc1xuICAgIH07XG4gIH1cbiAgc2hvd0RhdGVQaWNrZXJCdXR0b25DbGlja2VkKCkge1xuICAgIHRoaXMuc2hvd0RhdGVQaWNrZXIgPSAhdGhpcy5zaG93RGF0ZVBpY2tlcjtcbiAgICAvLyBpZiAodGhpcy5zaG93RGF0ZVBpY2tlcikge1xuICAgIC8vIGNvbnN0IHJlY3RPYmplY3QgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAvLyB0aGlzLnRvcE9mZnNldCA9IHJlY3RPYmplY3QudG9wO1xuICAgIC8vIHRoaXMubGVmdE9mZnNldCA9IHJlY3RPYmplY3QubGVmdDtcbiAgICAvLyB9XG4gIH1cbiAgZGF0ZUNoYW5nZWRIYW5kbGVyKGRhdGU6IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlKSB7XG4gICAgaWYgKCF0aGlzLmFmdGVyVmlld0luaXQpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KGRhdGUpO1xuICAgIGlmIChkYXRlICE9IG51bGwpIHtcbiAgICAgIHRoaXMubXlDb250cm9sLnNldFZhbHVlKGRhdGUuZm9ybWF0U3RyaW5nKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlVGltZSA9IG5ldyBEYXRlKGRhdGUudXRjRGF0ZVRpbWUpO1xuICAgICAgaWYgKCF0aGlzLnNob3dpbmdEYXRlVGltZVBpY2tlckxvY2tlZCkge1xuICAgICAgICB0aGlzLnNob3dEYXRlUGlja2VyID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLmdldFNlbGVjdGVkRGF0ZU9iamVjdCgpKTtcbiAgICB9XG4gIH1cbiAgcmFuZ2VEYXRlQ2hhbmdlZEhhbmRsZXIocmFuZ2VEYXRlOiBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyUmFuZ2VEYXRlKSB7XG4gICAgaWYgKCF0aGlzLmFmdGVyVmlld0luaXQpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5teUNvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgIGlmIChyYW5nZURhdGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5yYW5nZURhdGVDaGFuZ2VkLmVtaXQocmFuZ2VEYXRlKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlVGltZVJhbmdlcyA9IFtudWxsLCBudWxsXTtcbiAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuZ2V0U2VsZWN0ZWREYXRlT2JqZWN0KCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmFuZ2VEYXRlLnN0YXJ0RGF0ZS5mb3JtYXRTdHJpbmcgIT0gJycgJiYgcmFuZ2VEYXRlLmVuZERhdGUuZm9ybWF0U3RyaW5nICE9ICcnKSB7XG4gICAgICB0aGlzLm15Q29udHJvbC5zZXRWYWx1ZShgJHtyYW5nZURhdGUuc3RhcnREYXRlLmZvcm1hdFN0cmluZ30gLSAke3JhbmdlRGF0ZS5lbmREYXRlLmZvcm1hdFN0cmluZ31gKTtcbiAgICB9XG4gICAgdGhpcy5yYW5nZURhdGVDaGFuZ2VkLmVtaXQocmFuZ2VEYXRlKTtcbiAgICBpZiAocmFuZ2VEYXRlLnN0YXJ0RGF0ZS5mb3JtYXRTdHJpbmcgIT0gJycgJiYgcmFuZ2VEYXRlLmVuZERhdGUuZm9ybWF0U3RyaW5nICE9ICcnICYmICF0aGlzLnNob3dpbmdEYXRlVGltZVBpY2tlckxvY2tlZCkge1xuICAgICAgdGhpcy5zaG93RGF0ZVBpY2tlciA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkRGF0ZVRpbWVSYW5nZXMgPSBbcmFuZ2VEYXRlLnN0YXJ0RGF0ZS51dGNEYXRlVGltZSwgcmFuZ2VEYXRlLmVuZERhdGUudXRjRGF0ZVRpbWVdO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuZ2V0U2VsZWN0ZWREYXRlT2JqZWN0KCkpO1xuICB9XG4gIGRhdGVUaW1lVGV4dEJveE9uRm9jdXNIYW5kbGVyKGV2ZW50OiBhbnkpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLmNsaWNrKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0ZVRpbWUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZS5zZXREYXRlVGltZUJ5RGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZVRpbWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICAgIHRoaXMuc2hvd0RhdGVQaWNrZXJCdXR0b25DbGlja2VkKCk7XG4gICAgdGhpcy50ZXh0Qm94Rm9jdXMuZW1pdCh0aGlzLmdldEV2ZW50T2JqZWN0KGV2ZW50KSk7XG4gIH1cbiAgZGF0ZVRpbWVUZXh0Qm94T25CbHVySGFuZGxlcihldmVudDogYW55KTogdm9pZCB7XG4gICAgbGV0IHZhbHVlID0gIXRoaXMubXlDb250cm9sLnZhbHVlID8gJycgOiB0aGlzLm15Q29udHJvbC52YWx1ZS50cmltKCk7XG4gICAgaWYgKHRoaXMucGVyc2lhbkNoYXIpIHtcbiAgICAgIHZhbHVlID0gSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LnRvUGVyc2lhbk51bWJlcih2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LnRvRW5nbGlzaFN0cmluZyh2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCF0YXJnZXRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1pY28tdGVjLXBlcnNpYW4tZGF0ZXRpbWVwaWNrZXInKSkge1xuICAgICAgdGhpcy5zaG93aW5nRGF0ZVRpbWVQaWNrZXJMb2NrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pY29UZWNEYXRlVGltZVBpY2tlckNvcmUuc2V0RGF0ZVRpbWVCeVN0cmluZyh2YWx1ZSk7XG4gICAgICB0aGlzLnNob3dpbmdEYXRlVGltZVBpY2tlckxvY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnRleHRCb3hCbHVyLmVtaXQodGhpcy5nZXRFdmVudE9iamVjdChldmVudCkpO1xuICB9XG4gIGRhdGVUaW1lVGV4dEJveE9uS2V5dXBIYW5kbGVyKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCk7XG4gICAgaWYgKHZhbHVlICYmIGV2ZW50LmtleUNvZGUgIT0gMTMpIHtcbiAgICAgIHRoaXMudGV4dEJveEtleURvd24uZW1pdCh0aGlzLmdldEV2ZW50T2JqZWN0KGV2ZW50KSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlLmNsZWFyRGF0ZVRpbWVQaWNrZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pY29UZWNEYXRlVGltZVBpY2tlckNvcmUuc2V0RGF0ZVRpbWVCeVN0cmluZyh2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuc2hvd0RhdGVQaWNrZXIgPSBmYWxzZTtcbiAgICB0aGlzLnRleHRCb3hLZXlEb3duLmVtaXQodGhpcy5nZXRFdmVudE9iamVjdChldmVudCkpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuaW5DbGVhckZ1bmN0aW9uIHx8ICF0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZSkgeyByZXR1cm47IH1cbiAgICAvLyB0aGlzLmluaXRpYWxWYWx1ZSA9ICcnO1xuICAgIHRoaXMuaW5DbGVhckZ1bmN0aW9uID0gdHJ1ZTtcbiAgICB0aGlzLm15Q29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgdGhpcy5zZWxlY3RlZERhdGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZVRpbWVSYW5nZXMgPSBbbnVsbCwgbnVsbF07XG5cbiAgICB0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZS5jbGVhckRhdGVUaW1lUGlja2VyKCk7XG4gICAgdGhpcy5pbkNsZWFyRnVuY3Rpb24gPSBmYWxzZTtcbiAgfVxuICBzZXREYXRlVGltZShkYXRlVGltZTogRGF0ZSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmljb1RlY0RhdGVUaW1lUGlja2VyQ29yZS5zZXREYXRlVGltZUJ5RGF0ZShkYXRlVGltZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgc2V0RGF0ZVRpbWVSYW5nZXMoc3RhcnREYXRlVGltZTogRGF0ZSwgZW5kRGF0ZVRpbWU6IERhdGUpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5pY29UZWNEYXRlVGltZVBpY2tlckNvcmUuc2V0RGF0ZVRpbWVSYW5nZXNCeURhdGUoc3RhcnREYXRlVGltZSwgZW5kRGF0ZVRpbWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIHNob3dEYXRlVGltZVBpY2tlcigpIHtcbiAgICB0aGlzLnNob3dEYXRlUGlja2VyID0gdHJ1ZTtcbiAgfVxuICBoaWRlRGF0ZVRpbWVQaWNrZXIoKSB7XG4gICAgdGhpcy5zaG93RGF0ZVBpY2tlciA9IGZhbHNlO1xuICB9XG5cbiAgLy8jcmVnaW9uIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG5cbiAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2U6IGFueSA9ICgpID0+IHsgfTtcbiAgcHJpdmF0ZSB2YWxJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZUZuOiBhbnkgPSAoKSA9PiB7IH07XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGFNb2RlbCk6IHZvaWQge1xuICAgIGlmICghbW9kZWwgfHwgKCFtb2RlbC5zZWxlY3RlZERhdGUgJiYgIW1vZGVsLnNlbGVjdGVkUmFuZ2VEYXRlcykpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgIFxuXG4gICAgaWYgKHRoaXMucmFuZ2VTZWxlY3RvciAmJiBtb2RlbC5zZWxlY3RlZFJhbmdlRGF0ZXMpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlVGltZVJhbmdlcyA9IG1vZGVsLnNlbGVjdGVkUmFuZ2VEYXRlcztcbiAgICAgIC8vIHRoaXMuaW5pdGlhbFZhbHVlID0gdGhpcy5zZWxlY3RlZERhdGVUaW1lUmFuZ2VzWzBdLnRvU3RyaW5nKCkgKyAnLScgKyB0aGlzLnNlbGVjdGVkRGF0ZVRpbWVSYW5nZXNbMV0udG9TdHJpbmcoKTtcbiAgICAgIHRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlLnNldERhdGVUaW1lUmFuZ2VzQnlEYXRlKHRoaXMuc2VsZWN0ZWREYXRlVGltZVJhbmdlc1swXSwgdGhpcy5zZWxlY3RlZERhdGVUaW1lUmFuZ2VzWzFdKTtcbiAgICB9IGVsc2UgaWYgKG1vZGVsLnNlbGVjdGVkRGF0ZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGVUaW1lID0gbW9kZWwuc2VsZWN0ZWREYXRlO1xuICAgICAgLy8gdGhpcy5pbml0aWFsVmFsdWUgPSB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMuaWNvVGVjRGF0ZVRpbWVQaWNrZXJDb3JlLnNldERhdGVUaW1lQnlEYXRlKHRoaXMuc2VsZWN0ZWREYXRlVGltZSk7XG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuXG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubXlDb250cm9sLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5teUNvbnRyb2wuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgdmFsSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGUoYzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMudmFsSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGVGbihjLnZhbHVlKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxufVxuIl19