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
import { Router } from '@angular/router';
import { AuthService } from '../services/firebase/auth.service';
var SecureInnerPagesGuard = /** @class */ (function () {
    function SecureInnerPagesGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SecureInnerPagesGuard.prototype.canActivate = function (next, state) {
        var user = JSON.parse(localStorage.getItem('user'));
        if (this.authService.isLoggedIn) {
            window.alert("You are not allowed to access this URL!");
            this.router.navigate(['/dashboard/default']);
        }
        return true;
    };
    SecureInnerPagesGuard = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AuthService, Router])
    ], SecureInnerPagesGuard);
    return SecureInnerPagesGuard;
}());
export { SecureInnerPagesGuard };
//# sourceMappingURL=SecureInnerPagesGuard.guard.js.map