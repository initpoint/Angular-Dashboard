var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ContactService } from './contact.service';
var EditUserResolver = /** @class */ (function () {
    function EditUserResolver(contectService) {
        this.contectService = contectService;
    }
    EditUserResolver.prototype.resolve = function (route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userId = route.paramMap.get('id');
            _this.contectService.getUser(userId)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    EditUserResolver = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ContactService])
    ], EditUserResolver);
    return EditUserResolver;
}());
export { EditUserResolver };
//# sourceMappingURL=edit-user.resolver.js.map