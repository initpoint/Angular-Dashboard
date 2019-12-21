var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, val) {
        var _this = this;
        if (val === void 0) { val = 'desc'; }
        if (!val || val.trim() == "") {
            return array;
        }
        //ascending
        if (val == 'asc') {
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item1['id'], item2['id']);
            });
        }
        else if (val == 'desc') { // desc
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item2['id'], item1['id']);
            });
        }
        else if (val == 'a-z') { // a-z
            return Array.from(array).sort(function (a, b) {
                if (a['name'] < b['name']) {
                    return -1;
                }
                else if (a['name'] > b['name']) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else if (val == 'z-a') { // z-a
            return Array.from(array).sort(function (a, b) {
                if (a['name'] > b['name']) {
                    return -1;
                }
                else if (a['name'] < b['name']) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else if (val == 'low') { // low to high
            return Array.from(array).sort(function (a, b) {
                if (a['price'] < b['price']) {
                    return -1;
                }
                else if (a['price'] > b['price']) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else if (val == 'high') { // high to low
            return Array.from(array).sort(function (a, b) {
                if (a['price'] > b['price']) {
                    return -1;
                }
                else if (a['price'] < b['price']) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
    };
    OrderByPipe.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderByPipe = __decorate([
        Pipe({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());
export { OrderByPipe };
//# sourceMappingURL=order-by.pipe.js.map