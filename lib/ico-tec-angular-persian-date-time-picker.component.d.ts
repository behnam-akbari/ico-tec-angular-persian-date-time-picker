import { AfterViewInit, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { TemplateTypeEnum, TextBoxTypeEnum } from './classes/enums';
import { IIcoTecAngularDateTimePickerDataModel, IIcoTecAngularDateTimePickerDate, IIcoTecAngularDateTimePickerEventModel, IIcoTecAngularDateTimePickerRangeDate } from './classes/interfaces';
export declare class IcoTecAngularPersianDateTimePickerComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    private element;
    constructor(element: ElementRef);
    private _persianChar;
    private _isPersian;
    myControl: FormControl;
    private afterViewInit;
    private inClearFunction;
    private showingDateTimePickerLocked;
    showDatePicker: boolean;
    private _selectedDateTime;
    private _selectedDateTimeRanges;
    selectedDateTime: Date;
    selectedDateTimeRanges: Date[];
    private icoTecDateTimePickerCore;
    /**
     * از بوت استرپ استفاده شود یا متریال
     * TemplateTypeEnum
     */
    templateType: TemplateTypeEnum;
    /**
     * نوع نمایش تکس باکس
     * TextBoxTypeEnum
     */
    textBoxType: TextBoxTypeEnum;
    /**
     * مقدار اولیه
     */
    /**
     * نوع نمایش دیت پیکر به صورت این لاین باشد یا نه
     */
    inLine: boolean;
    /**
     * کمترین مقدار
     */
    minDate: Date;
    /**
    * بیشترین مقدار
    */
    maxDate: Date;
    /**
     * آیا از کاراکترهای فارسی استفاده شود
     * وقتی تقویم میلادی است بدون تاثیر می شود
     */
    persianChar: boolean;
    /**
     * آیا دیت پیکر به شکل انتخاب رنج تاریخی باشد یا نه
     */
    rangeSelector: boolean;
    /**
     * تقویم میلادی باشد یا شمسی
     */
    isPersian: boolean;
    /**
     * آیا تایم پیکر نمایش داده بشود یا نه
     * در نوع انتخاب رنج تاریخی بدون تاثیر است
     */
    timePicker: boolean;
    /**
     * PlaceHolder
     */
    placeHolder: string;
    /**
     * آیکون
     */
    buttonIcon: string;
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
    /**
     * وقتی تاریخ انتخابی عوض می شود این اونت فراخوانی می شود
     */
    dateChanged: EventEmitter<IIcoTecAngularDateTimePickerDate>;
    /**
     * وقتی رنج تاریخی انتخاب شده عوض می شود این اونت فراخوانی می شود
     */
    rangeDateChanged: EventEmitter<IIcoTecAngularDateTimePickerRangeDate>;
    /**
     * وقتی کلیدی روی تکس باکس انتخاب تاریخ فشرده می شود این اونت فراخوانی می شود
     */
    textBoxKeyDown: EventEmitter<IIcoTecAngularDateTimePickerEventModel>;
    /**
     * وقتی روی تکس باکس انتخاب تاریخ بلور می شود این اونت فراخوانی می شود
     */
    textBoxBlur: EventEmitter<IIcoTecAngularDateTimePickerEventModel>;
    /**
     * وقتی روی تکس باکس انتخاب تاریخ فوکوس می شود این اونت فراخوانی می شود
     */
    textBoxFocus: EventEmitter<IIcoTecAngularDateTimePickerEventModel>;
    /**
     * وقتی روی تکس باکس انتخاب تاریخ تغییری ایجاد می شود این اونت فراخوانی می شود
     */
    textBoxChange: EventEmitter<IIcoTecAngularDateTimePickerEventModel>;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private getEventObject;
    private getSelectedDateObject;
    showDatePickerButtonClicked(): void;
    dateChangedHandler(date: IIcoTecAngularDateTimePickerDate): void;
    rangeDateChangedHandler(rangeDate: IIcoTecAngularDateTimePickerRangeDate): void;
    dateTimeTextBoxOnFocusHandler(event: any): void;
    dateTimeTextBoxOnBlurHandler(event: any): void;
    dateTimeTextBoxOnKeyupHandler(event: any): void;
    clear(): void;
    setDateTime(dateTime: Date): void;
    setDateTimeRanges(startDateTime: Date, endDateTime: Date): void;
    showDateTimePicker(): void;
    hideDateTimePicker(): void;
    private propagateChange;
    private valIIcoTecAngularDateTimePickerDateFn;
    writeValue(model: IIcoTecAngularDateTimePickerDataModel): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    valIIcoTecAngularDateTimePickerDate(c: any): any;
}
