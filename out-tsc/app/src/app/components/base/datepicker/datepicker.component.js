var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(calendar) {
        var _this = this;
        this.calendar = calendar;
        this.disabled = true;
        this.displayMonths = 2;
        this.navigation = 'select';
        this.showWeekNumbers = false;
        this.outsideDays = 'visible';
        this.today = this.calendar.getToday();
        this.isDisabled = function (date, current) { return date.month !== current.month; };
        this.isWeekend = function (date) { return _this.calendar.getWeekday(date) >= 6; };
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    DatepickerComponent.prototype.ngOnInit = function () { };
    DatepickerComponent.prototype.selectToday = function () {
        this.model = this.calendar.getToday();
    };
    DatepickerComponent.prototype.onDateSelection = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    DatepickerComponent.prototype.isHovered = function (date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    };
    DatepickerComponent.prototype.isInside = function (date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    };
    DatepickerComponent.prototype.isRange = function (date) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    };
    DatepickerComponent = __decorate([
        Component({
            selector: 'app-datepicker',
            templateUrl: './datepicker.component.html',
            styleUrls: ['./datepicker.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [NgbCalendar])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
export { DatepickerComponent };
//# sourceMappingURL=datepicker.component.js.map