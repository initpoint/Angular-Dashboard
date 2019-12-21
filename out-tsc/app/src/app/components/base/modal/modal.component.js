var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Component({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, {{name}}!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [NgbActiveModal])
    ], NgbdModalContent);
    return NgbdModalContent;
}());
export { NgbdModalContent };
var NgbdModal1Content = /** @class */ (function () {
    function NgbdModal1Content(modalService, activeModal) {
        this.modalService = modalService;
        this.activeModal = activeModal;
    }
    NgbdModal1Content.prototype.open = function () {
        this.modalService.open(NgbdModal2Content, {
            size: 'lg'
        });
    };
    NgbdModal1Content = __decorate([
        Component({
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, World!</p>\n      <p><button class=\"btn btn-lg btn-outline-primary\" (click)=\"open()\">Launch demo modal</button></p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [NgbModal, NgbActiveModal])
    ], NgbdModal1Content);
    return NgbdModal1Content;
}());
export { NgbdModal1Content };
var NgbdModal2Content = /** @class */ (function () {
    function NgbdModal2Content(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModal2Content = __decorate([
        Component({
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, World!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [NgbActiveModal])
    ], NgbdModal2Content);
    return NgbdModal2Content;
}());
export { NgbdModal2Content };
var ModalComponent = /** @class */ (function () {
    function ModalComponent(config, modalService) {
        this.modalService = modalService;
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ModalComponent.prototype.ngOnInit = function () { };
    ModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalComponent.prototype.openModal = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    ModalComponent.prototype.openBackDropCustomClass = function (content) {
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    };
    ModalComponent.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    ModalComponent.prototype.openSm = function (content) {
        this.modalService.open(content, { size: 'sm' });
    };
    ModalComponent.prototype.openLg = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    ModalComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    ModalComponent.prototype.openStackedModal = function () {
        this.modalService.open(NgbdModal1Content);
    };
    ModalComponent.prototype.openCustomModal = function (content) {
        this.modalService.open(content);
    };
    ModalComponent = __decorate([
        Component({
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.scss'],
            encapsulation: ViewEncapsulation.None,
            providers: [NgbModalConfig, NgbModal]
        }),
        __metadata("design:paramtypes", [NgbModalConfig, NgbModal])
    ], ModalComponent);
    return ModalComponent;
}());
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map