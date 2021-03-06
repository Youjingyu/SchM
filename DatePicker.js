'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MultiPicker = require('rmc-picker/lib/MultiPicker');

var _MultiPicker2 = _interopRequireDefault(_MultiPicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _en_US = require('./locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getDaysInMonth(now) {
    return now.clone().endOf('month').date();
}
function pad(n) {
    return n < 10 ? '0' + n : n + '';
}
var smallPickerItem = {
    fontSize: 20
};
var DATETIME = 'datetime';
var DATETIME1 = 'datetime1';
var DATE = 'date';
var TIME = 'time';
var MONTH = 'month';
var YEAR = 'year';
var DatePicker = _react2["default"].createClass({
    displayName: 'DatePicker',
    getDefaultProps: function getDefaultProps() {
        return {
            prefixCls: 'rmc-date-picker',
            pickerPrefixCls: 'rmc-picker',
            locale: _en_US2["default"],
            mode: DATE,
            minuteStep: 1,
            onDateChange: function onDateChange() {}
        };
    },
    getInitialState: function getInitialState() {
        return {
            date: this.props.date || this.props.defaultDate
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if ('date' in nextProps) {
            this.setState({
                date: nextProps.date || nextProps.defaultDate
            });
        }
    },
    onValueChange: function onValueChange(values, index) {

        var value = parseInt(values[index], 10);
        var props = this.props;
        var mode = props.mode;

        var newValue = this.getDate().clone();

        if (mode === DATETIME || mode === DATE || mode === YEAR || mode === MONTH) {
            switch (index) {
                case 0:
                    newValue.year(value);
                    break;
                case 1:
                    newValue.month(value);
                    break;
                case 2:
                    newValue.date(value);
                    break;
                case 3:
                    newValue.hour(value);
                    break;
                case 4:
                    newValue.minute(value);
                    break;
                default:
                    break;
            }
        } else if(mode === DATETIME1){
              switch (index) {
                case 0:
                  newValue.date(value);
                  break;
                case 1:
                  newValue.hour(value);
                  break;
                case 2:
                  newValue.minute(value);
                  break;
                default:
                  break;
              }
        } else {
            switch (index) {
                case 0:
                    newValue.hour(value);
                    break;
                case 1:
                    newValue.minute(value);
                    break;
                default:
                    break;
            }
        }
        newValue = this.clipDate(newValue);
        if (!('date' in props)) {
            this.setState({
                date: newValue
            });
        }

        props.onDateChange(newValue);
    },
    getDefaultMinDate: function getDefaultMinDate() {
        if (!this.defaultMinDate) {
            this.defaultMinDate = this.getGregorianCalendar([2000, 1, 1, 0, 0, 0]);
        }
        return this.defaultMinDate;
    },
    getDefaultMaxDate: function getDefaultMaxDate() {
        if (!this.defaultMaxDate) {
            this.defaultMaxDate = this.getGregorianCalendar([2030, 1, 1, 23, 59, 59]);
        }
        return this.defaultMaxDate;
    },
    getDate: function getDate() {
        return this.state.date || this.getDefaultMinDate();
    },
    getValue: function getValue() {
        return this.getDate();
    },
    getMinYear: function getMinYear() {
        return this.getMinDate().year();
    },
    getMaxYear: function getMaxYear() {
        return this.getMaxDate().year();
    },
    getMinMonth: function getMinMonth() {
        return this.getMinDate().month();
    },
    getMaxMonth: function getMaxMonth() {
        return this.getMaxDate().month();
    },
    getMinDay: function getMinDay() {
        return this.getMinDate().date();
    },
    getMaxDay: function getMaxDay() {
        return this.getMaxDate().date();
    },
    getMinHour: function getMinHour() {
        return this.getMinDate().hour();
    },
    getMaxHour: function getMaxHour() {
        return this.getMaxDate().hour();
    },
    getMinMinute: function getMinMinute() {
        return this.getMinDate().minute();
    },
    getMaxMinute: function getMaxMinute() {
        return this.getMaxDate().minute();
    },
    getMinDate: function getMinDate() {
        return this.props.minDate || this.getDefaultMinDate();
    },
    getMaxDate: function getMaxDate() {
        return this.props.maxDate || this.getDefaultMaxDate();
    },
    getDateData: function getDateData() {
        var _props = this.props,
            locale = _props.locale,
            formatMonth = _props.formatMonth,
            formatDay = _props.formatDay,
            mode = _props.mode;

        var date = this.getDate();
        var selYear = date.year();
        var selMonth = date.month();
        var minDateYear = this.getMinYear();
        var maxDateYear = this.getMaxYear();
        var minDateMonth = this.getMinMonth();
        var maxDateMonth = this.getMaxMonth();
        var minDateDay = this.getMinDay();
        var maxDateDay = this.getMaxDay();
        var years = [];
        for (var i = minDateYear; i <= maxDateYear; i++) {
            years.push({
                value: i + '',
                label: i + locale.year + ''
            });
        }
        var yearCol = { key: 'year', props: { children: years } };
        if (mode === YEAR) {
            return [yearCol];
        }
        var months = [];
        var minMonth = 0;
        var maxMonth = 11;
        if (minDateYear === selYear) {
            minMonth = minDateMonth;
        }
        if (maxDateYear === selYear) {
            maxMonth = maxDateMonth;
        }
        for (var _i = minMonth; _i <= maxMonth; _i++) {
            var label = formatMonth ? formatMonth(_i, date) : _i + 1 + locale.month + '';
            months.push({
                value: _i + '',
                label: label
            });
        }
        var monthCol = { key: 'month', props: { children: months } };
        if (mode === MONTH) {
            return [yearCol, monthCol];
        }
        var days = [];
        var minDay = 1;
        var maxDay = getDaysInMonth(date);
        if (minDateYear === selYear && minDateMonth === selMonth) {
            minDay = minDateDay;
        }
        if (maxDateYear === selYear && maxDateMonth === selMonth) {
            maxDay = maxDateDay;
        }
        var weekText = ['日', '一', '二', '三', '四', '五', '六'];
        for (var _i2 = minDay; _i2 <= maxDay; _i2++) {
           var _label = formatDay ? formatDay(_i2, date) : _i2 + locale.day + '';

          if(mode === DATETIME1){
            _label = date.month() + '月' + _label + ' ' + '周' + weekText[date.day()];
          }
            days.push({
                value: _i2 + '',
                label: _label
            });
        }

        return [yearCol, monthCol, { key: 'day', props: { children: days } }];
    },
    getTimeData: function getTimeData() {
        var minHour = 0;
        var maxHour = 23;
        var minMinute = 0;
        var maxMinute = 59;
        var _props2 = this.props,
            mode = _props2.mode,
            locale = _props2.locale,
            minuteStep = _props2.minuteStep;

        var date = this.getDate();
        var minDateMinute = this.getMinMinute();
        var maxDateMinute = this.getMaxMinute();
        var minDateHour = this.getMinHour();
        var maxDateHour = this.getMaxHour();
        var hour = date.hour();
      if (mode === DATETIME || mode === DATETIME1) {
            var year = date.year();
            var month = date.month();
            var day = date.date();
            var minDateYear = this.getMinYear();
            var maxDateYear = this.getMaxYear();
            var minDateMonth = this.getMinMonth();
            var maxDateMonth = this.getMaxMonth();
            var minDateDay = this.getMinDay();
            var maxDateDay = this.getMaxDay();
            if (minDateYear === year && minDateMonth === month && minDateDay === day) {
                minHour = minDateHour;
                if (minDateHour === hour) {
                    minMinute = minDateMinute;
                }
            }
            if (maxDateYear === year && maxDateMonth === month && maxDateDay === day) {
                maxHour = maxDateHour;
                if (maxDateHour === hour) {
                    maxMinute = maxDateMinute;
                }
            }
        } else {
            minHour = minDateHour;
            if (minDateHour === hour) {
                minMinute = minDateMinute;
            }
            maxHour = maxDateHour;
            if (maxDateHour === hour) {
                maxMinute = maxDateMinute;
            }
        }
        var hours = [];
        for (var i = minHour; i <= maxHour; i++) {
            hours.push({
                value: i + '',
                label: locale.hour ? i + locale.hour + '' : pad(i)
            });
        }
        var minutes = [];
        for (var _i3 = minMinute; _i3 <= maxMinute; _i3 += minuteStep) {
            minutes.push({
                value: _i3 + '',
                label: locale.minute ? _i3 + locale.minute + '' : pad(_i3)
            });
        }
        return [{ key: 'hours', props: { children: hours } }, { key: 'minutes', props: { children: minutes } }];
    },
    getGregorianCalendar: function getGregorianCalendar(arg) {
        return (0, _moment2["default"])(arg);
    },
    clipDate: function clipDate(date) {
        var mode = this.props.mode;

        var minDate = this.getMinDate();
        var maxDate = this.getMaxDate();
      if (mode === DATETIME || mode === DATETIME1) {
            if (date.isBefore(minDate)) {
                return minDate.clone();
            }
            if (date.isAfter(maxDate)) {
                return maxDate.clone();
            }
        } else if (mode === DATE) {
            if (date.isBefore(minDate, 'day')) {
                return minDate.clone();
            }
            if (date.isAfter(maxDate, 'day')) {
                return maxDate.clone();
            }
        } else {
            var maxHour = maxDate.hour();
            var maxMinutes = maxDate.minute();
            var minHour = minDate.hour();
            var minMinutes = minDate.minute();
            var hour = date.hour();
            var minutes = date.minute();
            if (hour < minHour || hour === minHour && minutes < minMinutes) {
                return minDate.clone();
            }
            if (hour > maxHour || hour === maxHour && minutes > maxMinutes) {
                return maxDate.clone();
            }
        }
        return date;
    },
    getValueCols: function getValueCols() {
        var mode = this.props.mode;

        var date = this.getDate();
        var cols = [];
        var value = [];
        if (mode === YEAR) {
            return {
                cols: this.getDateData(),
                value: [date.year() + '']
            };
        }
        if (mode === MONTH) {
            return {
                cols: this.getDateData(),
                value: [date.year() + '', date.month() + '']
            };
        }
        if (mode === DATETIME || mode === DATE) {
            cols = this.getDateData();
            value = [date.year() + '', date.month() + '', date.date() + ''];
        }
        if (mode === DATETIME || mode === TIME) {
            cols = cols.concat(this.getTimeData());
            value = value.concat([date.hour() + '', date.minute() + '']);
        }
      if(mode === DATETIME1){
        cols = [this.getDateData()[2]].concat(this.getTimeData());
        value = [date.date() + '', date.hour() + '', date.minute() + ''];
      }
      // console.log(cols, value);
        return {
            value: value,
            cols: cols
        };
    },
    render: function render() {
        var _getValueCols = this.getValueCols(),
            value = _getValueCols.value,
            cols = _getValueCols.cols;

        var _props3 = this.props,
            mode = _props3.mode,
            prefixCls = _props3.prefixCls,
            pickerPrefixCls = _props3.pickerPrefixCls,
            rootNativeProps = _props3.rootNativeProps,
            className = _props3.className;

        return _react2["default"].createElement(_MultiPicker2["default"], { rootNativeProps: rootNativeProps, className: className, prefixCls: prefixCls, pickerPrefixCls: pickerPrefixCls, pickerItemStyle: typeof window === 'undefined' && (mode === 'datetime' || mode === 'datetime1') ? smallPickerItem : undefined, selectedValue: value, onValueChange: this.onValueChange }, cols);
    }
});
exports["default"] = DatePicker;
module.exports = exports['default'];