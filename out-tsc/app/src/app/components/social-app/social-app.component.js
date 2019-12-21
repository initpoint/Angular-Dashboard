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
var SocialAppComponent = /** @class */ (function () {
    function SocialAppComponent() {
        this.isProfile = false;
        this.isMutualFriend = false;
        this.isActiveFeed = false;
        this.isIntroProfile = false;
        this.isFollowers = false;
        this.isFollowings = false;
        this.isLatestPhotos = false;
        this.isFriends = false;
    }
    //Fileupload
    SocialAppComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files.length === 0)
            return;
        //Image upload validation
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        // Image upload
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (_event) {
            _this.url = reader.result;
        };
    };
    SocialAppComponent.prototype.ngOnInit = function () { };
    SocialAppComponent = __decorate([
        Component({
            selector: 'app-social-app',
            templateUrl: './social-app.component.html',
            styleUrls: ['./social-app.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], SocialAppComponent);
    return SocialAppComponent;
}());
export { SocialAppComponent };
//# sourceMappingURL=social-app.component.js.map