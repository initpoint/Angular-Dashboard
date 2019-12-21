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
import { formatDate } from '@angular/common';
var GeneralComponent = /** @class */ (function () {
    function GeneralComponent(calender) {
        this.calender = calender;
        this.time = new Date();
        this.jstoday = '';
        this.today = Date.now();
        this.owlcarousel = [
            {
                desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
                img: "assets/images/dashboard/boy-2.png",
                name: "Poio klot",
                designation: "Developer"
            },
            {
                desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
                img: "assets/images/dashboard/boy-2.png",
                name: "Poio klot",
                designation: "Developer"
            }
        ];
        this.owlcarouselOptions = {
            loop: true,
            margin: 10,
            items: 1,
            nav: false,
            dots: false
        };
        this.model = calender.getToday();
        this.jstoday = formatDate(this.time, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    }
    GeneralComponent.prototype.setTime = function () {
        this.intmin = setInterval(function () {
            var second = new Date().getSeconds();
            var sdegree = second * 6;
            var srotate = "rotate(" + sdegree + "deg)";
            var seconds = document.getElementById('sec').style.transform = srotate;
        }, 1000);
        this.intsec = setInterval(function () {
            var mins = new Date().getMinutes();
            var mdegree = mins * 6;
            var mrotate = "rotate(" + mdegree + "deg)";
            var minits = document.getElementById('min').style.transform = mrotate;
        }, 1000);
        this.inthour = setInterval(function () {
            var hour = new Date().getHours();
            var mints = new Date().getMinutes();
            var hdegree = hour * 30 + (mints / 2);
            var hrotate = "rotate(" + hdegree + "deg)";
            var hours = document.getElementById('hour').style.transform = hrotate;
        }, 1000);
    };
    GeneralComponent.prototype.ngOnInit = function () {
        var now = new Date();
        this.setTime();
    };
    GeneralComponent.prototype.ngOnDestroy = function () {
        if (this.intmin) {
            clearInterval(this.intmin);
        }
        if (this.intsec) {
            clearInterval(this.intsec);
        }
        if (this.inthour) {
            clearInterval(this.inthour);
        }
    };
    GeneralComponent = __decorate([
        Component({
            selector: 'app-general',
            templateUrl: './general.component.html',
            styleUrls: ['./general.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [NgbCalendar])
    ], GeneralComponent);
    return GeneralComponent;
}());
export { GeneralComponent };
//# sourceMappingURL=general.component.js.map