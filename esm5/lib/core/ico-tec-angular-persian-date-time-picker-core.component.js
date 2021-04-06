/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mds } from 'mds.persian.datetime';
import { TemplateTypeEnum } from '../classes/enums';
import { IcoTecDatetimePickerUtility } from '../classes/ico-tec-datetime-picker.utility';
import { IcoTecDatetimePickerResourcesService } from '../service/ico-tec-datetime-picker-resources.service';
var PersianDateTime = Mds.PersianDateTime;
var PersianDayOfWeek = Mds.PersianDayOfWeek;
var GregorianDayOfWeek = Mds.GregorianDayOfWeek;
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
        this.dateChanged = new EventEmitter();
        this.rangeDateChanged = new EventEmitter();
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
         */
        function () {
            return this._rangeSelector;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
         */
        function () {
            return this._timePicker;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
         */
        function () {
            return this._persianChar;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
         */
        function () {
            return this._isPersian;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
         */
        function () {
            return this.persianDateTime.startDayOfMonthDayOfWeek;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "gregorianStartDayOfMonth", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (new Date(this.dateTime.getFullYear(), this.dateTime.getMonth(), 1).getDay()));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "getSelectedDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getSelectedDateObject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "getSelectedRangeDates", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getSelectedRangeDatesObject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "dateTime", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this._dateTime;
        },
        set: /**
         * @private
         * @param {?} dateTime
         * @return {?}
         */
        function (dateTime) {
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
         */
        function () {
            if (this.dateTime == null) {
                return null;
            }
            if (this._persianDateTime != null) {
                return this._persianDateTime;
            }
            this._persianDateTime = new PersianDateTime(this.dateTime);
            return this._persianDateTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "selectedDateTime", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this._selectedDateTime;
        },
        set: /**
         * @private
         * @param {?} dateTime
         * @return {?}
         */
        function (dateTime) {
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
         */
        function () {
            if (this._selectedPersianDateTime != null) {
                return this._selectedPersianDateTime;
            }
            this._selectedPersianDateTime = new PersianDateTime(this.selectedDateTime);
            return this._selectedPersianDateTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "selectedStartDateTime", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this._selectedStartDateTime;
        },
        set: /**
         * @private
         * @param {?} dateTime
         * @return {?}
         */
        function (dateTime) {
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
         */
        function () {
            if (this._selectedPersianStartDateTime != null) {
                return this._selectedPersianStartDateTime;
            }
            this._selectedPersianStartDateTime = new PersianDateTime(this.selectedStartDateTime);
            return this._selectedPersianStartDateTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "selectedEndDateTime", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this._selectedEndDateTime;
        },
        set: /**
         * @private
         * @param {?} dateTime
         * @return {?}
         */
        function (dateTime) {
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
         */
        function (dateTime) {
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
         */
        function () {
            return this._maxDate;
        },
        set: /**
         * @param {?} dateTime
         * @return {?}
         */
        function (dateTime) {
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
         */
        function () {
            if (this._selectedPersianEndDateTime != null) {
                return this._selectedPersianEndDateTime;
            }
            this._selectedPersianEndDateTime = new PersianDateTime(this.selectedEndDateTime);
            return this._selectedPersianEndDateTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "resources", {
        get: /**
         * @return {?}
         */
        function () {
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
         */
        function () {
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
         */
        function () {
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
         */
        function () {
            if (this._month > 0) {
                return this._month;
            }
            this._month = this.isPersian
                ? PersianDateTime.getPersianMonthIndex(this.persianDateTime.monthName)
                : this.dateTime.getMonth();
            return this._month;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "monthName", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._monthName != '') {
                return this._monthName;
            }
            this._monthName = this.isPersian
                ? this.persianDateTime.monthName
                : PersianDateTime.getGregorianMonthNames[this.month];
            return this._monthName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "monthNames", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._monthNames != null && this._monthNames.length > 0) {
                return this._monthNames;
            }
            if (this.isPersian) {
                /** @type {?} */
                var allPersianMonths = PersianDateTime.getPersianMonthNames;
                this._monthNames = [
                    allPersianMonths[2], allPersianMonths[1], allPersianMonths[0],
                    allPersianMonths[5], allPersianMonths[4], allPersianMonths[3],
                    allPersianMonths[8], allPersianMonths[7], allPersianMonths[6],
                    allPersianMonths[11], allPersianMonths[10], allPersianMonths[9]
                ];
            }
            else {
                this._monthNames = PersianDateTime.getGregorianMonthNames;
            }
            return this._monthNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "hour", {
        get: /**
         * @return {?}
         */
        function () {
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
         */
        function () {
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
         */
        function () {
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
         */
        function () {
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
         */
        function () {
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
         */
        function () {
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
         */
        function () {
            if (this._weekdayNames != null && this._weekdayNames.length > 0) {
                return this._weekdayNames;
            }
            if (this.isPersian) {
                // حروف اول نام های روز هفته شمسی
                /** @type {?} */
                var persianWeekDayNames = PersianDateTime.getPersianWeekdayNames;
                this._weekdayNames = [
                    persianWeekDayNames[6][0], persianWeekDayNames[5][0], persianWeekDayNames[4][0],
                    persianWeekDayNames[3][0], persianWeekDayNames[2][0], persianWeekDayNames[1][0],
                    persianWeekDayNames[0][0]
                ];
            }
            else {
                /** @type {?} */
                var gregorianWeekDayNames = PersianDateTime.getGregorianWeekdayNames;
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
         */
        function () {
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
         */
        function () {
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
         */
        function () {
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
         */
        function () {
            return this.selectedStartDateTime == null && this.selectedEndDateTime == null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "isConfirmButtonDisable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectedStartDateTime == null || this.selectedEndDateTime == null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcoTecAngularPersianDateTimePickerCoreComponent.prototype, "isRangeSelectorReady", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
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
                    this.dateTime = this.selectedStartDateTime = PersianDateTime.parse(startAndEndDateArray[0]).toDate();
                    this.selectedEndDateTime = PersianDateTime.parse(startAndEndDateArray[1]).toDate();
                    if (this.selectedStartDateTime > this.selectedEndDateTime) {
                        throw new Error('Start date must be less than end date');
                    }
                }
                else {
                    this.dateTime = this.selectedDateTime = PersianDateTime.parse(dateTimeString).toDate();
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
            ? PersianDateTime.fromPersianDate(year, month, day).toDate()
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
        var icoTecAngularDateTimePickerDay = (/** @type {?} */ ({
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
            ? PersianDateTime.fromPersianDate(year, month, day).toDate()
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
            var persianDateTimeNow = PersianDateTime.now;
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
            for (var _b = tslib_1.__values(this.daysInMonth), _c = _b.next(); !_c.done; _c = _b.next()) {
                var day = _c.value;
                day.isWithinRange = false;
                day.isStartOrEndOfRange = false;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
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
            for (var _b = tslib_1.__values(this.daysInMonth), _c = _b.next(); !_c.done; _c = _b.next()) {
                var day = _c.value;
                day.isWithinRange = false;
                day.isStartOrEndOfRange = false;
                day.dayString = this.persianChar
                    ? IcoTecDatetimePickerUtility.toPersianNumber(day.day.toString())
                    : day.day.toString();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
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
            ? PersianDateTime.getPersianMonthIndex(selectedMonthName)
            : PersianDateTime.getGregorianMonthNameIndex(selectedMonthName);
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
                this.dateTime = PersianDateTime.fromPersianDate(dayObject.year, dayObject.month, dayObject.day).toDate();
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
            ? PersianDateTime.fromPersianDateTime(dayObject.year, dayObject.month, dayObject.day, this.hour, this.minute, this.second, 0).toDate()
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
            ? PersianDateTime.fromPersianDate(dayObject.year, dayObject.month, dayObject.day).toDate()
            : new Date(dayObject.year, dayObject.month, dayObject.day);
        try {
            for (var _b = tslib_1.__values(this.daysInMonth), _c = _b.next(); !_c.done; _c = _b.next()) {
                var day = _c.value;
                /** @type {?} */
                var currentDate = this.isPersian
                    ? PersianDateTime.fromPersianDate(day.year, day.month, day.day).toDate()
                    : new Date(day.year, day.month, day.day);
                day.isWithinRange = currentDate >= this.selectedStartDateTime && currentDate <= hoverCellDate;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
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
        { type: Component, args: [{
                    selector: 'ico-tec-datetime-picker-core',
                    template: "<ng-container class=\"mds-datetime-picker\">\n  <div class=\"mds-datepicker-years-months\" [@monthAndYearSelectorVisibility]=\"monthSelectorVisibilityStateName\" (@monthAndYearSelectorVisibility.done)=\"monthsBlockVisibilityAnimationDone()\">\n    <table class=\"table table-sm text-center\">\n      <tbody>\n        <tr *ngFor=\"let row of [1, 2, 3, 4]\">\n          <td *ngFor=\"let col of [1, 2, 3]\" (click)=\"monthOnClick(monthNames[(row - 1) * 3 + col - 1])\" class=\"cursor-pointer\" data-mds-persian-datetimepicker>\n            <div>{{monthNames[(row - 1) * 3 + col - 1]}}</div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"mds-datepicker-years-months\" [@monthAndYearSelectorVisibility]=\"yearSelectorVisibilityStateName\" (@monthAndYearSelectorVisibility.done)=\"yearsBlockVisibilityAnimationDone()\">\n    <table class=\"table table-sm table-striped text-center\">\n      <tbody>\n        <tr *ngFor=\"let row of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]\">\n          <ng-container *ngFor=\"let col of [1, 2, 3, 4, 5]\">\n            <td *ngIf=\"yearsToSelect[(row - 1) * 5 + col - 1] as year\" \n            (click)=\"yearOnClick(year)\" [ngClass]=\"{'warning1': year == yearString}\"\n              data-mds-persian-datetimepicker class=\"cursor-pointer\">\n              {{year}}\n            </td>\n          </ng-container>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div>\n    <table class=\"table table-sm table-condensed text-center\">\n      <thead>\n        <tr class=\"gray1\" *ngIf=\"isPersian\">\n          <td colspan=\"100\">\n            <table class=\"table table-sm gray1\">\n              <tr>\n                <td title=\"{{resources.NextYear}}\" (click)=\"nextYearButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&lt;&lt;</td>\n                <td title=\"{{resources.NextMonth}}\" (click)=\"nextMonthButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&lt;</td>\n                <td (click)=\"selectYearButtonOnClick()\" class=\"cursor-pointer\" data-mds-persian-datetimepicker>{{yearString}}</td>\n                <td (click)=\"monthButtonOnClick()\" class=\"cursor-pointer\" data-mds-persian-datetimepicker>{{monthName}}</td>\n                <td title=\"{{resources.PreviousMonth}}\" (click)=\"previousMonthButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&gt;</td>\n                <td title=\"{{resources.PreviousYear}}\" (click)=\"previousYearButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&gt;&gt;</td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr class=\"gray1\" *ngIf=\"!isPersian\">\n          <td colspan=\"100\">\n            <table class=\"table table-sm gray1\">\n              <tr>\n                <td title=\"{{resources.PreviousYear}}\" (click)=\"previousYearButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&lt;&lt;</td>\n                <td title=\"{{resources.PreviousMonth}}\" (click)=\"previousMonthButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\"\n                  data-mds-persian-datetimepicker>&lt;</td>\n                <td (click)=\"monthButtonOnClick()\" class=\"cursor-pointer\" data-mds-persian-datetimepicker>{{monthName}}</td>\n                <td (click)=\"selectYearButtonOnClick()\" class=\"cursor-pointer\" data-mds-persian-datetimepicker>{{yearString}}</td>\n                <td title=\"{{resources.NextMonth}}\" (click)=\"nextMonthButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&gt;</td>\n                <td title=\"{{resources.NextYear}}\" (click)=\"nextYearButtonOnClick()\" class=\"cursor-pointer font18 minWidth30px\" data-mds-persian-datetimepicker>&gt;&gt;</td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr *ngIf=\"rangeSelector\">\n          <td colspan=\"2\"></td>\n          <td [ngClass]=\"{'text-muted': isRejectButtonDisable}\" title=\"{{resources.Reject}}\" (click)=\"rejectButtonOnClick()\" class=\"cursor-pointer font18\"\n            data-mds-persian-datetimepicker>&#215;</td>\n          <td></td>\n          <td [ngClass]=\"{'text-muted': isConfirmButtonDisable}\" title=\"{{resources.Confirm}}\" (click)=\"confirmButtonOnClick()\" class=\"cursor-pointer font18\"\n            data-mds-persian-datetimepicker>&#10003;</td>\n          <td colspan=\"2\"></td>\n        </tr>\n        <tr class=\"gray2\">\n          <td *ngFor=\"let dayName of weekdayNames; let i = index;\" [ngClass]=\"{'text-danger': i == 0}\">{{dayName}}</td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let row of [1, 2, 3, 4, 5, 6]\">\n          <ng-container *ngFor=\"let col of [1, 2, 3, 4, 5, 6, 7]\">\n            <td *ngIf=\"daysInMonth[(row - 1) * 7 + col - 1] as dayObject\" data-mds-persian-datetimepicker [@daysStateName]=\"daysAnimationStateName\"\n              class=\"cursor-pointer\" [ngClass]=\"{'text-danger': dayObject.holiDay,\n                        'today': dayObject.today,\n                        'warning1': dayObject.day == getSelectedDay,\n                        'selected-range': dayObject.isWithinRange,\n                        'text-muted':dayObject.disable,\n                        'disable-td' : !dayObject.isAllowSelected }\" \n                        (click)=\"dayObject.isAllowSelected ? dayButtonOnClick(dayObject) : ''\"\n                        (mouseenter)=\"dayObject.isAllowSelected ? dayButtonOnHover(dayObject) : ''\">\n              <span [ngClass]=\"{'selected-day': dayObject.isStartOrEndOfRange}\" data-mds-persian-datetimepicker>{{dayObject.dayString}}</span>\n            </td>\n          </ng-container>\n        </tr>\n        <tr *ngIf=\"timePicker\">\n          <td colspan=\"2\"></td>\n          <td class=\"cursor-pointer\" (click)=\"hourUpButtonOnClick()\" data-mds-persian-datetimepicker>\u25B2</td>\n          <td class=\"cursor-pointer\" (click)=\"minuteUpButtonOnClick()\" data-mds-persian-datetimepicker>\u25B2</td>\n          <td class=\"cursor-pointer\" (click)=\"secondUpButtonOnClick()\" data-mds-persian-datetimepicker>\u25B2</td>\n          <td colspan=\"2\"></td>\n        </tr>\n        <tr *ngIf=\"timePicker\">\n          <td colspan=\"2\"></td>\n          <td>{{hourString}}</td>\n          <td>{{minuteString}}</td>\n          <td>{{secondString}}</td>\n          <td colspan=\"2\"></td>\n        </tr>\n        <tr *ngIf=\"timePicker\">\n          <td colspan=\"2\"></td>\n          <td class=\"cursor-pointer\" (click)=\"hourDownButtonOnClick()\" data-mds-persian-datetimepicker>\u25BC</td>\n          <td class=\"cursor-pointer\" (click)=\"minuteDownButtonOnClick()\" data-mds-persian-datetimepicker>\u25BC</td>\n          <td class=\"cursor-pointer\" (click)=\"secondDownButtonOnClick()\" data-mds-persian-datetimepicker>\u25BC</td>\n          <td colspan=\"2\"></td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n          <td class=\"cursor-pointer\" colspan=\"100\" (click)=\"todayButtonOnClick()\" data-mds-persian-datetimepicker> {{resources.Today}} </td>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</ng-container>",
                    animations: [
                        trigger('daysStateName', [
                            transition('void => *', [
                                style({ transform: 'rotateY(90deg)' }),
                                animate('200ms ease-in')
                            ])
                        ]),
                        trigger('monthAndYearSelectorVisibility', [
                            state('visible', style({ opacity: 1, transform: 'rotateY(0deg)' })),
                            state('hidden', style({ opacity: 0, transform: 'rotateY(90deg)' })),
                            transition('hidden => visible', [animate('0.2s ease-in')]),
                            transition('visible => hidden', [animate('0.2s ease-out')])
                        ])
                    ],
                    styles: [".mds-datetime-picker{direction:ltr}.mds-datepicker-years-months{width:100%;height:100%;position:absolute;left:0;top:0;background-color:#fff;overflow:hidden;overflow-y:auto;z-index:999;direction:ltr}.width100{width:100%}.minWidth30px{min-width:30px}.text-center{text-align:center}.selected-day{display:block;margin:0 auto;background:#c9e1ff}.text-muted{opacity:.4}.warning1{background-color:#ffe66d}.gray1{background-color:#e8e8e8}.gray2{background-color:#f8f8f8}.selected-range{background-color:#d9f2e6}.today{background-color:#b4e5fb}.text-danger{color:red}.disable{opacity:.5}.disable-td{opacity:.5;background-color:#f59292}hr{margin:1px 0}button{width:100%}.font18{font-size:18px}.cursor-pointer{cursor:pointer}.table{margin-bottom:0}.table td{vertical-align:middle}td.cursor-pointer:hover{background-color:#e0e0e0}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{padding:2px}.rotate90{transform:rotate(90deg)}.rotate-90{transform:rotate(-90deg)}"]
                }] }
    ];
    /** @nocollapse */
    IcoTecAngularPersianDateTimePickerCoreComponent.ctorParameters = function () { return [
        { type: IcoTecDatetimePickerResourcesService }
    ]; };
    IcoTecAngularPersianDateTimePickerCoreComponent.propDecorators = {
        templateType: [{ type: Input }],
        rangeSelector: [{ type: Input }],
        timePicker: [{ type: Input }],
        format: [{ type: Input }],
        dateChanged: [{ type: Output }],
        rangeDateChanged: [{ type: Output }],
        persianChar: [{ type: Input }],
        isPersian: [{ type: Input }],
        minDate: [{ type: Input }],
        maxDate: [{ type: Input }]
    };
    return IcoTecAngularPersianDateTimePickerCoreComponent;
}());
export { IcoTecAngularPersianDateTimePickerCoreComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.initialized;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._persianChar;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._isPersian;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._rangeSelector;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._timePicker;
    /** @type {?} */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.templateType;
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
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.format;
    /** @type {?} */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.dateChanged;
    /** @type {?} */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.rangeDateChanged;
    /** @type {?} */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.daysAnimationStateName;
    /** @type {?} */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.monthOrYearSelectorVisibilityStateName;
    /** @type {?} */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.monthSelectorVisibilityStateName;
    /** @type {?} */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.yearSelectorVisibilityStateName;
    /** @type {?} */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.showMonthSelectorBlock;
    /** @type {?} */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.showYearsSelectorBlock;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._dateTime;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._persianDateTime;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._selectedDateTime;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._selectedPersianDateTime;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._selectedStartDateTime;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._selectedPersianStartDateTime;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._selectedEndDateTime;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._minDate;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._maxDate;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._selectedPersianEndDateTime;
    /** @type {?} */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.yearsToSelect;
    /** @type {?} */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.daysInMonth;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._resources;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._year;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._yearString;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._month;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._monthName;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._monthNames;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._hour;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._hourString;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._minute;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._minuteString;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._second;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._secondString;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._weekdayNames;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._IIcoTecAngularDateTimePickerDate;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype._selectedRangeDatesObject;
    /**
     * @type {?}
     * @private
     */
    IcoTecAngularPersianDateTimePickerCoreComponent.prototype.resourcesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvLXRlYy1hbmd1bGFyLXBlcnNpYW4tZGF0ZS10aW1lLXBpY2tlci1jb3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ljby10ZWMtYW5ndWxhci1wZXJzaWFuLWRhdGUtdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29yZS9pY28tdGVjLWFuZ3VsYXItcGVyc2lhbi1kYXRlLXRpbWUtcGlja2VyLWNvcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdwRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM1RyxJQUFPLGVBQWUsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzdDLElBQU8sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0FBQy9DLElBQU8sa0JBQWtCLEdBQUcsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0FBRW5EO0lBdUJFLHlEQUFvQixnQkFBc0Q7UUFBdEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFzQztRQUVsRSxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsSUFB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dUM7Ozs7O0lBRXZDLG1GQUF5RDs7Ozs7SUFHekQsaUZBQTRDOzs7OztJQUU1Qyx3RkFBOEQ7Ozs7O0lBRzlELCtFQUEwQzs7Ozs7SUFHMUMsbUVBQThCOzs7OztJQUc5QixtRUFBOEI7Ozs7O0lBRTlCLHNGQUE0RDs7SUFFNUQsd0VBQXdCOztJQUN4QixzRUFBK0M7Ozs7O0lBRS9DLHFFQUErQjs7Ozs7SUFDL0IsZ0VBQWtCOzs7OztJQUNsQixzRUFBeUI7Ozs7O0lBQ3pCLGlFQUFtQjs7Ozs7SUFDbkIscUVBQXdCOzs7OztJQUN4QixzRUFBbUM7Ozs7O0lBQ25DLGdFQUFrQjs7Ozs7SUFDbEIsc0VBQXlCOzs7OztJQUN6QixrRUFBb0I7Ozs7O0lBQ3BCLHdFQUEyQjs7Ozs7SUFDM0Isa0VBQW9COzs7OztJQUNwQix3RUFBMkI7Ozs7O0lBQzNCLHdFQUFxQzs7Ozs7SUFDckMsNEZBQW1GOzs7OztJQUVuRixvRkFBZ0Y7Ozs7O0lBL2RwRSwyRUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1kcyB9IGZyb20gJ21kcy5wZXJzaWFuLmRhdGV0aW1lJztcbmltcG9ydCB7IFRlbXBsYXRlVHlwZUVudW0gfSBmcm9tICcuLi9jbGFzc2VzL2VudW1zJztcbmltcG9ydCB7IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlLCBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF5LCBcbiAgSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlclJhbmdlRGF0ZSB9IGZyb20gJy4uL2NsYXNzZXMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkgfSBmcm9tICcuLi9jbGFzc2VzL2ljby10ZWMtZGF0ZXRpbWUtcGlja2VyLnV0aWxpdHknO1xuaW1wb3J0IHsgSWNvVGVjRGF0ZXRpbWVQaWNrZXJSZXNvdXJjZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9pY28tdGVjLWRhdGV0aW1lLXBpY2tlci1yZXNvdXJjZXMuc2VydmljZSc7XG5pbXBvcnQgUGVyc2lhbkRhdGVUaW1lID0gTWRzLlBlcnNpYW5EYXRlVGltZTtcbmltcG9ydCBQZXJzaWFuRGF5T2ZXZWVrID0gTWRzLlBlcnNpYW5EYXlPZldlZWs7XG5pbXBvcnQgR3JlZ29yaWFuRGF5T2ZXZWVrID0gTWRzLkdyZWdvcmlhbkRheU9mV2VlaztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWNvLXRlYy1kYXRldGltZS1waWNrZXItY29yZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY28tdGVjLWFuZ3VsYXItcGVyc2lhbi1kYXRlLXRpbWUtcGlja2VyLWNvcmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY28tdGVjLWFuZ3VsYXItcGVyc2lhbi1kYXRlLXRpbWUtcGlja2VyLWNvcmUuY29tcG9uZW50LmNzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGF5c1N0YXRlTmFtZScsXG4gICAgICBbXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZVkoOTBkZWcpJyB9KSxcbiAgICAgICAgICBhbmltYXRlKCcyMDBtcyBlYXNlLWluJylcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgIHRyaWdnZXIoJ21vbnRoQW5kWWVhclNlbGVjdG9yVmlzaWJpbGl0eScsXG4gICAgICBbXG4gICAgICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdyb3RhdGVZKDBkZWcpJyB9KSksXG4gICAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3JvdGF0ZVkoOTBkZWcpJyB9KSksXG4gICAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiB2aXNpYmxlJywgW2FuaW1hdGUoJzAuMnMgZWFzZS1pbicpXSksXG4gICAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaGlkZGVuJywgW2FuaW1hdGUoJzAuMnMgZWFzZS1vdXQnKV0pXG4gICAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEljb1RlY0FuZ3VsYXJQZXJzaWFuRGF0ZVRpbWVQaWNrZXJDb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc291cmNlc1NlcnZpY2U6IEljb1RlY0RhdGV0aW1lUGlja2VyUmVzb3VyY2VzU2VydmljZSkgeyB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIF9wZXJzaWFuQ2hhciA9IHRydWU7XG4gIHByaXZhdGUgX2lzUGVyc2lhbiA9IHRydWU7XG4gIHByaXZhdGUgX3JhbmdlU2VsZWN0b3IgPSB0cnVlO1xuICBwcml2YXRlIF90aW1lUGlja2VyID0gdHJ1ZTtcblxuICAvLyBASW5wdXQoKSBpbml0aWFsVmFsdWUgPSAnJztcbiAgQElucHV0KCkgdGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGVFbnVtID0gVGVtcGxhdGVUeXBlRW51bS5ib290c3RyYXA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHJhbmdlU2VsZWN0b3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlU2VsZWN0b3I7XG4gIH1cbiAgc2V0IHJhbmdlU2VsZWN0b3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fcmFuZ2VTZWxlY3RvciA9PSB2YWx1ZSkgeyByZXR1cm47IH1cbiAgICB0aGlzLl9yYW5nZVNlbGVjdG9yID0gdmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZERhdGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLnRpbWVQaWNrZXIgPSAhdmFsdWU7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7IHJldHVybjsgfVxuICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgdGltZVBpY2tlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZVBpY2tlcjtcbiAgfVxuICBzZXQgdGltZVBpY2tlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl90aW1lUGlja2VyID09IHZhbHVlKSB7IHJldHVybjsgfVxuICAgIHRoaXMuX3RpbWVQaWNrZXIgPSB2YWx1ZTtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgICog2YHYsdmF2Kog2b7bjNi0INmB2LHYtiAxMzkzLzA5LzE0ICAgMTM6NDk6NDBcbiAgICAqIHl5eXk6INiz2KfZhCDahtmH2KfYsSDYsdmC2YXbjFxuICAgICogeXk6INiz2KfZhCDYr9mIINix2YLZhduMXG4gICAgKiBNTU1NOiDZhtin2YUg2YHYp9ix2LPbjCDZhdin2YdcbiAgICAqIE1NOiDYudiv2K8g2K/ZiCDYsdmC2YXbjCDZhdin2YdcbiAgICAqIE06INi52K/YryDbjNqpINix2YLZhduMINmF2KfZh1xuICAgICogZGRkZDog2YbYp9mFINmB2KfYsdiz24wg2LHZiNiyINmH2YHYqtmHXG4gICAgKiBkZDog2LnYr9ivINiv2Ygg2LHZgtmF24wg2LHZiNiyINmF2KfZh1xuICAgICogZDog2LnYr9ivINuM2qkg2LHZgtmF24wg2LHZiNiyINmF2KfZh1xuICAgICogSEg6INiz2KfYudiqINiv2Ygg2LHZgtmF24wg2KjYpyDZgdix2YXYqiAwMCDYqtinIDI0XG4gICAgKiBIOiDYs9in2LnYqiDbjNqpINix2YLZhduMINio2Kcg2YHYsdmF2KogMCDYqtinIDI0XG4gICAgKiBoaDog2LPYp9i52Kog2K/ZiCDYsdmC2YXbjCDYqNinINmB2LHZhdiqIDAwINiq2KcgMTJcbiAgICAqIGg6INiz2KfYudiqINuM2qkg2LHZgtmF24wg2KjYpyDZgdix2YXYqiAwINiq2KcgMTJcbiAgICAqIG1tOiDYudiv2K8g2K/ZiCDYsdmC2YXbjCDYr9mC24zZgtmHXG4gICAgKiBtOiDYudiv2K8g24zaqSDYsdmC2YXbjCDYr9mC24zZgtmHXG4gICAgKiBzczog2KvYp9mG24zZhyDYr9mIINix2YLZhduMXG4gICAgKiBzOiDYq9in2YbbjNmHINuM2qkg2LHZgtmF24xcbiAgICAqIGZmZjog2YXbjNmE24wg2KvYp9mG24zZhyAzINix2YLZhduMXG4gICAgKiBmZjog2YXbjNmE24wg2KvYp9mG24zZhyAyINix2YLZhduMXG4gICAgKiBmOiDZhduM2YTbjCDYq9in2YbbjNmHINuM2qkg2LHZgtmF24xcbiAgICAqIHR0OiDYqC7YuCDbjNinINmCLti4XG4gICAgKiB0OiDYrdix2YEg2KfZiNmEINin2LIg2Kgu2Lgg24zYpyDZgi7YuFxuICAgICoqL1xuICBASW5wdXQoKSBmb3JtYXQgPSAnJztcblxuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlPigpO1xuICBAT3V0cHV0KCkgcmFuZ2VEYXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlclJhbmdlRGF0ZT4oKTtcblxuICBASW5wdXQoKVxuICBnZXQgcGVyc2lhbkNoYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcnNpYW5DaGFyO1xuICB9XG4gIHNldCBwZXJzaWFuQ2hhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9wZXJzaWFuQ2hhciA9PSB2YWx1ZSkgeyByZXR1cm47IH1cbiAgICB0aGlzLl9wZXJzaWFuQ2hhciA9IHZhbHVlO1xuICAgIHRoaXMuX3llYXJTdHJpbmcgPSAnJztcbiAgICB0aGlzLnJlc2V0TW9udGhEYXlzV2l0aENvbnRlbnQoKTtcbiAgfVxuXG5cblxuICBcblxuICBASW5wdXQoKVxuICBnZXQgaXNQZXJzaWFuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1BlcnNpYW47XG4gIH1cbiAgc2V0IGlzUGVyc2lhbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9pc1BlcnNpYW4gPT0gdmFsdWUpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5faXNQZXJzaWFuID0gdmFsdWU7XG4gICAgdGhpcy5fbW9udGhOYW1lID0gJyc7XG4gICAgdGhpcy5fbW9udGhOYW1lcyA9IFtdO1xuICAgIHRoaXMuX3dlZWtkYXlOYW1lcyA9IFtdO1xuICAgIHRoaXMuX3Jlc291cmNlcyA9IG51bGw7XG4gICAgdGhpcy5feWVhciA9IHRoaXMuX21vbnRoID0gMDtcbiAgICB0aGlzLl95ZWFyU3RyaW5nID0gdGhpcy5fbW9udGhOYW1lID0gJyc7XG4gICAgaWYgKHRoaXMuZGF0ZVRpbWUgIT0gbnVsbCkge1xuICAgICAgdGhpcy51cGRhdGVZZWFyc0xpc3QoKTtcbiAgICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgZ2V0IHBlcnNpYW5TdGFydERheU9mTW9udGgoKTogUGVyc2lhbkRheU9mV2VlayB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lhbkRhdGVUaW1lLnN0YXJ0RGF5T2ZNb250aERheU9mV2VlaztcbiAgfVxuICBwcml2YXRlIGdldCBncmVnb3JpYW5TdGFydERheU9mTW9udGgoKTogR3JlZ29yaWFuRGF5T2ZXZWVrIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5kYXRlVGltZS5nZXRGdWxsWWVhcigpLCB0aGlzLmRhdGVUaW1lLmdldE1vbnRoKCksIDEpLmdldERheSgpIGFzIEdyZWdvcmlhbkRheU9mV2VlaztcbiAgfVxuXG4gIGdldCBnZXRTZWxlY3RlZERhdGUoKTogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGUge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkRGF0ZU9iamVjdDtcbiAgfVxuICBnZXQgZ2V0U2VsZWN0ZWRSYW5nZURhdGVzKCk6IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJSYW5nZURhdGUge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkUmFuZ2VEYXRlc09iamVjdDtcbiAgfVxuICBwcml2YXRlIGdldCBkYXRlVGltZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZVRpbWU7XG4gIH1cbiAgcHJpdmF0ZSBzZXQgZGF0ZVRpbWUoZGF0ZVRpbWU6IERhdGUpIHtcbiAgICB0aGlzLl9kYXRlVGltZSA9IGRhdGVUaW1lID09IG51bGwgPyBuZXcgRGF0ZSgpIDogbmV3IERhdGUoZGF0ZVRpbWUpO1xuICAgIHRoaXMuX3BlcnNpYW5EYXRlVGltZSA9IG51bGw7XG4gICAgdGhpcy5feWVhciA9IHRoaXMuX21vbnRoID0gMDtcbiAgICB0aGlzLl9ob3VyID0gdGhpcy5fbWludXRlID0gdGhpcy5fc2Vjb25kID0gMDtcbiAgICB0aGlzLl9ob3VyU3RyaW5nID0gdGhpcy5fbWludXRlU3RyaW5nID0gdGhpcy5fc2Vjb25kU3RyaW5nID0gJyc7XG4gICAgdGhpcy5feWVhclN0cmluZyA9IHRoaXMuX21vbnRoTmFtZSA9ICcnO1xuICB9XG4gIHByaXZhdGUgZ2V0IHBlcnNpYW5EYXRlVGltZSgpOiBQZXJzaWFuRGF0ZVRpbWUge1xuICAgIGlmICh0aGlzLmRhdGVUaW1lID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBpZiAodGhpcy5fcGVyc2lhbkRhdGVUaW1lICE9IG51bGwpIHsgcmV0dXJuIHRoaXMuX3BlcnNpYW5EYXRlVGltZTsgfVxuICAgIHRoaXMuX3BlcnNpYW5EYXRlVGltZSA9IG5ldyBQZXJzaWFuRGF0ZVRpbWUodGhpcy5kYXRlVGltZSk7XG4gICAgcmV0dXJuIHRoaXMuX3BlcnNpYW5EYXRlVGltZTtcbiAgfVxuICBwcml2YXRlIGdldCBzZWxlY3RlZERhdGVUaW1lKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGVUaW1lO1xuICB9XG4gIHByaXZhdGUgc2V0IHNlbGVjdGVkRGF0ZVRpbWUoZGF0ZVRpbWU6IERhdGUpIHtcbiAgICB0aGlzLl9zZWxlY3RlZERhdGVUaW1lID0gZGF0ZVRpbWUgPT0gbnVsbCA/IG51bGwgOiBuZXcgRGF0ZShkYXRlVGltZSk7XG4gICAgdGhpcy5fSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGUgPSBudWxsO1xuICAgIHRoaXMuX3NlbGVjdGVkUGVyc2lhbkRhdGVUaW1lID0gbnVsbDtcbiAgICBpZiAodGhpcy5yYW5nZVNlbGVjdG9yIHx8ICF0aGlzLnRpbWVQaWNrZXIpIHtcbiAgICAgIHRoaXMuY2xlYXJUaW1lKGRhdGVUaW1lKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBnZXQgc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWUoKTogUGVyc2lhbkRhdGVUaW1lIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWUgIT0gbnVsbCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWU7IH1cbiAgICB0aGlzLl9zZWxlY3RlZFBlcnNpYW5EYXRlVGltZSA9IG5ldyBQZXJzaWFuRGF0ZVRpbWUodGhpcy5zZWxlY3RlZERhdGVUaW1lKTtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWU7XG4gIH1cbiAgcHJpdmF0ZSBnZXQgc2VsZWN0ZWRTdGFydERhdGVUaW1lKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFN0YXJ0RGF0ZVRpbWU7XG4gIH1cbiAgcHJpdmF0ZSBzZXQgc2VsZWN0ZWRTdGFydERhdGVUaW1lKGRhdGVUaW1lOiBEYXRlKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRTdGFydERhdGVUaW1lID0gZGF0ZVRpbWUgPT0gbnVsbCA/IG51bGwgOiBuZXcgRGF0ZShkYXRlVGltZSk7XG4gICAgdGhpcy5fc2VsZWN0ZWRSYW5nZURhdGVzT2JqZWN0ID0gbnVsbDtcbiAgICB0aGlzLl9zZWxlY3RlZFBlcnNpYW5TdGFydERhdGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLmNsZWFyVGltZShkYXRlVGltZSk7XG4gIH1cbiAgcHJpdmF0ZSBnZXQgc2VsZWN0ZWRQZXJzaWFuU3RhcnREYXRlVGltZSgpOiBQZXJzaWFuRGF0ZVRpbWUge1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZFBlcnNpYW5TdGFydERhdGVUaW1lICE9IG51bGwpIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkUGVyc2lhblN0YXJ0RGF0ZVRpbWU7IH1cbiAgICB0aGlzLl9zZWxlY3RlZFBlcnNpYW5TdGFydERhdGVUaW1lID0gbmV3IFBlcnNpYW5EYXRlVGltZSh0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSk7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkUGVyc2lhblN0YXJ0RGF0ZVRpbWU7XG4gIH1cbiAgcHJpdmF0ZSBnZXQgc2VsZWN0ZWRFbmREYXRlVGltZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRFbmREYXRlVGltZTtcbiAgfVxuICBwcml2YXRlIHNldCBzZWxlY3RlZEVuZERhdGVUaW1lKGRhdGVUaW1lOiBEYXRlKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRFbmREYXRlVGltZSA9IGRhdGVUaW1lID09IG51bGwgPyBudWxsIDogbmV3IERhdGUoZGF0ZVRpbWUpO1xuICAgIHRoaXMuX3NlbGVjdGVkUmFuZ2VEYXRlc09iamVjdCA9IG51bGw7XG4gICAgdGhpcy5fc2VsZWN0ZWRQZXJzaWFuRW5kRGF0ZVRpbWUgPSBudWxsO1xuICAgIHRoaXMuY2xlYXJUaW1lKGRhdGVUaW1lKTtcbiAgfVxuXG4gIC8vIEBJbnB1dCgnbWluRGF0ZScpIG1pbkRhdGU6IERhdGU7XG4gIC8vIEBJbnB1dCgnbWF4RGF0ZScpIG1heERhdGU6IERhdGU7XG5cbiAgQElucHV0KClcbiAgIGdldCBtaW5EYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9taW5EYXRlO1xuICB9XG4gICBzZXQgbWluRGF0ZShkYXRlVGltZTpEYXRlKSB7ICAgICBcbiAgICB0aGlzLl9taW5EYXRlID0gZGF0ZVRpbWUgPT0gbnVsbCA/IG51bGwgOiBuZXcgRGF0ZShkYXRlVGltZSk7XG4gICAgXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7IHJldHVybjsgfVxuICAgICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcblxuXG4gICAgIFxuICB9XG5cbiAgQElucHV0KClcbiAgIGdldCBtYXhEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9tYXhEYXRlO1xuICB9XG4gICBzZXQgbWF4RGF0ZShkYXRlVGltZTpEYXRlKSB7XG4gICAgdGhpcy5fbWF4RGF0ZSA9IGRhdGVUaW1lID09IG51bGwgPyBudWxsIDogbmV3IERhdGUoZGF0ZVRpbWUpO1xuICAgIFxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkgeyByZXR1cm47IH1cbiAgICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG5cblxuICB9XG5cblxuICBwcml2YXRlIGdldCBzZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZSgpOiBQZXJzaWFuRGF0ZVRpbWUge1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZSAhPSBudWxsKSB7IHJldHVybiB0aGlzLl9zZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZTsgfVxuICAgIHRoaXMuX3NlbGVjdGVkUGVyc2lhbkVuZERhdGVUaW1lID0gbmV3IFBlcnNpYW5EYXRlVGltZSh0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUpO1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZTtcbiAgfVxuICBnZXQgcmVzb3VyY2VzKCk6IGFueSB7XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlcyAhPSBudWxsKSB7IHJldHVybiB0aGlzLl9yZXNvdXJjZXM7IH1cbiAgICBpZiAodGhpcy5pc1BlcnNpYW4pIHtcbiAgICAgIHRoaXMuX3Jlc291cmNlcyA9IHRoaXMucmVzb3VyY2VzU2VydmljZS5wZXJzaWFuUmVzb3VyY2VzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXNvdXJjZXMgPSB0aGlzLnJlc291cmNlc1NlcnZpY2UuZW5nbGlzaFJlc291cmNlcztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlcztcbiAgfVxuICBnZXQgeWVhcigpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl95ZWFyID4gMCkgeyByZXR1cm4gdGhpcy5feWVhcjsgfVxuICAgIHRoaXMuX3llYXIgPSB0aGlzLmlzUGVyc2lhblxuICAgICAgPyB0aGlzLnBlcnNpYW5EYXRlVGltZS55ZWFyXG4gICAgICA6IHRoaXMuZGF0ZVRpbWUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gdGhpcy5feWVhcjtcbiAgfVxuICBnZXQgeWVhclN0cmluZygpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl95ZWFyU3RyaW5nICE9ICcnKSB7IHJldHVybiB0aGlzLl95ZWFyU3RyaW5nOyB9XG4gICAgdGhpcy5feWVhclN0cmluZyA9IHRoaXMucGVyc2lhbkNoYXJcbiAgICAgID8gSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LnRvUGVyc2lhbk51bWJlcih0aGlzLnllYXIudG9TdHJpbmcoKSlcbiAgICAgIDogdGhpcy55ZWFyLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHRoaXMuX3llYXJTdHJpbmc7XG4gIH1cbiAgZ2V0IG1vbnRoKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX21vbnRoID4gMCkgeyByZXR1cm4gdGhpcy5fbW9udGg7IH1cbiAgICB0aGlzLl9tb250aCA9IHRoaXMuaXNQZXJzaWFuXG4gICAgICA/IFBlcnNpYW5EYXRlVGltZS5nZXRQZXJzaWFuTW9udGhJbmRleCh0aGlzLnBlcnNpYW5EYXRlVGltZS5tb250aE5hbWUpXG4gICAgICA6IHRoaXMuZGF0ZVRpbWUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4gdGhpcy5fbW9udGg7XG4gIH1cbiAgZ2V0IG1vbnRoTmFtZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9tb250aE5hbWUgIT0gJycpIHsgcmV0dXJuIHRoaXMuX21vbnRoTmFtZTsgfVxuICAgIHRoaXMuX21vbnRoTmFtZSA9IHRoaXMuaXNQZXJzaWFuXG4gICAgICA/IHRoaXMucGVyc2lhbkRhdGVUaW1lLm1vbnRoTmFtZVxuICAgICAgOiBQZXJzaWFuRGF0ZVRpbWUuZ2V0R3JlZ29yaWFuTW9udGhOYW1lc1t0aGlzLm1vbnRoXTtcbiAgICByZXR1cm4gdGhpcy5fbW9udGhOYW1lO1xuICB9XG4gIGdldCBtb250aE5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5fbW9udGhOYW1lcyAhPSBudWxsICYmIHRoaXMuX21vbnRoTmFtZXMubGVuZ3RoID4gMCkgeyByZXR1cm4gdGhpcy5fbW9udGhOYW1lczsgfVxuICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgY29uc3QgYWxsUGVyc2lhbk1vbnRocyA9IFBlcnNpYW5EYXRlVGltZS5nZXRQZXJzaWFuTW9udGhOYW1lcztcbiAgICAgIHRoaXMuX21vbnRoTmFtZXMgPSBbXG4gICAgICAgIGFsbFBlcnNpYW5Nb250aHNbMl0sIGFsbFBlcnNpYW5Nb250aHNbMV0sIGFsbFBlcnNpYW5Nb250aHNbMF0sXG4gICAgICAgIGFsbFBlcnNpYW5Nb250aHNbNV0sIGFsbFBlcnNpYW5Nb250aHNbNF0sIGFsbFBlcnNpYW5Nb250aHNbM10sXG4gICAgICAgIGFsbFBlcnNpYW5Nb250aHNbOF0sIGFsbFBlcnNpYW5Nb250aHNbN10sIGFsbFBlcnNpYW5Nb250aHNbNl0sXG4gICAgICAgIGFsbFBlcnNpYW5Nb250aHNbMTFdLCBhbGxQZXJzaWFuTW9udGhzWzEwXSwgYWxsUGVyc2lhbk1vbnRoc1s5XVxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbW9udGhOYW1lcyA9IFBlcnNpYW5EYXRlVGltZS5nZXRHcmVnb3JpYW5Nb250aE5hbWVzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbW9udGhOYW1lcztcbiAgfVxuICBnZXQgaG91cigpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl9ob3VyID4gMCkgeyByZXR1cm4gdGhpcy5faG91cjsgfVxuICAgIHRoaXMuX2hvdXIgPSB0aGlzLmRhdGVUaW1lLmdldEhvdXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuX2hvdXI7XG4gIH1cbiAgZ2V0IGhvdXJTdHJpbmcoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5faG91clN0cmluZyAhPSAnJykgeyByZXR1cm4gdGhpcy5faG91clN0cmluZzsgfVxuICAgIHRoaXMuX2hvdXJTdHJpbmcgPSB0aGlzLmhvdXIudG9TdHJpbmcoKTtcbiAgICBpZiAodGhpcy5wZXJzaWFuQ2hhcikgeyB0aGlzLl9ob3VyU3RyaW5nID0gSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LnRvUGVyc2lhbk51bWJlcih0aGlzLl9ob3VyU3RyaW5nKTsgfVxuICAgIHJldHVybiB0aGlzLl9ob3VyU3RyaW5nO1xuICB9XG4gIGdldCBtaW51dGUoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fbWludXRlID4gMCkgeyByZXR1cm4gdGhpcy5fbWludXRlOyB9XG4gICAgdGhpcy5fbWludXRlID0gdGhpcy5kYXRlVGltZS5nZXRNaW51dGVzKCk7XG4gICAgcmV0dXJuIHRoaXMuX21pbnV0ZTtcbiAgfVxuICBnZXQgbWludXRlU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX21pbnV0ZVN0cmluZyAhPSAnJykgeyByZXR1cm4gdGhpcy5fbWludXRlU3RyaW5nOyB9XG4gICAgdGhpcy5fbWludXRlU3RyaW5nID0gdGhpcy5taW51dGUudG9TdHJpbmcoKTtcbiAgICBpZiAodGhpcy5wZXJzaWFuQ2hhcikgeyB0aGlzLl9taW51dGVTdHJpbmcgPSBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkudG9QZXJzaWFuTnVtYmVyKHRoaXMuX21pbnV0ZVN0cmluZyk7IH1cbiAgICByZXR1cm4gdGhpcy5fbWludXRlU3RyaW5nO1xuICB9XG4gIGdldCBzZWNvbmQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fc2Vjb25kID4gMCkgeyByZXR1cm4gdGhpcy5fc2Vjb25kOyB9XG4gICAgdGhpcy5fc2Vjb25kID0gdGhpcy5kYXRlVGltZS5nZXRTZWNvbmRzKCk7XG4gICAgcmV0dXJuIHRoaXMuX3NlY29uZDtcbiAgfVxuICBnZXQgc2Vjb25kU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX3NlY29uZFN0cmluZyAhPSAnJykgeyByZXR1cm4gdGhpcy5fc2Vjb25kU3RyaW5nOyB9XG4gICAgdGhpcy5fc2Vjb25kU3RyaW5nID0gdGhpcy5zZWNvbmQudG9TdHJpbmcoKTtcbiAgICBpZiAodGhpcy5wZXJzaWFuQ2hhcikgeyB0aGlzLl9zZWNvbmRTdHJpbmcgPSBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkudG9QZXJzaWFuTnVtYmVyKHRoaXMuX3NlY29uZFN0cmluZyk7IH1cbiAgICByZXR1cm4gdGhpcy5fc2Vjb25kU3RyaW5nO1xuICB9XG4gIGdldCB3ZWVrZGF5TmFtZXMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5TmFtZXMgIT0gbnVsbCAmJiB0aGlzLl93ZWVrZGF5TmFtZXMubGVuZ3RoID4gMCkgeyByZXR1cm4gdGhpcy5fd2Vla2RheU5hbWVzOyB9XG4gICAgaWYgKHRoaXMuaXNQZXJzaWFuKSB7XG4gICAgICAvLyDYrdix2YjZgSDYp9mI2YQg2YbYp9mFINmH2KfbjCDYsdmI2LIg2YfZgdiq2Ycg2LTZhdiz24xcbiAgICAgIGNvbnN0IHBlcnNpYW5XZWVrRGF5TmFtZXMgPSBQZXJzaWFuRGF0ZVRpbWUuZ2V0UGVyc2lhbldlZWtkYXlOYW1lcztcbiAgICAgIHRoaXMuX3dlZWtkYXlOYW1lcyA9IFtcbiAgICAgICAgcGVyc2lhbldlZWtEYXlOYW1lc1s2XVswXSwgcGVyc2lhbldlZWtEYXlOYW1lc1s1XVswXSwgcGVyc2lhbldlZWtEYXlOYW1lc1s0XVswXSxcbiAgICAgICAgcGVyc2lhbldlZWtEYXlOYW1lc1szXVswXSwgcGVyc2lhbldlZWtEYXlOYW1lc1syXVswXSwgcGVyc2lhbldlZWtEYXlOYW1lc1sxXVswXSxcbiAgICAgICAgcGVyc2lhbldlZWtEYXlOYW1lc1swXVswXVxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ3JlZ29yaWFuV2Vla0RheU5hbWVzID0gUGVyc2lhbkRhdGVUaW1lLmdldEdyZWdvcmlhbldlZWtkYXlOYW1lcztcbiAgICAgIHRoaXMuX3dlZWtkYXlOYW1lcyA9IFtcbiAgICAgICAgZ3JlZ29yaWFuV2Vla0RheU5hbWVzWzFdWzBdICsgZ3JlZ29yaWFuV2Vla0RheU5hbWVzWzFdWzFdLFxuICAgICAgICBncmVnb3JpYW5XZWVrRGF5TmFtZXNbMl1bMF0gKyBncmVnb3JpYW5XZWVrRGF5TmFtZXNbMl1bMV0sXG4gICAgICAgIGdyZWdvcmlhbldlZWtEYXlOYW1lc1szXVswXSArIGdyZWdvcmlhbldlZWtEYXlOYW1lc1szXVsxXSxcbiAgICAgICAgZ3JlZ29yaWFuV2Vla0RheU5hbWVzWzRdWzBdICsgZ3JlZ29yaWFuV2Vla0RheU5hbWVzWzRdWzFdLFxuICAgICAgICBncmVnb3JpYW5XZWVrRGF5TmFtZXNbNV1bMF0gKyBncmVnb3JpYW5XZWVrRGF5TmFtZXNbNV1bMV0sXG4gICAgICAgIGdyZWdvcmlhbldlZWtEYXlOYW1lc1s2XVswXSArIGdyZWdvcmlhbldlZWtEYXlOYW1lc1s2XVsxXSxcbiAgICAgICAgZ3JlZ29yaWFuV2Vla0RheU5hbWVzWzBdWzBdICsgZ3JlZ29yaWFuV2Vla0RheU5hbWVzWzBdWzFdXG4gICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fd2Vla2RheU5hbWVzO1xuICB9XG4gIHByaXZhdGUgZ2V0IGdldFNlbGVjdGVkRGF0ZU9iamVjdCgpOiBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlVGltZSA9PSBudWxsKSB7IHJldHVybiBudWxsOyB9XG4gICAgaWYgKHRoaXMuX0lJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlICE9IG51bGwpIHsgcmV0dXJuIHRoaXMuX0lJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlOyB9XG4gICAgY29uc3QgZm9ybWF0ID0gdGhpcy5nZXREYXRlVGltZUZvcm1hdCgpO1xuICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgdGhpcy5fSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGUgPSB7XG4gICAgICAgIHllYXI6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWUueWVhcixcbiAgICAgICAgbW9udGg6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWUubW9udGgsXG4gICAgICAgIGRheTogdGhpcy5zZWxlY3RlZFBlcnNpYW5EYXRlVGltZS5kYXksXG4gICAgICAgIGhvdXI6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWUuaG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLnNlbGVjdGVkUGVyc2lhbkRhdGVUaW1lLm1pbnV0ZSxcbiAgICAgICAgc2Vjb25kOiB0aGlzLnNlbGVjdGVkUGVyc2lhbkRhdGVUaW1lLnNlY29uZCxcbiAgICAgICAgbWlsbGlzZWNvbmQ6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWUubWlsbGlzZWNvbmQsXG4gICAgICAgIGZvcm1hdFN0cmluZzogdGhpcy5zZWxlY3RlZFBlcnNpYW5EYXRlVGltZS50b1N0cmluZyhmb3JtYXQpLFxuICAgICAgICB1dGNEYXRlVGltZTogdGhpcy5zZWxlY3RlZERhdGVUaW1lXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9JSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZSA9IHtcbiAgICAgICAgeWVhcjogdGhpcy5zZWxlY3RlZERhdGVUaW1lLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIG1vbnRoOiB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUuZ2V0TW9udGgoKSxcbiAgICAgICAgZGF5OiB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUuZ2V0RGF0ZSgpLFxuICAgICAgICBob3VyOiB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUuZ2V0SG91cnMoKSxcbiAgICAgICAgbWludXRlOiB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUuZ2V0TWludXRlcygpLFxuICAgICAgICBzZWNvbmQ6IHRoaXMuc2VsZWN0ZWREYXRlVGltZS5nZXRTZWNvbmRzKCksXG4gICAgICAgIG1pbGxpc2Vjb25kOiB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgICAgIGZvcm1hdFN0cmluZzogSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LmRhdGVUaW1lVG9TdHJpbmcodGhpcy5zZWxlY3RlZERhdGVUaW1lLCBmb3JtYXQpLFxuICAgICAgICB1dGNEYXRlVGltZTogdGhpcy5zZWxlY3RlZERhdGVUaW1lXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodGhpcy5wZXJzaWFuQ2hhcikge1xuICAgICAgdGhpcy5fSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGUuZm9ybWF0U3RyaW5nID0gSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LnRvUGVyc2lhbk51bWJlcih0aGlzLl9JSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZS5mb3JtYXRTdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9JSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZS5mb3JtYXRTdHJpbmcgPSBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkudG9FbmdsaXNoU3RyaW5nKHRoaXMuX0lJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlLmZvcm1hdFN0cmluZyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9JSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZTtcbiAgfVxuICBnZXQgZ2V0U2VsZWN0ZWREYXkoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5nZXRTZWxlY3RlZERhdGVPYmplY3QgPT0gbnVsbCB8fCB0aGlzLnJhbmdlU2VsZWN0b3IpIHsgcmV0dXJuIDA7IH1cbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RlZERhdGVPYmplY3QuZGF5O1xuICB9XG4gIHByaXZhdGUgZ2V0IGdldFNlbGVjdGVkUmFuZ2VEYXRlc09iamVjdCgpOiBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyUmFuZ2VEYXRlIHtcbiAgICBpZiAoIXRoaXMucmFuZ2VTZWxlY3RvciB8fCB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsICYmIHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9PSBudWxsKSB7IHJldHVybiBudWxsOyB9XG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkUmFuZ2VEYXRlc09iamVjdCAhPSBudWxsKSB7IHJldHVybiB0aGlzLl9zZWxlY3RlZFJhbmdlRGF0ZXNPYmplY3Q7IH1cbiAgICBjb25zdCBmb3JtYXQgPSB0aGlzLmdldERhdGVUaW1lRm9ybWF0KCk7XG4gICAgbGV0IHN0YXJ0RGF0ZTogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGU7XG4gICAgbGV0IGVuZERhdGU6IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlO1xuICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgc3RhcnREYXRlID0ge1xuICAgICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsID8gMCA6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuU3RhcnREYXRlVGltZS55ZWFyLFxuICAgICAgICBtb250aDogdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPT0gbnVsbCA/IDAgOiB0aGlzLnNlbGVjdGVkUGVyc2lhblN0YXJ0RGF0ZVRpbWUubW9udGgsXG4gICAgICAgIGRheTogdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPT0gbnVsbCA/IDAgOiB0aGlzLnNlbGVjdGVkUGVyc2lhblN0YXJ0RGF0ZVRpbWUuZGF5LFxuICAgICAgICBob3VyOiAwLFxuICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgIHNlY29uZDogMCxcbiAgICAgICAgbWlsbGlzZWNvbmQ6IDAsXG4gICAgICAgIGZvcm1hdFN0cmluZzogdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPT0gbnVsbCA/ICcnIDogdGhpcy5zZWxlY3RlZFBlcnNpYW5TdGFydERhdGVUaW1lLnRvU3RyaW5nKGZvcm1hdCksXG4gICAgICAgIHV0Y0RhdGVUaW1lOiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZVxuICAgICAgfTtcbiAgICAgIGVuZERhdGUgPSB7XG4gICAgICAgIHllYXI6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuRW5kRGF0ZVRpbWUgPT0gbnVsbCA/IDAgOiB0aGlzLnNlbGVjdGVkUGVyc2lhbkVuZERhdGVUaW1lLnllYXIsXG4gICAgICAgIG1vbnRoOiB0aGlzLnNlbGVjdGVkUGVyc2lhbkVuZERhdGVUaW1lID09IG51bGwgPyAwIDogdGhpcy5zZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZS5tb250aCxcbiAgICAgICAgZGF5OiB0aGlzLnNlbGVjdGVkUGVyc2lhbkVuZERhdGVUaW1lID09IG51bGwgPyAwIDogdGhpcy5zZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZS5kYXksXG4gICAgICAgIGhvdXI6IDAsXG4gICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgc2Vjb25kOiAwLFxuICAgICAgICBtaWxsaXNlY29uZDogMCxcbiAgICAgICAgZm9ybWF0U3RyaW5nOiB0aGlzLnNlbGVjdGVkUGVyc2lhbkVuZERhdGVUaW1lID09IG51bGwgPyAnJyA6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuRW5kRGF0ZVRpbWUudG9TdHJpbmcoZm9ybWF0KSxcbiAgICAgICAgdXRjRGF0ZVRpbWU6IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnREYXRlID0ge1xuICAgICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsID8gMCA6IHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIG1vbnRoOiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsID8gMCA6IHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lLmdldE1vbnRoKCksXG4gICAgICAgIGRheTogdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPT0gbnVsbCA/IDAgOiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZS5nZXREYXRlKCksXG4gICAgICAgIGhvdXI6IDAsXG4gICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgc2Vjb25kOiAwLFxuICAgICAgICBtaWxsaXNlY29uZDogMCxcbiAgICAgICAgZm9ybWF0U3RyaW5nOiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsID8gJycgOiBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkuZGF0ZVRpbWVUb1N0cmluZyh0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSwgZm9ybWF0KSxcbiAgICAgICAgdXRjRGF0ZVRpbWU6IHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lID09IG51bGwgPyBudWxsIDogdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWVcbiAgICAgIH07XG4gICAgICBlbmREYXRlID0ge1xuICAgICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUgPT0gbnVsbCA/IDAgOiB0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgbW9udGg6IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9PSBudWxsID8gMCA6IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZS5nZXRNb250aCgpLFxuICAgICAgICBkYXk6IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9PSBudWxsID8gMCA6IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZS5nZXREYXRlKCksXG4gICAgICAgIGhvdXI6IDAsXG4gICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgc2Vjb25kOiAwLFxuICAgICAgICBtaWxsaXNlY29uZDogMCxcbiAgICAgICAgZm9ybWF0U3RyaW5nOiB0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUgPT0gbnVsbCA/ICcnIDogSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LmRhdGVUaW1lVG9TdHJpbmcodGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lLCBmb3JtYXQpLFxuICAgICAgICB1dGNEYXRlVGltZTogdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lID09IG51bGwgPyBudWxsIDogdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZFJhbmdlRGF0ZXNPYmplY3QgPSB7XG4gICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGU6IGVuZERhdGVcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFJhbmdlRGF0ZXNPYmplY3Q7XG4gIH1cblxuICBnZXQgaXNSZWplY3RCdXR0b25EaXNhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsICYmIHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9PSBudWxsO1xuICB9XG4gIGdldCBpc0NvbmZpcm1CdXR0b25EaXNhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsIHx8IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9PSBudWxsO1xuICB9XG4gIHByaXZhdGUgZ2V0IGlzUmFuZ2VTZWxlY3RvclJlYWR5KCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5yYW5nZVNlbGVjdG9yKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsKSB7IHJldHVybiBmYWxzZTsgfSAvLyDZh9mG2YjYsiDYsdmI2LIg2LTYsdmI2Lkg2KfZhtiq2K7Yp9ioINmG2LTYr9mHINin2LPYqlxuICAgIGlmICh0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSAhPSBudWxsICYmIHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSAhPSBudWxsKSB7IHJldHVybiBmYWxzZTsgfSAvLyDYsdmG2Kwg2KrYp9ix24zYriDYp9mG2KrYrtin2Kgg2LTYr9mHINio2YjYr1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZGF5c0FuaW1hdGlvblN0YXRlTmFtZSA9ICd2aXNpYmxlJztcbiAgbW9udGhPclllYXJTZWxlY3RvclZpc2liaWxpdHlTdGF0ZU5hbWUgPSAnaGlkZGVuJztcbiAgbW9udGhTZWxlY3RvclZpc2liaWxpdHlTdGF0ZU5hbWUgPSAnaGlkZGVuJztcbiAgeWVhclNlbGVjdG9yVmlzaWJpbGl0eVN0YXRlTmFtZSA9ICdoaWRkZW4nO1xuXG4gIHNob3dNb250aFNlbGVjdG9yQmxvY2s6IGJvb2xlYW47XG4gIHNob3dZZWFyc1NlbGVjdG9yQmxvY2s6IGJvb2xlYW47XG5cbiAgLy8g2KrYp9ix24zYrtuMINqp2Ycg2KjYsdin24wg2YbZhdin24zYtCDYqtmC2YjbjNmFINin2LPYqtmB2KfYr9mHINmF24wg2LTZiNivXG4gIHByaXZhdGUgX2RhdGVUaW1lOiBEYXRlID0gbnVsbDtcblxuICBwcml2YXRlIF9wZXJzaWFuRGF0ZVRpbWU6IFBlcnNpYW5EYXRlVGltZSA9IG51bGw7XG5cbiAgLy8g2LHZiNiyINin2YbYqtiu2KfYqCDYtNiv2YdcbiAgcHJpdmF0ZSBfc2VsZWN0ZWREYXRlVGltZTogRGF0ZSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWU6IFBlcnNpYW5EYXRlVGltZSA9IG51bGw7XG5cbiAgLy8g2LHZiNiyINi02LHZiNi5INin2YbYqtiu2KfYqCDYtNiv2Ycg2K/YsSDYsdmG2Kwg2LPZhNqp2KrZiNixXG4gIHByaXZhdGUgX3NlbGVjdGVkU3RhcnREYXRlVGltZTogRGF0ZSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRQZXJzaWFuU3RhcnREYXRlVGltZTogUGVyc2lhbkRhdGVUaW1lID0gbnVsbDtcblxuICAvLyDYsdmI2LIg2b7Yp9uM2KfZhtuMINin2YbYqtiu2KfYqCDYtNiv2Ycg2K/YsSDYsdmG2Kwg2LPZhNqp2KrZiNixXG4gIHByaXZhdGUgX3NlbGVjdGVkRW5kRGF0ZVRpbWU6IERhdGUgPSBudWxsO1xuXG4gIC8vINqp2YXYqtix24zZhiDYqtin2LHbjNiuINmF2KzYp9iyINio2LHYp9uMINin2YbYqtiu2KfYqFxuICBwcml2YXRlIF9taW5EYXRlOiBEYXRlID0gbnVsbDtcblxuICAvLyDYqNuM2LTYqtix24zZhiDYqtin2LHbjNiuINmF2KzYp9iyINio2LHYp9uMINin2YbYqtiu2KfYqFxuICBwcml2YXRlIF9tYXhEYXRlOiBEYXRlID0gbnVsbDtcblxuICBwcml2YXRlIF9zZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZTogUGVyc2lhbkRhdGVUaW1lID0gbnVsbDtcblxuICB5ZWFyc1RvU2VsZWN0OiBzdHJpbmdbXTtcbiAgZGF5c0luTW9udGg6IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXlbXTtcblxuICBwcml2YXRlIF9yZXNvdXJjZXM6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX3llYXIgPSAwO1xuICBwcml2YXRlIF95ZWFyU3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX21vbnRoID0gMDtcbiAgcHJpdmF0ZSBfbW9udGhOYW1lID0gJyc7XG4gIHByaXZhdGUgX21vbnRoTmFtZXM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgX2hvdXIgPSAwO1xuICBwcml2YXRlIF9ob3VyU3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX21pbnV0ZSA9IDA7XG4gIHByaXZhdGUgX21pbnV0ZVN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9zZWNvbmQgPSAwO1xuICBwcml2YXRlIF9zZWNvbmRTdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfd2Vla2RheU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIF9JSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZTogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGUgPSBudWxsO1xuXG4gIHByaXZhdGUgX3NlbGVjdGVkUmFuZ2VEYXRlc09iamVjdDogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlclJhbmdlRGF0ZSA9IG51bGw7XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnJhbmdlU2VsZWN0b3IpIHsgdGhpcy50aW1lUGlja2VyID0gZmFsc2U7IH1cbiAgICBpZiAoIXRoaXMuaXNQZXJzaWFuKSB7IHRoaXMucGVyc2lhbkNoYXIgPSBmYWxzZTsgfVxuICAgIC8vIGlmICh0aGlzLmluaXRpYWxWYWx1ZSAhPSAnJykge1xuICAgIC8vICAgaWYgKHRoaXMucmFuZ2VTZWxlY3Rvcikge1xuICAgIC8vICAgICB0cnkge1xuICAgIC8vICAgICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgIC8vICAgICAgICAgY29uc3QgcmFuZ2VzID0gTWRzRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LmdldFBlcnNpYW5EYXRlUmFuZ2VzKHRoaXMuaW5pdGlhbFZhbHVlKTtcbiAgICAvLyAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRSYW5nZVBlcnNpYW5EYXRlVGltZXMocmFuZ2VzKTtcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY29uc3QgcmFuZ2VzID0gTWRzRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LmdldERhdGVSYW5nZXModGhpcy5pbml0aWFsVmFsdWUpO1xuICAgIC8vICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFJhbmdlRGF0ZVRpbWVzKHJhbmdlcyk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZTtcbiAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xuICAgIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ3ZhbHVlIGlzIGluIHdyb25nIGZvcm1hdCwgd2hlbiByYW5nZVNlbGVjdG9yIGlzIHRydWUgeW91IHNob3VsZCB3cml0ZSB2YWx1ZSBsaWtlIFwiMTM5Ni8wMy8wMSAtIDEzOTYvMDMvMTVcIiBvciBcIjIwMTcvMy85IC0gMjAxNy8zLzEwXCInLCBlKTtcbiAgICAvLyAgICAgICB0aGlzLnNldFNlbGVjdGVkUmFuZ2VEYXRlVGltZXMobnVsbCk7XG4gICAgLy8gICAgICAgdGhpcy5kYXRlVGltZSA9IG51bGw7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgaWYgKHRoaXMuaXNQZXJzaWFuKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmRhdGVUaW1lID0gUGVyc2lhbkRhdGVUaW1lLnBhcnNlKHRoaXMuaW5pdGlhbFZhbHVlKS50b0RhdGUoKTtcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5kYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2UodGhpcy5pbml0aWFsVmFsdWUpKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyAgICAgICBjb25zb2xlLmVycm9yKCd2YWx1ZSBpcyBpbiB3cm9uZyBmb3JtYXQsIHlvdSBzaG91bGQgd3JpdGUgdmFsdWUgbGlrZSBcIjEzOTYvMDMvMDEgIDExOjMwOjI3XCIgb3IgXCIyMDE3LzA5LzAzICAxMTozMDowMFwiLCB5b3UgY2FuIHJlbW92ZSB0aW1lJywgZSk7XG4gICAgLy8gICAgICAgdGhpcy5kYXRlVGltZSA9IG51bGw7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdGhpcy5kYXRlVGltZSA9IG51bGw7XG4gICAgLy8gfVxuICAgIC8vIHRoaXMudXBkYXRlWWVhcnNMaXN0KCk7XG4gICAgLy8gdGhpcy51cGRhdGVNb250aERheXMoKTtcblxuICAgIC8vIGlmICh0aGlzLmluaXRpYWxWYWx1ZSAhPSAnJykge1xuICAgIC8vICAgaWYgKHRoaXMucmFuZ2VTZWxlY3Rvcikge1xuICAgIC8vICAgICB0aGlzLmZpcmVSYW5nZUNoYW5nZUV2ZW50KCk7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCgpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICB0aGlzLmRhdGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLnVwZGF0ZVllYXJzTGlzdCgpO1xuICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIHNwbGl0U3RhcnRFbmREYXRlU3RyaW5nKGRhdGVTdHJpbmc6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZy5zcGxpdCgnIC0gJyk7XG4gIH1cbiAgcHJpdmF0ZSBzZXRTZWxlY3RlZFJhbmdlRGF0ZVRpbWVzKGRhdGVUaW1lczogRGF0ZVtdKTogdm9pZCB7XG4gICAgZGF0ZVRpbWVzID0gZGF0ZVRpbWVzID09IG51bGwgfHwgZGF0ZVRpbWVzLmxlbmd0aCA8IDIgPyBbbnVsbCwgbnVsbF0gOiBkYXRlVGltZXM7XG4gICAgdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPSBkYXRlVGltZXNbMF07XG4gICAgdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lID0gZGF0ZVRpbWVzWzFdO1xuICB9XG4gIHByaXZhdGUgc2V0U2VsZWN0ZWRSYW5nZVBlcnNpYW5EYXRlVGltZXMocGVyc2lhbkRhdGVUaW1lczogUGVyc2lhbkRhdGVUaW1lW10pOiB2b2lkIHtcbiAgICBjb25zdCByYW5nZXMgPSBbXG4gICAgICBwZXJzaWFuRGF0ZVRpbWVzWzBdID09IG51bGwgPyBudWxsIDogcGVyc2lhbkRhdGVUaW1lc1swXS50b0RhdGUoKSxcbiAgICAgIHBlcnNpYW5EYXRlVGltZXNbMV0gPT0gbnVsbCA/IG51bGwgOiBwZXJzaWFuRGF0ZVRpbWVzWzFdLnRvRGF0ZSgpXG4gICAgXTtcbiAgICB0aGlzLnNldFNlbGVjdGVkUmFuZ2VEYXRlVGltZXMocmFuZ2VzKTtcbiAgfVxuICBwcml2YXRlIGNsZWFyVGltZShkYXRlVGltZTogRGF0ZSk6IHZvaWQge1xuICAgIGlmIChkYXRlVGltZSA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgIGRhdGVUaW1lLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB9XG4gIHByaXZhdGUgZ2V0RGF0ZVRpbWVGb3JtYXQoKTogc3RyaW5nIHtcbiAgICBsZXQgZm9ybWF0ID0gdGhpcy5mb3JtYXQ7XG4gICAgaWYgKGZvcm1hdC50cmltKCkgPT0gJycpIHtcbiAgICAgIGZvcm1hdCA9ICd5eXl5L01NL2RkJztcbiAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXIgJiYgIXRoaXMucmFuZ2VTZWxlY3Rvcikge1xuICAgICAgICBmb3JtYXQgKz0gJyAgIGhoOm1tOnNzJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucmFuZ2VTZWxlY3RvciB8fCAhdGhpcy50aW1lUGlja2VyKSB7XG4gICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvdCp8Zip8cyp8bSp8aCp8SCovLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXQ7XG4gIH1cblxuICBzZXREYXRlVGltZUJ5RGF0ZShkYXRlVGltZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUgPSBkYXRlVGltZTtcbiAgICB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9ICFkYXRlVGltZSA/IG51bGwgOiBuZXcgRGF0ZShkYXRlVGltZSk7XG4gIH1cbiAgc2V0RGF0ZVRpbWVSYW5nZXNCeURhdGUoc3RhcnREYXRlVGltZTogRGF0ZSwgZW5kRGF0ZVRpbWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVUaW1lID0gdGhpcy5zZWxlY3RlZERhdGVUaW1lID0gc3RhcnREYXRlVGltZTtcbiAgICB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9IHN0YXJ0RGF0ZVRpbWUgPT0gbnVsbCA/IG51bGwgOiBuZXcgRGF0ZShzdGFydERhdGVUaW1lKTtcbiAgICB0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUgPSBlbmREYXRlVGltZSA9PSBudWxsID8gbnVsbCA6IG5ldyBEYXRlKGVuZERhdGVUaW1lKTtcbiAgfVxuXG4gIC8vIHNldE1pbkRhdGUobWluRGF0ZTogRGF0ZSk6IHZvaWQgeyAgXG4gIC8vICAgdGhpcy5taW5EYXRlICA9IG1pbkRhdGUgPT0gbnVsbCA/IG51bGwgOiBuZXcgRGF0ZShtaW5EYXRlKTtcbiAgLy8gfVxuXG4gIC8vIHNldE1heERhdGUobWF4RGF0ZTogRGF0ZSk6IHZvaWQgeyBcbiAgLy8gICB0aGlzLm1heERhdGUgID0gbWF4RGF0ZSA9PSBudWxsID8gbnVsbCA6IG5ldyBEYXRlKG1heERhdGUpOyBcbiAgLy8gfVxuXG4gIHNldERhdGVUaW1lQnlTdHJpbmcoZGF0ZVRpbWVTdHJpbmc6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZGF0ZVRpbWVTdHJpbmcgPT0gJycpIHtcbiAgICAgICAgdGhpcy5jbGVhckRhdGVUaW1lUGlja2VyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgICBpZiAodGhpcy5yYW5nZVNlbGVjdG9yKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRBbmRFbmREYXRlQXJyYXkgPSB0aGlzLnNwbGl0U3RhcnRFbmREYXRlU3RyaW5nKGRhdGVUaW1lU3RyaW5nKTtcbiAgICAgICAgICB0aGlzLmRhdGVUaW1lID0gdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPSBQZXJzaWFuRGF0ZVRpbWUucGFyc2Uoc3RhcnRBbmRFbmREYXRlQXJyYXlbMF0pLnRvRGF0ZSgpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9IFBlcnNpYW5EYXRlVGltZS5wYXJzZShzdGFydEFuZEVuZERhdGVBcnJheVsxXSkudG9EYXRlKCk7XG4gICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lID4gdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0YXJ0IGRhdGUgbXVzdCBiZSBsZXNzIHRoYW4gZW5kIGRhdGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXRlVGltZSA9IHRoaXMuc2VsZWN0ZWREYXRlVGltZSA9IFBlcnNpYW5EYXRlVGltZS5wYXJzZShkYXRlVGltZVN0cmluZykudG9EYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnJhbmdlU2VsZWN0b3IpIHtcbiAgICAgICAgICBjb25zdCBzdGFydEFuZEVuZERhdGVBcnJheSA9IHRoaXMuc3BsaXRTdGFydEVuZERhdGVTdHJpbmcoZGF0ZVRpbWVTdHJpbmcpO1xuICAgICAgICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2Uoc3RhcnRBbmRFbmREYXRlQXJyYXlbMF0pKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKHN0YXJ0QW5kRW5kRGF0ZUFycmF5WzFdKSk7XG4gICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lID4gdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0YXJ0IGRhdGUgbXVzdCBiZSBsZXNzIHRoYW4gZW5kIGRhdGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXRlVGltZSA9IHRoaXMuc2VsZWN0ZWREYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0ZVRpbWVTdHJpbmcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmFuZ2VTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmZpcmVSYW5nZUNoYW5nZUV2ZW50KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCgpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmNsZWFyRGF0ZVRpbWVQaWNrZXIoKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgY2xlYXJEYXRlVGltZVBpY2tlcigpIHtcbiAgICB0aGlzLmRhdGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUgPSB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9IG51bGw7XG4gICAgdGhpcy5yZXNldFRvRmFsc2VSYW5nZVBhcmFtZXRlcnNJbk1vbnRoRGF5cygpO1xuICAgIGlmICh0aGlzLnJhbmdlU2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZmlyZVJhbmdlQ2hhbmdlRXZlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlWWVhcnNMaXN0KCk6IHZvaWQge1xuICAgIHRoaXMueWVhcnNUb1NlbGVjdCA9IFtdO1xuICAgIGNvbnN0IHNlbGVjdGVkWWVhciA9IHRoaXMueWVhcjtcbiAgICBmb3IgKGxldCBpID0gc2VsZWN0ZWRZZWFyIC0gMzc7IGkgPD0gc2VsZWN0ZWRZZWFyICsgMzc7IGkrKykge1xuICAgICAgaWYgKHRoaXMucGVyc2lhbkNoYXIpIHtcbiAgICAgICAgdGhpcy55ZWFyc1RvU2VsZWN0LnB1c2goSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LnRvUGVyc2lhbk51bWJlcihpLnRvU3RyaW5nKCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMueWVhcnNUb1NlbGVjdC5wdXNoKGkudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgZ2V0RGF5T2JqZWN0KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuLCBob2xpRGF5OiBib29sZWFuLCBpc1RvZGF5OiBib29sZWFuKTogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRheSB7XG4gICAgbGV0IGlzV2l0aGluRGF0ZVJhbmdlID0gZmFsc2U7XG4gICAgbGV0IGlzU3RhcnRPckVuZE9mUmFuZ2UgPSBmYWxzZTtcbiAgIFxuXG4gICAgY29uc3QgZGF0ZVRpbWUgPSB0aGlzLmlzUGVyc2lhblxuICAgICAgICA/IFBlcnNpYW5EYXRlVGltZS5mcm9tUGVyc2lhbkRhdGUoeWVhciwgbW9udGgsIGRheSkudG9EYXRlKClcbiAgICAgICAgOiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblxuICAgIGlmICh0aGlzLnJhbmdlU2VsZWN0b3IgJiYgdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgIT0gbnVsbCkgeyAgICAgIFxuICAgICAgaXNXaXRoaW5EYXRlUmFuZ2UgPSBkYXRlVGltZSA+PSB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUgIT0gbnVsbCkge1xuICAgICAgICBpc1dpdGhpbkRhdGVSYW5nZSA9IGlzV2l0aGluRGF0ZVJhbmdlICYmIGRhdGVUaW1lIDw9IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZTtcbiAgICAgIH1cbiAgICAgIGlzU3RhcnRPckVuZE9mUmFuZ2UgPVxuICAgICAgICAodGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgIT0gbnVsbCAmJiBkYXRlVGltZS5nZXRUaW1lKCkgPT0gdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUuZ2V0VGltZSgpKSB8fFxuICAgICAgICAodGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lICE9IG51bGwgJiYgZGF0ZVRpbWUuZ2V0VGltZSgpID09IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZS5nZXRUaW1lKCkpO1xuICAgIH1cblxuICAgIGxldCBpY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXkgPSB7XG4gICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgZGF5OiBkYXksXG4gICAgICBkYXlTdHJpbmc6IHRoaXMucGVyc2lhbkNoYXIgPyBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkudG9QZXJzaWFuTnVtYmVyKGRheS50b1N0cmluZygpKSA6IGRheS50b1N0cmluZygpLFxuICAgICAgZGlzYWJsZTogZGlzYWJsZWQsXG4gICAgICBob2xpRGF5OiBob2xpRGF5LFxuICAgICAgdG9kYXk6IGlzVG9kYXksXG4gICAgICBpc1dpdGhpblJhbmdlOiBpc1dpdGhpbkRhdGVSYW5nZSxcbiAgICAgIGlzU3RhcnRPckVuZE9mUmFuZ2U6IGlzU3RhcnRPckVuZE9mUmFuZ2VcbiAgICB9IGFzIElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXk7XG5cbiAgICB0aGlzLnVwZGF0ZUlzQWxsb3dTZWxlY3RlZChpY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXkpXG4gIFxuICAgIHJldHVybiBpY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUlzQWxsb3dTZWxlY3RlZChpY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXk6SUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRheSl7XG4gICAgbGV0IGlzQWxsb3dTZWxlY3RlZCA9IHRydWU7XG5cbiAgICBsZXQgeWVhciA9aWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF5LnllYXI7XG4gICAgbGV0IG1vbnRoID1pY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXkubW9udGg7XG4gICAgbGV0IGRheSA9aWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF5LmRheTtcblxuICAgIGNvbnN0IGRhdGVUaW1lID0gdGhpcy5pc1BlcnNpYW5cbiAgICA/IFBlcnNpYW5EYXRlVGltZS5mcm9tUGVyc2lhbkRhdGUoeWVhciwgbW9udGgsIGRheSkudG9EYXRlKClcbiAgICA6IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuXG5cbiAgICBpZih0aGlzLl9taW5EYXRlICE9IG51bGwgJiYgaXNBbGxvd1NlbGVjdGVkICl7XG4gICAgICBpc0FsbG93U2VsZWN0ZWQgPSB0aGlzLl9taW5EYXRlIDw9IGRhdGVUaW1lO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX21heERhdGUgIT0gbnVsbCAmJiBpc0FsbG93U2VsZWN0ZWQgKXtcbiAgICAgIGlzQWxsb3dTZWxlY3RlZCA9IHRoaXMuX21heERhdGUgPj0gZGF0ZVRpbWU7XG4gICAgfVxuXG4gICAgaWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF5LmlzQWxsb3dTZWxlY3RlZCA9IGlzQWxsb3dTZWxlY3RlZDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTW9udGhEYXlzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRheXM6IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXlbXSA9IFtdO1xuICAgIGxldCBjb3VudGVyID0gMCxcbiAgICAgIHllYXIgPSAwLFxuICAgICAgbW9udGggPSAwO1xuICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgY29uc3QgcGVyc2lhbkRhdGVUaW1lTm93ID0gUGVyc2lhbkRhdGVUaW1lLm5vdztcbiAgICAgIGNvbnN0IHRvZGF5ID0gcGVyc2lhbkRhdGVUaW1lTm93LmRheTtcbiAgICAgIGNvbnN0IGlzWWVhckFuZE1vbnRoSW5DdXJyZW50TW9udGggPSBwZXJzaWFuRGF0ZVRpbWVOb3cueWVhciA9PSB0aGlzLnBlcnNpYW5EYXRlVGltZS55ZWFyICYmIHBlcnNpYW5EYXRlVGltZU5vdy5tb250aCA9PSB0aGlzLnBlcnNpYW5EYXRlVGltZS5tb250aDtcbiAgICAgIC8vINix2YjYstmH2KfbjCDZhdin2Ycg2YLYqNmEXG4gICAgICBpZiAodGhpcy5wZXJzaWFuU3RhcnREYXlPZk1vbnRoICE9IFBlcnNpYW5EYXlPZldlZWsuU2F0dXJkYXkpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQZXJzaWFuTW9udGggPSB0aGlzLnBlcnNpYW5EYXRlVGltZS5hZGRNb250aHMoLTEpO1xuICAgICAgICB5ZWFyID0gcHJldmlvdXNQZXJzaWFuTW9udGgueWVhcjtcbiAgICAgICAgbW9udGggPSBwcmV2aW91c1BlcnNpYW5Nb250aC5tb250aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IHByZXZpb3VzUGVyc2lhbk1vbnRoLmdldE1vbnRoRGF5cyAtIHRoaXMucGVyc2lhblN0YXJ0RGF5T2ZNb250aCArIDE7IGkgPD0gcHJldmlvdXNQZXJzaWFuTW9udGguZ2V0TW9udGhEYXlzOyBpKyspIHtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgZGF5cy5wdXNoKHRoaXMuZ2V0RGF5T2JqZWN0KHllYXIsIG1vbnRoLCBpLCB0cnVlLCBmYWxzZSwgZmFsc2UpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8g2LHZiNiy2YfYp9uMINmF2KfZhyDYrNin2LHbjFxuICAgICAgeWVhciA9IHRoaXMucGVyc2lhbkRhdGVUaW1lLnllYXI7XG4gICAgICBtb250aCA9IHRoaXMucGVyc2lhbkRhdGVUaW1lLm1vbnRoO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5wZXJzaWFuRGF0ZVRpbWUuZ2V0TW9udGhEYXlzOyBpKyspIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgICBkYXlzLnB1c2godGhpcy5nZXREYXlPYmplY3QoeWVhciwgbW9udGgsIGksIGZhbHNlLCBmYWxzZSwgaXNZZWFyQW5kTW9udGhJbkN1cnJlbnRNb250aCAmJiBpID09IHRvZGF5KSk7XG4gICAgICB9XG4gICAgICAvLyDYsdmI2LLZh9in24wg2YXYp9mHINio2LnYr1xuICAgICAgY29uc3QgbmV4dE1vbnRoUGVyc2lhbkRhdGVUaW1lID0gdGhpcy5wZXJzaWFuRGF0ZVRpbWUuYWRkTW9udGhzKDEpO1xuICAgICAgeWVhciA9IG5leHRNb250aFBlcnNpYW5EYXRlVGltZS55ZWFyO1xuICAgICAgbW9udGggPSBuZXh0TW9udGhQZXJzaWFuRGF0ZVRpbWUubW9udGg7XG4gICAgICBmb3IgKGxldCBpID0gMTsgY291bnRlciA8PSAoNiAqIDcpIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgZGF5cy5wdXNoKHRoaXMuZ2V0RGF5T2JqZWN0KHllYXIsIG1vbnRoLCBpLCB0cnVlLCBmYWxzZSwgZmFsc2UpKTtcbiAgICAgIH1cbiAgICAgIC8vINiv2LHYs9iqINqp2LHYr9mGINix2KfYs9iqINio2Ycg2obZviDYqNmI2K/ZhiDYqtmC2YjbjNmFXG4gICAgICBjb25zdCB0ZW1wID0gZGF5cy5zbGljZSgwKTtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDY7IHJvdysrKSB7XG4gICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDc7IGNvbHVtbisrKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXgxID0gcm93ICogNyArIGNvbHVtbjtcbiAgICAgICAgICBjb25zdCBpbmRleDIgPSBNYXRoLmFicygocm93ICsgMSkgKiA3IC0gKGNvbHVtbiArIDEpKTtcbiAgICAgICAgICBkYXlzW2luZGV4MV0gPSB0ZW1wW2luZGV4Ml07XG4gICAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgICBkYXlzW2luZGV4MV0uaG9saURheSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGVUaW1lTm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gZGF0ZVRpbWVOb3cuZ2V0RGF0ZSgpO1xuICAgICAgY29uc3QgaXNZZWFyQW5kTW9udGhJbkN1cnJlbnRNb250aCA9IGRhdGVUaW1lTm93LmdldE1vbnRoKCkgPT0gdGhpcy5kYXRlVGltZS5nZXRNb250aCgpICYmIGRhdGVUaW1lTm93LmdldEZ1bGxZZWFyKCkgPT0gdGhpcy5kYXRlVGltZS5nZXRGdWxsWWVhcigpO1xuICAgICAgLy8g2LHZiNiy2YfYp9uMINmF2KfZhyDZgtio2YRcbiAgICAgIGlmICh0aGlzLmdyZWdvcmlhblN0YXJ0RGF5T2ZNb250aCAhPSBHcmVnb3JpYW5EYXlPZldlZWsuU2F0dXJkYXkpIHtcbiAgICAgICAgY29uc3QgZGF0ZVRpbWVDbG9uZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZVRpbWUpO1xuICAgICAgICBkYXRlVGltZUNsb25lLnNldE1vbnRoKHRoaXMuZGF0ZVRpbWUuZ2V0TW9udGgoKSk7XG4gICAgICAgIHllYXIgPSBkYXRlVGltZUNsb25lLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIG1vbnRoID0gZGF0ZVRpbWVDbG9uZS5nZXRNb250aCgpO1xuICAgICAgICBjb25zdCBwcmV2aW91c01vbnRoRGF5cyA9IG5ldyBEYXRlKGRhdGVUaW1lQ2xvbmUuZ2V0RnVsbFllYXIoKSwgZGF0ZVRpbWVDbG9uZS5nZXRNb250aCgpLCAwKS5nZXREYXRlKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSBwcmV2aW91c01vbnRoRGF5cyAtIHRoaXMuZ3JlZ29yaWFuU3RhcnREYXlPZk1vbnRoICsgMTsgaSA8PSBwcmV2aW91c01vbnRoRGF5czsgaSsrKSB7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgIGRheXMucHVzaCh0aGlzLmdldERheU9iamVjdCh5ZWFyLCBtb250aCAtIDEsIGksIHRydWUsIGZhbHNlLCBmYWxzZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyDYsdmI2LLZh9in24wg2YXYp9mHINis2KfYsduMXG4gICAgICB5ZWFyID0gdGhpcy5kYXRlVGltZS5nZXRGdWxsWWVhcigpO1xuICAgICAgbW9udGggPSB0aGlzLmRhdGVUaW1lLmdldE1vbnRoKCk7XG4gICAgICBjb25zdCBjdXJyZW50TW9udGhEYXlzID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGN1cnJlbnRNb250aERheXM7IGkrKykge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIGRheXMucHVzaCh0aGlzLmdldERheU9iamVjdCh5ZWFyLCBtb250aCwgaSwgZmFsc2UsIGZhbHNlLCBpc1llYXJBbmRNb250aEluQ3VycmVudE1vbnRoICYmIGkgPT0gdG9kYXkpKTtcbiAgICAgIH1cbiAgICAgIC8vINix2YjYstmH2KfbjCDZhdin2Ycg2KjYudivXG4gICAgICBjb25zdCBuZXh0TW9udGhEYXRlVGltZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMSk7XG4gICAgICB5ZWFyID0gbmV4dE1vbnRoRGF0ZVRpbWUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIG1vbnRoID0gbmV4dE1vbnRoRGF0ZVRpbWUuZ2V0TW9udGgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBjb3VudGVyIDw9ICg2ICogNykgLSAxOyBpKyspIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgICBkYXlzLnB1c2godGhpcy5nZXREYXlPYmplY3QoeWVhciwgbW9udGgsIGksIHRydWUsIGZhbHNlLCBmYWxzZSkpO1xuICAgICAgfVxuICAgICAgLy8g2KrYudi324zZhCDaqdix2K/ZhiDYsdmI2LLZh9in24wg2KzZhdi52YdcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDY7IHJvdysrKSB7XG4gICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDc7IGNvbHVtbisrKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXgxID0gcm93ICogNyArIGNvbHVtbjtcbiAgICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICAgIGRheXNbaW5kZXgxXS5ob2xpRGF5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kYXlzSW5Nb250aCA9IGRheXM7XG4gIH1cbiAgcHJpdmF0ZSBmaXJlQ2hhbmdlRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHRoaXMuZ2V0U2VsZWN0ZWREYXRlT2JqZWN0KTtcbiAgfVxuICBwcml2YXRlIGZpcmVSYW5nZUNoYW5nZUV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMucmFuZ2VEYXRlQ2hhbmdlZC5lbWl0KHRoaXMuZ2V0U2VsZWN0ZWRSYW5nZURhdGVzT2JqZWN0KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRUb0ZhbHNlUmFuZ2VQYXJhbWV0ZXJzSW5Nb250aERheXMoKSB7XG4gICAgZm9yIChjb25zdCBkYXkgb2YgdGhpcy5kYXlzSW5Nb250aCkge1xuICAgICAgZGF5LmlzV2l0aGluUmFuZ2UgPSBmYWxzZTtcbiAgICAgIGRheS5pc1N0YXJ0T3JFbmRPZlJhbmdlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqINix24zYs9iqINqp2LHYr9mGINiq2YXYp9mF24wg2KfYt9mE2KfYudin2Kog2LHZiNiy2YfYp9uMINmF2KfZh1xuICAgKi9cbiAgcHJpdmF0ZSByZXNldE1vbnRoRGF5c1dpdGhDb250ZW50KCkge1xuICAgIGlmICh0aGlzLmRheXNJbk1vbnRoID09IHVuZGVmaW5lZCkgeyByZXR1cm47IH1cbiAgICBmb3IgKGNvbnN0IGRheSBvZiB0aGlzLmRheXNJbk1vbnRoKSB7XG4gICAgICBkYXkuaXNXaXRoaW5SYW5nZSA9IGZhbHNlO1xuICAgICAgZGF5LmlzU3RhcnRPckVuZE9mUmFuZ2UgPSBmYWxzZTtcbiAgICAgIGRheS5kYXlTdHJpbmcgPSB0aGlzLnBlcnNpYW5DaGFyXG4gICAgICAgID8gSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LnRvUGVyc2lhbk51bWJlcihkYXkuZGF5LnRvU3RyaW5nKCkpXG4gICAgICAgIDogZGF5LmRheS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDZhdiu2YHbjCDaqdix2K/ZhiDYqNmE2KfaqSDZh9in24wg2KfZhtiq2K7Yp9ioINmF2KfZhyDZiCDYs9in2YRcbiAgICovXG4gIGhpZGVTZWxlY01vbnRoQW5kWWVhckJsb2NrKCk6IHZvaWQge1xuICAgIHRoaXMubW9udGhPclllYXJTZWxlY3RvclZpc2liaWxpdHlTdGF0ZU5hbWUgPSAnaGlkZGVuJztcbiAgICB0aGlzLm1vbnRoU2VsZWN0b3JWaXNpYmlsaXR5U3RhdGVOYW1lID0gJ2hpZGRlbic7XG4gICAgdGhpcy55ZWFyU2VsZWN0b3JWaXNpYmlsaXR5U3RhdGVOYW1lID0gJ2hpZGRlbic7XG4gIH1cbiAgcmVzZXRJbmNvbXBsZXRlUmFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsIHx8IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9IG51bGw7XG4gICAgICB0aGlzLl9zZWxlY3RlZFBlcnNpYW5TdGFydERhdGVUaW1lID0gdGhpcy5fc2VsZWN0ZWRQZXJzaWFuRW5kRGF0ZVRpbWUgPSBudWxsO1xuICAgICAgdGhpcy5yZXNldFRvRmFsc2VSYW5nZVBhcmFtZXRlcnNJbk1vbnRoRGF5cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDaqdmE24zaqSDYsdmI24wg2K/aqdmF2Ycg2YbYp9mFINmF2KfZhyDYr9ixINio2KfZhNin24wg2b7bjNqp2LEg2KjYsdin24wg2KfZhtiq2K7Yp9ioINmF2KfZh1xuICAgKi9cbiAgbW9udGhCdXR0b25PbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMubW9udGhPclllYXJTZWxlY3RvclZpc2liaWxpdHlTdGF0ZU5hbWUgPSAndmlzaWJsZSc7XG4gICAgdGhpcy5tb250aFNlbGVjdG9yVmlzaWJpbGl0eVN0YXRlTmFtZSA9ICd2aXNpYmxlJztcbiAgfVxuICAvKipcbiAgICog2qnZhNuM2qkg2LHZiNuMINiv2qnZhdmHINiz2KfZhCDYr9ixINio2KfZhNin24wg2b7bjNqp2LEg2KjYsdin24wg2KfZhtiq2K7Yp9ioINiz2KfZhFxuICAgKi9cbiAgc2VsZWN0WWVhckJ1dHRvbk9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5tb250aE9yWWVhclNlbGVjdG9yVmlzaWJpbGl0eVN0YXRlTmFtZSA9ICd2aXNpYmxlJztcbiAgICB0aGlzLnllYXJTZWxlY3RvclZpc2liaWxpdHlTdGF0ZU5hbWUgPSAndmlzaWJsZSc7XG4gIH1cbiAgbW9udGhzQmxvY2tWaXNpYmlsaXR5QW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZU1vbnRoRGF5cygpO1xuICB9XG4gIHllYXJzQmxvY2tWaXNpYmlsaXR5QW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVllYXJzTGlzdCgpO1xuICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gIH1cbiAgbmV4dFllYXJCdXR0b25PbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgdGhpcy5kYXRlVGltZSA9IHRoaXMucGVyc2lhbkRhdGVUaW1lLmFkZFllYXJzKDEpLnRvRGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGVUaW1lID0gbmV3IERhdGUodGhpcy5kYXRlVGltZS5zZXRGdWxsWWVhcih0aGlzLmRhdGVUaW1lLmdldEZ1bGxZZWFyKCkgKyAxKSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gIH1cbiAgbmV4dE1vbnRoQnV0dG9uT25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1BlcnNpYW4pIHtcbiAgICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnBlcnNpYW5EYXRlVGltZS5hZGRNb250aHMoMSkudG9EYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZVRpbWUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lLnNldE1vbnRoKHRoaXMuZGF0ZVRpbWUuZ2V0TW9udGgoKSArIDEpKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcbiAgfVxuICBwcmV2aW91c01vbnRoQnV0dG9uT25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1BlcnNpYW4pIHtcbiAgICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnBlcnNpYW5EYXRlVGltZS5hZGRNb250aHMoLTEpLnRvRGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGVUaW1lID0gbmV3IERhdGUodGhpcy5kYXRlVGltZS5zZXRNb250aCh0aGlzLmRhdGVUaW1lLmdldE1vbnRoKCkgLSAxKSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gIH1cbiAgcHJldmlvdXNZZWFyQnV0dG9uT25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1BlcnNpYW4pIHtcbiAgICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnBlcnNpYW5EYXRlVGltZS5hZGRZZWFycygtMSkudG9EYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZVRpbWUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lLnNldEZ1bGxZZWFyKHRoaXMuZGF0ZVRpbWUuZ2V0RnVsbFllYXIoKSAtIDEpKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcbiAgfVxuICBob3VyVXBCdXR0b25PbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZVRpbWUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lLnNldEhvdXJzKHRoaXMuZGF0ZVRpbWUuZ2V0SG91cnMoKSArIDEpKTtcbiAgfVxuICBob3VyRG93bkJ1dHRvbk9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlVGltZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZVRpbWUuc2V0SG91cnModGhpcy5kYXRlVGltZS5nZXRIb3VycygpIC0gMSkpO1xuICB9XG4gIG1pbnV0ZVVwQnV0dG9uT25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVUaW1lID0gbmV3IERhdGUodGhpcy5kYXRlVGltZS5zZXRNaW51dGVzKHRoaXMuZGF0ZVRpbWUuZ2V0TWludXRlcygpICsgMSkpO1xuICB9XG4gIG1pbnV0ZURvd25CdXR0b25PbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZVRpbWUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lLnNldE1pbnV0ZXModGhpcy5kYXRlVGltZS5nZXRNaW51dGVzKCkgLSAxKSk7XG4gIH1cbiAgc2Vjb25kVXBCdXR0b25PbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZVRpbWUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lLnNldFNlY29uZHModGhpcy5kYXRlVGltZS5nZXRTZWNvbmRzKCkgKyAxKSk7XG4gIH1cbiAgc2Vjb25kRG93bkJ1dHRvbk9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlVGltZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZVRpbWUuc2V0U2Vjb25kcyh0aGlzLmRhdGVUaW1lLmdldFNlY29uZHMoKSAtIDEpKTtcbiAgfVxuICAvKipcbiAgICog2KfZhtiq2K7Yp9ioINmF2KfZhyDYp9iyINix2YjbjCDZhNuM2LPYqiDZhdin2Ycg2YfYp1xuICAgKi9cbiAgbW9udGhPbkNsaWNrKHNlbGVjdGVkTW9udGhOYW1lKTogdm9pZCB7XG4gICAgY29uc3QgbW9udGhJbmRleCA9IHRoaXMuaXNQZXJzaWFuXG4gICAgICA/IFBlcnNpYW5EYXRlVGltZS5nZXRQZXJzaWFuTW9udGhJbmRleChzZWxlY3RlZE1vbnRoTmFtZSlcbiAgICAgIDogUGVyc2lhbkRhdGVUaW1lLmdldEdyZWdvcmlhbk1vbnRoTmFtZUluZGV4KHNlbGVjdGVkTW9udGhOYW1lKTtcbiAgICBpZiAodGhpcy5pc1BlcnNpYW4pIHtcbiAgICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnBlcnNpYW5EYXRlVGltZS5zZXRQZXJzaWFuTW9udGgobW9udGhJbmRleCArIDEpLnRvRGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYXRlVGltZUNsb25lID0gbmV3IERhdGUodGhpcy5kYXRlVGltZSk7XG4gICAgICBkYXRlVGltZUNsb25lLnNldE1vbnRoKG1vbnRoSW5kZXgpO1xuICAgICAgdGhpcy5kYXRlVGltZSA9IG5ldyBEYXRlKGRhdGVUaW1lQ2xvbmUpO1xuICAgIH1cbiAgICB0aGlzLmhpZGVTZWxlY01vbnRoQW5kWWVhckJsb2NrKCk7XG4gIH1cbiAgLyoqXG4gICAqINin2YbYqtiu2KfYqCDYs9in2YQg2KfYsiDYsdmI24wg2YTbjNiz2Kog2LPYp9mEINmH2KdcbiAgICovXG4gIHllYXJPbkNsaWNrKHNlbGVjdGVkWWVhcik6IHZvaWQge1xuICAgIGNvbnN0IHllYXIgPSB0aGlzLmlzUGVyc2lhbiA/IE51bWJlcihJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkudG9FbmdsaXNoTnVtYmVyKHNlbGVjdGVkWWVhcikpIDogTnVtYmVyKHNlbGVjdGVkWWVhcik7XG4gICAgaWYgKHRoaXMuaXNQZXJzaWFuKSB7XG4gICAgICB0aGlzLmRhdGVUaW1lID0gdGhpcy5wZXJzaWFuRGF0ZVRpbWUuc2V0UGVyc2lhblllYXIoeWVhcikudG9EYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGVUaW1lQ2xvbmUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lKTtcbiAgICAgIGRhdGVUaW1lQ2xvbmUuc2V0RnVsbFllYXIoeWVhcik7XG4gICAgICB0aGlzLmRhdGVUaW1lID0gbmV3IERhdGUoZGF0ZVRpbWVDbG9uZSk7XG4gICAgfVxuICAgIHRoaXMuaGlkZVNlbGVjTW9udGhBbmRZZWFyQmxvY2soKTtcbiAgfVxuICB0b2RheUJ1dHRvbk9uQ2xpY2soKTogdm9pZCB7XG5cbiAgICBpZih0aGlzLmlzU2hvd1RvZGF5QnV0dG9uKCkpe1xuICAgICAgY29uc3QgZGF0ZVRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgaWYgKHRoaXMuZGF0ZVRpbWUuZ2V0RnVsbFllYXIoKSAhPSBkYXRlVGltZU5vdy5nZXRGdWxsWWVhcigpIHx8IHRoaXMuZGF0ZVRpbWUuZ2V0TW9udGgoKSAhPSBkYXRlVGltZU5vdy5nZXRNb250aCgpKSB7XG4gICAgICAgIHRoaXMuZGF0ZVRpbWUgPSBkYXRlVGltZU5vdztcbiAgICAgICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0ZVRpbWUgPSBkYXRlVGltZU5vdztcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlVGltZSA9IGRhdGVUaW1lTm93O1xuICAgICAgaWYgKCF0aGlzLnJhbmdlU2VsZWN0b3IpIHsgdGhpcy5maXJlQ2hhbmdlRXZlbnQoKTsgfVxuICAgIH0gICAgXG4gIH1cblxuICBpc1Nob3dUb2RheUJ1dHRvbigpOmJvb2xlYW57XG4gICAgY29uc3QgZGF0ZVRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgbGV0IGlzQWxsb3dTZWxlY3QgPSB0cnVlO1xuXG4gICAgaWYodGhpcy5taW5EYXRlICE9IG51bGwpe1xuICAgICAgaXNBbGxvd1NlbGVjdCA9IGRhdGVUaW1lTm93ID49IHRoaXMubWluRGF0ZTtcbiAgICB9XG4gICAgaWYodGhpcy5tYXhEYXRlICE9IG51bGwgJiYgaXNBbGxvd1NlbGVjdCl7XG4gICAgICBpc0FsbG93U2VsZWN0ID0gZGF0ZVRpbWVOb3cgPD0gdGhpcy5tYXhEYXRlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0FsbG93U2VsZWN0O1xuICB9XG5cbiAgZGF5QnV0dG9uT25DbGljayhkYXlPYmplY3Q6IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXkpOiB2b2lkIHtcbiAgICAvLyDYsdmI24wg2LHZiNiy2YfYp9uMINmF2KfZhyDZh9in24wg2YLYqNmEINuM2Kcg2KjYudivINqp2YTbjNqpINi02K/ZhyDYp9iz2KpcbiAgICBpZiAoZGF5T2JqZWN0LmRpc2FibGUpIHtcbiAgICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgICB0aGlzLmRhdGVUaW1lID0gUGVyc2lhbkRhdGVUaW1lLmZyb21QZXJzaWFuRGF0ZShkYXlPYmplY3QueWVhciwgZGF5T2JqZWN0Lm1vbnRoLCBkYXlPYmplY3QuZGF5KS50b0RhdGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRhdGVUaW1lQ2xvbmUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lKTtcbiAgICAgICAgZGF0ZVRpbWVDbG9uZS5zZXREYXRlKGRheU9iamVjdC5kYXkpO1xuICAgICAgICBkYXRlVGltZUNsb25lLnNldE1vbnRoKGRheU9iamVjdC5tb250aCk7XG4gICAgICAgIGRhdGVUaW1lQ2xvbmUuc2V0RnVsbFllYXIoZGF5T2JqZWN0LnllYXIpO1xuICAgICAgICB0aGlzLmRhdGVUaW1lID0gZGF0ZVRpbWVDbG9uZTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g2YbYp9mEINqp2LHYr9mGINiq2KfYsduM2K4g2YfYp9uMINi02LHZiNi5INmIINm+2KfbjNin2YYg2KjYsdin24wg2KfZhtiq2K7Yp9ioINmF2KzYr9ivINix2YbYrCDYqtin2LHbjNiuXG4gICAgLy8g2K/YsSDYtdmI2LHYqtuMINqp2Ycg2LHZhtisINqv2LHZgdiq2Ycg2LTYr9mHINio2YjYr1xuICAgIGlmICh0aGlzLnJhbmdlU2VsZWN0b3IgJiYgdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgIT0gbnVsbCAmJiB0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPSBudWxsO1xuICAgICAgdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lID0gbnVsbDtcbiAgICAgIHRoaXMucmVzZXRUb0ZhbHNlUmFuZ2VQYXJhbWV0ZXJzSW5Nb250aERheXMoKTtcbiAgICB9XG4gICAgLy8gXFxcXFxuXG4gICAgLy8g2LHZiNiyINin2YbYqtiu2KfYqCDYtNiv2YdcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUgPSB0aGlzLmlzUGVyc2lhblxuICAgICAgPyBQZXJzaWFuRGF0ZVRpbWUuZnJvbVBlcnNpYW5EYXRlVGltZShkYXlPYmplY3QueWVhciwgZGF5T2JqZWN0Lm1vbnRoLCBkYXlPYmplY3QuZGF5LCB0aGlzLmhvdXIsIHRoaXMubWludXRlLCB0aGlzLnNlY29uZCwgMCkudG9EYXRlKClcbiAgICAgIDogbmV3IERhdGUoZGF5T2JqZWN0LnllYXIsIGRheU9iamVjdC5tb250aCwgZGF5T2JqZWN0LmRheSwgdGhpcy5ob3VyLCB0aGlzLm1pbnV0ZSwgdGhpcy5zZWNvbmQpO1xuXG4gICAgaWYgKHRoaXMucmFuZ2VTZWxlY3Rvcikge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lID09IG51bGwgfHwgdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPj0gdGhpcy5zZWxlY3RlZERhdGVUaW1lKSB7XG4gICAgICAgIHRoaXMucmVzZXRUb0ZhbHNlUmFuZ2VQYXJhbWV0ZXJzSW5Nb250aERheXMoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPSB0aGlzLnNlbGVjdGVkRGF0ZVRpbWU7XG4gICAgICAgIGRheU9iamVjdC5pc1N0YXJ0T3JFbmRPZlJhbmdlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9IHRoaXMuc2VsZWN0ZWREYXRlVGltZTtcbiAgICAgICAgZGF5T2JqZWN0LmlzU3RhcnRPckVuZE9mUmFuZ2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5yYW5nZVNlbGVjdG9yICYmIHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lICE9IG51bGwgJiYgdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZmlyZVJhbmdlQ2hhbmdlRXZlbnQoKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnJhbmdlU2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KCk7XG4gICAgfVxuICB9XG4gIGRheUJ1dHRvbk9uSG92ZXIoZGF5T2JqZWN0OiBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF5KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzUmFuZ2VTZWxlY3RvclJlYWR5KSB7IHJldHVybjsgfVxuICAgIC8vINiq2KfYsduM2K4g2LHZiNiy24wg2qnZhyDZhdmI2LMg2LHZiNuMINii2YYg2KfYs9iqXG4gICAgY29uc3QgaG92ZXJDZWxsRGF0ZTogRGF0ZSA9IHRoaXMuaXNQZXJzaWFuXG4gICAgICA/IFBlcnNpYW5EYXRlVGltZS5mcm9tUGVyc2lhbkRhdGUoZGF5T2JqZWN0LnllYXIsIGRheU9iamVjdC5tb250aCwgZGF5T2JqZWN0LmRheSkudG9EYXRlKClcbiAgICAgIDogbmV3IERhdGUoZGF5T2JqZWN0LnllYXIsIGRheU9iamVjdC5tb250aCwgZGF5T2JqZWN0LmRheSk7XG4gICAgZm9yIChjb25zdCBkYXkgb2YgdGhpcy5kYXlzSW5Nb250aCkge1xuICAgICAgY29uc3QgY3VycmVudERhdGU6IERhdGUgPSB0aGlzLmlzUGVyc2lhblxuICAgICAgICA/IFBlcnNpYW5EYXRlVGltZS5mcm9tUGVyc2lhbkRhdGUoZGF5LnllYXIsIGRheS5tb250aCwgZGF5LmRheSkudG9EYXRlKClcbiAgICAgICAgOiBuZXcgRGF0ZShkYXkueWVhciwgZGF5Lm1vbnRoLCBkYXkuZGF5KTtcbiAgICAgIGRheS5pc1dpdGhpblJhbmdlID0gY3VycmVudERhdGUgPj0gdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgJiYgY3VycmVudERhdGUgPD0gaG92ZXJDZWxsRGF0ZTtcbiAgICB9XG4gIH1cbiAgcmVqZWN0QnV0dG9uT25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lID0gdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLnJlc2V0VG9GYWxzZVJhbmdlUGFyYW1ldGVyc0luTW9udGhEYXlzKCk7XG4gICAgdGhpcy5maXJlUmFuZ2VDaGFuZ2VFdmVudCgpO1xuICB9XG4gIGNvbmZpcm1CdXR0b25PbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSAhPSBudWxsICYmIHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmZpcmVSYW5nZUNoYW5nZUV2ZW50KCk7XG4gICAgfVxuICB9XG59XG4iXX0=