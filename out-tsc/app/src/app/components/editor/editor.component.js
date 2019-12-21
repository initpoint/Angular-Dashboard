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
var EditorComponent = /** @class */ (function () {
    function EditorComponent() {
        this.editorValue = '';
        this.name = 'Angular 6';
        this.htmlContent = '';
        this.title = 'ngx-editor';
        this.config = {
            editable: true,
            spellcheck: true,
            height: '15rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            customClasses: [
                {
                    name: "quote",
                    class: "quote",
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1",
                },
            ]
        };
        this.editorConfig = {
            editable: true,
            spellcheck: false,
            height: '10rem',
            minHeight: '5rem',
            placeholder: 'Type something. Test the Editor... ヽ(^。^)丿',
            translate: 'no'
        };
    }
    EditorComponent.prototype.ngOnInit = function () { };
    EditorComponent = __decorate([
        Component({
            selector: 'app-editor',
            templateUrl: './editor.component.html',
            styleUrls: ['./editor.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], EditorComponent);
    return EditorComponent;
}());
export { EditorComponent };
//# sourceMappingURL=editor.component.js.map