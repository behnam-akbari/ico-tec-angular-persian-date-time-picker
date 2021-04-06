/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Mds } from 'mds.persian.datetime';
var PersianDateTime = Mds.PersianDateTime;
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
        if (format === void 0) { format = ''; }
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
export { IcoTecDatetimePickerUtility };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvLXRlYy1kYXRldGltZS1waWNrZXIudXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ljby10ZWMtYW5ndWxhci1wZXJzaWFuLWRhdGUtdGltZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy9pY28tdGVjLWRhdGV0aW1lLXBpY2tlci51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsSUFBTyxlQUFlLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQztBQUU3QztJQUFBO0lBd0hBLENBQUM7Ozs7O0lBdkhRLDJDQUFlOzs7O0lBQXRCLFVBQXVCLEtBQWE7UUFDbEMsSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFBRSxPQUFPLEVBQUUsQ0FBQztTQUFFO1FBQ2hELEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hELHNCQUFzQjtRQUN0QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUM5QixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdB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LHVCQUF1QixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3JEO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixNQUFNLElBQUksS0FBSyxDQUFDLDBGQUEwRixDQUFDLENBQUM7U0FDN0c7UUFDRCxPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBQ00seUNBQWE7Ozs7SUFBcEIsVUFBcUIsZUFBdUI7O1lBQ3BDLHVCQUF1QixHQUFHLElBQUksS0FBSyxFQUFRO1FBQ2pELElBQUk7O2dCQUNJLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOztnQkFDaEQsYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQzFELFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxXQUFXLEdBQUcsYUFBYSxFQUFFO2dCQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7YUFDckY7WUFDRCx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixNQUFNLElBQUksS0FBSyxDQUFDLDBGQUEwRixDQUFDLENBQUM7U0FDN0c7UUFDRCxPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7SUFDSCxrQ0FBQztBQUFELENBQUMsQUF4SEQsSUF3SEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZHMgfSBmcm9tICdtZHMucGVyc2lhbi5kYXRldGltZSc7XG5pbXBvcnQgUGVyc2lhbkRhdGVUaW1lID0gTWRzLlBlcnNpYW5EYXRlVGltZTtcblxuZXhwb3J0IGNsYXNzIEljb1RlY0RhdGV0aW1lUGlja2VyVXRpbGl0eSB7XG4gIHN0YXRpYyB0b1BlcnNpYW5OdW1iZXIoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKGlucHV0ID09ICcnIHx8IGlucHV0ID09IG51bGwpIHsgcmV0dXJuICcnOyB9XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC/Zii9pbWcsICfbjCcpLnJlcGxhY2UoL9mDL2ltZywgJ9qpJyk7XG4gICAgLy8g27Ag27Eg27Ig27Mg27Qg27Ug27Yg27cg27gg27lcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvMC9pbWcsICfbsCcpXG4gICAgICAucmVwbGFjZSgvMS9pbWcsICfbsScpXG4gICAgICAucmVwbGFjZSgvMi9pbWcsICfbsicpXG4gICAgICAucmVwbGFjZSgvMy9pbWcsICfbsycpXG4gICAgICAucmVwbGFjZSgvNC9pbWcsICfbtCcpXG4gICAgICAucmVwbGFjZSgvNS9pbWcsICfbtScpXG4gICAgICAucmVwbGFjZSgvNi9pbWcsICfbticpXG4gICAgICAucmVwbGFjZSgvNy9pbWcsICfbtycpXG4gICAgICAucmVwbGFjZSgvOC9pbWcsICfbuCcpXG4gICAgICAucmVwbGFjZSgvOS9pbWcsICfbuScpO1xuICB9XG4gIHN0YXRpYyB0b0VuZ2xpc2hOdW1iZXIoaW5wdXQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgaWYgKGlucHV0ID09ICcnIHx8IGlucHV0ID09IG51bGwpIHsgcmV0dXJuIDA7IH1cbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL9mKL2ltZywgJ9uMJykucmVwbGFjZSgv2YMvaW1nLCAn2qknKTtcbiAgICAvLyDbsCDbsSDbsiDbsyDbtCDbtSDbtiDbtyDbuCDbuVxuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvLC9pbWcsICcnKVxuICAgICAgLnJlcGxhY2UoL9uwL2ltZywgJzAnKVxuICAgICAgLnJlcGxhY2UoL9uxL2ltZywgJzEnKVxuICAgICAgLnJlcGxhY2UoL9uyL2ltZywgJzInKVxuICAgICAgLnJlcGxhY2UoL9uzL2ltZywgJzMnKVxuICAgICAgLnJlcGxhY2UoL9u0L2ltZywgJzQnKVxuICAgICAgLnJlcGxhY2UoL9u1L2ltZywgJzUnKVxuICAgICAgLnJlcGxhY2UoL9u2L2ltZywgJzYnKVxuICAgICAgLnJlcGxhY2UoL9u3L2ltZywgJzcnKVxuICAgICAgLnJlcGxhY2UoL9u4L2ltZywgJzgnKVxuICAgICAgLnJlcGxhY2UoL9u5L2ltZywgJzknKTtcbiAgICByZXR1cm4gTnVtYmVyKGlucHV0KTtcbiAgfVxuICBzdGF0aWMgdG9FbmdsaXNoU3RyaW5nKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChpbnB1dCA9PSAnJyB8fCBpbnB1dCA9PSBudWxsKSB7IHJldHVybiAnJzsgfVxuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgv2YovaW1nLCAn24wnKS5yZXBsYWNlKC/Zgy9pbWcsICfaqScpO1xuICAgIC8vINuwINuxINuyINuzINu0INu1INu2INu3INu4INu5XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC8sL2ltZywgJycpXG4gICAgICAucmVwbGFjZSgv27AvaW1nLCAnMCcpXG4gICAgICAucmVwbGFjZSgv27EvaW1nLCAnMScpXG4gICAgICAucmVwbGFjZSgv27IvaW1nLCAnMicpXG4gICAgICAucmVwbGFjZSgv27MvaW1nLCAnMycpXG4gICAgICAucmVwbGFjZSgv27QvaW1nLCAnNCcpXG4gICAgICAucmVwbGFjZSgv27UvaW1nLCAnNScpXG4gICAgICAucmVwbGFjZSgv27YvaW1nLCAnNicpXG4gICAgICAucmVwbGFjZSgv27cvaW1nLCAnNycpXG4gICAgICAucmVwbGFjZSgv27gvaW1nLCAnOCcpXG4gICAgICAucmVwbGFjZSgv27kvaW1nLCAnOScpO1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICBzdGF0aWMgZGF0ZVRpbWVUb1N0cmluZyhkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICBpZiAoZm9ybWF0ID09ICcnIHx8IGZvcm1hdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy56ZXJvUGFkKGRhdGUuZ2V0RnVsbFllYXIoKSwgJzAwMDAnKX0vJHt0aGlzLnplcm9QYWQoZGF0ZS5nZXRNb250aCgpICsgMSwgJzAwJyl9LyR7dGhpcy56ZXJvUGFkKGRhdGUuZ2V0RGF0ZSgpLCAnMDAnKX0gICAke3RoaXMuemVyb1BhZChkYXRlLmdldEhvdXJzKCksICcwMCcpfToke3RoaXMuemVyb1BhZChkYXRlLmdldE1pbnV0ZXMoKSwgJzAwJyl9OiR7dGhpcy56ZXJvUGFkKGRhdGUuZ2V0U2Vjb25kcygpLCAnMDAnKX1gO1xuICAgIH1cbiAgICBsZXQgZGF0ZVRpbWVTdHJpbmcgPSBmb3JtYXQ7XG4gICAgZGF0ZVRpbWVTdHJpbmcgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC95eXl5L2csIHRoaXMuemVyb1BhZChkYXRlLmdldEZ1bGxZZWFyKCksICcwMDAwJykpO1xuICAgIGRhdGVUaW1lU3RyaW5nID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgveXkvZywgdGhpcy56ZXJvUGFkKGRhdGUuZ2V0RnVsbFllYXIoKSwgJzAwJykpO1xuICAgIGRhdGVUaW1lU3RyaW5nID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvZGRkZC9nLCB0aGlzLmdldEdyZWdvcmlhbldlZWtEYXlOYW1lKGRhdGUuZ2V0RGF5KCkpKTtcbiAgICBkYXRlVGltZVN0cmluZyA9IGRhdGVUaW1lU3RyaW5nLnJlcGxhY2UoL2RkL2csIHRoaXMuemVyb1BhZChkYXRlLmdldERhdGUoKSwgJzAwJykpO1xuICAgIGRhdGVUaW1lU3RyaW5nID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvaGgvZywgdGhpcy56ZXJvUGFkKGRhdGUuZ2V0SG91cnMoKSwgJzAwJykpO1xuICAgIGRhdGVUaW1lU3RyaW5nID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvbW0vZywgdGhpcy56ZXJvUGFkKGRhdGUuZ2V0TWludXRlcygpLCAnMDAnKSk7XG4gICAgZGF0ZVRpbWVTdHJpbmcgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC9zcy9nLCB0aGlzLnplcm9QYWQoZGF0ZS5nZXRTZWNvbmRzKCksICcwMCcpKTtcbiAgICBkYXRlVGltZVN0cmluZyA9IGRhdGVUaW1lU3RyaW5nLnJlcGxhY2UoL2ZmZi9nLCB0aGlzLnplcm9QYWQoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgJzAwMCcpKTtcbiAgICBkYXRlVGltZVN0cmluZyA9IGRhdGVUaW1lU3RyaW5nLnJlcGxhY2UoL2ZmL2csIHRoaXMuemVyb1BhZChkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAsICcwMCcpKTtcbiAgICBkYXRlVGltZVN0cmluZyA9IGRhdGVUaW1lU3RyaW5nLnJlcGxhY2UoL01NTU0vZywgdGhpcy5nZXRHcmVnb3JpYW5Nb250aE5hbWUoZGF0ZS5nZXRNb250aCgpKSk7XG4gICAgZGF0ZVRpbWVTdHJpbmcgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC9NTS9nLCB0aGlzLnplcm9QYWQoZGF0ZS5nZXRNb250aCgpICsgMSwgJzAwJykpO1xuICAgIGRhdGVUaW1lU3RyaW5nID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvTSg/IWEpL2csIChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpKTtcbiAgICAvLyBkYXRlVGltZVN0cmluZyA9IGRhdGVUaW1lU3RyaW5nLnJlcGxhY2UoL3MvZywgZGF0ZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKSk7XG4gICAgLy8gZGF0ZVRpbWVTdHJpbmcgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC9mL2csIChkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTApLnRvU3RyaW5nKCkpO1xuICAgIC8vIGRhdGVUaW1lU3RyaW5nID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvaC9nLCBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKSk7XG4gICAgLy8gZGF0ZVRpbWVTdHJpbmcgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC9tL2csIGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkpO1xuICAgIC8vIGRhdGVUaW1lU3RyaW5nID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvZC9nLCBkYXRlLmdldERhdGUoKS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gZGF0ZVRpbWVTdHJpbmc7XG4gIH1cbiAgc3RhdGljIHplcm9QYWQobnI6IGFueSwgYmFzZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAobnIgPT0gdW5kZWZpbmVkIHx8IG5yID09ICcnKSB7IHJldHVybiBiYXNlOyB9XG4gICAgY29uc3QgbGVuID0gKFN0cmluZyhiYXNlKS5sZW5ndGggLSBTdHJpbmcobnIpLmxlbmd0aCkgKyAxO1xuICAgIHJldHVybiBsZW4gPiAwID8gbmV3IEFycmF5KGxlbikuam9pbignMCcpICsgbnIgOiBucjtcbiAgfVxuICBzdGF0aWMgZ2V0R3JlZ29yaWFuTW9udGhOYW1lKG1vbnRoSW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJyxcbiAgICAgICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcbiAgICBdW21vbnRoSW5kZXhdO1xuICB9XG4gIHN0YXRpYyBnZXRHcmVnb3JpYW5XZWVrRGF5TmFtZSh3ZWVrRGF5SW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcklNZHNBbmd1bGFyRGF0ZVRpbWVQaWNrZXJEYXknLCAnU2F0dXJkYXknXVt3ZWVrRGF5SW5kZXhdO1xuICB9XG4gIHN0YXRpYyBnZXRQZXJzaWFuRGF0ZVJhbmdlcyhkYXRlUmFuZ2VTdHJpbmc6IHN0cmluZyk6IFBlcnNpYW5EYXRlVGltZVtdIHtcbiAgICBjb25zdCBzdGFydEVuZERhdGVBcnJheVJlc3VsdCA9IG5ldyBBcnJheTxQZXJzaWFuRGF0ZVRpbWU+KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXJ0RW5kRGF0ZUFycmF5ID0gZGF0ZVJhbmdlU3RyaW5nLnNwbGl0KCcgLSAnKTtcbiAgICAgIGNvbnN0IHN0YXJ0TWRzUGVyc2lhbkRhdGVUaW1lID0gUGVyc2lhbkRhdGVUaW1lLnBhcnNlKHN0YXJ0RW5kRGF0ZUFycmF5WzBdKTtcbiAgICAgIGNvbnN0IGVuZE1kc1BlcnNpYW5EYXRlVGltZSA9IFBlcnNpYW5EYXRlVGltZS5wYXJzZShzdGFydEVuZERhdGVBcnJheVsxXSk7XG4gICAgICBpZiAoZW5kTWRzUGVyc2lhbkRhdGVUaW1lLnRvRGF0ZSgpIDwgc3RhcnRNZHNQZXJzaWFuRGF0ZVRpbWUudG9EYXRlKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5nZSBkYXRlIGlzIG5vdCB2YWxpZC4gRW5kIGRhdGUgbXVzdCBiZSBiaWdnZXIgdGhhbiBzdGFydCBkYXRlJyk7XG4gICAgICB9XG4gICAgICBzdGFydEVuZERhdGVBcnJheVJlc3VsdC5wdXNoKHN0YXJ0TWRzUGVyc2lhbkRhdGVUaW1lKTtcbiAgICAgIHN0YXJ0RW5kRGF0ZUFycmF5UmVzdWx0LnB1c2goZW5kTWRzUGVyc2lhbkRhdGVUaW1lKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmdlIGRhdGUgaXMgbm90IHZhbGlkLiBZb3UgbXVzdCBlbnRlciByYW5nZSBkYXRlIHN0cmluZyBsaWtlIFwiMTM5Ni8wMy8wNiAtIDEzOTYvMDMvMjFcIicpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhcnRFbmREYXRlQXJyYXlSZXN1bHQ7XG4gIH1cbiAgc3RhdGljIGdldERhdGVSYW5nZXMoZGF0ZVJhbmdlU3RyaW5nOiBzdHJpbmcpOiBEYXRlW10ge1xuICAgIGNvbnN0IHN0YXJ0RW5kRGF0ZUFycmF5UmVzdWx0ID0gbmV3IEFycmF5PERhdGU+KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXJ0RW5kRGF0ZUFycmF5ID0gZGF0ZVJhbmdlU3RyaW5nLnNwbGl0KCcgLSAnKTtcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZVRpbWUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKHN0YXJ0RW5kRGF0ZUFycmF5WzBdKSk7XG4gICAgICBjb25zdCBlbmREYXRlVGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2Uoc3RhcnRFbmREYXRlQXJyYXlbMV0pKTtcbiAgICAgIGlmIChlbmREYXRlVGltZSA8IHN0YXJ0RGF0ZVRpbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5nZSBkYXRlIGlzIG5vdCB2YWxpZC4gRW5kIGRhdGUgbXVzdCBiZSBiaWdnZXIgdGhhbiBzdGFydCBkYXRlJyk7XG4gICAgICB9XG4gICAgICBzdGFydEVuZERhdGVBcnJheVJlc3VsdC5wdXNoKHN0YXJ0RGF0ZVRpbWUpO1xuICAgICAgc3RhcnRFbmREYXRlQXJyYXlSZXN1bHQucHVzaChlbmREYXRlVGltZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5nZSBkYXRlIGlzIG5vdCB2YWxpZC4gWW91IG11c3QgZW50ZXIgcmFuZ2UgZGF0ZSBzdHJpbmcgbGlrZSBcIjIwMTcvMDIvMDYgLSAyMDE3LzAyLzE4XCInKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0RW5kRGF0ZUFycmF5UmVzdWx0O1xuICB9XG59XG4iXX0=