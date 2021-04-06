/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Mds } from 'mds.persian.datetime';
var PersianDateTime = Mds.PersianDateTime;
export class IcoTecDatetimePickerUtility {
    /**
     * @param {?} input
     * @return {?}
     */
    static toPersianNumber(input) {
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
    }
    /**
     * @param {?} input
     * @return {?}
     */
    static toEnglishNumber(input) {
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
    }
    /**
     * @param {?} input
     * @return {?}
     */
    static toEnglishString(input) {
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
    }
    /**
     * @param {?} date
     * @param {?=} format
     * @return {?}
     */
    static dateTimeToString(date, format = '') {
        if (format == '' || format == null) {
            return `${this.zeroPad(date.getFullYear(), '0000')}/${this.zeroPad(date.getMonth() + 1, '00')}/${this.zeroPad(date.getDate(), '00')}   ${this.zeroPad(date.getHours(), '00')}:${this.zeroPad(date.getMinutes(), '00')}:${this.zeroPad(date.getSeconds(), '00')}`;
        }
        /** @type {?} */
        let dateTimeString = format;
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
    }
    /**
     * @param {?} nr
     * @param {?} base
     * @return {?}
     */
    static zeroPad(nr, base) {
        if (nr == undefined || nr == '') {
            return base;
        }
        /** @type {?} */
        const len = (String(base).length - String(nr).length) + 1;
        return len > 0 ? new Array(len).join('0') + nr : nr;
    }
    /**
     * @param {?} monthIndex
     * @return {?}
     */
    static getGregorianMonthName(monthIndex) {
        return [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ][monthIndex];
    }
    /**
     * @param {?} weekDayIndex
     * @return {?}
     */
    static getGregorianWeekDayName(weekDayIndex) {
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'FrIMdsAngularDateTimePickerDay', 'Saturday'][weekDayIndex];
    }
    /**
     * @param {?} dateRangeString
     * @return {?}
     */
    static getPersianDateRanges(dateRangeString) {
        /** @type {?} */
        const startEndDateArrayResult = new Array();
        try {
            /** @type {?} */
            const startEndDateArray = dateRangeString.split(' - ');
            /** @type {?} */
            const startMdsPersianDateTime = PersianDateTime.parse(startEndDateArray[0]);
            /** @type {?} */
            const endMdsPersianDateTime = PersianDateTime.parse(startEndDateArray[1]);
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
    }
    /**
     * @param {?} dateRangeString
     * @return {?}
     */
    static getDateRanges(dateRangeString) {
        /** @type {?} */
        const startEndDateArrayResult = new Array();
        try {
            /** @type {?} */
            const startEndDateArray = dateRangeString.split(' - ');
            /** @type {?} */
            const startDateTime = new Date(Date.parse(startEndDateArray[0]));
            /** @type {?} */
            const endDateTime = new Date(Date.parse(startEndDateArray[1]));
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvLXRlYy1kYXRldGltZS1waWNrZXIudXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ljby10ZWMtYW5ndWxhci1wZXJzaWFuLWRhdGUtdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy9pY28tdGVjLWRhdGV0aW1lLXBpY2tlci51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsSUFBTyxlQUFlLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQztBQUU3QyxNQUFNLE9BQU8sMkJBQTJCOzs7OztJQUN0QyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQWE7UUFDbEMsSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFBRSxPQUFPLEVBQUUsQ0FBQztTQUFFO1FBQ2hELEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hELHNCQUFzQjtRQUN0QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUM5QixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdB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SSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNsUTs7WUFDRyxjQUFjLEdBQUcsTUFBTTtRQUMzQixjQUFjLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzRixjQUFjLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2RixjQUFjLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUYsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkYsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEYsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEYsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEYsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0YsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLGNBQWMsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5RixjQUFjLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEYsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDckYsK0VBQStFO1FBQy9FLDJGQUEyRjtRQUMzRiw2RUFBNkU7UUFDN0UsK0VBQStFO1FBQy9FLDRFQUE0RTtRQUM1RSxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQU8sRUFBRSxJQUFZO1FBQ2xDLElBQUksRUFBRSxJQUFJLFNBQVMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7U0FBRTs7Y0FDM0MsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN6RCxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUNELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFrQjtRQUM3QyxPQUFPO1lBQ0wsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNO1lBQ3RELE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVTtTQUNqRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBQ0QsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFlBQW9CO1FBQ2pELE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGdDQUFnQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlILENBQUM7Ozs7O0lBQ0QsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGVBQXVCOztjQUMzQyx1QkFBdUIsR0FBRyxJQUFJLEtBQUssRUFBbUI7UUFDNUQsSUFBSTs7a0JBQ0ksaUJBQWlCLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7O2tCQUNoRCx1QkFBdUIsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDOztrQkFDckUscUJBQXFCLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxJQUFJLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxHQUFHLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNyRSxNQUFNLElBQUksS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7YUFDckY7WUFDRCx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN0RCx1QkFBdUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUNyRDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQywwRkFBMEYsQ0FBQyxDQUFDO1NBQzdHO1FBQ0QsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUNELE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBdUI7O2NBQ3BDLHVCQUF1QixHQUFHLElBQUksS0FBSyxFQUFRO1FBQ2pELElBQUk7O2tCQUNJLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOztrQkFDaEQsYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7a0JBQzFELFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxXQUFXLEdBQUcsYUFBYSxFQUFFO2dCQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7YUFDckY7WUFDRCx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixNQUFNLElBQUksS0FBSyxDQUFDLDBGQUEwRixDQUFDLENBQUM7U0FDN0c7UUFDRCxPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1kcyB9IGZyb20gJ21kcy5wZXJzaWFuLmRhdGV0aW1lJztcbmltcG9ydCBQZXJzaWFuRGF0ZVRpbWUgPSBNZHMuUGVyc2lhbkRhdGVUaW1lO1xuXG5leHBvcnQgY2xhc3MgSWNvVGVjRGF0ZXRpbWVQaWNrZXJVdGlsaXR5IHtcbiAgc3RhdGljIHRvUGVyc2lhbk51bWJlcihpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoaW5wdXQgPT0gJycgfHwgaW5wdXQgPT0gbnVsbCkgeyByZXR1cm4gJyc7IH1cbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL9mKL2ltZywgJ9uMJykucmVwbGFjZSgv2YMvaW1nLCAn2qknKTtcbiAgICAvLyDbsCDbsSDbsiDbsyDbtCDbtSDbtiDbtyDbuCDbuVxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC8wL2ltZywgJ9uwJylcbiAgICAgIC5yZXBsYWNlKC8xL2ltZywgJ9uxJylcbiAgICAgIC5yZXBsYWNlKC8yL2ltZywgJ9uyJylcbiAgICAgIC5yZXBsYWNlKC8zL2ltZywgJ9uzJylcbiAgICAgIC5yZXBsYWNlKC80L2ltZywgJ9u0JylcbiAgICAgIC5yZXBsYWNlKC81L2ltZywgJ9u1JylcbiAgICAgIC5yZXBsYWNlKC82L2ltZywgJ9u2JylcbiAgICAgIC5yZXBsYWNlKC83L2ltZywgJ9u3JylcbiAgICAgIC5yZXBsYWNlKC84L2ltZywgJ9u4JylcbiAgICAgIC5yZXBsYWNlKC85L2ltZywgJ9u5Jyk7XG4gIH1cbiAgc3RhdGljIHRvRW5nbGlzaE51bWJlcihpbnB1dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBpZiAoaW5wdXQgPT0gJycgfHwgaW5wdXQgPT0gbnVsbCkgeyByZXR1cm4gMDsgfVxuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgv2YovaW1nLCAn24wnKS5yZXBsYWNlKC/Zgy9pbWcsICfaqScpO1xuICAgIC8vINuwINuxINuyINuzINu0INu1INu2INu3INu4INu5XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC8sL2ltZywgJycpXG4gICAgICAucmVwbGFjZSgv27AvaW1nLCAnMCcpXG4gICAgICAucmVwbGFjZSgv27EvaW1nLCAnMScpXG4gICAgICAucmVwbGFjZSgv27IvaW1nLCAnMicpXG4gICAgICAucmVwbGFjZSgv27MvaW1nLCAnMycpXG4gICAgICAucmVwbGFjZSgv27QvaW1nLCAnNCcpXG4gICAgICAucmVwbGFjZSgv27UvaW1nLCAnNScpXG4gICAgICAucmVwbGFjZSgv27YvaW1nLCAnNicpXG4gICAgICAucmVwbGFjZSgv27cvaW1nLCAnNycpXG4gICAgICAucmVwbGFjZSgv27gvaW1nLCAnOCcpXG4gICAgICAucmVwbGFjZSgv27kvaW1nLCAnOScpO1xuICAgIHJldHVybiBOdW1iZXIoaW5wdXQpO1xuICB9XG4gIHN0YXRpYyB0b0VuZ2xpc2hTdHJpbmcoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKGlucHV0ID09ICcnIHx8IGlucHV0ID09IG51bGwpIHsgcmV0dXJuICcnOyB9XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC/Zii9pbWcsICfbjCcpLnJlcGxhY2UoL9mDL2ltZywgJ9qpJyk7XG4gICAgLy8g27Ag27Eg27Ig27Mg27Qg27Ug27Yg27cg27gg27lcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoLywvaW1nLCAnJylcbiAgICAgIC5yZXBsYWNlKC/bsC9pbWcsICcwJylcbiAgICAgIC5yZXBsYWNlKC/bsS9pbWcsICcxJylcbiAgICAgIC5yZXBsYWNlKC/bsi9pbWcsICcyJylcbiAgICAgIC5yZXBsYWNlKC/bsy9pbWcsICczJylcbiAgICAgIC5yZXBsYWNlKC/btC9pbWcsICc0JylcbiAgICAgIC5yZXBsYWNlKC/btS9pbWcsICc1JylcbiAgICAgIC5yZXBsYWNlKC/bti9pbWcsICc2JylcbiAgICAgIC5yZXBsYWNlKC/bty9pbWcsICc3JylcbiAgICAgIC5yZXBsYWNlKC/buC9pbWcsICc4JylcbiAgICAgIC5yZXBsYWNlKC/buS9pbWcsICc5Jyk7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG4gIHN0YXRpYyBkYXRlVGltZVRvU3RyaW5nKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgIGlmIChmb3JtYXQgPT0gJycgfHwgZm9ybWF0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnplcm9QYWQoZGF0ZS5nZXRGdWxsWWVhcigpLCAnMDAwMCcpfS8ke3RoaXMuemVyb1BhZChkYXRlLmdldE1vbnRoKCkgKyAxLCAnMDAnKX0vJHt0aGlzLnplcm9QYWQoZGF0ZS5nZXREYXRlKCksICcwMCcpfSAgICR7dGhpcy56ZXJvUGFkKGRhdGUuZ2V0SG91cnMoKSwgJzAwJyl9OiR7dGhpcy56ZXJvUGFkKGRhdGUuZ2V0TWludXRlcygpLCAnMDAnKX06JHt0aGlzLnplcm9QYWQoZGF0ZS5nZXRTZWNvbmRzKCksICcwMCcpfWA7XG4gICAgfVxuICAgIGxldCBkYXRlVGltZVN0cmluZyA9IGZvcm1hdDtcbiAgICBkYXRlVGltZVN0cmluZyA9IGRhdGVUaW1lU3RyaW5nLnJlcGxhY2UoL3l5eXkvZywgdGhpcy56ZXJvUGFkKGRhdGUuZ2V0RnVsbFllYXIoKSwgJzAwMDAnKSk7XG4gICAgZGF0ZVRpbWVTdHJpbmcgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC95eS9nLCB0aGlzLnplcm9QYWQoZGF0ZS5nZXRGdWxsWWVhcigpLCAnMDAnKSk7XG4gICAgZGF0ZVRpbWVTdHJpbmcgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC9kZGRkL2csIHRoaXMuZ2V0R3JlZ29yaWFuV2Vla0RheU5hbWUoZGF0ZS5nZXREYXkoKSkpO1xuICAgIGRhdGVUaW1lU3RyaW5nID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvZGQvZywgdGhpcy56ZXJvUGFkKGRhdGUuZ2V0RGF0ZSgpLCAnMDAnKSk7XG4gICAgZGF0ZVRpbWVTdHJpbmcgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC9oaC9nLCB0aGlzLnplcm9QYWQoZGF0ZS5nZXRIb3VycygpLCAnMDAnKSk7XG4gICAgZGF0ZVRpbWVTdHJpbmcgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC9tbS9nLCB0aGlzLnplcm9QYWQoZGF0ZS5nZXRNaW51dGVzKCksICcwMCcpKTtcbiAgICBkYXRlVGltZVN0cmluZyA9IGRhdGVUaW1lU3RyaW5nLnJlcGxhY2UoL3NzL2csIHRoaXMuemVyb1BhZChkYXRlLmdldFNlY29uZHMoKSwgJzAwJykpO1xuICAgIGRhdGVUaW1lU3RyaW5nID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvZmZmL2csIHRoaXMuemVyb1BhZChkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAnMDAwJykpO1xuICAgIGRhdGVUaW1lU3RyaW5nID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvZmYvZywgdGhpcy56ZXJvUGFkKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCwgJzAwJykpO1xuICAgIGRhdGVUaW1lU3RyaW5nID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvTU1NTS9nLCB0aGlzLmdldEdyZWdvcmlhbk1vbnRoTmFtZShkYXRlLmdldE1vbnRoKCkpKTtcbiAgICBkYXRlVGltZVN0cmluZyA9IGRhdGVUaW1lU3RyaW5nLnJlcGxhY2UoL01NL2csIHRoaXMuemVyb1BhZChkYXRlLmdldE1vbnRoKCkgKyAxLCAnMDAnKSk7XG4gICAgZGF0ZVRpbWVTdHJpbmcgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC9NKD8hYSkvZywgKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkpO1xuICAgIC8vIGRhdGVUaW1lU3RyaW5nID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvcy9nLCBkYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpKTtcbiAgICAvLyBkYXRlVGltZVN0cmluZyA9IGRhdGVUaW1lU3RyaW5nLnJlcGxhY2UoL2YvZywgKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCkudG9TdHJpbmcoKSk7XG4gICAgLy8gZGF0ZVRpbWVTdHJpbmcgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC9oL2csIGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpKTtcbiAgICAvLyBkYXRlVGltZVN0cmluZyA9IGRhdGVUaW1lU3RyaW5nLnJlcGxhY2UoL20vZywgZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKSk7XG4gICAgLy8gZGF0ZVRpbWVTdHJpbmcgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC9kL2csIGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBkYXRlVGltZVN0cmluZztcbiAgfVxuICBzdGF0aWMgemVyb1BhZChucjogYW55LCBiYXNlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChuciA9PSB1bmRlZmluZWQgfHwgbnIgPT0gJycpIHsgcmV0dXJuIGJhc2U7IH1cbiAgICBjb25zdCBsZW4gPSAoU3RyaW5nKGJhc2UpLmxlbmd0aCAtIFN0cmluZyhucikubGVuZ3RoKSArIDE7XG4gICAgcmV0dXJuIGxlbiA+IDAgPyBuZXcgQXJyYXkobGVuKS5qb2luKCcwJykgKyBuciA6IG5yO1xuICB9XG4gIHN0YXRpYyBnZXRHcmVnb3JpYW5Nb250aE5hbWUobW9udGhJbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxuICAgICAgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xuICAgIF1bbW9udGhJbmRleF07XG4gIH1cbiAgc3RhdGljIGdldEdyZWdvcmlhbldlZWtEYXlOYW1lKHdlZWtEYXlJbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZySU1kc0FuZ3VsYXJEYXRlVGltZVBpY2tlckRheScsICdTYXR1cmRheSddW3dlZWtEYXlJbmRleF07XG4gIH1cbiAgc3RhdGljIGdldFBlcnNpYW5EYXRlUmFuZ2VzKGRhdGVSYW5nZVN0cmluZzogc3RyaW5nKTogUGVyc2lhbkRhdGVUaW1lW10ge1xuICAgIGNvbnN0IHN0YXJ0RW5kRGF0ZUFycmF5UmVzdWx0ID0gbmV3IEFycmF5PFBlcnNpYW5EYXRlVGltZT4oKTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhcnRFbmREYXRlQXJyYXkgPSBkYXRlUmFuZ2VTdHJpbmcuc3BsaXQoJyAtICcpO1xuICAgICAgY29uc3Qgc3RhcnRNZHNQZXJzaWFuRGF0ZVRpbWUgPSBQZXJzaWFuRGF0ZVRpbWUucGFyc2Uoc3RhcnRFbmREYXRlQXJyYXlbMF0pO1xuICAgICAgY29uc3QgZW5kTWRzUGVyc2lhbkRhdGVUaW1lID0gUGVyc2lhbkRhdGVUaW1lLnBhcnNlKHN0YXJ0RW5kRGF0ZUFycmF5WzFdKTtcbiAgICAgIGlmIChlbmRNZHNQZXJzaWFuRGF0ZVRpbWUudG9EYXRlKCkgPCBzdGFydE1kc1BlcnNpYW5EYXRlVGltZS50b0RhdGUoKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmdlIGRhdGUgaXMgbm90IHZhbGlkLiBFbmQgZGF0ZSBtdXN0IGJlIGJpZ2dlciB0aGFuIHN0YXJ0IGRhdGUnKTtcbiAgICAgIH1cbiAgICAgIHN0YXJ0RW5kRGF0ZUFycmF5UmVzdWx0LnB1c2goc3RhcnRNZHNQZXJzaWFuRGF0ZVRpbWUpO1xuICAgICAgc3RhcnRFbmREYXRlQXJyYXlSZXN1bHQucHVzaChlbmRNZHNQZXJzaWFuRGF0ZVRpbWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZ2UgZGF0ZSBpcyBub3QgdmFsaWQuIFlvdSBtdXN0IGVudGVyIHJhbmdlIGRhdGUgc3RyaW5nIGxpa2UgXCIxMzk2LzAzLzA2IC0gMTM5Ni8wMy8yMVwiJyk7XG4gICAgfVxuICAgIHJldHVybiBzdGFydEVuZERhdGVBcnJheVJlc3VsdDtcbiAgfVxuICBzdGF0aWMgZ2V0RGF0ZVJhbmdlcyhkYXRlUmFuZ2VTdHJpbmc6IHN0cmluZyk6IERhdGVbXSB7XG4gICAgY29uc3Qgc3RhcnRFbmREYXRlQXJyYXlSZXN1bHQgPSBuZXcgQXJyYXk8RGF0ZT4oKTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhcnRFbmREYXRlQXJyYXkgPSBkYXRlUmFuZ2VTdHJpbmcuc3BsaXQoJyAtICcpO1xuICAgICAgY29uc3Qgc3RhcnREYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2Uoc3RhcnRFbmREYXRlQXJyYXlbMF0pKTtcbiAgICAgIGNvbnN0IGVuZERhdGVUaW1lID0gbmV3IERhdGUoRGF0ZS5wYXJzZShzdGFydEVuZERhdGVBcnJheVsxXSkpO1xuICAgICAgaWYgKGVuZERhdGVUaW1lIDwgc3RhcnREYXRlVGltZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmdlIGRhdGUgaXMgbm90IHZhbGlkLiBFbmQgZGF0ZSBtdXN0IGJlIGJpZ2dlciB0aGFuIHN0YXJ0IGRhdGUnKTtcbiAgICAgIH1cbiAgICAgIHN0YXJ0RW5kRGF0ZUFycmF5UmVzdWx0LnB1c2goc3RhcnREYXRlVGltZSk7XG4gICAgICBzdGFydEVuZERhdGVBcnJheVJlc3VsdC5wdXNoKGVuZERhdGVUaW1lKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmdlIGRhdGUgaXMgbm90IHZhbGlkLiBZb3UgbXVzdCBlbnRlciByYW5nZSBkYXRlIHN0cmluZyBsaWtlIFwiMjAxNy8wMi8wNiAtIDIwMTcvMDIvMThcIicpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhcnRFbmREYXRlQXJyYXlSZXN1bHQ7XG4gIH1cbn1cbiJdfQ==