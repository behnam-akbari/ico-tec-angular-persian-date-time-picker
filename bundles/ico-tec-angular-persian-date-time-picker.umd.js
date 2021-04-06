(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/forms'), require('@angular/material'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/grid-list'), require('@angular/animations'), require('mds.persian.datetime'), require('@angular/platform-browser'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ico-tec-angular-persian-date-time-picker', ['exports', '@angular/common', '@angular/forms', '@angular/material', '@angular/material/button', '@angular/material/form-field', '@angular/material/grid-list', '@angular/animations', 'mds.persian.datetime', '@angular/platform-browser', '@angular/core'], factory) :
    (factory((global['ico-tec-angular-persian-date-time-picker'] = {}),global.ng.common,global.ng.forms,global.ng.material,global.ng.material.button,global.ng.material['form-field'],global.ng.material['grid-list'],global.ng.animations,global.mds_persian_datetime,global.ng.platformBrowser,global.ng.core));
}(this, (function (exports,common,forms,material,button,formField,gridList,animations,mds_persian_datetime,platformBrowser,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var TemplateTypeEnum = {
        bootstrap: 1,
        material: 2,
    };
    TemplateTypeEnum[TemplateTypeEnum.bootstrap] = 'bootstrap';
    TemplateTypeEnum[TemplateTypeEnum.material] = 'material';
    /** @enum {number} */
    var TextBoxTypeEnum = {
        withButton: 1,
        withoutButton: 2,
    };
    TextBoxTypeEnum[TextBoxTypeEnum.withButton] = 'withButton';
    TextBoxTypeEnum[TextBoxTypeEnum.withoutButton] = 'withoutButton';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PersianDateTime = mds_persian_datetime.Mds.PersianDateTime;
    var IcoTecDatetimePickerUtility = /** @class */ (function () {
        function IcoTecDatetimePickerUtility() {
        }
        /**
         * @param {?} input
         * @return {?}
         */
        IcoTecDatetimePickerUtility.toPersianNumber = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                if (input == '' || input == null) {
                    return '';
                }
                input = input.replace(/ي/img, 'ی').replace(/ك/img, 'ک');
                // ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹
                return input.replace(/0/img, '۰')
                    .replace(/1/img, '۱')
                    .replace(/2/img, '۲')
                    .replace(/3/img, '۳')
                    .replace(/4/img, '۴')
                    .replace(/5/img, '۵')
                    .replace(/6/img, '۶')
                    .replace(/7/img, '۷')
                    .replace(/8/img, '۸')
                    .replace(/9/img, '۹');
            };
        /**
         * @param {?} input
         * @return {?}
         */
        IcoTecDatetimePickerUtility.toEnglishNumber = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                if (input == '' || input == null) {
                    return 0;
                }
                input = input.replace(/ي/img, 'ی').replace(/ك/img, 'ک');
                // ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹
                input = input.replace(/,/img, '')
                    .replace(/۰/img, '0')
                    .replace(/۱/img, '1')
                    .replace(/۲/img, '2')
                    .replace(/۳/img, '3')
                    .replace(/۴/img, '4')
                    .replace(/۵/img, '5')
                    .replace(/۶/img, '6')
                    .replace(/۷/img, '7')
                    .replace(/۸/img, '8')
                    .replace(/۹/img, '9');
                return Number(input);
            };
        /**
         * @param {?} input
         * @return {?}
         */
        IcoTecDatetimePickerUtility.toEnglishString = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                if (input == '' || input == null) {
                    return '';
                }
                input = input.replace(/ي/img, 'ی').replace(/ك/img, 'ک');
                // ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹
                input = input.replace(/,/img, '')
                    .replace(/۰/img, '0')
                    .replace(/۱/img, '1')
                    .replace(/۲/img, '2')
                    .replace(/۳/img, '3')
                    .replace(/۴/img, '4')
                    .replace(/۵/img, '5')
                    .replace(/۶/img, '6')
                    .replace(/۷/img, '7')
                    .replace(/۸/img, '8')
                    .replace(/۹/img, '9');
                return input;
            };
        /**
         * @param {?} date
         * @param {?=} format
         * @return {?}
         */
        IcoTecDatetimePickerUtility.dateTimeToString = /**
         * @param {?} date
         * @param {?=} format
         * @return {?}
         */
            function (date, format) {
                if (format === void 0) {
                    format = '';
                }
                if (format == '' || format == null) {
                    return this.zeroPad(date.getFullYear(), '0000') + "/" + this.zeroPad(date.getMonth() + 1, '00') + "/" + this.zeroPad(date.getDate(), '00') + "   " + this.zeroPad(date.getHours(), '00') + ":" + this.zeroPad(date.getMinutes(), '00') + ":" + this.zeroPad(date.getSeconds(), '00');
                }
                /** @type {?} */
                var dateTimeString = format;
                dateTimeString = dateTimeString.replace(/yyyy/g, this.zeroPad(date.getFullYear(), '0000'));
                dateTimeString = dateTimeString.replace(/yy/g, this.zeroPad(date.getFullYear(), '00'));
                dateTimeString = dateTimeString.replace(/dddd/g, this.getGregorianWeekDayName(date.getDay()));
                dateTimeString = dateTimeString.replace(/dd/g, this.zeroPad(date.getDate(), '00'));
                dateTimeString = dateTimeString.replace(/hh/g, this.zeroPad(date.getHours(), '00'));
                dateTimeString = dateTimeString.replace(/mm/g, this.zeroPad(date.getMinutes(), '00'));
                dateTimeString = dateTimeString.replace(/ss/g, this.zeroPad(date.getSeconds(), '00'));
                dateTimeString = dateTimeString.replace(/fff/g, this.zeroPad(date.getMilliseconds(), '000'));
                dateTimeString = dateTimeString.replace(/ff/g, this.zeroPad(date.getMilliseconds() / 10, '00'));
                dateTimeString = dateTimeString.replace(/MMMM/g, this.getGregorianMonthName(date.getMonth()));
                dateTimeString = dateTimeString.replace(/MM/g, this.zeroPad(date.getMonth() + 1, '00'));
                dateTimeString = dateTimeString.replace(/M(?!a)/g, (date.getMonth() + 1).toString());
                // dateTimeString = dateTimeString.replace(/s/g, date.getSeconds().toString());
                // dateTimeString = dateTimeString.replace(/f/g, (date.getMilliseconds() / 10).toString());
                // dateTimeString = dateTimeString.replace(/h/g, date.getHours().toString());
                // dateTimeString = dateTimeString.replace(/m/g, date.getMinutes().toString());
                // dateTimeString = dateTimeString.replace(/d/g, date.getDate().toString());
                return dateTimeString;
            };
        /**
         * @param {?} nr
         * @param {?} base
         * @return {?}
         */
        IcoTecDatetimePickerUtility.zeroPad = /**
         * @param {?} nr
         * @param {?} base
         * @return {?}
         */
            function (nr, base) {
                if (nr == undefined || nr == '') {
                    return base;
                }
                /** @type {?} */
                var len = (String(base).length - String(nr).length) + 1;
                return len > 0 ? new Array(len).join('0') + nr : nr;
            };
        /**
         * @param {?} monthIndex
         * @return {?}
         */
        IcoTecDatetimePickerUtility.getGregorianMonthName = /**
         * @param {?} monthIndex
         * @return {?}
         */
            function (monthIndex) {
                return [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ][monthIndex];
            };
        /**
         * @param {?} weekDayIndex
         * @return {?}
         */
        IcoTecDatetimePickerUtility.getGregorianWeekDayName = /**
         * @param {?} weekDayIndex
         * @return {?}
         */
            function (weekDayIndex) {
                return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'FrIMdsAngularDateTimePickerDay', 'Saturday'][weekDayIndex];
            };
        /**
         * @param {?} dateRangeString
         * @return {?}
         */
        IcoTecDatetimePickerUtility.getPersianDateRanges = /**
         * @param {?} dateRangeString
         * @return {?}
         */
            function (dateRangeString) {
                /** @type {?} */
                var startEndDateArrayResult = new Array();
                try {
                    /** @type {?} */
                    var startEndDateArray = dateRangeString.split(' - ');
                    /** @type {?} */
                    var startMdsPersianDateTime = PersianDateTime.parse(startEndDateArray[0]);
                    /** @type {?} */
                    var endMdsPersianDateTime = PersianDateTime.parse(startEndDateArray[1]);
                    if (endMdsPersianDateTime.toDate() < startMdsPersianDateTime.toDate()) {
                        throw new Error('Range date is not valid. End date must be bigger than start date');
                    }
                    startEndDateArrayResult.push(startMdsPersianDateTime);
                    startEndDateArrayResult.push(endMdsPersianDateTime);
                }
                catch (e) {
                    throw new Error('Range date is not valid. You must enter range date string like "1396/03/06 - 1396/03/21"');
                }
                return startEndDateArrayResult;
            };
        /**
         * @param {?} dateRangeString
         * @return {?}
         */
        IcoTecDatetimePickerUtility.getDateRanges = /**
         * @param {?} dateRangeString
         * @return {?}
         */
            function (dateRangeString) {
                /** @type {?} */
                var startEndDateArrayResult = new Array();
                try {
                    /** @type {?} */
                    var startEndDateArray = dateRangeString.split(' - ');
                    /** @type {?} */
                    var startDateTime = new Date(Date.parse(startEndDateArray[0]));
                    /** @type {?} */
                    var endDateTime = new Date(Date.parse(startEndDateArray[1]));
                    if (endDateTime < startDateTime) {
                        throw new Error('Range date is not valid. End date must be bigger than start date');
                    }
                    startEndDateArrayResult.push(startDateTime);
                    startEndDateArrayResult.push(endDateTime);
                }
                catch (e) {
                    throw new Error('Range date is not valid. You must enter range date string like "2017/02/06 - 2017/02/18"');
                }
                return startEndDateArrayResult;
            };
        return IcoTecDatetimePickerUtility;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IcoTecAngularPersianDateTimePickerComponent = /** @class */ (function () {
        function IcoTecAngularPersianDateTimePickerComponent(element) {
            var _this = this;
            this.element = element;
            this._persianChar = true;
            this._isPersian = true;
            this.myControl = new forms.FormControl();
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
            this.dateChanged = new i0.EventEmitter();
            /**
             * وقتی رنج تاریخی انتخاب شده عوض می شود این اونت فراخوانی می شود
             */
            this.rangeDateChanged = new i0.EventEmitter();
            /**
             * وقتی کلیدی روی تکس باکس انتخاب تاریخ فشرده می شود این اونت فراخوانی می شود
             */
            this.textBoxKeyDown = new i0.EventEmitter();
            /**
             * وقتی روی تکس باکس انتخاب تاریخ بلور می شود این اونت فراخوانی می شود
             */
            this.textBoxBlur = new i0.EventEmitter();
            /**
             * وقتی روی تکس باکس انتخاب تاریخ فوکوس می شود این اونت فراخوانی می شود
             */
            this.textBoxFocus = new i0.EventEmitter();
            /**
             * وقتی روی تکس باکس انتخاب تاریخ تغییری ایجاد می شود این اونت فراخوانی می شود
             */
            this.textBoxChange = new i0.EventEmitter();
            //#region ControlValueAccessor
            this.propagateChange = ( /**
             * @return {?}
             */function () { });
            this.valIIcoTecAngularDateTimePickerDateFn = ( /**
             * @return {?}
             */function () { });
            /** @type {?} */
            var doc = document.getElementsByTagName('html')[0];
            doc.addEventListener('click', ( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                /** @type {?} */
                var targetElement = ( /** @type {?} */(event.target));
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
             */ function () {
                return this._selectedDateTime;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._selectedDateTimeRanges;
            },
            set: /**
             * @param {?} values
             * @return {?}
             */ function (values) {
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
             */ function () {
                return this._persianChar;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._isPersian;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                var targetElement = ( /** @type {?} */(event.target));
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
            { type: i0.Component, args: [{
                        selector: 'ico-tec-angular-persian-datetimepicker',
                        template: "<div *ngIf=\"inLine\" class=\"datepicker-box\">\n  <ico-tec-datetime-picker-core *ngIf=\"inLine\" [rangeSelector]=\"rangeSelector\" [persianChar]=\"persianChar\"\n    [minDate]=\"minDate\" [maxDate]=\"maxDate\"   \n    [isPersian]=\"isPersian\" [timePicker]=\"timePicker\" [format]=\"format\" [templateType]=\"templateType\" #icoTecDateTimePickerCore\n    (dateChanged)=\"dateChangedHandler($event)\" (rangeDateChanged)=\"rangeDateChangedHandler($event)\">\n  </ico-tec-datetime-picker-core>\n</div>\n\n<div *ngIf=\"!inLine && templateType == 2\" class=\"datepicker-container\">\n  <mat-form-field>\n    <input matInput type=\"text\" [placeholder]=\"placeHolder\" [formControl]=\"myControl\" readonly (focus)=\"dateTimeTextBoxOnFocusHandler($event)\"\n      (blur)=\"dateTimeTextBoxOnBlurHandler($event)\" (keyup)=\"dateTimeTextBoxOnKeyupHandler($event)\" data-ico-tec-persian-datetimepicker>\n    <span matPrefix>\n      <span *ngIf=\"textBoxType == 1\" mat-button class=\"calendar-icon cursor-pointer\">\n        <span [innerHTML]=\"buttonIcon\"></span>\n      </span>\n    </span>\n  </mat-form-field>\n  <div class=\"datepicker\" [hidden]=\"!showDatePicker\">\n    <ico-tec-datetime-picker-core #icoTecDateTimePickerCore [rangeSelector]=\"rangeSelector\" [persianChar]=\"persianChar\"\n    [minDate]=\"minDate\" [maxDate]=\"maxDate\"   \n      [isPersian]=\"isPersian\" [timePicker]=\"timePicker\" [format]=\"format\" [templateType]=\"2\" (dateChanged)=\"dateChangedHandler($event)\"\n      (rangeDateChanged)=\"rangeDateChangedHandler($event)\">\n    </ico-tec-datetime-picker-core>\n  </div>\n</div>\n\n<div *ngIf=\"!inLine && templateType == 1\" class=\"datepicker-container\">\n  <div class=\"input-group\" *ngIf=\"textBoxType == 1\">\n    <!-- <div class=\"input-group-prepend cursor-pointer calendar-icon\" (click)=\"showDatePickerButtonClicked()\">\n      <span class=\"input-group-text\" [innerHTML]=\"buttonIcon\"></span>\n    </div> -->\n    <input type=\"text\" class=\"form-control\" [placeholder]=\"placeHolder\" [formControl]=\"myControl\" readonly style=\"background-color: white;\" (focus)=\"dateTimeTextBoxOnFocusHandler($event)\"\n      (blur)=\"dateTimeTextBoxOnBlurHandler($event)\" (keyup)=\"dateTimeTextBoxOnKeyupHandler($event)\" data-ico-tec-persian-datetimepicker>\n  </div>\n  <input type=\"text\" *ngIf=\"textBoxType == 2\" [placeholder]=\"placeHolder\" class=\"form-control\" [formControl]=\"myControl\" (focus)=\"dateTimeTextBoxOnFocusHandler($event)\"\n    (blur)=\"dateTimeTextBoxOnBlurHandler($event)\" (keyup)=\"dateTimeTextBoxOnKeyupHandler($event)\" data-ico-tec-persian-datetimepicker>\n  <div class=\"datepicker datepicker-bootstrap\" [hidden]=\"!showDatePicker\">\n    <ico-tec-datetime-picker-core #icoTecDateTimePickerCore [rangeSelector]=\"rangeSelector\" [persianChar]=\"persianChar\"\n    [minDate]=\"minDate\" [maxDate]=\"maxDate\"   \n      [isPersian]=\"isPersian\" [timePicker]=\"timePicker\" [format]=\"format\" [templateType]=\"1\" (dateChanged)=\"dateChangedHandler($event)\"\n      (rangeDateChanged)=\"rangeDateChangedHandler($event)\">\n    </ico-tec-datetime-picker-core>\n  </div>\n</div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(( /**
                                 * @return {?}
                                 */function () { return IcoTecAngularPersianDateTimePickerComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".datepicker-container{position:relative;direction:ltr}.datepicker{background:#fff;position:absolute;z-index:999999;top:53px;left:0;min-width:300px;border:1px solid #f7f7f7;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.datepicker-bootstrap{top:34px}.hidden{display:none}.cursor-pointer{cursor:pointer}.datepicker-box{border:1px solid #ccc;position:relative}.mat-form-field{width:100%}.calendar-icon{font-size:18px}.calendar-icon[mat-button]{margin-right:6px;float:left}"]
                    }] }
        ];
        /** @nocollapse */
        IcoTecAngularPersianDateTimePickerComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        IcoTecAngularPersianDateTimePickerComponent.propDecorators = {
            icoTecDateTimePickerCore: [{ type: i0.ViewChild, args: ['icoTecDateTimePickerCore',] }],
            templateType: [{ type: i0.Input }],
            textBoxType: [{ type: i0.Input }],
            inLine: [{ type: i0.Input }],
            minDate: [{ type: i0.Input }],
            maxDate: [{ type: i0.Input }],
            persianChar: [{ type: i0.Input }],
            rangeSelector: [{ type: i0.Input }],
            isPersian: [{ type: i0.Input }],
            timePicker: [{ type: i0.Input }],
            placeHolder: [{ type: i0.Input }],
            buttonIcon: [{ type: i0.Input }],
            format: [{ type: i0.Input }],
            dateChanged: [{ type: i0.Output }],
            rangeDateChanged: [{ type: i0.Output }],
            textBoxKeyDown: [{ type: i0.Output }],
            textBoxBlur: [{ type: i0.Output }],
            textBoxFocus: [{ type: i0.Output }],
            textBoxChange: [{ type: i0.Output }]
        };
        return IcoTecAngularPersianDateTimePickerComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IcoTecDatetimePickerResourcesService = /** @class */ (function () {
        function IcoTecDatetimePickerResourcesService() {
            this.persianResources = {
                'Year': 'سال',
                'Month': 'ماه',
                'Day': 'روز',
                'PreviousYear': 'سال قبل',
                'PreviousMonth': 'ماه قبل',
                'NextYear': 'سال بعد',
                'NextMonth': 'ماه بعد',
                'SelectMonth': 'انتخاب ماه',
                'Today': 'امروز',
                'Confirm': 'تایید',
                'Reject': 'رد',
                'Start': 'شروع',
                'End': 'پایان'
            };
            this.englishResources = {
                'Year': 'Year',
                'Month': 'Month',
                'Day': 'Day',
                'PreviousYear': 'Previous Year',
                'PreviousMonth': 'Previous Month',
                'NextYear': 'Next Year',
                'NextMonth': 'Next Month',
                'SelectMonth': 'Select Month',
                'Today': 'Today',
                'Confirm': 'Confirm',
                'Reject': 'Reject',
                'Start': 'Start',
                'End': 'End'
            };
        }
        IcoTecDatetimePickerResourcesService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ IcoTecDatetimePickerResourcesService.ngInjectableDef = i0.defineInjectable({ factory: function IcoTecDatetimePickerResourcesService_Factory() { return new IcoTecDatetimePickerResourcesService(); }, token: IcoTecDatetimePickerResourcesService, providedIn: "root" });
        return IcoTecDatetimePickerResourcesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PersianDateTime$1 = mds_persian_datetime.Mds.PersianDateTime;
    var PersianDayOfWeek = mds_persian_datetime.Mds.PersianDayOfWeek;
    var GregorianDayOfWeek = mds_persian_datetime.Mds.GregorianDayOfWeek;
    var IcoTecAngularPersianDateTimePickerCoreComponent = /** @class */ (function () {
        function IcoTecAngularPersianDateTimePickerCoreComponent(resourcesService) {
            this.resourcesService = resourcesService;
            this.initialized = false;
            this._persianChar = true;
            this._isPersian = true;
            this._rangeSelector = true;
            this._timePicker = true;
            // @Input() initialValue = '';
            this.templateType = TemplateTypeEnum.bootstrap;
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
            this.dateChanged = new i0.EventEmitter();
            this.rangeDateChanged = new i0.EventEmitter();
            this.daysAnimationStateName = 'visible';
            this.monthOrYearSelectorVisibilityStateName = 'hidden';
            this.monthSelectorVisibilityStateName = 'hidden';
            this.yearSelectorVisibilityStateName = 'hidden';
            // تاریخی که برای نمایش تقویم استفاده می شود
            this._dateTime = null;
            this._persianDateTime = null;
            // روز انتخاب شده
            this._selectedDateTime = null;
            this._selectedPersianDateTime = null;
            // روز شروع انتخاب شده در رنج سلکتور
            this._selectedStartDateTime = null;
            this._selectedPersianStartDateTime = null;
            // روز پایانی انتخاب شده در رنج سلکتور
            this._selectedEndDateTime = null;
            // کمترین تاریخ مجاز برای انتخاب
            this._minDate = null;
            // بیشترین تاریخ مجاز برای انتخاب
            this._maxDate = null;
            this._selectedPersianEndDateTime = null;
            this._resources = null;
            this._year = 0;
            this._yearString = '';
            this._month = 0;
            this._monthName = '';
            this._monthNames = [];
            this._hour = 0;
            this._hourString = '';
            this._minute = 0;
            this._minuteString = '';
            this._second = 0;
            this._secondString = '';
            this._weekdayNames = [];
            this._IIcoTecAngularDateTimePickerDate = null;
            this._selectedRangeDatesObject = null;
        }
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "rangeSelector", {
            get: /**
             * @return {?}
             */ function () {
                return this._rangeSelector;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this._rangeSelector == value) {
                    return;
                }
                this._rangeSelector = value;
                this.selectedDateTime = null;
                this.selectedStartDateTime = null;
                this.selectedEndDateTime = null;
                this.timePicker = !value;
                if (!this.initialized) {
                    return;
                }
                this.updateMonthDays();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "timePicker", {
            get: /**
             * @return {?}
             */ function () {
                return this._timePicker;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this._timePicker == value) {
                    return;
                }
                this._timePicker = value;
                if (!this.initialized) {
                    return;
                }
                this.updateMonthDays();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "persianChar", {
            get: /**
             * @return {?}
             */ function () {
                return this._persianChar;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this._persianChar == value) {
                    return;
                }
                this._persianChar = value;
                this._yearString = '';
                this.resetMonthDaysWithContent();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "isPersian", {
            get: /**
             * @return {?}
             */ function () {
                return this._isPersian;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this._isPersian == value) {
                    return;
                }
                this._isPersian = value;
                this._monthName = '';
                this._monthNames = [];
                this._weekdayNames = [];
                this._resources = null;
                this._year = this._month = 0;
                this._yearString = this._monthName = '';
                if (this.dateTime != null) {
                    this.updateYearsList();
                    this.updateMonthDays();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "persianStartDayOfMonth", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                return this.persianDateTime.startDayOfMonthDayOfWeek;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "gregorianStartDayOfMonth", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                return ( /** @type {?} */(new Date(this.dateTime.getFullYear(), this.dateTime.getMonth(), 1).getDay()));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "getSelectedDate", {
            get: /**
             * @return {?}
             */ function () {
                return this.getSelectedDateObject;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "getSelectedRangeDates", {
            get: /**
             * @return {?}
             */ function () {
                return this.getSelectedRangeDatesObject;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "dateTime", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                return this._dateTime;
            },
            set: /**
             * @private
             * @param {?} dateTime
             * @return {?}
             */ function (dateTime) {
                this._dateTime = dateTime == null ? new Date() : new Date(dateTime);
                this._persianDateTime = null;
                this._year = this._month = 0;
                this._hour = this._minute = this._second = 0;
                this._hourString = this._minuteString = this._secondString = '';
                this._yearString = this._monthName = '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "persianDateTime", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                if (this.dateTime == null) {
                    return null;
                }
                if (this._persianDateTime != null) {
                    return this._persianDateTime;
                }
                this._persianDateTime = new PersianDateTime$1(this.dateTime);
                return this._persianDateTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "selectedDateTime", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                return this._selectedDateTime;
            },
            set: /**
             * @private
             * @param {?} dateTime
             * @return {?}
             */ function (dateTime) {
                this._selectedDateTime = dateTime == null ? null : new Date(dateTime);
                this._IIcoTecAngularDateTimePickerDate = null;
                this._selectedPersianDateTime = null;
                if (this.rangeSelector || !this.timePicker) {
                    this.clearTime(dateTime);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "selectedPersianDateTime", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                if (this._selectedPersianDateTime != null) {
                    return this._selectedPersianDateTime;
                }
                this._selectedPersianDateTime = new PersianDateTime$1(this.selectedDateTime);
                return this._selectedPersianDateTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "selectedStartDateTime", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                return this._selectedStartDateTime;
            },
            set: /**
             * @private
             * @param {?} dateTime
             * @return {?}
             */ function (dateTime) {
                this._selectedStartDateTime = dateTime == null ? null : new Date(dateTime);
                this._selectedRangeDatesObject = null;
                this._selectedPersianStartDateTime = null;
                this.clearTime(dateTime);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "selectedPersianStartDateTime", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                if (this._selectedPersianStartDateTime != null) {
                    return this._selectedPersianStartDateTime;
                }
                this._selectedPersianStartDateTime = new PersianDateTime$1(this.selectedStartDateTime);
                return this._selectedPersianStartDateTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "selectedEndDateTime", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                return this._selectedEndDateTime;
            },
            set: /**
             * @private
             * @param {?} dateTime
             * @return {?}
             */ function (dateTime) {
                this._selectedEndDateTime = dateTime == null ? null : new Date(dateTime);
                this._selectedRangeDatesObject = null;
                this._selectedPersianEndDateTime = null;
                this.clearTime(dateTime);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "minDate", {
            // @Input('minDate') minDate: Date;
            // @Input('maxDate') maxDate: Date;
            get: 
            // @Input('minDate') minDate: Date;
            // @Input('maxDate') maxDate: Date;
            /**
             * @return {?}
             */
            function () {
                return this._minDate;
            },
            set: /**
             * @param {?} dateTime
             * @return {?}
             */ function (dateTime) {
                this._minDate = dateTime == null ? null : new Date(dateTime);
                if (!this.initialized) {
                    return;
                }
                this.updateMonthDays();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "maxDate", {
            get: /**
             * @return {?}
             */ function () {
                return this._maxDate;
            },
            set: /**
             * @param {?} dateTime
             * @return {?}
             */ function (dateTime) {
                this._maxDate = dateTime == null ? null : new Date(dateTime);
                if (!this.initialized) {
                    return;
                }
                this.updateMonthDays();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "selectedPersianEndDateTime", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                if (this._selectedPersianEndDateTime != null) {
                    return this._selectedPersianEndDateTime;
                }
                this._selectedPersianEndDateTime = new PersianDateTime$1(this.selectedEndDateTime);
                return this._selectedPersianEndDateTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "resources", {
            get: /**
             * @return {?}
             */ function () {
                if (this._resources != null) {
                    return this._resources;
                }
                if (this.isPersian) {
                    this._resources = this.resourcesService.persianResources;
                }
                else {
                    this._resources = this.resourcesService.englishResources;
                }
                return this._resources;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "year", {
            get: /**
             * @return {?}
             */ function () {
                if (this._year > 0) {
                    return this._year;
                }
                this._year = this.isPersian
                    ? this.persianDateTime.year
                    : this.dateTime.getFullYear();
                return this._year;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "yearString", {
            get: /**
             * @return {?}
             */ function () {
                if (this._yearString != '') {
                    return this._yearString;
                }
                this._yearString = this.persianChar
                    ? IcoTecDatetimePickerUtility.toPersianNumber(this.year.toString())
                    : this.year.toString();
                return this._yearString;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "month", {
            get: /**
             * @return {?}
             */ function () {
                if (this._month > 0) {
                    return this._month;
                }
                this._month = this.isPersian
                    ? PersianDateTime$1.getPersianMonthIndex(this.persianDateTime.monthName)
                    : this.dateTime.getMonth();
                return this._month;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "monthName", {
            get: /**
             * @return {?}
             */ function () {
                if (this._monthName != '') {
                    return this._monthName;
                }
                this._monthName = this.isPersian
                    ? this.persianDateTime.monthName
                    : PersianDateTime$1.getGregorianMonthNames[this.month];
                return this._monthName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "monthNames", {
            get: /**
             * @return {?}
             */ function () {
                if (this._monthNames != null && this._monthNames.length > 0) {
                    return this._monthNames;
                }
                if (this.isPersian) {
                    /** @type {?} */
                    var allPersianMonths = PersianDateTime$1.getPersianMonthNames;
                    this._monthNames = [
                        allPersianMonths[2], allPersianMonths[1], allPersianMonths[0],
                        allPersianMonths[5], allPersianMonths[4], allPersianMonths[3],
                        allPersianMonths[8], allPersianMonths[7], allPersianMonths[6],
                        allPersianMonths[11], allPersianMonths[10], allPersianMonths[9]
                    ];
                }
                else {
                    this._monthNames = PersianDateTime$1.getGregorianMonthNames;
                }
                return this._monthNames;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "hour", {
            get: /**
             * @return {?}
             */ function () {
                if (this._hour > 0) {
                    return this._hour;
                }
                this._hour = this.dateTime.getHours();
                return this._hour;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "hourString", {
            get: /**
             * @return {?}
             */ function () {
                if (this._hourString != '') {
                    return this._hourString;
                }
                this._hourString = this.hour.toString();
                if (this.persianChar) {
                    this._hourString = IcoTecDatetimePickerUtility.toPersianNumber(this._hourString);
                }
                return this._hourString;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "minute", {
            get: /**
             * @return {?}
             */ function () {
                if (this._minute > 0) {
                    return this._minute;
                }
                this._minute = this.dateTime.getMinutes();
                return this._minute;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "minuteString", {
            get: /**
             * @return {?}
             */ function () {
                if (this._minuteString != '') {
                    return this._minuteString;
                }
                this._minuteString = this.minute.toString();
                if (this.persianChar) {
                    this._minuteString = IcoTecDatetimePickerUtility.toPersianNumber(this._minuteString);
                }
                return this._minuteString;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "second", {
            get: /**
             * @return {?}
             */ function () {
                if (this._second > 0) {
                    return this._second;
                }
                this._second = this.dateTime.getSeconds();
                return this._second;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "secondString", {
            get: /**
             * @return {?}
             */ function () {
                if (this._secondString != '') {
                    return this._secondString;
                }
                this._secondString = this.second.toString();
                if (this.persianChar) {
                    this._secondString = IcoTecDatetimePickerUtility.toPersianNumber(this._secondString);
                }
                return this._secondString;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "weekdayNames", {
            get: /**
             * @return {?}
             */ function () {
                if (this._weekdayNames != null && this._weekdayNames.length > 0) {
                    return this._weekdayNames;
                }
                if (this.isPersian) {
                    // حروف اول نام های روز هفته شمسی
                    /** @type {?} */
                    var persianWeekDayNames = PersianDateTime$1.getPersianWeekdayNames;
                    this._weekdayNames = [
                        persianWeekDayNames[6][0], persianWeekDayNames[5][0], persianWeekDayNames[4][0],
                        persianWeekDayNames[3][0], persianWeekDayNames[2][0], persianWeekDayNames[1][0],
                        persianWeekDayNames[0][0]
                    ];
                }
                else {
                    /** @type {?} */
                    var gregorianWeekDayNames = PersianDateTime$1.getGregorianWeekdayNames;
                    this._weekdayNames = [
                        gregorianWeekDayNames[1][0] + gregorianWeekDayNames[1][1],
                        gregorianWeekDayNames[2][0] + gregorianWeekDayNames[2][1],
                        gregorianWeekDayNames[3][0] + gregorianWeekDayNames[3][1],
                        gregorianWeekDayNames[4][0] + gregorianWeekDayNames[4][1],
                        gregorianWeekDayNames[5][0] + gregorianWeekDayNames[5][1],
                        gregorianWeekDayNames[6][0] + gregorianWeekDayNames[6][1],
                        gregorianWeekDayNames[0][0] + gregorianWeekDayNames[0][1]
                    ];
                }
                return this._weekdayNames;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "getSelectedDateObject", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                if (this.selectedDateTime == null) {
                    return null;
                }
                if (this._IIcoTecAngularDateTimePickerDate != null) {
                    return this._IIcoTecAngularDateTimePickerDate;
                }
                /** @type {?} */
                var format = this.getDateTimeFormat();
                if (this.isPersian) {
                    this._IIcoTecAngularDateTimePickerDate = {
                        year: this.selectedPersianDateTime.year,
                        month: this.selectedPersianDateTime.month,
                        day: this.selectedPersianDateTime.day,
                        hour: this.selectedPersianDateTime.hour,
                        minute: this.selectedPersianDateTime.minute,
                        second: this.selectedPersianDateTime.second,
                        millisecond: this.selectedPersianDateTime.millisecond,
                        formatString: this.selectedPersianDateTime.toString(format),
                        utcDateTime: this.selectedDateTime
                    };
                }
                else {
                    this._IIcoTecAngularDateTimePickerDate = {
                        year: this.selectedDateTime.getFullYear(),
                        month: this.selectedDateTime.getMonth(),
                        day: this.selectedDateTime.getDate(),
                        hour: this.selectedDateTime.getHours(),
                        minute: this.selectedDateTime.getMinutes(),
                        second: this.selectedDateTime.getSeconds(),
                        millisecond: this.selectedDateTime.getMilliseconds(),
                        formatString: IcoTecDatetimePickerUtility.dateTimeToString(this.selectedDateTime, format),
                        utcDateTime: this.selectedDateTime
                    };
                }
                if (this.persianChar) {
                    this._IIcoTecAngularDateTimePickerDate.formatString = IcoTecDatetimePickerUtility.toPersianNumber(this._IIcoTecAngularDateTimePickerDate.formatString);
                }
                else {
                    this._IIcoTecAngularDateTimePickerDate.formatString = IcoTecDatetimePickerUtility.toEnglishString(this._IIcoTecAngularDateTimePickerDate.formatString);
                }
                return this._IIcoTecAngularDateTimePickerDate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "getSelectedDay", {
            get: /**
             * @return {?}
             */ function () {
                if (this.getSelectedDateObject == null || this.rangeSelector) {
                    return 0;
                }
                return this.getSelectedDateObject.day;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "getSelectedRangeDatesObject", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                if (!this.rangeSelector || this.selectedStartDateTime == null && this.selectedEndDateTime == null) {
                    return null;
                }
                if (this._selectedRangeDatesObject != null) {
                    return this._selectedRangeDatesObject;
                }
                /** @type {?} */
                var format = this.getDateTimeFormat();
                /** @type {?} */
                var startDate;
                /** @type {?} */
                var endDate;
                if (this.isPersian) {
                    startDate = {
                        year: this.selectedStartDateTime == null ? 0 : this.selectedPersianStartDateTime.year,
                        month: this.selectedStartDateTime == null ? 0 : this.selectedPersianStartDateTime.month,
                        day: this.selectedStartDateTime == null ? 0 : this.selectedPersianStartDateTime.day,
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisecond: 0,
                        formatString: this.selectedStartDateTime == null ? '' : this.selectedPersianStartDateTime.toString(format),
                        utcDateTime: this.selectedStartDateTime
                    };
                    endDate = {
                        year: this.selectedPersianEndDateTime == null ? 0 : this.selectedPersianEndDateTime.year,
                        month: this.selectedPersianEndDateTime == null ? 0 : this.selectedPersianEndDateTime.month,
                        day: this.selectedPersianEndDateTime == null ? 0 : this.selectedPersianEndDateTime.day,
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisecond: 0,
                        formatString: this.selectedPersianEndDateTime == null ? '' : this.selectedPersianEndDateTime.toString(format),
                        utcDateTime: this.selectedEndDateTime
                    };
                }
                else {
                    startDate = {
                        year: this.selectedStartDateTime == null ? 0 : this.selectedStartDateTime.getFullYear(),
                        month: this.selectedStartDateTime == null ? 0 : this.selectedStartDateTime.getMonth(),
                        day: this.selectedStartDateTime == null ? 0 : this.selectedStartDateTime.getDate(),
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisecond: 0,
                        formatString: this.selectedStartDateTime == null ? '' : IcoTecDatetimePickerUtility.dateTimeToString(this.selectedStartDateTime, format),
                        utcDateTime: this.selectedStartDateTime == null ? null : this.selectedStartDateTime
                    };
                    endDate = {
                        year: this.selectedEndDateTime == null ? 0 : this.selectedEndDateTime.getFullYear(),
                        month: this.selectedEndDateTime == null ? 0 : this.selectedEndDateTime.getMonth(),
                        day: this.selectedEndDateTime == null ? 0 : this.selectedEndDateTime.getDate(),
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisecond: 0,
                        formatString: this.selectedEndDateTime == null ? '' : IcoTecDatetimePickerUtility.dateTimeToString(this.selectedEndDateTime, format),
                        utcDateTime: this.selectedEndDateTime == null ? null : this.selectedEndDateTime
                    };
                }
                this._selectedRangeDatesObject = {
                    startDate: startDate,
                    endDate: endDate
                };
                return this._selectedRangeDatesObject;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "isRejectButtonDisable", {
            get: /**
             * @return {?}
             */ function () {
                return this.selectedStartDateTime == null && this.selectedEndDateTime == null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "isConfirmButtonDisable", {
            get: /**
             * @return {?}
             */ function () {
                return this.selectedStartDateTime == null || this.selectedEndDateTime == null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "isRangeSelectorReady", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                if (!this.rangeSelector) {
                    return false;
                }
                if (this.selectedStartDateTime == null) {
                    return false;
                } // هنوز روز شروع انتخاب نشده است
                if (this.selectedStartDateTime != null && this.selectedEndDateTime != null) {
                    return false;
                } // رنج تاریخ انتخاب شده بود
                return true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.rangeSelector) {
                    this.timePicker = false;
                }
                if (!this.isPersian) {
                    this.persianChar = false;
                }
                // if (this.initialValue != '') {
                //   if (this.rangeSelector) {
                //     try {
                //       if (this.isPersian) {
                //         const ranges = MdsDatetimePickerUtility.getPersianDateRanges(this.initialValue);
                //         this.setSelectedRangePersianDateTimes(ranges);
                //       } else {
                //         const ranges = MdsDatetimePickerUtility.getDateRanges(this.initialValue);
                //         this.setSelectedRangeDateTimes(ranges);
                //       }
                //       this.dateTime = this.selectedStartDateTime;
                //     } catch (e) {
                //       console.error('value is in wrong format, when rangeSelector is true you should write value like "1396/03/01 - 1396/03/15" or "2017/3/9 - 2017/3/10"', e);
                //       this.setSelectedRangeDateTimes(null);
                //       this.dateTime = null;
                //     }
                //   } else {
                //     try {
                //       if (this.isPersian) {
                //         this.dateTime = PersianDateTime.parse(this.initialValue).toDate();
                //       } else {
                //         this.dateTime = new Date(Date.parse(this.initialValue));
                //       }
                //     } catch (e) {
                //       console.error('value is in wrong format, you should write value like "1396/03/01  11:30:27" or "2017/09/03  11:30:00", you can remove time', e);
                //       this.dateTime = null;
                //     }
                //   }
                // } else {
                //   this.dateTime = null;
                // }
                // this.updateYearsList();
                // this.updateMonthDays();
                // if (this.initialValue != '') {
                //   if (this.rangeSelector) {
                //     this.fireRangeChangeEvent();
                //   } else {
                //     this.fireChangeEvent();
                //   }
                // }
                this.dateTime = null;
                this.updateYearsList();
                this.updateMonthDays();
                this.initialized = true;
            };
        /**
         * @private
         * @param {?} dateString
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.splitStartEndDateString = /**
         * @private
         * @param {?} dateString
         * @return {?}
         */
            function (dateString) {
                return dateString.split(' - ');
            };
        /**
         * @private
         * @param {?} dateTimes
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.setSelectedRangeDateTimes = /**
         * @private
         * @param {?} dateTimes
         * @return {?}
         */
            function (dateTimes) {
                dateTimes = dateTimes == null || dateTimes.length < 2 ? [null, null] : dateTimes;
                this.selectedStartDateTime = dateTimes[0];
                this.selectedEndDateTime = dateTimes[1];
            };
        /**
         * @private
         * @param {?} persianDateTimes
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.setSelectedRangePersianDateTimes = /**
         * @private
         * @param {?} persianDateTimes
         * @return {?}
         */
            function (persianDateTimes) {
                /** @type {?} */
                var ranges = [
                    persianDateTimes[0] == null ? null : persianDateTimes[0].toDate(),
                    persianDateTimes[1] == null ? null : persianDateTimes[1].toDate()
                ];
                this.setSelectedRangeDateTimes(ranges);
            };
        /**
         * @private
         * @param {?} dateTime
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.clearTime = /**
         * @private
         * @param {?} dateTime
         * @return {?}
         */
            function (dateTime) {
                if (dateTime == null) {
                    return;
                }
                dateTime.setHours(0, 0, 0, 0);
            };
        /**
         * @private
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.getDateTimeFormat = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var format = this.format;
                if (format.trim() == '') {
                    format = 'yyyy/MM/dd';
                    if (this.timePicker && !this.rangeSelector) {
                        format += '   hh:mm:ss';
                    }
                }
                else if (this.rangeSelector || !this.timePicker) {
                    format = format.replace(/t*|f*|s*|m*|h*|H*/, '');
                }
                return format;
            };
        /**
         * @param {?} dateTime
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.setDateTimeByDate = /**
         * @param {?} dateTime
         * @return {?}
         */
            function (dateTime) {
                this.dateTime = this.selectedDateTime = dateTime;
                this.selectedStartDateTime = !dateTime ? null : new Date(dateTime);
            };
        /**
         * @param {?} startDateTime
         * @param {?} endDateTime
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.setDateTimeRangesByDate = /**
         * @param {?} startDateTime
         * @param {?} endDateTime
         * @return {?}
         */
            function (startDateTime, endDateTime) {
                this.dateTime = this.selectedDateTime = startDateTime;
                this.selectedStartDateTime = startDateTime == null ? null : new Date(startDateTime);
                this.selectedEndDateTime = endDateTime == null ? null : new Date(endDateTime);
            };
        // setMinDate(minDate: Date): void {  
        //   this.minDate  = minDate == null ? null : new Date(minDate);
        // }
        // setMaxDate(maxDate: Date): void { 
        //   this.maxDate  = maxDate == null ? null : new Date(maxDate); 
        // }
        // setMinDate(minDate: Date): void {  
        //   this.minDate  = minDate == null ? null : new Date(minDate);
        // }
        // setMaxDate(maxDate: Date): void { 
        //   this.maxDate  = maxDate == null ? null : new Date(maxDate); 
        // }
        /**
         * @param {?} dateTimeString
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.setDateTimeByString =
            // setMinDate(minDate: Date): void {  
            //   this.minDate  = minDate == null ? null : new Date(minDate);
            // }
            // setMaxDate(maxDate: Date): void { 
            //   this.maxDate  = maxDate == null ? null : new Date(maxDate); 
            // }
            /**
             * @param {?} dateTimeString
             * @return {?}
             */
            function (dateTimeString) {
                try {
                    if (dateTimeString == '') {
                        this.clearDateTimePicker();
                        return;
                    }
                    if (this.isPersian) {
                        if (this.rangeSelector) {
                            /** @type {?} */
                            var startAndEndDateArray = this.splitStartEndDateString(dateTimeString);
                            this.dateTime = this.selectedStartDateTime = PersianDateTime$1.parse(startAndEndDateArray[0]).toDate();
                            this.selectedEndDateTime = PersianDateTime$1.parse(startAndEndDateArray[1]).toDate();
                            if (this.selectedStartDateTime > this.selectedEndDateTime) {
                                throw new Error('Start date must be less than end date');
                            }
                        }
                        else {
                            this.dateTime = this.selectedDateTime = PersianDateTime$1.parse(dateTimeString).toDate();
                        }
                    }
                    else {
                        if (this.rangeSelector) {
                            /** @type {?} */
                            var startAndEndDateArray = this.splitStartEndDateString(dateTimeString);
                            this.dateTime = this.selectedStartDateTime = new Date(Date.parse(startAndEndDateArray[0]));
                            this.selectedEndDateTime = new Date(Date.parse(startAndEndDateArray[1]));
                            if (this.selectedStartDateTime > this.selectedEndDateTime) {
                                throw new Error('Start date must be less than end date');
                            }
                        }
                        else {
                            this.dateTime = this.selectedDateTime = new Date(Date.parse(dateTimeString));
                        }
                    }
                    if (this.rangeSelector) {
                        this.fireRangeChangeEvent();
                    }
                    else {
                        this.fireChangeEvent();
                    }
                    this.updateMonthDays();
                }
                catch (e) {
                    this.clearDateTimePicker();
                    throw new Error(e);
                }
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.clearDateTimePicker = /**
         * @return {?}
         */
            function () {
                this.dateTime = null;
                this.selectedDateTime = this.selectedStartDateTime = this.selectedEndDateTime = null;
                this.resetToFalseRangeParametersInMonthDays();
                if (this.rangeSelector) {
                    this.fireRangeChangeEvent();
                }
                else {
                    this.fireChangeEvent();
                }
                this.updateMonthDays();
            };
        /**
         * @private
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.updateYearsList = /**
         * @private
         * @return {?}
         */
            function () {
                this.yearsToSelect = [];
                /** @type {?} */
                var selectedYear = this.year;
                for (var i = selectedYear - 37; i <= selectedYear + 37; i++) {
                    if (this.persianChar) {
                        this.yearsToSelect.push(IcoTecDatetimePickerUtility.toPersianNumber(i.toString()));
                    }
                    else {
                        this.yearsToSelect.push(i.toString());
                    }
                }
            };
        /**
         * @private
         * @param {?} year
         * @param {?} month
         * @param {?} day
         * @param {?} disabled
         * @param {?} holiDay
         * @param {?} isToday
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.getDayObject = /**
         * @private
         * @param {?} year
         * @param {?} month
         * @param {?} day
         * @param {?} disabled
         * @param {?} holiDay
         * @param {?} isToday
         * @return {?}
         */
            function (year, month, day, disabled, holiDay, isToday) {
                /** @type {?} */
                var isWithinDateRange = false;
                /** @type {?} */
                var isStartOrEndOfRange = false;
                /** @type {?} */
                var dateTime = this.isPersian
                    ? PersianDateTime$1.fromPersianDate(year, month, day).toDate()
                    : new Date(year, month, day);
                if (this.rangeSelector && this.selectedStartDateTime != null) {
                    isWithinDateRange = dateTime >= this.selectedStartDateTime;
                    if (this.selectedEndDateTime != null) {
                        isWithinDateRange = isWithinDateRange && dateTime <= this.selectedEndDateTime;
                    }
                    isStartOrEndOfRange =
                        (this.selectedStartDateTime != null && dateTime.getTime() == this.selectedStartDateTime.getTime()) ||
                            (this.selectedEndDateTime != null && dateTime.getTime() == this.selectedEndDateTime.getTime());
                }
                /** @type {?} */
                var icoTecAngularDateTimePickerDay = ( /** @type {?} */({
                    year: year,
                    month: month,
                    day: day,
                    dayString: this.persianChar ? IcoTecDatetimePickerUtility.toPersianNumber(day.toString()) : day.toString(),
                    disable: disabled,
                    holiDay: holiDay,
                    today: isToday,
                    isWithinRange: isWithinDateRange,
                    isStartOrEndOfRange: isStartOrEndOfRange
                }));
                this.updateIsAllowSelected(icoTecAngularDateTimePickerDay);
                return icoTecAngularDateTimePickerDay;
            };
        /**
         * @private
         * @param {?} icoTecAngularDateTimePickerDay
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.updateIsAllowSelected = /**
         * @private
         * @param {?} icoTecAngularDateTimePickerDay
         * @return {?}
         */
            function (icoTecAngularDateTimePickerDay) {
                /** @type {?} */
                var isAllowSelected = true;
                /** @type {?} */
                var year = icoTecAngularDateTimePickerDay.year;
                /** @type {?} */
                var month = icoTecAngularDateTimePickerDay.month;
                /** @type {?} */
                var day = icoTecAngularDateTimePickerDay.day;
                /** @type {?} */
                var dateTime = this.isPersian
                    ? PersianDateTime$1.fromPersianDate(year, month, day).toDate()
                    : new Date(year, month, day);
                if (this._minDate != null && isAllowSelected) {
                    isAllowSelected = this._minDate <= dateTime;
                }
                if (this._maxDate != null && isAllowSelected) {
                    isAllowSelected = this._maxDate >= dateTime;
                }
                icoTecAngularDateTimePickerDay.isAllowSelected = isAllowSelected;
            };
        /**
         * @private
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.updateMonthDays = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var days = [];
                /** @type {?} */
                var counter = 0;
                /** @type {?} */
                var year = 0;
                /** @type {?} */
                var month = 0;
                if (this.isPersian) {
                    /** @type {?} */
                    var persianDateTimeNow = PersianDateTime$1.now;
                    /** @type {?} */
                    var today = persianDateTimeNow.day;
                    /** @type {?} */
                    var isYearAndMonthInCurrentMonth = persianDateTimeNow.year == this.persianDateTime.year && persianDateTimeNow.month == this.persianDateTime.month;
                    // روزهای ماه قبل
                    if (this.persianStartDayOfMonth != PersianDayOfWeek.Saturday) {
                        /** @type {?} */
                        var previousPersianMonth = this.persianDateTime.addMonths(-1);
                        year = previousPersianMonth.year;
                        month = previousPersianMonth.month;
                        for (var i = previousPersianMonth.getMonthDays - this.persianStartDayOfMonth + 1; i <= previousPersianMonth.getMonthDays; i++) {
                            counter++;
                            days.push(this.getDayObject(year, month, i, true, false, false));
                        }
                    }
                    // روزهای ماه جاری
                    year = this.persianDateTime.year;
                    month = this.persianDateTime.month;
                    for (var i = 1; i <= this.persianDateTime.getMonthDays; i++) {
                        counter++;
                        days.push(this.getDayObject(year, month, i, false, false, isYearAndMonthInCurrentMonth && i == today));
                    }
                    // روزهای ماه بعد
                    /** @type {?} */
                    var nextMonthPersianDateTime = this.persianDateTime.addMonths(1);
                    year = nextMonthPersianDateTime.year;
                    month = nextMonthPersianDateTime.month;
                    for (var i = 1; counter <= (6 * 7) - 1; i++) {
                        counter++;
                        days.push(this.getDayObject(year, month, i, true, false, false));
                    }
                    // درست کردن راست به چپ بودن تقویم
                    /** @type {?} */
                    var temp = days.slice(0);
                    for (var row = 0; row < 6; row++) {
                        for (var column = 0; column < 7; column++) {
                            /** @type {?} */
                            var index1 = row * 7 + column;
                            /** @type {?} */
                            var index2 = Math.abs((row + 1) * 7 - (column + 1));
                            days[index1] = temp[index2];
                            if (column == 0) {
                                days[index1].holiDay = true;
                            }
                        }
                    }
                }
                else {
                    /** @type {?} */
                    var dateTimeNow = new Date();
                    /** @type {?} */
                    var today = dateTimeNow.getDate();
                    /** @type {?} */
                    var isYearAndMonthInCurrentMonth = dateTimeNow.getMonth() == this.dateTime.getMonth() && dateTimeNow.getFullYear() == this.dateTime.getFullYear();
                    // روزهای ماه قبل
                    if (this.gregorianStartDayOfMonth != GregorianDayOfWeek.Saturday) {
                        /** @type {?} */
                        var dateTimeClone = new Date(this.dateTime);
                        dateTimeClone.setMonth(this.dateTime.getMonth());
                        year = dateTimeClone.getFullYear();
                        month = dateTimeClone.getMonth();
                        /** @type {?} */
                        var previousMonthDays = new Date(dateTimeClone.getFullYear(), dateTimeClone.getMonth(), 0).getDate();
                        for (var i = previousMonthDays - this.gregorianStartDayOfMonth + 1; i <= previousMonthDays; i++) {
                            counter++;
                            days.push(this.getDayObject(year, month - 1, i, true, false, false));
                        }
                    }
                    // روزهای ماه جاری
                    year = this.dateTime.getFullYear();
                    month = this.dateTime.getMonth();
                    /** @type {?} */
                    var currentMonthDays = new Date(year, month, 0).getDate();
                    for (var i = 1; i <= currentMonthDays; i++) {
                        counter++;
                        days.push(this.getDayObject(year, month, i, false, false, isYearAndMonthInCurrentMonth && i == today));
                    }
                    // روزهای ماه بعد
                    /** @type {?} */
                    var nextMonthDateTime = new Date(year, month + 1, 1);
                    year = nextMonthDateTime.getFullYear();
                    month = nextMonthDateTime.getMonth();
                    for (var i = 1; counter <= (6 * 7) - 1; i++) {
                        counter++;
                        days.push(this.getDayObject(year, month, i, true, false, false));
                    }
                    // تعطیل کردن روزهای جمعه
                    for (var row = 0; row < 6; row++) {
                        for (var column = 0; column < 7; column++) {
                            /** @type {?} */
                            var index1 = row * 7 + column;
                            if (column == 0) {
                                days[index1].holiDay = true;
                            }
                        }
                    }
                }
                this.daysInMonth = days;
            };
        /**
         * @private
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.fireChangeEvent = /**
         * @private
         * @return {?}
         */
            function () {
                this.dateChanged.emit(this.getSelectedDateObject);
            };
        /**
         * @private
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.fireRangeChangeEvent = /**
         * @private
         * @return {?}
         */
            function () {
                this.rangeDateChanged.emit(this.getSelectedRangeDatesObject);
            };
        /**
         * @private
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.resetToFalseRangeParametersInMonthDays = /**
         * @private
         * @return {?}
         */
            function () {
                var e_1, _a;
                try {
                    for (var _b = __values(this.daysInMonth), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var day = _c.value;
                        day.isWithinRange = false;
                        day.isStartOrEndOfRange = false;
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        /**
         * ریست کردن تمامی اطلاعات روزهای ماه
         */
        /**
         * ریست کردن تمامی اطلاعات روزهای ماه
         * @private
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.resetMonthDaysWithContent = /**
         * ریست کردن تمامی اطلاعات روزهای ماه
         * @private
         * @return {?}
         */
            function () {
                var e_2, _a;
                if (this.daysInMonth == undefined) {
                    return;
                }
                try {
                    for (var _b = __values(this.daysInMonth), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var day = _c.value;
                        day.isWithinRange = false;
                        day.isStartOrEndOfRange = false;
                        day.dayString = this.persianChar
                            ? IcoTecDatetimePickerUtility.toPersianNumber(day.day.toString())
                            : day.day.toString();
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
            };
        /**
         * مخفی کردن بلاک های انتخاب ماه و سال
         */
        /**
         * مخفی کردن بلاک های انتخاب ماه و سال
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.hideSelecMonthAndYearBlock = /**
         * مخفی کردن بلاک های انتخاب ماه و سال
         * @return {?}
         */
            function () {
                this.monthOrYearSelectorVisibilityStateName = 'hidden';
                this.monthSelectorVisibilityStateName = 'hidden';
                this.yearSelectorVisibilityStateName = 'hidden';
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.resetIncompleteRanges = /**
         * @return {?}
         */
            function () {
                if (this.selectedStartDateTime == null || this.selectedEndDateTime == null) {
                    this.selectedStartDateTime = this.selectedEndDateTime = null;
                    this._selectedPersianStartDateTime = this._selectedPersianEndDateTime = null;
                    this.resetToFalseRangeParametersInMonthDays();
                }
            };
        /**
         * کلیک روی دکمه نام ماه در بالای پیکر برای انتخاب ماه
         */
        /**
         * کلیک روی دکمه نام ماه در بالای پیکر برای انتخاب ماه
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.monthButtonOnClick = /**
         * کلیک روی دکمه نام ماه در بالای پیکر برای انتخاب ماه
         * @return {?}
         */
            function () {
                this.monthOrYearSelectorVisibilityStateName = 'visible';
                this.monthSelectorVisibilityStateName = 'visible';
            };
        /**
         * کلیک روی دکمه سال در بالای پیکر برای انتخاب سال
         */
        /**
         * کلیک روی دکمه سال در بالای پیکر برای انتخاب سال
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.selectYearButtonOnClick = /**
         * کلیک روی دکمه سال در بالای پیکر برای انتخاب سال
         * @return {?}
         */
            function () {
                this.monthOrYearSelectorVisibilityStateName = 'visible';
                this.yearSelectorVisibilityStateName = 'visible';
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.monthsBlockVisibilityAnimationDone = /**
         * @return {?}
         */
            function () {
                this.updateMonthDays();
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.yearsBlockVisibilityAnimationDone = /**
         * @return {?}
         */
            function () {
                this.updateYearsList();
                this.updateMonthDays();
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.nextYearButtonOnClick = /**
         * @return {?}
         */
            function () {
                if (this.isPersian) {
                    this.dateTime = this.persianDateTime.addYears(1).toDate();
                }
                else {
                    this.dateTime = new Date(this.dateTime.setFullYear(this.dateTime.getFullYear() + 1));
                }
                this.updateMonthDays();
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.nextMonthButtonOnClick = /**
         * @return {?}
         */
            function () {
                if (this.isPersian) {
                    this.dateTime = this.persianDateTime.addMonths(1).toDate();
                }
                else {
                    this.dateTime = new Date(this.dateTime.setMonth(this.dateTime.getMonth() + 1));
                }
                this.updateMonthDays();
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.previousMonthButtonOnClick = /**
         * @return {?}
         */
            function () {
                if (this.isPersian) {
                    this.dateTime = this.persianDateTime.addMonths(-1).toDate();
                }
                else {
                    this.dateTime = new Date(this.dateTime.setMonth(this.dateTime.getMonth() - 1));
                }
                this.updateMonthDays();
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.previousYearButtonOnClick = /**
         * @return {?}
         */
            function () {
                if (this.isPersian) {
                    this.dateTime = this.persianDateTime.addYears(-1).toDate();
                }
                else {
                    this.dateTime = new Date(this.dateTime.setFullYear(this.dateTime.getFullYear() - 1));
                }
                this.updateMonthDays();
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.hourUpButtonOnClick = /**
         * @return {?}
         */
            function () {
                this.dateTime = new Date(this.dateTime.setHours(this.dateTime.getHours() + 1));
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.hourDownButtonOnClick = /**
         * @return {?}
         */
            function () {
                this.dateTime = new Date(this.dateTime.setHours(this.dateTime.getHours() - 1));
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.minuteUpButtonOnClick = /**
         * @return {?}
         */
            function () {
                this.dateTime = new Date(this.dateTime.setMinutes(this.dateTime.getMinutes() + 1));
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.minuteDownButtonOnClick = /**
         * @return {?}
         */
            function () {
                this.dateTime = new Date(this.dateTime.setMinutes(this.dateTime.getMinutes() - 1));
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.secondUpButtonOnClick = /**
         * @return {?}
         */
            function () {
                this.dateTime = new Date(this.dateTime.setSeconds(this.dateTime.getSeconds() + 1));
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.secondDownButtonOnClick = /**
         * @return {?}
         */
            function () {
                this.dateTime = new Date(this.dateTime.setSeconds(this.dateTime.getSeconds() - 1));
            };
        /**
         * انتخاب ماه از روی لیست ماه ها
         */
        /**
         * انتخاب ماه از روی لیست ماه ها
         * @param {?} selectedMonthName
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.monthOnClick = /**
         * انتخاب ماه از روی لیست ماه ها
         * @param {?} selectedMonthName
         * @return {?}
         */
            function (selectedMonthName) {
                /** @type {?} */
                var monthIndex = this.isPersian
                    ? PersianDateTime$1.getPersianMonthIndex(selectedMonthName)
                    : PersianDateTime$1.getGregorianMonthNameIndex(selectedMonthName);
                if (this.isPersian) {
                    this.dateTime = this.persianDateTime.setPersianMonth(monthIndex + 1).toDate();
                }
                else {
                    /** @type {?} */
                    var dateTimeClone = new Date(this.dateTime);
                    dateTimeClone.setMonth(monthIndex);
                    this.dateTime = new Date(dateTimeClone);
                }
                this.hideSelecMonthAndYearBlock();
            };
        /**
         * انتخاب سال از روی لیست سال ها
         */
        /**
         * انتخاب سال از روی لیست سال ها
         * @param {?} selectedYear
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.yearOnClick = /**
         * انتخاب سال از روی لیست سال ها
         * @param {?} selectedYear
         * @return {?}
         */
            function (selectedYear) {
                /** @type {?} */
                var year = this.isPersian ? Number(IcoTecDatetimePickerUtility.toEnglishNumber(selectedYear)) : Number(selectedYear);
                if (this.isPersian) {
                    this.dateTime = this.persianDateTime.setPersianYear(year).toDate();
                }
                else {
                    /** @type {?} */
                    var dateTimeClone = new Date(this.dateTime);
                    dateTimeClone.setFullYear(year);
                    this.dateTime = new Date(dateTimeClone);
                }
                this.hideSelecMonthAndYearBlock();
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.todayButtonOnClick = /**
         * @return {?}
         */
            function () {
                if (this.isShowTodayButton()) {
                    /** @type {?} */
                    var dateTimeNow = new Date();
                    if (this.dateTime.getFullYear() != dateTimeNow.getFullYear() || this.dateTime.getMonth() != dateTimeNow.getMonth()) {
                        this.dateTime = dateTimeNow;
                        this.updateMonthDays();
                    }
                    else {
                        this.dateTime = dateTimeNow;
                    }
                    this.selectedDateTime = dateTimeNow;
                    if (!this.rangeSelector) {
                        this.fireChangeEvent();
                    }
                }
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.isShowTodayButton = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var dateTimeNow = new Date();
                /** @type {?} */
                var isAllowSelect = true;
                if (this.minDate != null) {
                    isAllowSelect = dateTimeNow >= this.minDate;
                }
                if (this.maxDate != null && isAllowSelect) {
                    isAllowSelect = dateTimeNow <= this.maxDate;
                }
                return isAllowSelect;
            };
        /**
         * @param {?} dayObject
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.dayButtonOnClick = /**
         * @param {?} dayObject
         * @return {?}
         */
            function (dayObject) {
                // روی روزهای ماه های قبل یا بعد کلیک شده است
                if (dayObject.disable) {
                    if (this.isPersian) {
                        this.dateTime = PersianDateTime$1.fromPersianDate(dayObject.year, dayObject.month, dayObject.day).toDate();
                    }
                    else {
                        /** @type {?} */
                        var dateTimeClone = new Date(this.dateTime);
                        dateTimeClone.setDate(dayObject.day);
                        dateTimeClone.setMonth(dayObject.month);
                        dateTimeClone.setFullYear(dayObject.year);
                        this.dateTime = dateTimeClone;
                    }
                    this.updateMonthDays();
                    return;
                }
                // نال کردن تاریخ های شروع و پایان برای انتخاب مجدد رنج تاریخ
                // در صورتی که رنج گرفته شده بود
                if (this.rangeSelector && this.selectedStartDateTime != null && this.selectedEndDateTime != null) {
                    this.selectedStartDateTime = null;
                    this.selectedEndDateTime = null;
                    this.resetToFalseRangeParametersInMonthDays();
                }
                // \\
                // روز انتخاب شده
                this.selectedDateTime = this.isPersian
                    ? PersianDateTime$1.fromPersianDateTime(dayObject.year, dayObject.month, dayObject.day, this.hour, this.minute, this.second, 0).toDate()
                    : new Date(dayObject.year, dayObject.month, dayObject.day, this.hour, this.minute, this.second);
                if (this.rangeSelector) {
                    if (this.selectedStartDateTime == null || this.selectedStartDateTime >= this.selectedDateTime) {
                        this.resetToFalseRangeParametersInMonthDays();
                        this.selectedStartDateTime = this.selectedDateTime;
                        dayObject.isStartOrEndOfRange = true;
                    }
                    else {
                        this.selectedEndDateTime = this.selectedDateTime;
                        dayObject.isStartOrEndOfRange = true;
                    }
                }
                if (this.rangeSelector && this.selectedStartDateTime != null && this.selectedEndDateTime != null) {
                    this.fireRangeChangeEvent();
                }
                else if (!this.rangeSelector) {
                    this.fireChangeEvent();
                }
            };
        /**
         * @param {?} dayObject
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.dayButtonOnHover = /**
         * @param {?} dayObject
         * @return {?}
         */
            function (dayObject) {
                var e_3, _a;
                if (!this.isRangeSelectorReady) {
                    return;
                }
                // تاریخ روزی که موس روی آن است
                /** @type {?} */
                var hoverCellDate = this.isPersian
                    ? PersianDateTime$1.fromPersianDate(dayObject.year, dayObject.month, dayObject.day).toDate()
                    : new Date(dayObject.year, dayObject.month, dayObject.day);
                try {
                    for (var _b = __values(this.daysInMonth), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var day = _c.value;
                        /** @type {?} */
                        var currentDate = this.isPersian
                            ? PersianDateTime$1.fromPersianDate(day.year, day.month, day.day).toDate()
                            : new Date(day.year, day.month, day.day);
                        day.isWithinRange = currentDate >= this.selectedStartDateTime && currentDate <= hoverCellDate;
                    }
                }
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.rejectButtonOnClick = /**
         * @return {?}
         */
            function () {
                this.selectedDateTime = null;
                this.selectedStartDateTime = this.selectedEndDateTime = null;
                this.resetToFalseRangeParametersInMonthDays();
                this.fireRangeChangeEvent();
            };
        /**
         * @return {?}
         */
        IcoTecAngularPersianDateTimePickerCoreComponent.prototype.confirmButtonOnClick = /**
         * @return {?}
         */
            function () {
                if (this.selectedStartDateTime != null && this.selectedEndDateTime != null) {
                    this.fireRangeChangeEvent();
                }
            };
        IcoTecAngularPersianDateTimePickerCoreComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ico-tec-datetime-picker-core',
                        template: "<ng-container class=\"mds-datetime-picker\">\n  <div class=\"mds-datepicker-years-months\" [@monthAndYearSelectorVisibility]=\"monthSelectorVisibilityStateName\" (@monthAndYearSelectorVisibility.done)=\"monthsBlockVisibilityAnimationDone()\">\n    <table class=\"table table-sm text-center\">\n      <tbody>\n        <tr *ngFor=\"let row of [1, 2, 3, 4]\">\n          <td *ngFor=\"let col of [1, 2, 3]\" (click)=\"monthOnClick(monthNames[(row - 1) * 3 + col - 1])\" class=\"cursor-pointer\" data-mds-persian-datetimepicker>\n            <div>{{monthNames[(row - 1) * 3 + col - 1]}}</div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"mds-datepicker-years-months\" [@monthAndYearSelectorVisibility]=\"yearSelectorVisibilityStateName\" (@monthAndYearSelectorVisibility.done)=\"yearsBlockVisibilityAnimationDone()\">\n    <table class=\"table table-sm table-striped text-center\">\n      <tbody>\n        <tr *ngFor=\"let row of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]\">\n          <ng-container *ngFor=\"let col of [1, 2, 3, 4, 5]\">\n            <td *ngIf=\"yearsToSelect[(row - 1) * 5 + col - 1] as year\" \n            (click)=\"yearOnClick(year)\" [ngClass]=\"{'warning1': year == yearString}\"\n              data-mds-persian-datetimepicker class=\"cursor-pointer\">\n              {{year}}\n            </td>\n          </ng-container>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div>\n    <table class=\"table table-sm table-condensed text-center\">\n      <thead>\n        <tr class=\"gray1\" *ngIf=\"isPersian\">\n          <td colspan=\"100\">\n            <table class=\"table table-sm gray1\">\n              <tr>\n                <td title=\"{{resources.NextYear}}\" (click)=\"nextYearButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&lt;&lt;</td>\n                <td title=\"{{resources.NextMonth}}\" (click)=\"nextMonthButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&lt;</td>\n                <td (click)=\"selectYearButtonOnClick()\" class=\"cursor-pointer\" data-mds-persian-datetimepicker>{{yearString}}</td>\n                <td (click)=\"monthButtonOnClick()\" class=\"cursor-pointer\" data-mds-persian-datetimepicker>{{monthName}}</td>\n                <td title=\"{{resources.PreviousMonth}}\" (click)=\"previousMonthButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&gt;</td>\n                <td title=\"{{resources.PreviousYear}}\" (click)=\"previousYearButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&gt;&gt;</td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr class=\"gray1\" *ngIf=\"!isPersian\">\n          <td colspan=\"100\">\n            <table class=\"table table-sm gray1\">\n              <tr>\n                <td title=\"{{resources.PreviousYear}}\" (click)=\"previousYearButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&lt;&lt;</td>\n                <td title=\"{{resources.PreviousMonth}}\" (click)=\"previousMonthButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\"\n                  data-mds-persian-datetimepicker>&lt;</td>\n                <td (click)=\"monthButtonOnClick()\" class=\"cursor-pointer\" data-mds-persian-datetimepicker>{{monthName}}</td>\n                <td (click)=\"selectYearButtonOnClick()\" class=\"cursor-pointer\" data-mds-persian-datetimepicker>{{yearString}}</td>\n                <td title=\"{{resources.NextMonth}}\" (click)=\"nextMonthButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&gt;</td>\n                <td title=\"{{resources.NextYear}}\" (click)=\"nextYearButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&gt;&gt;</td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr *ngIf=\"rangeSelector\">\n          <td colspan=\"2\"></td>\n          <td [ngClass]=\"{'text-muted': isRejectButtonDisable}\" title=\"{{resources.Reject}}\" (click)=\"rejectButtonOnClick()\" class=\"cursor-pointer font18\"\n            data-mds-persian-datetimepicker>&#215;</td>\n          <td></td>\n          <td [ngClass]=\"{'text-muted': isConfirmButtonDisable}\" title=\"{{resources.Confirm}}\" (click)=\"confirmButtonOnClick()\" class=\"cursor-pointer font18\"\n            data-mds-persian-datetimepicker>&#10003;</td>\n          <td colspan=\"2\"></td>\n        </tr>\n        <tr class=\"gray2\">\n          <td *ngFor=\"let dayName of weekdayNames; let i = index;\" [ngClass]=\"{'text-danger': i == 0}\">{{dayName}}</td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let row of [1, 2, 3, 4, 5, 6]\">\n          <ng-container *ngFor=\"let col of [1, 2, 3, 4, 5, 6, 7]\">\n            <td *ngIf=\"daysInMonth[(row - 1) * 7 + col - 1] as dayObject\" data-mds-persian-datetimepicker [@daysStateName]=\"daysAnimationStateName\"\n              class=\"cursor-pointer\" [ngClass]=\"{'text-danger': dayObject.holiDay,\n                        'today': dayObject.today,\n                        'warning1': dayObject.day == getSelectedDay,\n                        'selected-range': dayObject.isWithinRange,\n                        'text-muted':dayObject.disable,\n                        'disable-td' : !dayObject.isAllowSelected }\" \n                        (click)=\"dayObject.isAllowSelected ? dayButtonOnClick(dayObject) : ''\"\n                        (mouseenter)=\"dayObject.isAllowSelected ? dayButtonOnHover(dayObject) : ''\">\n              <span [ngClass]=\"{'selected-day': dayObject.isStartOrEndOfRange}\" data-mds-persian-datetimepicker>{{dayObject.dayString}}</span>\n            </td>\n          </ng-container>\n        </tr>\n        <tr *ngIf=\"timePicker\">\n          <td colspan=\"2\"></td>\n          <td class=\"cursor-pointer\" (click)=\"hourUpButtonOnClick()\" data-mds-persian-datetimepicker>\u25B2</td>\n          <td class=\"cursor-pointer\" (click)=\"minuteUpButtonOnClick()\" data-mds-persian-datetimepicker>\u25B2</td>\n          <td class=\"cursor-pointer\" (click)=\"secondUpButtonOnClick()\" data-mds-persian-datetimepicker>\u25B2</td>\n          <td colspan=\"2\"></td>\n        </tr>\n        <tr *ngIf=\"timePicker\">\n          <td colspan=\"2\"></td>\n          <td>{{hourString}}</td>\n          <td>{{minuteString}}</td>\n          <td>{{secondString}}</td>\n          <td colspan=\"2\"></td>\n        </tr>\n        <tr *ngIf=\"timePicker\">\n          <td colspan=\"2\"></td>\n          <td class=\"cursor-pointer\" (click)=\"hourDownButtonOnClick()\" data-mds-persian-datetimepicker>\u25BC</td>\n          <td class=\"cursor-pointer\" (click)=\"minuteDownButtonOnClick()\" data-mds-persian-datetimepicker>\u25BC</td>\n          <td class=\"cursor-pointer\" (click)=\"secondDownButtonOnClick()\" data-mds-persian-datetimepicker>\u25BC</td>\n          <td colspan=\"2\"></td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n          <td class=\"cursor-pointer\" colspan=\"100\" (click)=\"todayButtonOnClick()\" data-mds-persian-datetimepicker> {{resources.Today}} </td>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</ng-container>",
                        animations: [
                            animations.trigger('daysStateName', [
                                animations.transition('void => *', [
                                    animations.style({ transform: 'rotateY(90deg)' }),
                                    animations.animate('200ms ease-in')
                                ])
                            ]),
                            animations.trigger('monthAndYearSelectorVisibility', [
                                animations.state('visible', animations.style({ opacity: 1, transform: 'rotateY(0deg)' })),
                                animations.state('hidden', animations.style({ opacity: 0, transform: 'rotateY(90deg)' })),
                                animations.transition('hidden => visible', [animations.animate('0.2s ease-in')]),
                                animations.transition('visible => hidden', [animations.animate('0.2s ease-out')])
                            ])
                        ],
                        styles: [".mds-datetime-picker{direction:ltr}.mds-datepicker-years-months{width:100%;height:100%;position:absolute;left:0;top:0;background-color:#fff;overflow:hidden;overflow-y:auto;z-index:999;direction:ltr}.width100{width:100%}.minWidth30px{min-width:30px}.text-center{text-align:center}.selected-day{display:block;margin:0 auto;background:#c9e1ff}.text-muted{opacity:.4}.warning1{background-color:#ffe66d}.gray1{background-color:#e8e8e8}.gray2{background-color:#f8f8f8}.selected-range{background-color:#d9f2e6}.today{background-color:#b4e5fb}.text-danger{color:red}.disable{opacity:.5}.disable-td{opacity:.5;background-color:#f59292}hr{margin:1px 0}button{width:100%}.font18{font-size:18px}.cursor-pointer{cursor:pointer}.table{margin-bottom:0}.table td{vertical-align:middle}td.cursor-pointer:hover{background-color:#e0e0e0}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{padding:2px}.rotate90{transform:rotate(90deg)}.rotate-90{transform:rotate(-90deg)}"]
                    }] }
        ];
        /** @nocollapse */
        IcoTecAngularPersianDateTimePickerCoreComponent.ctorParameters = function () {
            return [
                { type: IcoTecDatetimePickerResourcesService }
            ];
        };
        IcoTecAngularPersianDateTimePickerCoreComponent.propDecorators = {
            templateType: [{ type: i0.Input }],
            rangeSelector: [{ type: i0.Input }],
            timePicker: [{ type: i0.Input }],
            format: [{ type: i0.Input }],
            dateChanged: [{ type: i0.Output }],
            rangeDateChanged: [{ type: i0.Output }],
            persianChar: [{ type: i0.Input }],
            isPersian: [{ type: i0.Input }],
            minDate: [{ type: i0.Input }],
            maxDate: [{ type: i0.Input }]
        };
        return IcoTecAngularPersianDateTimePickerCoreComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SafeHtmlPipe = /** @class */ (function () {
        function SafeHtmlPipe(sanitized) {
            this.sanitized = sanitized;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        SafeHtmlPipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return 'this.sanitized.bypassSecurityTrustHtml(value)';
            };
        SafeHtmlPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'safeHtml'
                    },] }
        ];
        /** @nocollapse */
        SafeHtmlPipe.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        return SafeHtmlPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Pipe, args: [{ name: 'persianNumber' },] }
        ];
        return PersianNumberPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IcoTecAngularPersianDateTimePickerModule = /** @class */ (function () {
        function IcoTecAngularPersianDateTimePickerModule() {
        }
        IcoTecAngularPersianDateTimePickerModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            formField.MatFormFieldModule, button.MatButtonModule, material.MatInputModule,
                            gridList.MatGridListModule, forms.FormsModule, forms.ReactiveFormsModule
                        ],
                        declarations: [
                            IcoTecAngularPersianDateTimePickerCoreComponent,
                            IcoTecAngularPersianDateTimePickerComponent, SafeHtmlPipe, PersianNumberPipe
                        ],
                        exports: [
                            IcoTecAngularPersianDateTimePickerComponent
                        ]
                    },] }
        ];
        return IcoTecAngularPersianDateTimePickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.TemplateTypeEnum = TemplateTypeEnum;
    exports.TextBoxTypeEnum = TextBoxTypeEnum;
    exports.IcoTecDatetimePickerUtility = IcoTecDatetimePickerUtility;
    exports.IcoTecAngularPersianDateTimePickerComponent = IcoTecAngularPersianDateTimePickerComponent;
    exports.IcoTecAngularPersianDateTimePickerModule = IcoTecAngularPersianDateTimePickerModule;
    exports.ɵa = IcoTecAngularPersianDateTimePickerCoreComponent;
    exports.ɵd = PersianNumberPipe;
    exports.ɵc = SafeHtmlPipe;
    exports.ɵb = IcoTecDatetimePickerResourcesService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ico-tec-angular-persian-date-time-picker.umd.js.map