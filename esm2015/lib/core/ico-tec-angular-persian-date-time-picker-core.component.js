/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mds } from 'mds.persian.datetime';
import { TemplateTypeEnum } from '../classes/enums';
import { IcoTecDatetimePickerUtility } from '../classes/ico-tec-datetime-picker.utility';
import { IcoTecDatetimePickerResourcesService } from '../service/ico-tec-datetime-picker-resources.service';
var PersianDateTime = Mds.PersianDateTime;
var PersianDayOfWeek = Mds.PersianDayOfWeek;
var GregorianDayOfWeek = Mds.GregorianDayOfWeek;
export class IcoTecAngularPersianDateTimePickerCoreComponent {
    /**
     * @param {?} resourcesService
     */
    constructor(resourcesService) {
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
    /**
     * @return {?}
     */
    get rangeSelector() {
        return this._rangeSelector;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set rangeSelector(value) {
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
    }
    /**
     * @return {?}
     */
    get timePicker() {
        return this._timePicker;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set timePicker(value) {
        if (this._timePicker == value) {
            return;
        }
        this._timePicker = value;
        if (!this.initialized) {
            return;
        }
        this.updateMonthDays();
    }
    /**
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
        if (this._persianChar == value) {
            return;
        }
        this._persianChar = value;
        this._yearString = '';
        this.resetMonthDaysWithContent();
    }
    /**
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
    }
    /**
     * @private
     * @return {?}
     */
    get persianStartDayOfMonth() {
        return this.persianDateTime.startDayOfMonthDayOfWeek;
    }
    /**
     * @private
     * @return {?}
     */
    get gregorianStartDayOfMonth() {
        return (/** @type {?} */ (new Date(this.dateTime.getFullYear(), this.dateTime.getMonth(), 1).getDay()));
    }
    /**
     * @return {?}
     */
    get getSelectedDate() {
        return this.getSelectedDateObject;
    }
    /**
     * @return {?}
     */
    get getSelectedRangeDates() {
        return this.getSelectedRangeDatesObject;
    }
    /**
     * @private
     * @return {?}
     */
    get dateTime() {
        return this._dateTime;
    }
    /**
     * @private
     * @param {?} dateTime
     * @return {?}
     */
    set dateTime(dateTime) {
        this._dateTime = dateTime == null ? new Date() : new Date(dateTime);
        this._persianDateTime = null;
        this._year = this._month = 0;
        this._hour = this._minute = this._second = 0;
        this._hourString = this._minuteString = this._secondString = '';
        this._yearString = this._monthName = '';
    }
    /**
     * @private
     * @return {?}
     */
    get persianDateTime() {
        if (this.dateTime == null) {
            return null;
        }
        if (this._persianDateTime != null) {
            return this._persianDateTime;
        }
        this._persianDateTime = new PersianDateTime(this.dateTime);
        return this._persianDateTime;
    }
    /**
     * @private
     * @return {?}
     */
    get selectedDateTime() {
        return this._selectedDateTime;
    }
    /**
     * @private
     * @param {?} dateTime
     * @return {?}
     */
    set selectedDateTime(dateTime) {
        this._selectedDateTime = dateTime == null ? null : new Date(dateTime);
        this._IIcoTecAngularDateTimePickerDate = null;
        this._selectedPersianDateTime = null;
        if (this.rangeSelector || !this.timePicker) {
            this.clearTime(dateTime);
        }
    }
    /**
     * @private
     * @return {?}
     */
    get selectedPersianDateTime() {
        if (this._selectedPersianDateTime != null) {
            return this._selectedPersianDateTime;
        }
        this._selectedPersianDateTime = new PersianDateTime(this.selectedDateTime);
        return this._selectedPersianDateTime;
    }
    /**
     * @private
     * @return {?}
     */
    get selectedStartDateTime() {
        return this._selectedStartDateTime;
    }
    /**
     * @private
     * @param {?} dateTime
     * @return {?}
     */
    set selectedStartDateTime(dateTime) {
        this._selectedStartDateTime = dateTime == null ? null : new Date(dateTime);
        this._selectedRangeDatesObject = null;
        this._selectedPersianStartDateTime = null;
        this.clearTime(dateTime);
    }
    /**
     * @private
     * @return {?}
     */
    get selectedPersianStartDateTime() {
        if (this._selectedPersianStartDateTime != null) {
            return this._selectedPersianStartDateTime;
        }
        this._selectedPersianStartDateTime = new PersianDateTime(this.selectedStartDateTime);
        return this._selectedPersianStartDateTime;
    }
    /**
     * @private
     * @return {?}
     */
    get selectedEndDateTime() {
        return this._selectedEndDateTime;
    }
    /**
     * @private
     * @param {?} dateTime
     * @return {?}
     */
    set selectedEndDateTime(dateTime) {
        this._selectedEndDateTime = dateTime == null ? null : new Date(dateTime);
        this._selectedRangeDatesObject = null;
        this._selectedPersianEndDateTime = null;
        this.clearTime(dateTime);
    }
    // @Input('minDate') minDate: Date;
    // @Input('maxDate') maxDate: Date;
    /**
     * @return {?}
     */
    get minDate() {
        return this._minDate;
    }
    /**
     * @param {?} dateTime
     * @return {?}
     */
    set minDate(dateTime) {
        this._minDate = dateTime == null ? null : new Date(dateTime);
        if (!this.initialized) {
            return;
        }
        this.updateMonthDays();
    }
    /**
     * @return {?}
     */
    get maxDate() {
        return this._maxDate;
    }
    /**
     * @param {?} dateTime
     * @return {?}
     */
    set maxDate(dateTime) {
        this._maxDate = dateTime == null ? null : new Date(dateTime);
        if (!this.initialized) {
            return;
        }
        this.updateMonthDays();
    }
    /**
     * @private
     * @return {?}
     */
    get selectedPersianEndDateTime() {
        if (this._selectedPersianEndDateTime != null) {
            return this._selectedPersianEndDateTime;
        }
        this._selectedPersianEndDateTime = new PersianDateTime(this.selectedEndDateTime);
        return this._selectedPersianEndDateTime;
    }
    /**
     * @return {?}
     */
    get resources() {
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
    }
    /**
     * @return {?}
     */
    get year() {
        if (this._year > 0) {
            return this._year;
        }
        this._year = this.isPersian
            ? this.persianDateTime.year
            : this.dateTime.getFullYear();
        return this._year;
    }
    /**
     * @return {?}
     */
    get yearString() {
        if (this._yearString != '') {
            return this._yearString;
        }
        this._yearString = this.persianChar
            ? IcoTecDatetimePickerUtility.toPersianNumber(this.year.toString())
            : this.year.toString();
        return this._yearString;
    }
    /**
     * @return {?}
     */
    get month() {
        if (this._month > 0) {
            return this._month;
        }
        this._month = this.isPersian
            ? PersianDateTime.getPersianMonthIndex(this.persianDateTime.monthName)
            : this.dateTime.getMonth();
        return this._month;
    }
    /**
     * @return {?}
     */
    get monthName() {
        if (this._monthName != '') {
            return this._monthName;
        }
        this._monthName = this.isPersian
            ? this.persianDateTime.monthName
            : PersianDateTime.getGregorianMonthNames[this.month];
        return this._monthName;
    }
    /**
     * @return {?}
     */
    get monthNames() {
        if (this._monthNames != null && this._monthNames.length > 0) {
            return this._monthNames;
        }
        if (this.isPersian) {
            /** @type {?} */
            const allPersianMonths = PersianDateTime.getPersianMonthNames;
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
    }
    /**
     * @return {?}
     */
    get hour() {
        if (this._hour > 0) {
            return this._hour;
        }
        this._hour = this.dateTime.getHours();
        return this._hour;
    }
    /**
     * @return {?}
     */
    get hourString() {
        if (this._hourString != '') {
            return this._hourString;
        }
        this._hourString = this.hour.toString();
        if (this.persianChar) {
            this._hourString = IcoTecDatetimePickerUtility.toPersianNumber(this._hourString);
        }
        return this._hourString;
    }
    /**
     * @return {?}
     */
    get minute() {
        if (this._minute > 0) {
            return this._minute;
        }
        this._minute = this.dateTime.getMinutes();
        return this._minute;
    }
    /**
     * @return {?}
     */
    get minuteString() {
        if (this._minuteString != '') {
            return this._minuteString;
        }
        this._minuteString = this.minute.toString();
        if (this.persianChar) {
            this._minuteString = IcoTecDatetimePickerUtility.toPersianNumber(this._minuteString);
        }
        return this._minuteString;
    }
    /**
     * @return {?}
     */
    get second() {
        if (this._second > 0) {
            return this._second;
        }
        this._second = this.dateTime.getSeconds();
        return this._second;
    }
    /**
     * @return {?}
     */
    get secondString() {
        if (this._secondString != '') {
            return this._secondString;
        }
        this._secondString = this.second.toString();
        if (this.persianChar) {
            this._secondString = IcoTecDatetimePickerUtility.toPersianNumber(this._secondString);
        }
        return this._secondString;
    }
    /**
     * @return {?}
     */
    get weekdayNames() {
        if (this._weekdayNames != null && this._weekdayNames.length > 0) {
            return this._weekdayNames;
        }
        if (this.isPersian) {
            // حروف اول نام های روز هفته شمسی
            /** @type {?} */
            const persianWeekDayNames = PersianDateTime.getPersianWeekdayNames;
            this._weekdayNames = [
                persianWeekDayNames[6][0], persianWeekDayNames[5][0], persianWeekDayNames[4][0],
                persianWeekDayNames[3][0], persianWeekDayNames[2][0], persianWeekDayNames[1][0],
                persianWeekDayNames[0][0]
            ];
        }
        else {
            /** @type {?} */
            const gregorianWeekDayNames = PersianDateTime.getGregorianWeekdayNames;
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
    }
    /**
     * @private
     * @return {?}
     */
    get getSelectedDateObject() {
        if (this.selectedDateTime == null) {
            return null;
        }
        if (this._IIcoTecAngularDateTimePickerDate != null) {
            return this._IIcoTecAngularDateTimePickerDate;
        }
        /** @type {?} */
        const format = this.getDateTimeFormat();
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
    }
    /**
     * @return {?}
     */
    get getSelectedDay() {
        if (this.getSelectedDateObject == null || this.rangeSelector) {
            return 0;
        }
        return this.getSelectedDateObject.day;
    }
    /**
     * @private
     * @return {?}
     */
    get getSelectedRangeDatesObject() {
        if (!this.rangeSelector || this.selectedStartDateTime == null && this.selectedEndDateTime == null) {
            return null;
        }
        if (this._selectedRangeDatesObject != null) {
            return this._selectedRangeDatesObject;
        }
        /** @type {?} */
        const format = this.getDateTimeFormat();
        /** @type {?} */
        let startDate;
        /** @type {?} */
        let endDate;
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
    }
    /**
     * @return {?}
     */
    get isRejectButtonDisable() {
        return this.selectedStartDateTime == null && this.selectedEndDateTime == null;
    }
    /**
     * @return {?}
     */
    get isConfirmButtonDisable() {
        return this.selectedStartDateTime == null || this.selectedEndDateTime == null;
    }
    /**
     * @private
     * @return {?}
     */
    get isRangeSelectorReady() {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @private
     * @param {?} dateString
     * @return {?}
     */
    splitStartEndDateString(dateString) {
        return dateString.split(' - ');
    }
    /**
     * @private
     * @param {?} dateTimes
     * @return {?}
     */
    setSelectedRangeDateTimes(dateTimes) {
        dateTimes = dateTimes == null || dateTimes.length < 2 ? [null, null] : dateTimes;
        this.selectedStartDateTime = dateTimes[0];
        this.selectedEndDateTime = dateTimes[1];
    }
    /**
     * @private
     * @param {?} persianDateTimes
     * @return {?}
     */
    setSelectedRangePersianDateTimes(persianDateTimes) {
        /** @type {?} */
        const ranges = [
            persianDateTimes[0] == null ? null : persianDateTimes[0].toDate(),
            persianDateTimes[1] == null ? null : persianDateTimes[1].toDate()
        ];
        this.setSelectedRangeDateTimes(ranges);
    }
    /**
     * @private
     * @param {?} dateTime
     * @return {?}
     */
    clearTime(dateTime) {
        if (dateTime == null) {
            return;
        }
        dateTime.setHours(0, 0, 0, 0);
    }
    /**
     * @private
     * @return {?}
     */
    getDateTimeFormat() {
        /** @type {?} */
        let format = this.format;
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
    }
    /**
     * @param {?} dateTime
     * @return {?}
     */
    setDateTimeByDate(dateTime) {
        this.dateTime = this.selectedDateTime = dateTime;
        this.selectedStartDateTime = !dateTime ? null : new Date(dateTime);
    }
    /**
     * @param {?} startDateTime
     * @param {?} endDateTime
     * @return {?}
     */
    setDateTimeRangesByDate(startDateTime, endDateTime) {
        this.dateTime = this.selectedDateTime = startDateTime;
        this.selectedStartDateTime = startDateTime == null ? null : new Date(startDateTime);
        this.selectedEndDateTime = endDateTime == null ? null : new Date(endDateTime);
    }
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
    setDateTimeByString(dateTimeString) {
        try {
            if (dateTimeString == '') {
                this.clearDateTimePicker();
                return;
            }
            if (this.isPersian) {
                if (this.rangeSelector) {
                    /** @type {?} */
                    const startAndEndDateArray = this.splitStartEndDateString(dateTimeString);
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
                    const startAndEndDateArray = this.splitStartEndDateString(dateTimeString);
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
    }
    /**
     * @return {?}
     */
    clearDateTimePicker() {
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
    }
    /**
     * @private
     * @return {?}
     */
    updateYearsList() {
        this.yearsToSelect = [];
        /** @type {?} */
        const selectedYear = this.year;
        for (let i = selectedYear - 37; i <= selectedYear + 37; i++) {
            if (this.persianChar) {
                this.yearsToSelect.push(IcoTecDatetimePickerUtility.toPersianNumber(i.toString()));
            }
            else {
                this.yearsToSelect.push(i.toString());
            }
        }
    }
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
    getDayObject(year, month, day, disabled, holiDay, isToday) {
        /** @type {?} */
        let isWithinDateRange = false;
        /** @type {?} */
        let isStartOrEndOfRange = false;
        /** @type {?} */
        const dateTime = this.isPersian
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
        let icoTecAngularDateTimePickerDay = (/** @type {?} */ ({
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
    }
    /**
     * @private
     * @param {?} icoTecAngularDateTimePickerDay
     * @return {?}
     */
    updateIsAllowSelected(icoTecAngularDateTimePickerDay) {
        /** @type {?} */
        let isAllowSelected = true;
        /** @type {?} */
        let year = icoTecAngularDateTimePickerDay.year;
        /** @type {?} */
        let month = icoTecAngularDateTimePickerDay.month;
        /** @type {?} */
        let day = icoTecAngularDateTimePickerDay.day;
        /** @type {?} */
        const dateTime = this.isPersian
            ? PersianDateTime.fromPersianDate(year, month, day).toDate()
            : new Date(year, month, day);
        if (this._minDate != null && isAllowSelected) {
            isAllowSelected = this._minDate <= dateTime;
        }
        if (this._maxDate != null && isAllowSelected) {
            isAllowSelected = this._maxDate >= dateTime;
        }
        icoTecAngularDateTimePickerDay.isAllowSelected = isAllowSelected;
    }
    /**
     * @private
     * @return {?}
     */
    updateMonthDays() {
        /** @type {?} */
        const days = [];
        /** @type {?} */
        let counter = 0;
        /** @type {?} */
        let year = 0;
        /** @type {?} */
        let month = 0;
        if (this.isPersian) {
            /** @type {?} */
            const persianDateTimeNow = PersianDateTime.now;
            /** @type {?} */
            const today = persianDateTimeNow.day;
            /** @type {?} */
            const isYearAndMonthInCurrentMonth = persianDateTimeNow.year == this.persianDateTime.year && persianDateTimeNow.month == this.persianDateTime.month;
            // روزهای ماه قبل
            if (this.persianStartDayOfMonth != PersianDayOfWeek.Saturday) {
                /** @type {?} */
                const previousPersianMonth = this.persianDateTime.addMonths(-1);
                year = previousPersianMonth.year;
                month = previousPersianMonth.month;
                for (let i = previousPersianMonth.getMonthDays - this.persianStartDayOfMonth + 1; i <= previousPersianMonth.getMonthDays; i++) {
                    counter++;
                    days.push(this.getDayObject(year, month, i, true, false, false));
                }
            }
            // روزهای ماه جاری
            year = this.persianDateTime.year;
            month = this.persianDateTime.month;
            for (let i = 1; i <= this.persianDateTime.getMonthDays; i++) {
                counter++;
                days.push(this.getDayObject(year, month, i, false, false, isYearAndMonthInCurrentMonth && i == today));
            }
            // روزهای ماه بعد
            /** @type {?} */
            const nextMonthPersianDateTime = this.persianDateTime.addMonths(1);
            year = nextMonthPersianDateTime.year;
            month = nextMonthPersianDateTime.month;
            for (let i = 1; counter <= (6 * 7) - 1; i++) {
                counter++;
                days.push(this.getDayObject(year, month, i, true, false, false));
            }
            // درست کردن راست به چپ بودن تقویم
            /** @type {?} */
            const temp = days.slice(0);
            for (let row = 0; row < 6; row++) {
                for (let column = 0; column < 7; column++) {
                    /** @type {?} */
                    const index1 = row * 7 + column;
                    /** @type {?} */
                    const index2 = Math.abs((row + 1) * 7 - (column + 1));
                    days[index1] = temp[index2];
                    if (column == 0) {
                        days[index1].holiDay = true;
                    }
                }
            }
        }
        else {
            /** @type {?} */
            const dateTimeNow = new Date();
            /** @type {?} */
            const today = dateTimeNow.getDate();
            /** @type {?} */
            const isYearAndMonthInCurrentMonth = dateTimeNow.getMonth() == this.dateTime.getMonth() && dateTimeNow.getFullYear() == this.dateTime.getFullYear();
            // روزهای ماه قبل
            if (this.gregorianStartDayOfMonth != GregorianDayOfWeek.Saturday) {
                /** @type {?} */
                const dateTimeClone = new Date(this.dateTime);
                dateTimeClone.setMonth(this.dateTime.getMonth());
                year = dateTimeClone.getFullYear();
                month = dateTimeClone.getMonth();
                /** @type {?} */
                const previousMonthDays = new Date(dateTimeClone.getFullYear(), dateTimeClone.getMonth(), 0).getDate();
                for (let i = previousMonthDays - this.gregorianStartDayOfMonth + 1; i <= previousMonthDays; i++) {
                    counter++;
                    days.push(this.getDayObject(year, month - 1, i, true, false, false));
                }
            }
            // روزهای ماه جاری
            year = this.dateTime.getFullYear();
            month = this.dateTime.getMonth();
            /** @type {?} */
            const currentMonthDays = new Date(year, month, 0).getDate();
            for (let i = 1; i <= currentMonthDays; i++) {
                counter++;
                days.push(this.getDayObject(year, month, i, false, false, isYearAndMonthInCurrentMonth && i == today));
            }
            // روزهای ماه بعد
            /** @type {?} */
            const nextMonthDateTime = new Date(year, month + 1, 1);
            year = nextMonthDateTime.getFullYear();
            month = nextMonthDateTime.getMonth();
            for (let i = 1; counter <= (6 * 7) - 1; i++) {
                counter++;
                days.push(this.getDayObject(year, month, i, true, false, false));
            }
            // تعطیل کردن روزهای جمعه
            for (let row = 0; row < 6; row++) {
                for (let column = 0; column < 7; column++) {
                    /** @type {?} */
                    const index1 = row * 7 + column;
                    if (column == 0) {
                        days[index1].holiDay = true;
                    }
                }
            }
        }
        this.daysInMonth = days;
    }
    /**
     * @private
     * @return {?}
     */
    fireChangeEvent() {
        this.dateChanged.emit(this.getSelectedDateObject);
    }
    /**
     * @private
     * @return {?}
     */
    fireRangeChangeEvent() {
        this.rangeDateChanged.emit(this.getSelectedRangeDatesObject);
    }
    /**
     * @private
     * @return {?}
     */
    resetToFalseRangeParametersInMonthDays() {
        for (const day of this.daysInMonth) {
            day.isWithinRange = false;
            day.isStartOrEndOfRange = false;
        }
    }
    /**
     * ریست کردن تمامی اطلاعات روزهای ماه
     * @private
     * @return {?}
     */
    resetMonthDaysWithContent() {
        if (this.daysInMonth == undefined) {
            return;
        }
        for (const day of this.daysInMonth) {
            day.isWithinRange = false;
            day.isStartOrEndOfRange = false;
            day.dayString = this.persianChar
                ? IcoTecDatetimePickerUtility.toPersianNumber(day.day.toString())
                : day.day.toString();
        }
    }
    /**
     * مخفی کردن بلاک های انتخاب ماه و سال
     * @return {?}
     */
    hideSelecMonthAndYearBlock() {
        this.monthOrYearSelectorVisibilityStateName = 'hidden';
        this.monthSelectorVisibilityStateName = 'hidden';
        this.yearSelectorVisibilityStateName = 'hidden';
    }
    /**
     * @return {?}
     */
    resetIncompleteRanges() {
        if (this.selectedStartDateTime == null || this.selectedEndDateTime == null) {
            this.selectedStartDateTime = this.selectedEndDateTime = null;
            this._selectedPersianStartDateTime = this._selectedPersianEndDateTime = null;
            this.resetToFalseRangeParametersInMonthDays();
        }
    }
    /**
     * کلیک روی دکمه نام ماه در بالای پیکر برای انتخاب ماه
     * @return {?}
     */
    monthButtonOnClick() {
        this.monthOrYearSelectorVisibilityStateName = 'visible';
        this.monthSelectorVisibilityStateName = 'visible';
    }
    /**
     * کلیک روی دکمه سال در بالای پیکر برای انتخاب سال
     * @return {?}
     */
    selectYearButtonOnClick() {
        this.monthOrYearSelectorVisibilityStateName = 'visible';
        this.yearSelectorVisibilityStateName = 'visible';
    }
    /**
     * @return {?}
     */
    monthsBlockVisibilityAnimationDone() {
        this.updateMonthDays();
    }
    /**
     * @return {?}
     */
    yearsBlockVisibilityAnimationDone() {
        this.updateYearsList();
        this.updateMonthDays();
    }
    /**
     * @return {?}
     */
    nextYearButtonOnClick() {
        if (this.isPersian) {
            this.dateTime = this.persianDateTime.addYears(1).toDate();
        }
        else {
            this.dateTime = new Date(this.dateTime.setFullYear(this.dateTime.getFullYear() + 1));
        }
        this.updateMonthDays();
    }
    /**
     * @return {?}
     */
    nextMonthButtonOnClick() {
        if (this.isPersian) {
            this.dateTime = this.persianDateTime.addMonths(1).toDate();
        }
        else {
            this.dateTime = new Date(this.dateTime.setMonth(this.dateTime.getMonth() + 1));
        }
        this.updateMonthDays();
    }
    /**
     * @return {?}
     */
    previousMonthButtonOnClick() {
        if (this.isPersian) {
            this.dateTime = this.persianDateTime.addMonths(-1).toDate();
        }
        else {
            this.dateTime = new Date(this.dateTime.setMonth(this.dateTime.getMonth() - 1));
        }
        this.updateMonthDays();
    }
    /**
     * @return {?}
     */
    previousYearButtonOnClick() {
        if (this.isPersian) {
            this.dateTime = this.persianDateTime.addYears(-1).toDate();
        }
        else {
            this.dateTime = new Date(this.dateTime.setFullYear(this.dateTime.getFullYear() - 1));
        }
        this.updateMonthDays();
    }
    /**
     * @return {?}
     */
    hourUpButtonOnClick() {
        this.dateTime = new Date(this.dateTime.setHours(this.dateTime.getHours() + 1));
    }
    /**
     * @return {?}
     */
    hourDownButtonOnClick() {
        this.dateTime = new Date(this.dateTime.setHours(this.dateTime.getHours() - 1));
    }
    /**
     * @return {?}
     */
    minuteUpButtonOnClick() {
        this.dateTime = new Date(this.dateTime.setMinutes(this.dateTime.getMinutes() + 1));
    }
    /**
     * @return {?}
     */
    minuteDownButtonOnClick() {
        this.dateTime = new Date(this.dateTime.setMinutes(this.dateTime.getMinutes() - 1));
    }
    /**
     * @return {?}
     */
    secondUpButtonOnClick() {
        this.dateTime = new Date(this.dateTime.setSeconds(this.dateTime.getSeconds() + 1));
    }
    /**
     * @return {?}
     */
    secondDownButtonOnClick() {
        this.dateTime = new Date(this.dateTime.setSeconds(this.dateTime.getSeconds() - 1));
    }
    /**
     * انتخاب ماه از روی لیست ماه ها
     * @param {?} selectedMonthName
     * @return {?}
     */
    monthOnClick(selectedMonthName) {
        /** @type {?} */
        const monthIndex = this.isPersian
            ? PersianDateTime.getPersianMonthIndex(selectedMonthName)
            : PersianDateTime.getGregorianMonthNameIndex(selectedMonthName);
        if (this.isPersian) {
            this.dateTime = this.persianDateTime.setPersianMonth(monthIndex + 1).toDate();
        }
        else {
            /** @type {?} */
            const dateTimeClone = new Date(this.dateTime);
            dateTimeClone.setMonth(monthIndex);
            this.dateTime = new Date(dateTimeClone);
        }
        this.hideSelecMonthAndYearBlock();
    }
    /**
     * انتخاب سال از روی لیست سال ها
     * @param {?} selectedYear
     * @return {?}
     */
    yearOnClick(selectedYear) {
        /** @type {?} */
        const year = this.isPersian ? Number(IcoTecDatetimePickerUtility.toEnglishNumber(selectedYear)) : Number(selectedYear);
        if (this.isPersian) {
            this.dateTime = this.persianDateTime.setPersianYear(year).toDate();
        }
        else {
            /** @type {?} */
            const dateTimeClone = new Date(this.dateTime);
            dateTimeClone.setFullYear(year);
            this.dateTime = new Date(dateTimeClone);
        }
        this.hideSelecMonthAndYearBlock();
    }
    /**
     * @return {?}
     */
    todayButtonOnClick() {
        if (this.isShowTodayButton()) {
            /** @type {?} */
            const dateTimeNow = new Date();
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
    }
    /**
     * @return {?}
     */
    isShowTodayButton() {
        /** @type {?} */
        const dateTimeNow = new Date();
        /** @type {?} */
        let isAllowSelect = true;
        if (this.minDate != null) {
            isAllowSelect = dateTimeNow >= this.minDate;
        }
        if (this.maxDate != null && isAllowSelect) {
            isAllowSelect = dateTimeNow <= this.maxDate;
        }
        return isAllowSelect;
    }
    /**
     * @param {?} dayObject
     * @return {?}
     */
    dayButtonOnClick(dayObject) {
        // روی روزهای ماه های قبل یا بعد کلیک شده است
        if (dayObject.disable) {
            if (this.isPersian) {
                this.dateTime = PersianDateTime.fromPersianDate(dayObject.year, dayObject.month, dayObject.day).toDate();
            }
            else {
                /** @type {?} */
                const dateTimeClone = new Date(this.dateTime);
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
    }
    /**
     * @param {?} dayObject
     * @return {?}
     */
    dayButtonOnHover(dayObject) {
        if (!this.isRangeSelectorReady) {
            return;
        }
        // تاریخ روزی که موس روی آن است
        /** @type {?} */
        const hoverCellDate = this.isPersian
            ? PersianDateTime.fromPersianDate(dayObject.year, dayObject.month, dayObject.day).toDate()
            : new Date(dayObject.year, dayObject.month, dayObject.day);
        for (const day of this.daysInMonth) {
            /** @type {?} */
            const currentDate = this.isPersian
                ? PersianDateTime.fromPersianDate(day.year, day.month, day.day).toDate()
                : new Date(day.year, day.month, day.day);
            day.isWithinRange = currentDate >= this.selectedStartDateTime && currentDate <= hoverCellDate;
        }
    }
    /**
     * @return {?}
     */
    rejectButtonOnClick() {
        this.selectedDateTime = null;
        this.selectedStartDateTime = this.selectedEndDateTime = null;
        this.resetToFalseRangeParametersInMonthDays();
        this.fireRangeChangeEvent();
    }
    /**
     * @return {?}
     */
    confirmButtonOnClick() {
        if (this.selectedStartDateTime != null && this.selectedEndDateTime != null) {
            this.fireRangeChangeEvent();
        }
    }
}
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
IcoTecAngularPersianDateTimePickerCoreComponent.ctorParameters = () => [
    { type: IcoTecDatetimePickerResourcesService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvLXRlYy1hbmd1bGFyLXBlcnNpYW4tZGF0ZS10aW1lLXBpY2tlci1jb3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ljby10ZWMtYW5ndWxhci1wZXJzaWFuLWRhdGUtdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29yZS9pY28tdGVjLWFuZ3VsYXItcGVyc2lhbi1kYXRlLXRpbWUtcGlja2VyLWNvcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR3BELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzVHLElBQU8sZUFBZSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUM7QUFDN0MsSUFBTyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7QUFDL0MsSUFBTyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsa0JBQWtCLENBQUM7QUF1Qm5ELE1BQU0sT0FBTywrQ0FBK0M7Ozs7SUFFMUQsWUFBb0IsZ0JBQXNEO1FBQXRELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBc0M7UUFFbEUsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixtQkFBYyxHQUFHLElBQUksQ0FBQztR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RUFBb0I7Ozs7O0lBQ3BCLHdFQUEyQjs7Ozs7SUFDM0Isa0VBQW9COzs7OztJQUNwQix3RUFBMkI7Ozs7O0lBQzNCLHdFQUFxQzs7Ozs7SUFDckMsNEZBQW1GOzs7OztJQUVuRixvRkFBZ0Y7Ozs7O0lBL2RwRSwyRUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1kcyB9IGZyb20gJ21kcy5wZXJzaWFuLmRhdGV0aW1lJztcbmltcG9ydCB7IFRlbXBsYXRlVHlwZUVudW0gfSBmcm9tICcuLi9jbGFzc2VzL2VudW1zJztcbmltcG9ydCB7IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlLCBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF5LCBcbiAgSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlclJhbmdlRGF0ZSB9IGZyb20gJy4uL2NsYXNzZXMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkgfSBmcm9tICcuLi9jbGFzc2VzL2ljby10ZWMtZGF0ZXRpbWUtcGlja2VyLnV0aWxpdHknO1xuaW1wb3J0IHsgSWNvVGVjRGF0ZXRpbWVQaWNrZXJSZXNvdXJjZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9pY28tdGVjLWRhdGV0aW1lLXBpY2tlci1yZXNvdXJjZXMuc2VydmljZSc7XG5pbXBvcnQgUGVyc2lhbkRhdGVUaW1lID0gTWRzLlBlcnNpYW5EYXRlVGltZTtcbmltcG9ydCBQZXJzaWFuRGF5T2ZXZWVrID0gTWRzLlBlcnNpYW5EYXlPZldlZWs7XG5pbXBvcnQgR3JlZ29yaWFuRGF5T2ZXZWVrID0gTWRzLkdyZWdvcmlhbkRheU9mV2VlaztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWNvLXRlYy1kYXRldGltZS1waWNrZXItY29yZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY28tdGVjLWFuZ3VsYXItcGVyc2lhbi1kYXRlLXRpbWUtcGlja2VyLWNvcmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY28tdGVjLWFuZ3VsYXItcGVyc2lhbi1kYXRlLXRpbWUtcGlja2VyLWNvcmUuY29tcG9uZW50LmNzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGF5c1N0YXRlTmFtZScsXG4gICAgICBbXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZVkoOTBkZWcpJyB9KSxcbiAgICAgICAgICBhbmltYXRlKCcyMDBtcyBlYXNlLWluJylcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgIHRyaWdnZXIoJ21vbnRoQW5kWWVhclNlbGVjdG9yVmlzaWJpbGl0eScsXG4gICAgICBbXG4gICAgICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdyb3RhdGVZKDBkZWcpJyB9KSksXG4gICAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3JvdGF0ZVkoOTBkZWcpJyB9KSksXG4gICAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiB2aXNpYmxlJywgW2FuaW1hdGUoJzAuMnMgZWFzZS1pbicpXSksXG4gICAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaGlkZGVuJywgW2FuaW1hdGUoJzAuMnMgZWFzZS1vdXQnKV0pXG4gICAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEljb1RlY0FuZ3VsYXJQZXJzaWFuRGF0ZVRpbWVQaWNrZXJDb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc291cmNlc1NlcnZpY2U6IEljb1RlY0RhdGV0aW1lUGlja2VyUmVzb3VyY2VzU2VydmljZSkgeyB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIF9wZXJzaWFuQ2hhciA9IHRydWU7XG4gIHByaXZhdGUgX2lzUGVyc2lhbiA9IHRydWU7XG4gIHByaXZhdGUgX3JhbmdlU2VsZWN0b3IgPSB0cnVlO1xuICBwcml2YXRlIF90aW1lUGlja2VyID0gdHJ1ZTtcblxuICAvLyBASW5wdXQoKSBpbml0aWFsVmFsdWUgPSAnJztcbiAgQElucHV0KCkgdGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGVFbnVtID0gVGVtcGxhdGVUeXBlRW51bS5ib290c3RyYXA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHJhbmdlU2VsZWN0b3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlU2VsZWN0b3I7XG4gIH1cbiAgc2V0IHJhbmdlU2VsZWN0b3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fcmFuZ2VTZWxlY3RvciA9PSB2YWx1ZSkgeyByZXR1cm47IH1cbiAgICB0aGlzLl9yYW5nZVNlbGVjdG9yID0gdmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZERhdGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLnRpbWVQaWNrZXIgPSAhdmFsdWU7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7IHJldHVybjsgfVxuICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgdGltZVBpY2tlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZVBpY2tlcjtcbiAgfVxuICBzZXQgdGltZVBpY2tlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl90aW1lUGlja2VyID09IHZhbHVlKSB7IHJldHVybjsgfVxuICAgIHRoaXMuX3RpbWVQaWNrZXIgPSB2YWx1ZTtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgICog2YHYsdmF2Kog2b7bjNi0INmB2LHYtiAxMzkzLzA5LzE0ICAgMTM6NDk6NDBcbiAgICAqIHl5eXk6INiz2KfZhCDahtmH2KfYsSDYsdmC2YXbjFxuICAgICogeXk6INiz2KfZhCDYr9mIINix2YLZhduMXG4gICAgKiBNTU1NOiDZhtin2YUg2YHYp9ix2LPbjCDZhdin2YdcbiAgICAqIE1NOiDYudiv2K8g2K/ZiCDYsdmC2YXbjCDZhdin2YdcbiAgICAqIE06INi52K/YryDbjNqpINix2YLZhduMINmF2KfZh1xuICAgICogZGRkZDog2YbYp9mFINmB2KfYsdiz24wg2LHZiNiyINmH2YHYqtmHXG4gICAgKiBkZDog2LnYr9ivINiv2Ygg2LHZgtmF24wg2LHZiNiyINmF2KfZh1xuICAgICogZDog2LnYr9ivINuM2qkg2LHZgtmF24wg2LHZiNiyINmF2KfZh1xuICAgICogSEg6INiz2KfYudiqINiv2Ygg2LHZgtmF24wg2KjYpyDZgdix2YXYqiAwMCDYqtinIDI0XG4gICAgKiBIOiDYs9in2LnYqiDbjNqpINix2YLZhduMINio2Kcg2YHYsdmF2KogMCDYqtinIDI0XG4gICAgKiBoaDog2LPYp9i52Kog2K/ZiCDYsdmC2YXbjCDYqNinINmB2LHZhdiqIDAwINiq2KcgMTJcbiAgICAqIGg6INiz2KfYudiqINuM2qkg2LHZgtmF24wg2KjYpyDZgdix2YXYqiAwINiq2KcgMTJcbiAgICAqIG1tOiDYudiv2K8g2K/ZiCDYsdmC2YXbjCDYr9mC24zZgtmHXG4gICAgKiBtOiDYudiv2K8g24zaqSDYsdmC2YXbjCDYr9mC24zZgtmHXG4gICAgKiBzczog2KvYp9mG24zZhyDYr9mIINix2YLZhduMXG4gICAgKiBzOiDYq9in2YbbjNmHINuM2qkg2LHZgtmF24xcbiAgICAqIGZmZjog2YXbjNmE24wg2KvYp9mG24zZhyAzINix2YLZhduMXG4gICAgKiBmZjog2YXbjNmE24wg2KvYp9mG24zZhyAyINix2YLZhduMXG4gICAgKiBmOiDZhduM2YTbjCDYq9in2YbbjNmHINuM2qkg2LHZgtmF24xcbiAgICAqIHR0OiDYqC7YuCDbjNinINmCLti4XG4gICAgKiB0OiDYrdix2YEg2KfZiNmEINin2LIg2Kgu2Lgg24zYpyDZgi7YuFxuICAgICoqL1xuICBASW5wdXQoKSBmb3JtYXQgPSAnJztcblxuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlPigpO1xuICBAT3V0cHV0KCkgcmFuZ2VEYXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlclJhbmdlRGF0ZT4oKTtcblxuICBASW5wdXQoKVxuICBnZXQgcGVyc2lhbkNoYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcnNpYW5DaGFyO1xuICB9XG4gIHNldCBwZXJzaWFuQ2hhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9wZXJzaWFuQ2hhciA9PSB2YWx1ZSkgeyByZXR1cm47IH1cbiAgICB0aGlzLl9wZXJzaWFuQ2hhciA9IHZhbHVlO1xuICAgIHRoaXMuX3llYXJTdHJpbmcgPSAnJztcbiAgICB0aGlzLnJlc2V0TW9udGhEYXlzV2l0aENvbnRlbnQoKTtcbiAgfVxuXG5cblxuICBcblxuICBASW5wdXQoKVxuICBnZXQgaXNQZXJzaWFuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1BlcnNpYW47XG4gIH1cbiAgc2V0IGlzUGVyc2lhbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9pc1BlcnNpYW4gPT0gdmFsdWUpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5faXNQZXJzaWFuID0gdmFsdWU7XG4gICAgdGhpcy5fbW9udGhOYW1lID0gJyc7XG4gICAgdGhpcy5fbW9udGhOYW1lcyA9IFtdO1xuICAgIHRoaXMuX3dlZWtkYXlOYW1lcyA9IFtdO1xuICAgIHRoaXMuX3Jlc291cmNlcyA9IG51bGw7XG4gICAgdGhpcy5feWVhciA9IHRoaXMuX21vbnRoID0gMDtcbiAgICB0aGlzLl95ZWFyU3RyaW5nID0gdGhpcy5fbW9udGhOYW1lID0gJyc7XG4gICAgaWYgKHRoaXMuZGF0ZVRpbWUgIT0gbnVsbCkge1xuICAgICAgdGhpcy51cGRhdGVZZWFyc0xpc3QoKTtcbiAgICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgZ2V0IHBlcnNpYW5TdGFydERheU9mTW9udGgoKTogUGVyc2lhbkRheU9mV2VlayB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lhbkRhdGVUaW1lLnN0YXJ0RGF5T2ZNb250aERheU9mV2VlaztcbiAgfVxuICBwcml2YXRlIGdldCBncmVnb3JpYW5TdGFydERheU9mTW9udGgoKTogR3JlZ29yaWFuRGF5T2ZXZWVrIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5kYXRlVGltZS5nZXRGdWxsWWVhcigpLCB0aGlzLmRhdGVUaW1lLmdldE1vbnRoKCksIDEpLmdldERheSgpIGFzIEdyZWdvcmlhbkRheU9mV2VlaztcbiAgfVxuXG4gIGdldCBnZXRTZWxlY3RlZERhdGUoKTogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGUge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkRGF0ZU9iamVjdDtcbiAgfVxuICBnZXQgZ2V0U2VsZWN0ZWRSYW5nZURhdGVzKCk6IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJSYW5nZURhdGUge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkUmFuZ2VEYXRlc09iamVjdDtcbiAgfVxuICBwcml2YXRlIGdldCBkYXRlVGltZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZVRpbWU7XG4gIH1cbiAgcHJpdmF0ZSBzZXQgZGF0ZVRpbWUoZGF0ZVRpbWU6IERhdGUpIHtcbiAgICB0aGlzLl9kYXRlVGltZSA9IGRhdGVUaW1lID09IG51bGwgPyBuZXcgRGF0ZSgpIDogbmV3IERhdGUoZGF0ZVRpbWUpO1xuICAgIHRoaXMuX3BlcnNpYW5EYXRlVGltZSA9IG51bGw7XG4gICAgdGhpcy5feWVhciA9IHRoaXMuX21vbnRoID0gMDtcbiAgICB0aGlzLl9ob3VyID0gdGhpcy5fbWludXRlID0gdGhpcy5fc2Vjb25kID0gMDtcbiAgICB0aGlzLl9ob3VyU3RyaW5nID0gdGhpcy5fbWludXRlU3RyaW5nID0gdGhpcy5fc2Vjb25kU3RyaW5nID0gJyc7XG4gICAgdGhpcy5feWVhclN0cmluZyA9IHRoaXMuX21vbnRoTmFtZSA9ICcnO1xuICB9XG4gIHByaXZhdGUgZ2V0IHBlcnNpYW5EYXRlVGltZSgpOiBQZXJzaWFuRGF0ZVRpbWUge1xuICAgIGlmICh0aGlzLmRhdGVUaW1lID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBpZiAodGhpcy5fcGVyc2lhbkRhdGVUaW1lICE9IG51bGwpIHsgcmV0dXJuIHRoaXMuX3BlcnNpYW5EYXRlVGltZTsgfVxuICAgIHRoaXMuX3BlcnNpYW5EYXRlVGltZSA9IG5ldyBQZXJzaWFuRGF0ZVRpbWUodGhpcy5kYXRlVGltZSk7XG4gICAgcmV0dXJuIHRoaXMuX3BlcnNpYW5EYXRlVGltZTtcbiAgfVxuICBwcml2YXRlIGdldCBzZWxlY3RlZERhdGVUaW1lKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGVUaW1lO1xuICB9XG4gIHByaXZhdGUgc2V0IHNlbGVjdGVkRGF0ZVRpbWUoZGF0ZVRpbWU6IERhdGUpIHtcbiAgICB0aGlzLl9zZWxlY3RlZERhdGVUaW1lID0gZGF0ZVRpbWUgPT0gbnVsbCA/IG51bGwgOiBuZXcgRGF0ZShkYXRlVGltZSk7XG4gICAgdGhpcy5fSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGUgPSBudWxsO1xuICAgIHRoaXMuX3NlbGVjdGVkUGVyc2lhbkRhdGVUaW1lID0gbnVsbDtcbiAgICBpZiAodGhpcy5yYW5nZVNlbGVjdG9yIHx8ICF0aGlzLnRpbWVQaWNrZXIpIHtcbiAgICAgIHRoaXMuY2xlYXJUaW1lKGRhdGVUaW1lKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBnZXQgc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWUoKTogUGVyc2lhbkRhdGVUaW1lIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWUgIT0gbnVsbCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWU7IH1cbiAgICB0aGlzLl9zZWxlY3RlZFBlcnNpYW5EYXRlVGltZSA9IG5ldyBQZXJzaWFuRGF0ZVRpbWUodGhpcy5zZWxlY3RlZERhdGVUaW1lKTtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWU7XG4gIH1cbiAgcHJpdmF0ZSBnZXQgc2VsZWN0ZWRTdGFydERhdGVUaW1lKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFN0YXJ0RGF0ZVRpbWU7XG4gIH1cbiAgcHJpdmF0ZSBzZXQgc2VsZWN0ZWRTdGFydERhdGVUaW1lKGRhdGVUaW1lOiBEYXRlKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRTdGFydERhdGVUaW1lID0gZGF0ZVRpbWUgPT0gbnVsbCA/IG51bGwgOiBuZXcgRGF0ZShkYXRlVGltZSk7XG4gICAgdGhpcy5fc2VsZWN0ZWRSYW5nZURhdGVzT2JqZWN0ID0gbnVsbDtcbiAgICB0aGlzLl9zZWxlY3RlZFBlcnNpYW5TdGFydERhdGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLmNsZWFyVGltZShkYXRlVGltZSk7XG4gIH1cbiAgcHJpdmF0ZSBnZXQgc2VsZWN0ZWRQZXJzaWFuU3RhcnREYXRlVGltZSgpOiBQZXJzaWFuRGF0ZVRpbWUge1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZFBlcnNpYW5TdGFydERhdGVUaW1lICE9IG51bGwpIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkUGVyc2lhblN0YXJ0RGF0ZVRpbWU7IH1cbiAgICB0aGlzLl9zZWxlY3RlZFBlcnNpYW5TdGFydERhdGVUaW1lID0gbmV3IFBlcnNpYW5EYXRlVGltZSh0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSk7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkUGVyc2lhblN0YXJ0RGF0ZVRpbWU7XG4gIH1cbiAgcHJpdmF0ZSBnZXQgc2VsZWN0ZWRFbmREYXRlVGltZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRFbmREYXRlVGltZTtcbiAgfVxuICBwcml2YXRlIHNldCBzZWxlY3RlZEVuZERhdGVUaW1lKGRhdGVUaW1lOiBEYXRlKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRFbmREYXRlVGltZSA9IGRhdGVUaW1lID09IG51bGwgPyBudWxsIDogbmV3IERhdGUoZGF0ZVRpbWUpO1xuICAgIHRoaXMuX3NlbGVjdGVkUmFuZ2VEYXRlc09iamVjdCA9IG51bGw7XG4gICAgdGhpcy5fc2VsZWN0ZWRQZXJzaWFuRW5kRGF0ZVRpbWUgPSBudWxsO1xuICAgIHRoaXMuY2xlYXJUaW1lKGRhdGVUaW1lKTtcbiAgfVxuXG4gIC8vIEBJbnB1dCgnbWluRGF0ZScpIG1pbkRhdGU6IERhdGU7XG4gIC8vIEBJbnB1dCgnbWF4RGF0ZScpIG1heERhdGU6IERhdGU7XG5cbiAgQElucHV0KClcbiAgIGdldCBtaW5EYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9taW5EYXRlO1xuICB9XG4gICBzZXQgbWluRGF0ZShkYXRlVGltZTpEYXRlKSB7ICAgICBcbiAgICB0aGlzLl9taW5EYXRlID0gZGF0ZVRpbWUgPT0gbnVsbCA/IG51bGwgOiBuZXcgRGF0ZShkYXRlVGltZSk7XG4gICAgXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7IHJldHVybjsgfVxuICAgICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcblxuXG4gICAgIFxuICB9XG5cbiAgQElucHV0KClcbiAgIGdldCBtYXhEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9tYXhEYXRlO1xuICB9XG4gICBzZXQgbWF4RGF0ZShkYXRlVGltZTpEYXRlKSB7XG4gICAgdGhpcy5fbWF4RGF0ZSA9IGRhdGVUaW1lID09IG51bGwgPyBudWxsIDogbmV3IERhdGUoZGF0ZVRpbWUpO1xuICAgIFxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkgeyByZXR1cm47IH1cbiAgICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG5cblxuICB9XG5cblxuICBwcml2YXRlIGdldCBzZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZSgpOiBQZXJzaWFuRGF0ZVRpbWUge1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZSAhPSBudWxsKSB7IHJldHVybiB0aGlzLl9zZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZTsgfVxuICAgIHRoaXMuX3NlbGVjdGVkUGVyc2lhbkVuZERhdGVUaW1lID0gbmV3IFBlcnNpYW5EYXRlVGltZSh0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUpO1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZTtcbiAgfVxuICBnZXQgcmVzb3VyY2VzKCk6IGFueSB7XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlcyAhPSBudWxsKSB7IHJldHVybiB0aGlzLl9yZXNvdXJjZXM7IH1cbiAgICBpZiAodGhpcy5pc1BlcnNpYW4pIHtcbiAgICAgIHRoaXMuX3Jlc291cmNlcyA9IHRoaXMucmVzb3VyY2VzU2VydmljZS5wZXJzaWFuUmVzb3VyY2VzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXNvdXJjZXMgPSB0aGlzLnJlc291cmNlc1NlcnZpY2UuZW5nbGlzaFJlc291cmNlcztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlcztcbiAgfVxuICBnZXQgeWVhcigpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl95ZWFyID4gMCkgeyByZXR1cm4gdGhpcy5feWVhcjsgfVxuICAgIHRoaXMuX3llYXIgPSB0aGlzLmlzUGVyc2lhblxuICAgICAgPyB0aGlzLnBlcnNpYW5EYXRlVGltZS55ZWFyXG4gICAgICA6IHRoaXMuZGF0ZVRpbWUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gdGhpcy5feWVhcjtcbiAgfVxuICBnZXQgeWVhclN0cmluZygpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl95ZWFyU3RyaW5nICE9ICcnKSB7IHJldHVybiB0aGlzLl95ZWFyU3RyaW5nOyB9XG4gICAgdGhpcy5feWVhclN0cmluZyA9IHRoaXMucGVyc2lhbkNoYXJcbiAgICAgID8gSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LnRvUGVyc2lhbk51bWJlcih0aGlzLnllYXIudG9TdHJpbmcoKSlcbiAgICAgIDogdGhpcy55ZWFyLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHRoaXMuX3llYXJTdHJpbmc7XG4gIH1cbiAgZ2V0IG1vbnRoKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX21vbnRoID4gMCkgeyByZXR1cm4gdGhpcy5fbW9udGg7IH1cbiAgICB0aGlzLl9tb250aCA9IHRoaXMuaXNQZXJzaWFuXG4gICAgICA/IFBlcnNpYW5EYXRlVGltZS5nZXRQZXJzaWFuTW9udGhJbmRleCh0aGlzLnBlcnNpYW5EYXRlVGltZS5tb250aE5hbWUpXG4gICAgICA6IHRoaXMuZGF0ZVRpbWUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4gdGhpcy5fbW9udGg7XG4gIH1cbiAgZ2V0IG1vbnRoTmFtZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9tb250aE5hbWUgIT0gJycpIHsgcmV0dXJuIHRoaXMuX21vbnRoTmFtZTsgfVxuICAgIHRoaXMuX21vbnRoTmFtZSA9IHRoaXMuaXNQZXJzaWFuXG4gICAgICA/IHRoaXMucGVyc2lhbkRhdGVUaW1lLm1vbnRoTmFtZVxuICAgICAgOiBQZXJzaWFuRGF0ZVRpbWUuZ2V0R3JlZ29yaWFuTW9udGhOYW1lc1t0aGlzLm1vbnRoXTtcbiAgICByZXR1cm4gdGhpcy5fbW9udGhOYW1lO1xuICB9XG4gIGdldCBtb250aE5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5fbW9udGhOYW1lcyAhPSBudWxsICYmIHRoaXMuX21vbnRoTmFtZXMubGVuZ3RoID4gMCkgeyByZXR1cm4gdGhpcy5fbW9udGhOYW1lczsgfVxuICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgY29uc3QgYWxsUGVyc2lhbk1vbnRocyA9IFBlcnNpYW5EYXRlVGltZS5nZXRQZXJzaWFuTW9udGhOYW1lcztcbiAgICAgIHRoaXMuX21vbnRoTmFtZXMgPSBbXG4gICAgICAgIGFsbFBlcnNpYW5Nb250aHNbMl0sIGFsbFBlcnNpYW5Nb250aHNbMV0sIGFsbFBlcnNpYW5Nb250aHNbMF0sXG4gICAgICAgIGFsbFBlcnNpYW5Nb250aHNbNV0sIGFsbFBlcnNpYW5Nb250aHNbNF0sIGFsbFBlcnNpYW5Nb250aHNbM10sXG4gICAgICAgIGFsbFBlcnNpYW5Nb250aHNbOF0sIGFsbFBlcnNpYW5Nb250aHNbN10sIGFsbFBlcnNpYW5Nb250aHNbNl0sXG4gICAgICAgIGFsbFBlcnNpYW5Nb250aHNbMTFdLCBhbGxQZXJzaWFuTW9udGhzWzEwXSwgYWxsUGVyc2lhbk1vbnRoc1s5XVxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbW9udGhOYW1lcyA9IFBlcnNpYW5EYXRlVGltZS5nZXRHcmVnb3JpYW5Nb250aE5hbWVzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbW9udGhOYW1lcztcbiAgfVxuICBnZXQgaG91cigpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl9ob3VyID4gMCkgeyByZXR1cm4gdGhpcy5faG91cjsgfVxuICAgIHRoaXMuX2hvdXIgPSB0aGlzLmRhdGVUaW1lLmdldEhvdXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuX2hvdXI7XG4gIH1cbiAgZ2V0IGhvdXJTdHJpbmcoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5faG91clN0cmluZyAhPSAnJykgeyByZXR1cm4gdGhpcy5faG91clN0cmluZzsgfVxuICAgIHRoaXMuX2hvdXJTdHJpbmcgPSB0aGlzLmhvdXIudG9TdHJpbmcoKTtcbiAgICBpZiAodGhpcy5wZXJzaWFuQ2hhcikgeyB0aGlzLl9ob3VyU3RyaW5nID0gSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LnRvUGVyc2lhbk51bWJlcih0aGlzLl9ob3VyU3RyaW5nKTsgfVxuICAgIHJldHVybiB0aGlzLl9ob3VyU3RyaW5nO1xuICB9XG4gIGdldCBtaW51dGUoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fbWludXRlID4gMCkgeyByZXR1cm4gdGhpcy5fbWludXRlOyB9XG4gICAgdGhpcy5fbWludXRlID0gdGhpcy5kYXRlVGltZS5nZXRNaW51dGVzKCk7XG4gICAgcmV0dXJuIHRoaXMuX21pbnV0ZTtcbiAgfVxuICBnZXQgbWludXRlU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX21pbnV0ZVN0cmluZyAhPSAnJykgeyByZXR1cm4gdGhpcy5fbWludXRlU3RyaW5nOyB9XG4gICAgdGhpcy5fbWludXRlU3RyaW5nID0gdGhpcy5taW51dGUudG9TdHJpbmcoKTtcbiAgICBpZiAodGhpcy5wZXJzaWFuQ2hhcikgeyB0aGlzLl9taW51dGVTdHJpbmcgPSBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkudG9QZXJzaWFuTnVtYmVyKHRoaXMuX21pbnV0ZVN0cmluZyk7IH1cbiAgICByZXR1cm4gdGhpcy5fbWludXRlU3RyaW5nO1xuICB9XG4gIGdldCBzZWNvbmQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fc2Vjb25kID4gMCkgeyByZXR1cm4gdGhpcy5fc2Vjb25kOyB9XG4gICAgdGhpcy5fc2Vjb25kID0gdGhpcy5kYXRlVGltZS5nZXRTZWNvbmRzKCk7XG4gICAgcmV0dXJuIHRoaXMuX3NlY29uZDtcbiAgfVxuICBnZXQgc2Vjb25kU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX3NlY29uZFN0cmluZyAhPSAnJykgeyByZXR1cm4gdGhpcy5fc2Vjb25kU3RyaW5nOyB9XG4gICAgdGhpcy5fc2Vjb25kU3RyaW5nID0gdGhpcy5zZWNvbmQudG9TdHJpbmcoKTtcbiAgICBpZiAodGhpcy5wZXJzaWFuQ2hhcikgeyB0aGlzLl9zZWNvbmRTdHJpbmcgPSBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkudG9QZXJzaWFuTnVtYmVyKHRoaXMuX3NlY29uZFN0cmluZyk7IH1cbiAgICByZXR1cm4gdGhpcy5fc2Vjb25kU3RyaW5nO1xuICB9XG4gIGdldCB3ZWVrZGF5TmFtZXMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5TmFtZXMgIT0gbnVsbCAmJiB0aGlzLl93ZWVrZGF5TmFtZXMubGVuZ3RoID4gMCkgeyByZXR1cm4gdGhpcy5fd2Vla2RheU5hbWVzOyB9XG4gICAgaWYgKHRoaXMuaXNQZXJzaWFuKSB7XG4gICAgICAvLyDYrdix2YjZgSDYp9mI2YQg2YbYp9mFINmH2KfbjCDYsdmI2LIg2YfZgdiq2Ycg2LTZhdiz24xcbiAgICAgIGNvbnN0IHBlcnNpYW5XZWVrRGF5TmFtZXMgPSBQZXJzaWFuRGF0ZVRpbWUuZ2V0UGVyc2lhbldlZWtkYXlOYW1lcztcbiAgICAgIHRoaXMuX3dlZWtkYXlOYW1lcyA9IFtcbiAgICAgICAgcGVyc2lhbldlZWtEYXlOYW1lc1s2XVswXSwgcGVyc2lhbldlZWtEYXlOYW1lc1s1XVswXSwgcGVyc2lhbldlZWtEYXlOYW1lc1s0XVswXSxcbiAgICAgICAgcGVyc2lhbldlZWtEYXlOYW1lc1szXVswXSwgcGVyc2lhbldlZWtEYXlOYW1lc1syXVswXSwgcGVyc2lhbldlZWtEYXlOYW1lc1sxXVswXSxcbiAgICAgICAgcGVyc2lhbldlZWtEYXlOYW1lc1swXVswXVxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ3JlZ29yaWFuV2Vla0RheU5hbWVzID0gUGVyc2lhbkRhdGVUaW1lLmdldEdyZWdvcmlhbldlZWtkYXlOYW1lcztcbiAgICAgIHRoaXMuX3dlZWtkYXlOYW1lcyA9IFtcbiAgICAgICAgZ3JlZ29yaWFuV2Vla0RheU5hbWVzWzFdWzBdICsgZ3JlZ29yaWFuV2Vla0RheU5hbWVzWzFdWzFdLFxuICAgICAgICBncmVnb3JpYW5XZWVrRGF5TmFtZXNbMl1bMF0gKyBncmVnb3JpYW5XZWVrRGF5TmFtZXNbMl1bMV0sXG4gICAgICAgIGdyZWdvcmlhbldlZWtEYXlOYW1lc1szXVswXSArIGdyZWdvcmlhbldlZWtEYXlOYW1lc1szXVsxXSxcbiAgICAgICAgZ3JlZ29yaWFuV2Vla0RheU5hbWVzWzRdWzBdICsgZ3JlZ29yaWFuV2Vla0RheU5hbWVzWzRdWzFdLFxuICAgICAgICBncmVnb3JpYW5XZWVrRGF5TmFtZXNbNV1bMF0gKyBncmVnb3JpYW5XZWVrRGF5TmFtZXNbNV1bMV0sXG4gICAgICAgIGdyZWdvcmlhbldlZWtEYXlOYW1lc1s2XVswXSArIGdyZWdvcmlhbldlZWtEYXlOYW1lc1s2XVsxXSxcbiAgICAgICAgZ3JlZ29yaWFuV2Vla0RheU5hbWVzWzBdWzBdICsgZ3JlZ29yaWFuV2Vla0RheU5hbWVzWzBdWzFdXG4gICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fd2Vla2RheU5hbWVzO1xuICB9XG4gIHByaXZhdGUgZ2V0IGdldFNlbGVjdGVkRGF0ZU9iamVjdCgpOiBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlVGltZSA9PSBudWxsKSB7IHJldHVybiBudWxsOyB9XG4gICAgaWYgKHRoaXMuX0lJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlICE9IG51bGwpIHsgcmV0dXJuIHRoaXMuX0lJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlOyB9XG4gICAgY29uc3QgZm9ybWF0ID0gdGhpcy5nZXREYXRlVGltZUZvcm1hdCgpO1xuICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgdGhpcy5fSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGUgPSB7XG4gICAgICAgIHllYXI6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWUueWVhcixcbiAgICAgICAgbW9udGg6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWUubW9udGgsXG4gICAgICAgIGRheTogdGhpcy5zZWxlY3RlZFBlcnNpYW5EYXRlVGltZS5kYXksXG4gICAgICAgIGhvdXI6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWUuaG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLnNlbGVjdGVkUGVyc2lhbkRhdGVUaW1lLm1pbnV0ZSxcbiAgICAgICAgc2Vjb25kOiB0aGlzLnNlbGVjdGVkUGVyc2lhbkRhdGVUaW1lLnNlY29uZCxcbiAgICAgICAgbWlsbGlzZWNvbmQ6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWUubWlsbGlzZWNvbmQsXG4gICAgICAgIGZvcm1hdFN0cmluZzogdGhpcy5zZWxlY3RlZFBlcnNpYW5EYXRlVGltZS50b1N0cmluZyhmb3JtYXQpLFxuICAgICAgICB1dGNEYXRlVGltZTogdGhpcy5zZWxlY3RlZERhdGVUaW1lXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9JSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZSA9IHtcbiAgICAgICAgeWVhcjogdGhpcy5zZWxlY3RlZERhdGVUaW1lLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIG1vbnRoOiB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUuZ2V0TW9udGgoKSxcbiAgICAgICAgZGF5OiB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUuZ2V0RGF0ZSgpLFxuICAgICAgICBob3VyOiB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUuZ2V0SG91cnMoKSxcbiAgICAgICAgbWludXRlOiB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUuZ2V0TWludXRlcygpLFxuICAgICAgICBzZWNvbmQ6IHRoaXMuc2VsZWN0ZWREYXRlVGltZS5nZXRTZWNvbmRzKCksXG4gICAgICAgIG1pbGxpc2Vjb25kOiB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgICAgIGZvcm1hdFN0cmluZzogSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LmRhdGVUaW1lVG9TdHJpbmcodGhpcy5zZWxlY3RlZERhdGVUaW1lLCBmb3JtYXQpLFxuICAgICAgICB1dGNEYXRlVGltZTogdGhpcy5zZWxlY3RlZERhdGVUaW1lXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodGhpcy5wZXJzaWFuQ2hhcikge1xuICAgICAgdGhpcy5fSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGUuZm9ybWF0U3RyaW5nID0gSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LnRvUGVyc2lhbk51bWJlcih0aGlzLl9JSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZS5mb3JtYXRTdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9JSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZS5mb3JtYXRTdHJpbmcgPSBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkudG9FbmdsaXNoU3RyaW5nKHRoaXMuX0lJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlLmZvcm1hdFN0cmluZyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9JSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZTtcbiAgfVxuICBnZXQgZ2V0U2VsZWN0ZWREYXkoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5nZXRTZWxlY3RlZERhdGVPYmplY3QgPT0gbnVsbCB8fCB0aGlzLnJhbmdlU2VsZWN0b3IpIHsgcmV0dXJuIDA7IH1cbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RlZERhdGVPYmplY3QuZGF5O1xuICB9XG4gIHByaXZhdGUgZ2V0IGdldFNlbGVjdGVkUmFuZ2VEYXRlc09iamVjdCgpOiBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyUmFuZ2VEYXRlIHtcbiAgICBpZiAoIXRoaXMucmFuZ2VTZWxlY3RvciB8fCB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsICYmIHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9PSBudWxsKSB7IHJldHVybiBudWxsOyB9XG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkUmFuZ2VEYXRlc09iamVjdCAhPSBudWxsKSB7IHJldHVybiB0aGlzLl9zZWxlY3RlZFJhbmdlRGF0ZXNPYmplY3Q7IH1cbiAgICBjb25zdCBmb3JtYXQgPSB0aGlzLmdldERhdGVUaW1lRm9ybWF0KCk7XG4gICAgbGV0IHN0YXJ0RGF0ZTogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGU7XG4gICAgbGV0IGVuZERhdGU6IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXRlO1xuICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgc3RhcnREYXRlID0ge1xuICAgICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsID8gMCA6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuU3RhcnREYXRlVGltZS55ZWFyLFxuICAgICAgICBtb250aDogdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPT0gbnVsbCA/IDAgOiB0aGlzLnNlbGVjdGVkUGVyc2lhblN0YXJ0RGF0ZVRpbWUubW9udGgsXG4gICAgICAgIGRheTogdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPT0gbnVsbCA/IDAgOiB0aGlzLnNlbGVjdGVkUGVyc2lhblN0YXJ0RGF0ZVRpbWUuZGF5LFxuICAgICAgICBob3VyOiAwLFxuICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgIHNlY29uZDogMCxcbiAgICAgICAgbWlsbGlzZWNvbmQ6IDAsXG4gICAgICAgIGZvcm1hdFN0cmluZzogdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPT0gbnVsbCA/ICcnIDogdGhpcy5zZWxlY3RlZFBlcnNpYW5TdGFydERhdGVUaW1lLnRvU3RyaW5nKGZvcm1hdCksXG4gICAgICAgIHV0Y0RhdGVUaW1lOiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZVxuICAgICAgfTtcbiAgICAgIGVuZERhdGUgPSB7XG4gICAgICAgIHllYXI6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuRW5kRGF0ZVRpbWUgPT0gbnVsbCA/IDAgOiB0aGlzLnNlbGVjdGVkUGVyc2lhbkVuZERhdGVUaW1lLnllYXIsXG4gICAgICAgIG1vbnRoOiB0aGlzLnNlbGVjdGVkUGVyc2lhbkVuZERhdGVUaW1lID09IG51bGwgPyAwIDogdGhpcy5zZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZS5tb250aCxcbiAgICAgICAgZGF5OiB0aGlzLnNlbGVjdGVkUGVyc2lhbkVuZERhdGVUaW1lID09IG51bGwgPyAwIDogdGhpcy5zZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZS5kYXksXG4gICAgICAgIGhvdXI6IDAsXG4gICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgc2Vjb25kOiAwLFxuICAgICAgICBtaWxsaXNlY29uZDogMCxcbiAgICAgICAgZm9ybWF0U3RyaW5nOiB0aGlzLnNlbGVjdGVkUGVyc2lhbkVuZERhdGVUaW1lID09IG51bGwgPyAnJyA6IHRoaXMuc2VsZWN0ZWRQZXJzaWFuRW5kRGF0ZVRpbWUudG9TdHJpbmcoZm9ybWF0KSxcbiAgICAgICAgdXRjRGF0ZVRpbWU6IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnREYXRlID0ge1xuICAgICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsID8gMCA6IHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIG1vbnRoOiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsID8gMCA6IHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lLmdldE1vbnRoKCksXG4gICAgICAgIGRheTogdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPT0gbnVsbCA/IDAgOiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZS5nZXREYXRlKCksXG4gICAgICAgIGhvdXI6IDAsXG4gICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgc2Vjb25kOiAwLFxuICAgICAgICBtaWxsaXNlY29uZDogMCxcbiAgICAgICAgZm9ybWF0U3RyaW5nOiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsID8gJycgOiBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkuZGF0ZVRpbWVUb1N0cmluZyh0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSwgZm9ybWF0KSxcbiAgICAgICAgdXRjRGF0ZVRpbWU6IHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lID09IG51bGwgPyBudWxsIDogdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWVcbiAgICAgIH07XG4gICAgICBlbmREYXRlID0ge1xuICAgICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUgPT0gbnVsbCA/IDAgOiB0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgbW9udGg6IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9PSBudWxsID8gMCA6IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZS5nZXRNb250aCgpLFxuICAgICAgICBkYXk6IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9PSBudWxsID8gMCA6IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZS5nZXREYXRlKCksXG4gICAgICAgIGhvdXI6IDAsXG4gICAgICAgIG1pbnV0ZTogMCxcbiAgICAgICAgc2Vjb25kOiAwLFxuICAgICAgICBtaWxsaXNlY29uZDogMCxcbiAgICAgICAgZm9ybWF0U3RyaW5nOiB0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUgPT0gbnVsbCA/ICcnIDogSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LmRhdGVUaW1lVG9TdHJpbmcodGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lLCBmb3JtYXQpLFxuICAgICAgICB1dGNEYXRlVGltZTogdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lID09IG51bGwgPyBudWxsIDogdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZFJhbmdlRGF0ZXNPYmplY3QgPSB7XG4gICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGU6IGVuZERhdGVcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFJhbmdlRGF0ZXNPYmplY3Q7XG4gIH1cblxuICBnZXQgaXNSZWplY3RCdXR0b25EaXNhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsICYmIHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9PSBudWxsO1xuICB9XG4gIGdldCBpc0NvbmZpcm1CdXR0b25EaXNhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsIHx8IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9PSBudWxsO1xuICB9XG4gIHByaXZhdGUgZ2V0IGlzUmFuZ2VTZWxlY3RvclJlYWR5KCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5yYW5nZVNlbGVjdG9yKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsKSB7IHJldHVybiBmYWxzZTsgfSAvLyDZh9mG2YjYsiDYsdmI2LIg2LTYsdmI2Lkg2KfZhtiq2K7Yp9ioINmG2LTYr9mHINin2LPYqlxuICAgIGlmICh0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSAhPSBudWxsICYmIHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSAhPSBudWxsKSB7IHJldHVybiBmYWxzZTsgfSAvLyDYsdmG2Kwg2KrYp9ix24zYriDYp9mG2KrYrtin2Kgg2LTYr9mHINio2YjYr1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZGF5c0FuaW1hdGlvblN0YXRlTmFtZSA9ICd2aXNpYmxlJztcbiAgbW9udGhPclllYXJTZWxlY3RvclZpc2liaWxpdHlTdGF0ZU5hbWUgPSAnaGlkZGVuJztcbiAgbW9udGhTZWxlY3RvclZpc2liaWxpdHlTdGF0ZU5hbWUgPSAnaGlkZGVuJztcbiAgeWVhclNlbGVjdG9yVmlzaWJpbGl0eVN0YXRlTmFtZSA9ICdoaWRkZW4nO1xuXG4gIHNob3dNb250aFNlbGVjdG9yQmxvY2s6IGJvb2xlYW47XG4gIHNob3dZZWFyc1NlbGVjdG9yQmxvY2s6IGJvb2xlYW47XG5cbiAgLy8g2KrYp9ix24zYrtuMINqp2Ycg2KjYsdin24wg2YbZhdin24zYtCDYqtmC2YjbjNmFINin2LPYqtmB2KfYr9mHINmF24wg2LTZiNivXG4gIHByaXZhdGUgX2RhdGVUaW1lOiBEYXRlID0gbnVsbDtcblxuICBwcml2YXRlIF9wZXJzaWFuRGF0ZVRpbWU6IFBlcnNpYW5EYXRlVGltZSA9IG51bGw7XG5cbiAgLy8g2LHZiNiyINin2YbYqtiu2KfYqCDYtNiv2YdcbiAgcHJpdmF0ZSBfc2VsZWN0ZWREYXRlVGltZTogRGF0ZSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRQZXJzaWFuRGF0ZVRpbWU6IFBlcnNpYW5EYXRlVGltZSA9IG51bGw7XG5cbiAgLy8g2LHZiNiyINi02LHZiNi5INin2YbYqtiu2KfYqCDYtNiv2Ycg2K/YsSDYsdmG2Kwg2LPZhNqp2KrZiNixXG4gIHByaXZhdGUgX3NlbGVjdGVkU3RhcnREYXRlVGltZTogRGF0ZSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRQZXJzaWFuU3RhcnREYXRlVGltZTogUGVyc2lhbkRhdGVUaW1lID0gbnVsbDtcblxuICAvLyDYsdmI2LIg2b7Yp9uM2KfZhtuMINin2YbYqtiu2KfYqCDYtNiv2Ycg2K/YsSDYsdmG2Kwg2LPZhNqp2KrZiNixXG4gIHByaXZhdGUgX3NlbGVjdGVkRW5kRGF0ZVRpbWU6IERhdGUgPSBudWxsO1xuXG4gIC8vINqp2YXYqtix24zZhiDYqtin2LHbjNiuINmF2KzYp9iyINio2LHYp9uMINin2YbYqtiu2KfYqFxuICBwcml2YXRlIF9taW5EYXRlOiBEYXRlID0gbnVsbDtcblxuICAvLyDYqNuM2LTYqtix24zZhiDYqtin2LHbjNiuINmF2KzYp9iyINio2LHYp9uMINin2YbYqtiu2KfYqFxuICBwcml2YXRlIF9tYXhEYXRlOiBEYXRlID0gbnVsbDtcblxuICBwcml2YXRlIF9zZWxlY3RlZFBlcnNpYW5FbmREYXRlVGltZTogUGVyc2lhbkRhdGVUaW1lID0gbnVsbDtcblxuICB5ZWFyc1RvU2VsZWN0OiBzdHJpbmdbXTtcbiAgZGF5c0luTW9udGg6IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXlbXTtcblxuICBwcml2YXRlIF9yZXNvdXJjZXM6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX3llYXIgPSAwO1xuICBwcml2YXRlIF95ZWFyU3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX21vbnRoID0gMDtcbiAgcHJpdmF0ZSBfbW9udGhOYW1lID0gJyc7XG4gIHByaXZhdGUgX21vbnRoTmFtZXM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgX2hvdXIgPSAwO1xuICBwcml2YXRlIF9ob3VyU3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX21pbnV0ZSA9IDA7XG4gIHByaXZhdGUgX21pbnV0ZVN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9zZWNvbmQgPSAwO1xuICBwcml2YXRlIF9zZWNvbmRTdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfd2Vla2RheU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIF9JSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF0ZTogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRhdGUgPSBudWxsO1xuXG4gIHByaXZhdGUgX3NlbGVjdGVkUmFuZ2VEYXRlc09iamVjdDogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlclJhbmdlRGF0ZSA9IG51bGw7XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnJhbmdlU2VsZWN0b3IpIHsgdGhpcy50aW1lUGlja2VyID0gZmFsc2U7IH1cbiAgICBpZiAoIXRoaXMuaXNQZXJzaWFuKSB7IHRoaXMucGVyc2lhbkNoYXIgPSBmYWxzZTsgfVxuICAgIC8vIGlmICh0aGlzLmluaXRpYWxWYWx1ZSAhPSAnJykge1xuICAgIC8vICAgaWYgKHRoaXMucmFuZ2VTZWxlY3Rvcikge1xuICAgIC8vICAgICB0cnkge1xuICAgIC8vICAgICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgIC8vICAgICAgICAgY29uc3QgcmFuZ2VzID0gTWRzRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LmdldFBlcnNpYW5EYXRlUmFuZ2VzKHRoaXMuaW5pdGlhbFZhbHVlKTtcbiAgICAvLyAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRSYW5nZVBlcnNpYW5EYXRlVGltZXMocmFuZ2VzKTtcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY29uc3QgcmFuZ2VzID0gTWRzRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LmdldERhdGVSYW5nZXModGhpcy5pbml0aWFsVmFsdWUpO1xuICAgIC8vICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFJhbmdlRGF0ZVRpbWVzKHJhbmdlcyk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZTtcbiAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xuICAgIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ3ZhbHVlIGlzIGluIHdyb25nIGZvcm1hdCwgd2hlbiByYW5nZVNlbGVjdG9yIGlzIHRydWUgeW91IHNob3VsZCB3cml0ZSB2YWx1ZSBsaWtlIFwiMTM5Ni8wMy8wMSAtIDEzOTYvMDMvMTVcIiBvciBcIjIwMTcvMy85IC0gMjAxNy8zLzEwXCInLCBlKTtcbiAgICAvLyAgICAgICB0aGlzLnNldFNlbGVjdGVkUmFuZ2VEYXRlVGltZXMobnVsbCk7XG4gICAgLy8gICAgICAgdGhpcy5kYXRlVGltZSA9IG51bGw7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgaWYgKHRoaXMuaXNQZXJzaWFuKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmRhdGVUaW1lID0gUGVyc2lhbkRhdGVUaW1lLnBhcnNlKHRoaXMuaW5pdGlhbFZhbHVlKS50b0RhdGUoKTtcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5kYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2UodGhpcy5pbml0aWFsVmFsdWUpKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyAgICAgICBjb25zb2xlLmVycm9yKCd2YWx1ZSBpcyBpbiB3cm9uZyBmb3JtYXQsIHlvdSBzaG91bGQgd3JpdGUgdmFsdWUgbGlrZSBcIjEzOTYvMDMvMDEgIDExOjMwOjI3XCIgb3IgXCIyMDE3LzA5LzAzICAxMTozMDowMFwiLCB5b3UgY2FuIHJlbW92ZSB0aW1lJywgZSk7XG4gICAgLy8gICAgICAgdGhpcy5kYXRlVGltZSA9IG51bGw7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdGhpcy5kYXRlVGltZSA9IG51bGw7XG4gICAgLy8gfVxuICAgIC8vIHRoaXMudXBkYXRlWWVhcnNMaXN0KCk7XG4gICAgLy8gdGhpcy51cGRhdGVNb250aERheXMoKTtcblxuICAgIC8vIGlmICh0aGlzLmluaXRpYWxWYWx1ZSAhPSAnJykge1xuICAgIC8vICAgaWYgKHRoaXMucmFuZ2VTZWxlY3Rvcikge1xuICAgIC8vICAgICB0aGlzLmZpcmVSYW5nZUNoYW5nZUV2ZW50KCk7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCgpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICB0aGlzLmRhdGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLnVwZGF0ZVllYXJzTGlzdCgpO1xuICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIHNwbGl0U3RhcnRFbmREYXRlU3RyaW5nKGRhdGVTdHJpbmc6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZy5zcGxpdCgnIC0gJyk7XG4gIH1cbiAgcHJpdmF0ZSBzZXRTZWxlY3RlZFJhbmdlRGF0ZVRpbWVzKGRhdGVUaW1lczogRGF0ZVtdKTogdm9pZCB7XG4gICAgZGF0ZVRpbWVzID0gZGF0ZVRpbWVzID09IG51bGwgfHwgZGF0ZVRpbWVzLmxlbmd0aCA8IDIgPyBbbnVsbCwgbnVsbF0gOiBkYXRlVGltZXM7XG4gICAgdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPSBkYXRlVGltZXNbMF07XG4gICAgdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lID0gZGF0ZVRpbWVzWzFdO1xuICB9XG4gIHByaXZhdGUgc2V0U2VsZWN0ZWRSYW5nZVBlcnNpYW5EYXRlVGltZXMocGVyc2lhbkRhdGVUaW1lczogUGVyc2lhbkRhdGVUaW1lW10pOiB2b2lkIHtcbiAgICBjb25zdCByYW5nZXMgPSBbXG4gICAgICBwZXJzaWFuRGF0ZVRpbWVzWzBdID09IG51bGwgPyBudWxsIDogcGVyc2lhbkRhdGVUaW1lc1swXS50b0RhdGUoKSxcbiAgICAgIHBlcnNpYW5EYXRlVGltZXNbMV0gPT0gbnVsbCA/IG51bGwgOiBwZXJzaWFuRGF0ZVRpbWVzWzFdLnRvRGF0ZSgpXG4gICAgXTtcbiAgICB0aGlzLnNldFNlbGVjdGVkUmFuZ2VEYXRlVGltZXMocmFuZ2VzKTtcbiAgfVxuICBwcml2YXRlIGNsZWFyVGltZShkYXRlVGltZTogRGF0ZSk6IHZvaWQge1xuICAgIGlmIChkYXRlVGltZSA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgIGRhdGVUaW1lLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB9XG4gIHByaXZhdGUgZ2V0RGF0ZVRpbWVGb3JtYXQoKTogc3RyaW5nIHtcbiAgICBsZXQgZm9ybWF0ID0gdGhpcy5mb3JtYXQ7XG4gICAgaWYgKGZvcm1hdC50cmltKCkgPT0gJycpIHtcbiAgICAgIGZvcm1hdCA9ICd5eXl5L01NL2RkJztcbiAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXIgJiYgIXRoaXMucmFuZ2VTZWxlY3Rvcikge1xuICAgICAgICBmb3JtYXQgKz0gJyAgIGhoOm1tOnNzJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucmFuZ2VTZWxlY3RvciB8fCAhdGhpcy50aW1lUGlja2VyKSB7XG4gICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvdCp8Zip8cyp8bSp8aCp8SCovLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXQ7XG4gIH1cblxuICBzZXREYXRlVGltZUJ5RGF0ZShkYXRlVGltZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUgPSBkYXRlVGltZTtcbiAgICB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9ICFkYXRlVGltZSA/IG51bGwgOiBuZXcgRGF0ZShkYXRlVGltZSk7XG4gIH1cbiAgc2V0RGF0ZVRpbWVSYW5nZXNCeURhdGUoc3RhcnREYXRlVGltZTogRGF0ZSwgZW5kRGF0ZVRpbWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVUaW1lID0gdGhpcy5zZWxlY3RlZERhdGVUaW1lID0gc3RhcnREYXRlVGltZTtcbiAgICB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9IHN0YXJ0RGF0ZVRpbWUgPT0gbnVsbCA/IG51bGwgOiBuZXcgRGF0ZShzdGFydERhdGVUaW1lKTtcbiAgICB0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUgPSBlbmREYXRlVGltZSA9PSBudWxsID8gbnVsbCA6IG5ldyBEYXRlKGVuZERhdGVUaW1lKTtcbiAgfVxuXG4gIC8vIHNldE1pbkRhdGUobWluRGF0ZTogRGF0ZSk6IHZvaWQgeyAgXG4gIC8vICAgdGhpcy5taW5EYXRlICA9IG1pbkRhdGUgPT0gbnVsbCA/IG51bGwgOiBuZXcgRGF0ZShtaW5EYXRlKTtcbiAgLy8gfVxuXG4gIC8vIHNldE1heERhdGUobWF4RGF0ZTogRGF0ZSk6IHZvaWQgeyBcbiAgLy8gICB0aGlzLm1heERhdGUgID0gbWF4RGF0ZSA9PSBudWxsID8gbnVsbCA6IG5ldyBEYXRlKG1heERhdGUpOyBcbiAgLy8gfVxuXG4gIHNldERhdGVUaW1lQnlTdHJpbmcoZGF0ZVRpbWVTdHJpbmc6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZGF0ZVRpbWVTdHJpbmcgPT0gJycpIHtcbiAgICAgICAgdGhpcy5jbGVhckRhdGVUaW1lUGlja2VyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgICBpZiAodGhpcy5yYW5nZVNlbGVjdG9yKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRBbmRFbmREYXRlQXJyYXkgPSB0aGlzLnNwbGl0U3RhcnRFbmREYXRlU3RyaW5nKGRhdGVUaW1lU3RyaW5nKTtcbiAgICAgICAgICB0aGlzLmRhdGVUaW1lID0gdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPSBQZXJzaWFuRGF0ZVRpbWUucGFyc2Uoc3RhcnRBbmRFbmREYXRlQXJyYXlbMF0pLnRvRGF0ZSgpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9IFBlcnNpYW5EYXRlVGltZS5wYXJzZShzdGFydEFuZEVuZERhdGVBcnJheVsxXSkudG9EYXRlKCk7XG4gICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lID4gdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0YXJ0IGRhdGUgbXVzdCBiZSBsZXNzIHRoYW4gZW5kIGRhdGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXRlVGltZSA9IHRoaXMuc2VsZWN0ZWREYXRlVGltZSA9IFBlcnNpYW5EYXRlVGltZS5wYXJzZShkYXRlVGltZVN0cmluZykudG9EYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnJhbmdlU2VsZWN0b3IpIHtcbiAgICAgICAgICBjb25zdCBzdGFydEFuZEVuZERhdGVBcnJheSA9IHRoaXMuc3BsaXRTdGFydEVuZERhdGVTdHJpbmcoZGF0ZVRpbWVTdHJpbmcpO1xuICAgICAgICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2Uoc3RhcnRBbmRFbmREYXRlQXJyYXlbMF0pKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKHN0YXJ0QW5kRW5kRGF0ZUFycmF5WzFdKSk7XG4gICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lID4gdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0YXJ0IGRhdGUgbXVzdCBiZSBsZXNzIHRoYW4gZW5kIGRhdGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXRlVGltZSA9IHRoaXMuc2VsZWN0ZWREYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0ZVRpbWVTdHJpbmcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmFuZ2VTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmZpcmVSYW5nZUNoYW5nZUV2ZW50KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCgpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmNsZWFyRGF0ZVRpbWVQaWNrZXIoKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgY2xlYXJEYXRlVGltZVBpY2tlcigpIHtcbiAgICB0aGlzLmRhdGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUgPSB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9IG51bGw7XG4gICAgdGhpcy5yZXNldFRvRmFsc2VSYW5nZVBhcmFtZXRlcnNJbk1vbnRoRGF5cygpO1xuICAgIGlmICh0aGlzLnJhbmdlU2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZmlyZVJhbmdlQ2hhbmdlRXZlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlWWVhcnNMaXN0KCk6IHZvaWQge1xuICAgIHRoaXMueWVhcnNUb1NlbGVjdCA9IFtdO1xuICAgIGNvbnN0IHNlbGVjdGVkWWVhciA9IHRoaXMueWVhcjtcbiAgICBmb3IgKGxldCBpID0gc2VsZWN0ZWRZZWFyIC0gMzc7IGkgPD0gc2VsZWN0ZWRZZWFyICsgMzc7IGkrKykge1xuICAgICAgaWYgKHRoaXMucGVyc2lhbkNoYXIpIHtcbiAgICAgICAgdGhpcy55ZWFyc1RvU2VsZWN0LnB1c2goSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LnRvUGVyc2lhbk51bWJlcihpLnRvU3RyaW5nKCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMueWVhcnNUb1NlbGVjdC5wdXNoKGkudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgZ2V0RGF5T2JqZWN0KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuLCBob2xpRGF5OiBib29sZWFuLCBpc1RvZGF5OiBib29sZWFuKTogSUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRheSB7XG4gICAgbGV0IGlzV2l0aGluRGF0ZVJhbmdlID0gZmFsc2U7XG4gICAgbGV0IGlzU3RhcnRPckVuZE9mUmFuZ2UgPSBmYWxzZTtcbiAgIFxuXG4gICAgY29uc3QgZGF0ZVRpbWUgPSB0aGlzLmlzUGVyc2lhblxuICAgICAgICA/IFBlcnNpYW5EYXRlVGltZS5mcm9tUGVyc2lhbkRhdGUoeWVhciwgbW9udGgsIGRheSkudG9EYXRlKClcbiAgICAgICAgOiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblxuICAgIGlmICh0aGlzLnJhbmdlU2VsZWN0b3IgJiYgdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgIT0gbnVsbCkgeyAgICAgIFxuICAgICAgaXNXaXRoaW5EYXRlUmFuZ2UgPSBkYXRlVGltZSA+PSB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUgIT0gbnVsbCkge1xuICAgICAgICBpc1dpdGhpbkRhdGVSYW5nZSA9IGlzV2l0aGluRGF0ZVJhbmdlICYmIGRhdGVUaW1lIDw9IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZTtcbiAgICAgIH1cbiAgICAgIGlzU3RhcnRPckVuZE9mUmFuZ2UgPVxuICAgICAgICAodGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgIT0gbnVsbCAmJiBkYXRlVGltZS5nZXRUaW1lKCkgPT0gdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUuZ2V0VGltZSgpKSB8fFxuICAgICAgICAodGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lICE9IG51bGwgJiYgZGF0ZVRpbWUuZ2V0VGltZSgpID09IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZS5nZXRUaW1lKCkpO1xuICAgIH1cblxuICAgIGxldCBpY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXkgPSB7XG4gICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgZGF5OiBkYXksXG4gICAgICBkYXlTdHJpbmc6IHRoaXMucGVyc2lhbkNoYXIgPyBJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkudG9QZXJzaWFuTnVtYmVyKGRheS50b1N0cmluZygpKSA6IGRheS50b1N0cmluZygpLFxuICAgICAgZGlzYWJsZTogZGlzYWJsZWQsXG4gICAgICBob2xpRGF5OiBob2xpRGF5LFxuICAgICAgdG9kYXk6IGlzVG9kYXksXG4gICAgICBpc1dpdGhpblJhbmdlOiBpc1dpdGhpbkRhdGVSYW5nZSxcbiAgICAgIGlzU3RhcnRPckVuZE9mUmFuZ2U6IGlzU3RhcnRPckVuZE9mUmFuZ2VcbiAgICB9IGFzIElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXk7XG5cbiAgICB0aGlzLnVwZGF0ZUlzQWxsb3dTZWxlY3RlZChpY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXkpXG4gIFxuICAgIHJldHVybiBpY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUlzQWxsb3dTZWxlY3RlZChpY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXk6SUljb1RlY0FuZ3VsYXJEYXRlVGltZVBpY2tlckRheSl7XG4gICAgbGV0IGlzQWxsb3dTZWxlY3RlZCA9IHRydWU7XG5cbiAgICBsZXQgeWVhciA9aWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF5LnllYXI7XG4gICAgbGV0IG1vbnRoID1pY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXkubW9udGg7XG4gICAgbGV0IGRheSA9aWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF5LmRheTtcblxuICAgIGNvbnN0IGRhdGVUaW1lID0gdGhpcy5pc1BlcnNpYW5cbiAgICA/IFBlcnNpYW5EYXRlVGltZS5mcm9tUGVyc2lhbkRhdGUoeWVhciwgbW9udGgsIGRheSkudG9EYXRlKClcbiAgICA6IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuXG5cbiAgICBpZih0aGlzLl9taW5EYXRlICE9IG51bGwgJiYgaXNBbGxvd1NlbGVjdGVkICl7XG4gICAgICBpc0FsbG93U2VsZWN0ZWQgPSB0aGlzLl9taW5EYXRlIDw9IGRhdGVUaW1lO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX21heERhdGUgIT0gbnVsbCAmJiBpc0FsbG93U2VsZWN0ZWQgKXtcbiAgICAgIGlzQWxsb3dTZWxlY3RlZCA9IHRoaXMuX21heERhdGUgPj0gZGF0ZVRpbWU7XG4gICAgfVxuXG4gICAgaWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF5LmlzQWxsb3dTZWxlY3RlZCA9IGlzQWxsb3dTZWxlY3RlZDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTW9udGhEYXlzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRheXM6IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXlbXSA9IFtdO1xuICAgIGxldCBjb3VudGVyID0gMCxcbiAgICAgIHllYXIgPSAwLFxuICAgICAgbW9udGggPSAwO1xuICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgY29uc3QgcGVyc2lhbkRhdGVUaW1lTm93ID0gUGVyc2lhbkRhdGVUaW1lLm5vdztcbiAgICAgIGNvbnN0IHRvZGF5ID0gcGVyc2lhbkRhdGVUaW1lTm93LmRheTtcbiAgICAgIGNvbnN0IGlzWWVhckFuZE1vbnRoSW5DdXJyZW50TW9udGggPSBwZXJzaWFuRGF0ZVRpbWVOb3cueWVhciA9PSB0aGlzLnBlcnNpYW5EYXRlVGltZS55ZWFyICYmIHBlcnNpYW5EYXRlVGltZU5vdy5tb250aCA9PSB0aGlzLnBlcnNpYW5EYXRlVGltZS5tb250aDtcbiAgICAgIC8vINix2YjYstmH2KfbjCDZhdin2Ycg2YLYqNmEXG4gICAgICBpZiAodGhpcy5wZXJzaWFuU3RhcnREYXlPZk1vbnRoICE9IFBlcnNpYW5EYXlPZldlZWsuU2F0dXJkYXkpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQZXJzaWFuTW9udGggPSB0aGlzLnBlcnNpYW5EYXRlVGltZS5hZGRNb250aHMoLTEpO1xuICAgICAgICB5ZWFyID0gcHJldmlvdXNQZXJzaWFuTW9udGgueWVhcjtcbiAgICAgICAgbW9udGggPSBwcmV2aW91c1BlcnNpYW5Nb250aC5tb250aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IHByZXZpb3VzUGVyc2lhbk1vbnRoLmdldE1vbnRoRGF5cyAtIHRoaXMucGVyc2lhblN0YXJ0RGF5T2ZNb250aCArIDE7IGkgPD0gcHJldmlvdXNQZXJzaWFuTW9udGguZ2V0TW9udGhEYXlzOyBpKyspIHtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgZGF5cy5wdXNoKHRoaXMuZ2V0RGF5T2JqZWN0KHllYXIsIG1vbnRoLCBpLCB0cnVlLCBmYWxzZSwgZmFsc2UpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8g2LHZiNiy2YfYp9uMINmF2KfZhyDYrNin2LHbjFxuICAgICAgeWVhciA9IHRoaXMucGVyc2lhbkRhdGVUaW1lLnllYXI7XG4gICAgICBtb250aCA9IHRoaXMucGVyc2lhbkRhdGVUaW1lLm1vbnRoO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5wZXJzaWFuRGF0ZVRpbWUuZ2V0TW9udGhEYXlzOyBpKyspIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgICBkYXlzLnB1c2godGhpcy5nZXREYXlPYmplY3QoeWVhciwgbW9udGgsIGksIGZhbHNlLCBmYWxzZSwgaXNZZWFyQW5kTW9udGhJbkN1cnJlbnRNb250aCAmJiBpID09IHRvZGF5KSk7XG4gICAgICB9XG4gICAgICAvLyDYsdmI2LLZh9in24wg2YXYp9mHINio2LnYr1xuICAgICAgY29uc3QgbmV4dE1vbnRoUGVyc2lhbkRhdGVUaW1lID0gdGhpcy5wZXJzaWFuRGF0ZVRpbWUuYWRkTW9udGhzKDEpO1xuICAgICAgeWVhciA9IG5leHRNb250aFBlcnNpYW5EYXRlVGltZS55ZWFyO1xuICAgICAgbW9udGggPSBuZXh0TW9udGhQZXJzaWFuRGF0ZVRpbWUubW9udGg7XG4gICAgICBmb3IgKGxldCBpID0gMTsgY291bnRlciA8PSAoNiAqIDcpIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgZGF5cy5wdXNoKHRoaXMuZ2V0RGF5T2JqZWN0KHllYXIsIG1vbnRoLCBpLCB0cnVlLCBmYWxzZSwgZmFsc2UpKTtcbiAgICAgIH1cbiAgICAgIC8vINiv2LHYs9iqINqp2LHYr9mGINix2KfYs9iqINio2Ycg2obZviDYqNmI2K/ZhiDYqtmC2YjbjNmFXG4gICAgICBjb25zdCB0ZW1wID0gZGF5cy5zbGljZSgwKTtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDY7IHJvdysrKSB7XG4gICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDc7IGNvbHVtbisrKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXgxID0gcm93ICogNyArIGNvbHVtbjtcbiAgICAgICAgICBjb25zdCBpbmRleDIgPSBNYXRoLmFicygocm93ICsgMSkgKiA3IC0gKGNvbHVtbiArIDEpKTtcbiAgICAgICAgICBkYXlzW2luZGV4MV0gPSB0ZW1wW2luZGV4Ml07XG4gICAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgICBkYXlzW2luZGV4MV0uaG9saURheSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGVUaW1lTm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gZGF0ZVRpbWVOb3cuZ2V0RGF0ZSgpO1xuICAgICAgY29uc3QgaXNZZWFyQW5kTW9udGhJbkN1cnJlbnRNb250aCA9IGRhdGVUaW1lTm93LmdldE1vbnRoKCkgPT0gdGhpcy5kYXRlVGltZS5nZXRNb250aCgpICYmIGRhdGVUaW1lTm93LmdldEZ1bGxZZWFyKCkgPT0gdGhpcy5kYXRlVGltZS5nZXRGdWxsWWVhcigpO1xuICAgICAgLy8g2LHZiNiy2YfYp9uMINmF2KfZhyDZgtio2YRcbiAgICAgIGlmICh0aGlzLmdyZWdvcmlhblN0YXJ0RGF5T2ZNb250aCAhPSBHcmVnb3JpYW5EYXlPZldlZWsuU2F0dXJkYXkpIHtcbiAgICAgICAgY29uc3QgZGF0ZVRpbWVDbG9uZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZVRpbWUpO1xuICAgICAgICBkYXRlVGltZUNsb25lLnNldE1vbnRoKHRoaXMuZGF0ZVRpbWUuZ2V0TW9udGgoKSk7XG4gICAgICAgIHllYXIgPSBkYXRlVGltZUNsb25lLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIG1vbnRoID0gZGF0ZVRpbWVDbG9uZS5nZXRNb250aCgpO1xuICAgICAgICBjb25zdCBwcmV2aW91c01vbnRoRGF5cyA9IG5ldyBEYXRlKGRhdGVUaW1lQ2xvbmUuZ2V0RnVsbFllYXIoKSwgZGF0ZVRpbWVDbG9uZS5nZXRNb250aCgpLCAwKS5nZXREYXRlKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSBwcmV2aW91c01vbnRoRGF5cyAtIHRoaXMuZ3JlZ29yaWFuU3RhcnREYXlPZk1vbnRoICsgMTsgaSA8PSBwcmV2aW91c01vbnRoRGF5czsgaSsrKSB7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgIGRheXMucHVzaCh0aGlzLmdldERheU9iamVjdCh5ZWFyLCBtb250aCAtIDEsIGksIHRydWUsIGZhbHNlLCBmYWxzZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyDYsdmI2LLZh9in24wg2YXYp9mHINis2KfYsduMXG4gICAgICB5ZWFyID0gdGhpcy5kYXRlVGltZS5nZXRGdWxsWWVhcigpO1xuICAgICAgbW9udGggPSB0aGlzLmRhdGVUaW1lLmdldE1vbnRoKCk7XG4gICAgICBjb25zdCBjdXJyZW50TW9udGhEYXlzID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGN1cnJlbnRNb250aERheXM7IGkrKykge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIGRheXMucHVzaCh0aGlzLmdldERheU9iamVjdCh5ZWFyLCBtb250aCwgaSwgZmFsc2UsIGZhbHNlLCBpc1llYXJBbmRNb250aEluQ3VycmVudE1vbnRoICYmIGkgPT0gdG9kYXkpKTtcbiAgICAgIH1cbiAgICAgIC8vINix2YjYstmH2KfbjCDZhdin2Ycg2KjYudivXG4gICAgICBjb25zdCBuZXh0TW9udGhEYXRlVGltZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMSk7XG4gICAgICB5ZWFyID0gbmV4dE1vbnRoRGF0ZVRpbWUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIG1vbnRoID0gbmV4dE1vbnRoRGF0ZVRpbWUuZ2V0TW9udGgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBjb3VudGVyIDw9ICg2ICogNykgLSAxOyBpKyspIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgICBkYXlzLnB1c2godGhpcy5nZXREYXlPYmplY3QoeWVhciwgbW9udGgsIGksIHRydWUsIGZhbHNlLCBmYWxzZSkpO1xuICAgICAgfVxuICAgICAgLy8g2KrYudi324zZhCDaqdix2K/ZhiDYsdmI2LLZh9in24wg2KzZhdi52YdcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDY7IHJvdysrKSB7XG4gICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDc7IGNvbHVtbisrKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXgxID0gcm93ICogNyArIGNvbHVtbjtcbiAgICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICAgIGRheXNbaW5kZXgxXS5ob2xpRGF5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kYXlzSW5Nb250aCA9IGRheXM7XG4gIH1cbiAgcHJpdmF0ZSBmaXJlQ2hhbmdlRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHRoaXMuZ2V0U2VsZWN0ZWREYXRlT2JqZWN0KTtcbiAgfVxuICBwcml2YXRlIGZpcmVSYW5nZUNoYW5nZUV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMucmFuZ2VEYXRlQ2hhbmdlZC5lbWl0KHRoaXMuZ2V0U2VsZWN0ZWRSYW5nZURhdGVzT2JqZWN0KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRUb0ZhbHNlUmFuZ2VQYXJhbWV0ZXJzSW5Nb250aERheXMoKSB7XG4gICAgZm9yIChjb25zdCBkYXkgb2YgdGhpcy5kYXlzSW5Nb250aCkge1xuICAgICAgZGF5LmlzV2l0aGluUmFuZ2UgPSBmYWxzZTtcbiAgICAgIGRheS5pc1N0YXJ0T3JFbmRPZlJhbmdlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqINix24zYs9iqINqp2LHYr9mGINiq2YXYp9mF24wg2KfYt9mE2KfYudin2Kog2LHZiNiy2YfYp9uMINmF2KfZh1xuICAgKi9cbiAgcHJpdmF0ZSByZXNldE1vbnRoRGF5c1dpdGhDb250ZW50KCkge1xuICAgIGlmICh0aGlzLmRheXNJbk1vbnRoID09IHVuZGVmaW5lZCkgeyByZXR1cm47IH1cbiAgICBmb3IgKGNvbnN0IGRheSBvZiB0aGlzLmRheXNJbk1vbnRoKSB7XG4gICAgICBkYXkuaXNXaXRoaW5SYW5nZSA9IGZhbHNlO1xuICAgICAgZGF5LmlzU3RhcnRPckVuZE9mUmFuZ2UgPSBmYWxzZTtcbiAgICAgIGRheS5kYXlTdHJpbmcgPSB0aGlzLnBlcnNpYW5DaGFyXG4gICAgICAgID8gSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5LnRvUGVyc2lhbk51bWJlcihkYXkuZGF5LnRvU3RyaW5nKCkpXG4gICAgICAgIDogZGF5LmRheS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDZhdiu2YHbjCDaqdix2K/ZhiDYqNmE2KfaqSDZh9in24wg2KfZhtiq2K7Yp9ioINmF2KfZhyDZiCDYs9in2YRcbiAgICovXG4gIGhpZGVTZWxlY01vbnRoQW5kWWVhckJsb2NrKCk6IHZvaWQge1xuICAgIHRoaXMubW9udGhPclllYXJTZWxlY3RvclZpc2liaWxpdHlTdGF0ZU5hbWUgPSAnaGlkZGVuJztcbiAgICB0aGlzLm1vbnRoU2VsZWN0b3JWaXNpYmlsaXR5U3RhdGVOYW1lID0gJ2hpZGRlbic7XG4gICAgdGhpcy55ZWFyU2VsZWN0b3JWaXNpYmlsaXR5U3RhdGVOYW1lID0gJ2hpZGRlbic7XG4gIH1cbiAgcmVzZXRJbmNvbXBsZXRlUmFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9PSBudWxsIHx8IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSA9IHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9IG51bGw7XG4gICAgICB0aGlzLl9zZWxlY3RlZFBlcnNpYW5TdGFydERhdGVUaW1lID0gdGhpcy5fc2VsZWN0ZWRQZXJzaWFuRW5kRGF0ZVRpbWUgPSBudWxsO1xuICAgICAgdGhpcy5yZXNldFRvRmFsc2VSYW5nZVBhcmFtZXRlcnNJbk1vbnRoRGF5cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDaqdmE24zaqSDYsdmI24wg2K/aqdmF2Ycg2YbYp9mFINmF2KfZhyDYr9ixINio2KfZhNin24wg2b7bjNqp2LEg2KjYsdin24wg2KfZhtiq2K7Yp9ioINmF2KfZh1xuICAgKi9cbiAgbW9udGhCdXR0b25PbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMubW9udGhPclllYXJTZWxlY3RvclZpc2liaWxpdHlTdGF0ZU5hbWUgPSAndmlzaWJsZSc7XG4gICAgdGhpcy5tb250aFNlbGVjdG9yVmlzaWJpbGl0eVN0YXRlTmFtZSA9ICd2aXNpYmxlJztcbiAgfVxuICAvKipcbiAgICog2qnZhNuM2qkg2LHZiNuMINiv2qnZhdmHINiz2KfZhCDYr9ixINio2KfZhNin24wg2b7bjNqp2LEg2KjYsdin24wg2KfZhtiq2K7Yp9ioINiz2KfZhFxuICAgKi9cbiAgc2VsZWN0WWVhckJ1dHRvbk9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5tb250aE9yWWVhclNlbGVjdG9yVmlzaWJpbGl0eVN0YXRlTmFtZSA9ICd2aXNpYmxlJztcbiAgICB0aGlzLnllYXJTZWxlY3RvclZpc2liaWxpdHlTdGF0ZU5hbWUgPSAndmlzaWJsZSc7XG4gIH1cbiAgbW9udGhzQmxvY2tWaXNpYmlsaXR5QW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZU1vbnRoRGF5cygpO1xuICB9XG4gIHllYXJzQmxvY2tWaXNpYmlsaXR5QW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVllYXJzTGlzdCgpO1xuICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gIH1cbiAgbmV4dFllYXJCdXR0b25PbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgdGhpcy5kYXRlVGltZSA9IHRoaXMucGVyc2lhbkRhdGVUaW1lLmFkZFllYXJzKDEpLnRvRGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGVUaW1lID0gbmV3IERhdGUodGhpcy5kYXRlVGltZS5zZXRGdWxsWWVhcih0aGlzLmRhdGVUaW1lLmdldEZ1bGxZZWFyKCkgKyAxKSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gIH1cbiAgbmV4dE1vbnRoQnV0dG9uT25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1BlcnNpYW4pIHtcbiAgICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnBlcnNpYW5EYXRlVGltZS5hZGRNb250aHMoMSkudG9EYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZVRpbWUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lLnNldE1vbnRoKHRoaXMuZGF0ZVRpbWUuZ2V0TW9udGgoKSArIDEpKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcbiAgfVxuICBwcmV2aW91c01vbnRoQnV0dG9uT25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1BlcnNpYW4pIHtcbiAgICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnBlcnNpYW5EYXRlVGltZS5hZGRNb250aHMoLTEpLnRvRGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGVUaW1lID0gbmV3IERhdGUodGhpcy5kYXRlVGltZS5zZXRNb250aCh0aGlzLmRhdGVUaW1lLmdldE1vbnRoKCkgLSAxKSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gIH1cbiAgcHJldmlvdXNZZWFyQnV0dG9uT25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1BlcnNpYW4pIHtcbiAgICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnBlcnNpYW5EYXRlVGltZS5hZGRZZWFycygtMSkudG9EYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZVRpbWUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lLnNldEZ1bGxZZWFyKHRoaXMuZGF0ZVRpbWUuZ2V0RnVsbFllYXIoKSAtIDEpKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcbiAgfVxuICBob3VyVXBCdXR0b25PbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZVRpbWUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lLnNldEhvdXJzKHRoaXMuZGF0ZVRpbWUuZ2V0SG91cnMoKSArIDEpKTtcbiAgfVxuICBob3VyRG93bkJ1dHRvbk9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlVGltZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZVRpbWUuc2V0SG91cnModGhpcy5kYXRlVGltZS5nZXRIb3VycygpIC0gMSkpO1xuICB9XG4gIG1pbnV0ZVVwQnV0dG9uT25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVUaW1lID0gbmV3IERhdGUodGhpcy5kYXRlVGltZS5zZXRNaW51dGVzKHRoaXMuZGF0ZVRpbWUuZ2V0TWludXRlcygpICsgMSkpO1xuICB9XG4gIG1pbnV0ZURvd25CdXR0b25PbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZVRpbWUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lLnNldE1pbnV0ZXModGhpcy5kYXRlVGltZS5nZXRNaW51dGVzKCkgLSAxKSk7XG4gIH1cbiAgc2Vjb25kVXBCdXR0b25PbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZVRpbWUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lLnNldFNlY29uZHModGhpcy5kYXRlVGltZS5nZXRTZWNvbmRzKCkgKyAxKSk7XG4gIH1cbiAgc2Vjb25kRG93bkJ1dHRvbk9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlVGltZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZVRpbWUuc2V0U2Vjb25kcyh0aGlzLmRhdGVUaW1lLmdldFNlY29uZHMoKSAtIDEpKTtcbiAgfVxuICAvKipcbiAgICog2KfZhtiq2K7Yp9ioINmF2KfZhyDYp9iyINix2YjbjCDZhNuM2LPYqiDZhdin2Ycg2YfYp1xuICAgKi9cbiAgbW9udGhPbkNsaWNrKHNlbGVjdGVkTW9udGhOYW1lKTogdm9pZCB7XG4gICAgY29uc3QgbW9udGhJbmRleCA9IHRoaXMuaXNQZXJzaWFuXG4gICAgICA/IFBlcnNpYW5EYXRlVGltZS5nZXRQZXJzaWFuTW9udGhJbmRleChzZWxlY3RlZE1vbnRoTmFtZSlcbiAgICAgIDogUGVyc2lhbkRhdGVUaW1lLmdldEdyZWdvcmlhbk1vbnRoTmFtZUluZGV4KHNlbGVjdGVkTW9udGhOYW1lKTtcbiAgICBpZiAodGhpcy5pc1BlcnNpYW4pIHtcbiAgICAgIHRoaXMuZGF0ZVRpbWUgPSB0aGlzLnBlcnNpYW5EYXRlVGltZS5zZXRQZXJzaWFuTW9udGgobW9udGhJbmRleCArIDEpLnRvRGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYXRlVGltZUNsb25lID0gbmV3IERhdGUodGhpcy5kYXRlVGltZSk7XG4gICAgICBkYXRlVGltZUNsb25lLnNldE1vbnRoKG1vbnRoSW5kZXgpO1xuICAgICAgdGhpcy5kYXRlVGltZSA9IG5ldyBEYXRlKGRhdGVUaW1lQ2xvbmUpO1xuICAgIH1cbiAgICB0aGlzLmhpZGVTZWxlY01vbnRoQW5kWWVhckJsb2NrKCk7XG4gIH1cbiAgLyoqXG4gICAqINin2YbYqtiu2KfYqCDYs9in2YQg2KfYsiDYsdmI24wg2YTbjNiz2Kog2LPYp9mEINmH2KdcbiAgICovXG4gIHllYXJPbkNsaWNrKHNlbGVjdGVkWWVhcik6IHZvaWQge1xuICAgIGNvbnN0IHllYXIgPSB0aGlzLmlzUGVyc2lhbiA/IE51bWJlcihJY29UZWNEYXRldGltZVBpY2tlclV0aWxpdHkudG9FbmdsaXNoTnVtYmVyKHNlbGVjdGVkWWVhcikpIDogTnVtYmVyKHNlbGVjdGVkWWVhcik7XG4gICAgaWYgKHRoaXMuaXNQZXJzaWFuKSB7XG4gICAgICB0aGlzLmRhdGVUaW1lID0gdGhpcy5wZXJzaWFuRGF0ZVRpbWUuc2V0UGVyc2lhblllYXIoeWVhcikudG9EYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGVUaW1lQ2xvbmUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lKTtcbiAgICAgIGRhdGVUaW1lQ2xvbmUuc2V0RnVsbFllYXIoeWVhcik7XG4gICAgICB0aGlzLmRhdGVUaW1lID0gbmV3IERhdGUoZGF0ZVRpbWVDbG9uZSk7XG4gICAgfVxuICAgIHRoaXMuaGlkZVNlbGVjTW9udGhBbmRZZWFyQmxvY2soKTtcbiAgfVxuICB0b2RheUJ1dHRvbk9uQ2xpY2soKTogdm9pZCB7XG5cbiAgICBpZih0aGlzLmlzU2hvd1RvZGF5QnV0dG9uKCkpe1xuICAgICAgY29uc3QgZGF0ZVRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgaWYgKHRoaXMuZGF0ZVRpbWUuZ2V0RnVsbFllYXIoKSAhPSBkYXRlVGltZU5vdy5nZXRGdWxsWWVhcigpIHx8IHRoaXMuZGF0ZVRpbWUuZ2V0TW9udGgoKSAhPSBkYXRlVGltZU5vdy5nZXRNb250aCgpKSB7XG4gICAgICAgIHRoaXMuZGF0ZVRpbWUgPSBkYXRlVGltZU5vdztcbiAgICAgICAgdGhpcy51cGRhdGVNb250aERheXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0ZVRpbWUgPSBkYXRlVGltZU5vdztcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlVGltZSA9IGRhdGVUaW1lTm93O1xuICAgICAgaWYgKCF0aGlzLnJhbmdlU2VsZWN0b3IpIHsgdGhpcy5maXJlQ2hhbmdlRXZlbnQoKTsgfVxuICAgIH0gICAgXG4gIH1cblxuICBpc1Nob3dUb2RheUJ1dHRvbigpOmJvb2xlYW57XG4gICAgY29uc3QgZGF0ZVRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgbGV0IGlzQWxsb3dTZWxlY3QgPSB0cnVlO1xuXG4gICAgaWYodGhpcy5taW5EYXRlICE9IG51bGwpe1xuICAgICAgaXNBbGxvd1NlbGVjdCA9IGRhdGVUaW1lTm93ID49IHRoaXMubWluRGF0ZTtcbiAgICB9XG4gICAgaWYodGhpcy5tYXhEYXRlICE9IG51bGwgJiYgaXNBbGxvd1NlbGVjdCl7XG4gICAgICBpc0FsbG93U2VsZWN0ID0gZGF0ZVRpbWVOb3cgPD0gdGhpcy5tYXhEYXRlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0FsbG93U2VsZWN0O1xuICB9XG5cbiAgZGF5QnV0dG9uT25DbGljayhkYXlPYmplY3Q6IElJY29UZWNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXkpOiB2b2lkIHtcbiAgICAvLyDYsdmI24wg2LHZiNiy2YfYp9uMINmF2KfZhyDZh9in24wg2YLYqNmEINuM2Kcg2KjYudivINqp2YTbjNqpINi02K/ZhyDYp9iz2KpcbiAgICBpZiAoZGF5T2JqZWN0LmRpc2FibGUpIHtcbiAgICAgIGlmICh0aGlzLmlzUGVyc2lhbikge1xuICAgICAgICB0aGlzLmRhdGVUaW1lID0gUGVyc2lhbkRhdGVUaW1lLmZyb21QZXJzaWFuRGF0ZShkYXlPYmplY3QueWVhciwgZGF5T2JqZWN0Lm1vbnRoLCBkYXlPYmplY3QuZGF5KS50b0RhdGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRhdGVUaW1lQ2xvbmUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVUaW1lKTtcbiAgICAgICAgZGF0ZVRpbWVDbG9uZS5zZXREYXRlKGRheU9iamVjdC5kYXkpO1xuICAgICAgICBkYXRlVGltZUNsb25lLnNldE1vbnRoKGRheU9iamVjdC5tb250aCk7XG4gICAgICAgIGRhdGVUaW1lQ2xvbmUuc2V0RnVsbFllYXIoZGF5T2JqZWN0LnllYXIpO1xuICAgICAgICB0aGlzLmRhdGVUaW1lID0gZGF0ZVRpbWVDbG9uZTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlTW9udGhEYXlzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g2YbYp9mEINqp2LHYr9mGINiq2KfYsduM2K4g2YfYp9uMINi02LHZiNi5INmIINm+2KfbjNin2YYg2KjYsdin24wg2KfZhtiq2K7Yp9ioINmF2KzYr9ivINix2YbYrCDYqtin2LHbjNiuXG4gICAgLy8g2K/YsSDYtdmI2LHYqtuMINqp2Ycg2LHZhtisINqv2LHZgdiq2Ycg2LTYr9mHINio2YjYr1xuICAgIGlmICh0aGlzLnJhbmdlU2VsZWN0b3IgJiYgdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgIT0gbnVsbCAmJiB0aGlzLnNlbGVjdGVkRW5kRGF0ZVRpbWUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPSBudWxsO1xuICAgICAgdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lID0gbnVsbDtcbiAgICAgIHRoaXMucmVzZXRUb0ZhbHNlUmFuZ2VQYXJhbWV0ZXJzSW5Nb250aERheXMoKTtcbiAgICB9XG4gICAgLy8gXFxcXFxuXG4gICAgLy8g2LHZiNiyINin2YbYqtiu2KfYqCDYtNiv2YdcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUgPSB0aGlzLmlzUGVyc2lhblxuICAgICAgPyBQZXJzaWFuRGF0ZVRpbWUuZnJvbVBlcnNpYW5EYXRlVGltZShkYXlPYmplY3QueWVhciwgZGF5T2JqZWN0Lm1vbnRoLCBkYXlPYmplY3QuZGF5LCB0aGlzLmhvdXIsIHRoaXMubWludXRlLCB0aGlzLnNlY29uZCwgMCkudG9EYXRlKClcbiAgICAgIDogbmV3IERhdGUoZGF5T2JqZWN0LnllYXIsIGRheU9iamVjdC5tb250aCwgZGF5T2JqZWN0LmRheSwgdGhpcy5ob3VyLCB0aGlzLm1pbnV0ZSwgdGhpcy5zZWNvbmQpO1xuXG4gICAgaWYgKHRoaXMucmFuZ2VTZWxlY3Rvcikge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lID09IG51bGwgfHwgdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPj0gdGhpcy5zZWxlY3RlZERhdGVUaW1lKSB7XG4gICAgICAgIHRoaXMucmVzZXRUb0ZhbHNlUmFuZ2VQYXJhbWV0ZXJzSW5Nb250aERheXMoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgPSB0aGlzLnNlbGVjdGVkRGF0ZVRpbWU7XG4gICAgICAgIGRheU9iamVjdC5pc1N0YXJ0T3JFbmRPZlJhbmdlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSA9IHRoaXMuc2VsZWN0ZWREYXRlVGltZTtcbiAgICAgICAgZGF5T2JqZWN0LmlzU3RhcnRPckVuZE9mUmFuZ2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5yYW5nZVNlbGVjdG9yICYmIHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lICE9IG51bGwgJiYgdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZmlyZVJhbmdlQ2hhbmdlRXZlbnQoKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnJhbmdlU2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KCk7XG4gICAgfVxuICB9XG4gIGRheUJ1dHRvbk9uSG92ZXIoZGF5T2JqZWN0OiBJSWNvVGVjQW5ndWxhckRhdGVUaW1lUGlja2VyRGF5KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzUmFuZ2VTZWxlY3RvclJlYWR5KSB7IHJldHVybjsgfVxuICAgIC8vINiq2KfYsduM2K4g2LHZiNiy24wg2qnZhyDZhdmI2LMg2LHZiNuMINii2YYg2KfYs9iqXG4gICAgY29uc3QgaG92ZXJDZWxsRGF0ZTogRGF0ZSA9IHRoaXMuaXNQZXJzaWFuXG4gICAgICA/IFBlcnNpYW5EYXRlVGltZS5mcm9tUGVyc2lhbkRhdGUoZGF5T2JqZWN0LnllYXIsIGRheU9iamVjdC5tb250aCwgZGF5T2JqZWN0LmRheSkudG9EYXRlKClcbiAgICAgIDogbmV3IERhdGUoZGF5T2JqZWN0LnllYXIsIGRheU9iamVjdC5tb250aCwgZGF5T2JqZWN0LmRheSk7XG4gICAgZm9yIChjb25zdCBkYXkgb2YgdGhpcy5kYXlzSW5Nb250aCkge1xuICAgICAgY29uc3QgY3VycmVudERhdGU6IERhdGUgPSB0aGlzLmlzUGVyc2lhblxuICAgICAgICA/IFBlcnNpYW5EYXRlVGltZS5mcm9tUGVyc2lhbkRhdGUoZGF5LnllYXIsIGRheS5tb250aCwgZGF5LmRheSkudG9EYXRlKClcbiAgICAgICAgOiBuZXcgRGF0ZShkYXkueWVhciwgZGF5Lm1vbnRoLCBkYXkuZGF5KTtcbiAgICAgIGRheS5pc1dpdGhpblJhbmdlID0gY3VycmVudERhdGUgPj0gdGhpcy5zZWxlY3RlZFN0YXJ0RGF0ZVRpbWUgJiYgY3VycmVudERhdGUgPD0gaG92ZXJDZWxsRGF0ZTtcbiAgICB9XG4gIH1cbiAgcmVqZWN0QnV0dG9uT25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZVRpbWUgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRTdGFydERhdGVUaW1lID0gdGhpcy5zZWxlY3RlZEVuZERhdGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLnJlc2V0VG9GYWxzZVJhbmdlUGFyYW1ldGVyc0luTW9udGhEYXlzKCk7XG4gICAgdGhpcy5maXJlUmFuZ2VDaGFuZ2VFdmVudCgpO1xuICB9XG4gIGNvbmZpcm1CdXR0b25PbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkU3RhcnREYXRlVGltZSAhPSBudWxsICYmIHRoaXMuc2VsZWN0ZWRFbmREYXRlVGltZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmZpcmVSYW5nZUNoYW5nZUV2ZW50KCk7XG4gICAgfVxuICB9XG59XG4iXX0=