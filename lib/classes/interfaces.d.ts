export interface IIcoTecAngularDateTimePickerDay {
    year: number;
    month: number;
    day: number;
    dayString: string;
    disable: boolean;
    holiDay: boolean;
    today: boolean;
    isWithinRange: boolean;
    isStartOrEndOfRange: boolean;
    isAllowSelected: boolean;
}
export interface IIcoTecAngularDateTimePickerDate {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    formatString: string;
    utcDateTime: Date;
}
export interface IIcoTecAngularDateTimePickerRangeDate {
    startDate: IIcoTecAngularDateTimePickerDate;
    endDate: IIcoTecAngularDateTimePickerDate;
}
export interface IIcoTecAngularDateTimePickerEventModel {
    eventArgs: any;
    selectedDate: IIcoTecAngularDateTimePickerDate;
    selectedRangeDates: IIcoTecAngularDateTimePickerRangeDate;
}
export interface IIcoTecAngularDateTimePickerDateModel {
    selectedDate: IIcoTecAngularDateTimePickerDate;
    selectedRangeDates: IIcoTecAngularDateTimePickerRangeDate;
}
export interface IIcoTecAngularDateTimePickerDataModel {
    selectedDate: Date;
    selectedRangeDates: Date[];
}
