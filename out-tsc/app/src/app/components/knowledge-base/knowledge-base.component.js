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
import { KB_DB } from '../../shared/data/knowledge-base/knowledge-base';
import { DomSanitizer } from '@angular/platform-browser';
var KnowledgeBaseComponent = /** @class */ (function () {
    function KnowledgeBaseComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.Kb = KB_DB.Kb_Category;
    }
    KnowledgeBaseComponent.prototype.ngOnInit = function () { };
    KnowledgeBaseComponent = __decorate([
        Component({
            selector: 'app-knowledge-base',
            templateUrl: './knowledge-base.component.html',
            styleUrls: ['./knowledge-base.component.scss']
        }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], KnowledgeBaseComponent);
    return KnowledgeBaseComponent;
}());
export { KnowledgeBaseComponent };
//# sourceMappingURL=knowledge-base.component.js.map