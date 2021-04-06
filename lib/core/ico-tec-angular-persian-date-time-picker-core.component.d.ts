import { EventEmitter, OnInit } from '@angular/core';
import { TemplateTypeEnum } from '../classes/enums';
import { IIcoTecAngularDateTimePickerDate, IIcoTecAngularDateTimePickerDay, IIcoTecAngularDateTimePickerRangeDate } from '../classes/interfaces';
import { IcoTecDatetimePickerResourcesService } from '../service/ico-tec-datetime-picker-resources.service';
export declare class IcoTecAngularPersianDateTimePickerCoreComponent implements OnInit {
    private resourcesService;
    constructor(resourcesService: IcoTecDatetimePickerResourcesService);
    private initialized;
    private _persianChar;
    private _isPersian;
    private _rangeSelector;
    private _timePicker;
    templateType: TemplateTypeEnum;
    rangeSelector: boolean;
    timePicker: boolean;
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
      **/
    format: string;
    dateChanged: EventEmitter<IIcoTecAngularDateTimePickerDate>;
    rangeDateChanged: EventEmitter<IIcoTecAngularDateTimePickerRangeDate>;
    persianChar: boolean;
    isPersian: boolean;
    private readonly persianStartDayOfMonth;
    private readonly gregorianStartDayOfMonth;
    readonly getSelectedDate: IIcoTecAngularDateTimePickerDate;
    readonly getSelectedRangeDates: IIcoTecAngularDateTimePickerRangeDate;
    private dateTime;
    private readonly persianDateTime;
    private selectedDateTime;
    private readonly selectedPersianDateTime;
    private selectedStartDateTime;
    private readonly selectedPersianStartDateTime;
    private selectedEndDateTime;
    minDate: Date;
    maxDate: Date;
    private readonly selectedPersianEndDateTime;
    readonly resources: any;
    readonly year: number;
    readonly yearString: string;
    readonly month: number;
    readonly monthName: string;
    readonly monthNames: string[];
    readonly hour: number;
    readonly hourString: string;
    readonly minute: number;
    readonly minuteString: string;
    readonly second: number;
    readonly secondString: string;
    readonly weekdayNames: string[];
    private readonly getSelectedDateObject;
    readonly getSelectedDay: number;
    private readonly getSelectedRangeDatesObject;
    readonly isRejectButtonDisable: boolean;
    readonly isConfirmButtonDisable: boolean;
    private readonly isRangeSelectorReady;
    daysAnimationStateName: string;
    monthOrYearSelectorVisibilityStateName: string;
    monthSelectorVisibilityStateName: string;
    yearSelectorVisibilityStateName: string;
    showMonthSelectorBlock: boolean;
    showYearsSelectorBlock: boolean;
    private _dateTime;
    private _persianDateTime;
    private _selectedDateTime;
    private _selectedPersianDateTime;
    private _selectedStartDateTime;
    private _selectedPersianStartDateTime;
    private _selectedEndDateTime;
    private _minDate;
    private _maxDate;
    private _selectedPersianEndDateTime;
    yearsToSelect: string[];
    daysInMonth: IIcoTecAngularDateTimePickerDay[];
    private _resources;
    private _year;
    private _yearString;
    private _month;
    private _monthName;
    private _monthNames;
    private _hour;
    private _hourString;
    private _minute;
    private _minuteString;
    private _second;
    private _secondString;
    private _weekdayNames;
    private _IIcoTecAngularDateTimePickerDate;
    private _selectedRangeDatesObject;
    ngOnInit(): void;
    private splitStartEndDateString;
    private setSelectedRangeDateTimes;
    private setSelectedRangePersianDateTimes;
    private clearTime;
    private getDateTimeFormat;
    setDateTimeByDate(dateTime: Date): void;
    setDateTimeRangesByDate(startDateTime: Date, endDateTime: Date): void;
    setDateTimeByString(dateTimeString: string): void;
    clearDateTimePicker(): void;
    private updateYearsList;
    private getDayObject;
    private updateIsAllowSelected;
    private updateMonthDays;
    private fireChangeEvent;
    private fireRangeChangeEvent;
    private resetToFalseRangeParametersInMonthDays;
    /**
     * ریست کردن تمامی اطلاعات روزهای ماه
     */
    private resetMonthDaysWithContent;
    /**
     * مخفی کردن بلاک های انتخاب ماه و سال
     */
    hideSelecMonthAndYearBlock(): void;
    resetIncompleteRanges(): void;
    /**
     * کلیک روی دکمه نام ماه در بالای پیکر برای انتخاب ماه
     */
    monthButtonOnClick(): void;
    /**
     * کلیک روی دکمه سال در بالای پیکر برای انتخاب سال
     */
    selectYearButtonOnClick(): void;
    monthsBlockVisibilityAnimationDone(): void;
    yearsBlockVisibilityAnimationDone(): void;
    nextYearButtonOnClick(): void;
    nextMonthButtonOnClick(): void;
    previousMonthButtonOnClick(): void;
    previousYearButtonOnClick(): void;
    hourUpButtonOnClick(): void;
    hourDownButtonOnClick(): void;
    minuteUpButtonOnClick(): void;
    minuteDownButtonOnClick(): void;
    secondUpButtonOnClick(): void;
    secondDownButtonOnClick(): void;
    /**
     * انتخاب ماه از روی لیست ماه ها
     */
    monthOnClick(selectedMonthName: any): void;
    /**
     * انتخاب سال از روی لیست سال ها
     */
    yearOnClick(selectedYear: any): void;
    todayButtonOnClick(): void;
    isShowTodayButton(): boolean;
    dayButtonOnClick(dayObject: IIcoTecAngularDateTimePickerDay): void;
    dayButtonOnHover(dayObject: IIcoTecAngularDateTimePickerDay): void;
    rejectButtonOnClick(): void;
    confirmButtonOnClick(): void;
}
