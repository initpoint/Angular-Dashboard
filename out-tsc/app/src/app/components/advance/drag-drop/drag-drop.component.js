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
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
var personId = 0;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.id = personId++;
    }
    return Person;
}());
var DragDropComponent = /** @class */ (function () {
    function DragDropComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.BAG = "DRAGULA_EVENTS";
        this.subs = new Subscription();
        this.left = [
            new Person('Steven'),
            new Person('Paula'),
            new Person('Persephone'),
            new Person('Jacob'),
        ];
        this.right = [
            new Person('Delia'),
            new Person('Jackson'),
        ];
        this.MANY_ITEMS = 'MANY_ITEMS';
        this.many = ['The', 'possibilities', 'are', 'endless!'];
        this.many2 = ['Explore', 'them'];
        this.groups = [
            {
                name: 'Group A',
                items: [{ name: 'Item A' }, { name: 'Item B' }, { name: 'Item C' }, { name: 'Item D' }]
            },
            {
                name: 'Group B',
                items: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }, { name: 'Item 4' }]
            }
        ];
        this.clicked = {
            'one': false,
            'two': false,
            'three': false,
            'four': false,
            'five': false,
            'six': false,
            'seven': false
        };
        this.subs.add(dragulaService.drag(this.BAG)
            .subscribe(function (_a) {
            var el = _a.el;
            _this.removeClass(el, 'ex-moved');
        }));
        this.subs.add(dragulaService.drop(this.BAG)
            .subscribe(function (_a) {
            var el = _a.el;
            _this.addClass(el, 'ex-moved');
        }));
        this.subs.add(dragulaService.over(this.BAG)
            .subscribe(function (_a) {
            var el = _a.el, container = _a.container;
            _this.addClass(container, 'ex-over');
        }));
        this.subs.add(dragulaService.out(this.BAG)
            .subscribe(function (_a) {
            var el = _a.el, container = _a.container;
            _this.removeClass(container, 'ex-over');
        }));
        //For drag and delete data from container
        dragulaService.createGroup("SPILL", {
            removeOnSpill: true
        });
        dragulaService.createGroup("REVERT", {
            revertOnSpill: true
        });
        //For copying item from one container to other
        dragulaService.createGroup('PERSON', {
            copy: function (el, source) {
                return source.id === 'left';
            },
            copyItem: function (person) {
                return new Person(person.name);
            },
            accepts: function (el, target, source, sibling) {
                // To avoid dragging from right to left container
                return target.id !== 'left';
            }
        });
        dragulaService.createGroup('COPYABLE', {
            copy: function (el, source) {
                return source.id === 'left';
            },
            accepts: function (el, target, source, sibling) {
                // To avoid dragging from right to left container
                return target.id !== 'left';
            }
        });
        dragulaService.createGroup("HANDLES", {
            moves: function (el, container, handle) {
                return handle.className === 'handle';
            }
        });
        this.dragulaService.createGroup("COLUMNS", {
            direction: 'horizontal',
            moves: function (el, source, handle) { return handle.className === "group-handle"; }
        });
    }
    DragDropComponent.prototype.ngOnInit = function () { };
    //onClick event on container
    DragDropComponent.prototype.onclick = function (key) {
        var _this = this;
        this.clicked[key] = true;
        setTimeout(function () {
            _this.clicked[key] = false;
        }, 2000);
    };
    DragDropComponent.prototype.hasClass = function (el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    };
    DragDropComponent.prototype.addClass = function (el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    };
    DragDropComponent.prototype.removeClass = function (el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    };
    DragDropComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
        this.dragulaService.destroy('SPILL');
        this.dragulaService.destroy('REVERT');
        this.dragulaService.destroy('PERSON');
        this.dragulaService.destroy('COPYABLE');
        this.dragulaService.destroy('HANDLES');
        this.dragulaService.destroy('COLUMNS');
    };
    DragDropComponent = __decorate([
        Component({
            selector: 'app-drag-drop',
            templateUrl: './drag-drop.component.html',
            styleUrls: ['./drag-drop.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [DragulaService])
    ], DragDropComponent);
    return DragDropComponent;
}());
export { DragDropComponent };
//# sourceMappingURL=drag-drop.component.js.map