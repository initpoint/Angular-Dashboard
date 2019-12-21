var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LabelType } from 'ng5-slider';
var RangeSliderComponent = /** @class */ (function () {
    function RangeSliderComponent() {
        this.custMinValue = 10;
        this.custMaxValue = 90;
        this.noSwatchMinValue = 10;
        this.noSwatchMaxValue = 90;
        this.limitValue = 50;
        this.limitedMinValue = 40;
        this.limitedMaxValue = 60;
        this.pushRangeMinValue = 60;
        this.pushRangemaxValue = 70;
        this.stepValue = 12;
        this.customHtmlMinValue = 100;
        this.customHtmlMaxValue = 400;
        this.disabledMinValue = 10;
        this.disabledMaxValue = 90;
        this.readOnlyValue = 50;
        this.disabled = true;
        this.readOnly = true;
        this.dateRange = this.createDateRange();
        this.valueDateRange = this.dateRange[0].getTime();
        this.simpleSliderControl = new FormControl(100);
        this.rangeSliderForm = new FormGroup({
            rangeSliderControl: new FormControl([20, 80])
        });
        // Simple slider option
        this.simpleSliderOptions = {
            floor: 0,
            ceil: 250
        };
        // Range slider option
        this.rangeSliderOptions = {
            floor: 0,
            ceil: 100,
            step: 5
        };
        // Custom class slider
        this.custSlideroptions = {
            floor: 0,
            ceil: 100,
            step: 10,
            showTicks: true
        };
        // Slider limited to 10 through 90
        this.sliderLimitOptions = {
            floor: 0,
            ceil: 100,
            step: 1,
            minLimit: 10,
            maxLimit: 90
        };
        // Range slider with noSwitching=true
        this.noSwatchOption = {
            floor: 0,
            ceil: 100,
            step: 1,
            noSwitching: true
        };
        // Range slider with the range limited to 10 through 50
        this.limitedOptions = {
            floor: 0,
            ceil: 100,
            step: 1,
            minRange: 10,
            maxRange: 50
        };
        // Range slider with minimum range of 10, maximum of 30 and pushRange option
        this.pushRangeOptions = {
            floor: 0,
            ceil: 100,
            step: 1,
            minRange: 10,
            maxRange: 30,
            pushRange: true
        };
        // Slider with custom step value
        this.stepSlideroptions = {
            floor: 10,
            ceil: 100,
            step: 5
        };
        // Slider with custom step value
        this.customHtmlSliderOptions = {
            floor: 0,
            ceil: 500,
            translate: function (value, label) {
                switch (label) {
                    case LabelType.Low:
                        return '<b>Min price:</b> $' + value;
                    case LabelType.High:
                        return '<b>Max price:</b> $' + value;
                    default:
                        return '$' + value;
                }
            }
        };
        // Range Slider With Date
        this.dateRangeOptions = {
            stepsArray: this.dateRange.map(function (date) {
                return { value: date.getTime() };
            }),
            translate: function (value, label) {
                return new Date(value).toDateString();
            }
        };
        // Disabled Range Slider 
        this.disabledSliderOptions = {
            floor: 0,
            ceil: 100,
            step: 10,
            disabled: true,
            showTicks: true,
            draggableRange: true
        };
        // Read Only Range Slider 
        this.readOnlySliderOptions = {
            floor: 0,
            ceil: 100,
            readOnly: true
        };
        this.verticalSlider1 = {
            value: 0,
            options: {
                floor: 0,
                ceil: 10,
                vertical: true
            }
        };
        this.verticalSlider2 = {
            minValue: 20,
            maxValue: 80,
            options: {
                floor: 0,
                ceil: 100,
                vertical: true
            }
        };
        this.verticalSlider3 = {
            value: 5,
            options: {
                floor: 0,
                ceil: 10,
                vertical: true,
                showTicks: true
            }
        };
        this.verticalSlider4 = {
            minValue: 1,
            maxValue: 5,
            options: {
                floor: 0,
                ceil: 6,
                vertical: true,
                showTicksValues: true
            }
        };
        this.verticalSlider5 = {
            value: 50,
            options: {
                floor: 0,
                ceil: 100,
                vertical: true,
                showSelectionBar: true
            }
        };
        this.verticalSlider6 = {
            value: 6,
            options: {
                floor: 0,
                ceil: 6,
                vertical: true,
                showSelectionBar: true,
                showTicksValues: true,
                ticksValuesTooltip: function (v) {
                    return 'Tooltip for ' + v;
                }
            }
        };
    }
    RangeSliderComponent.prototype.ngOnInit = function () { };
    RangeSliderComponent.prototype.createDateRange = function () {
        var dates = [];
        for (var i = 1; i <= 31; i++) {
            dates.push(new Date(2018, 5, i));
        }
        return dates;
    };
    RangeSliderComponent.prototype.onChangeDisabled = function () {
        this.disabledSliderOptions = Object.assign({}, this.disabledSliderOptions, { disabled: this.disabled });
    };
    RangeSliderComponent.prototype.onChangeReadOnly = function () {
        this.readOnlySliderOptions = Object.assign({}, this.readOnlySliderOptions, { readOnly: this.readOnly });
    };
    RangeSliderComponent = __decorate([
        Component({
            selector: 'app-range-slider',
            templateUrl: './range-slider.component.html',
            styleUrls: ['./range-slider.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], RangeSliderComponent);
    return RangeSliderComponent;
}());
export { RangeSliderComponent };
//# sourceMappingURL=range-slider.component.js.map