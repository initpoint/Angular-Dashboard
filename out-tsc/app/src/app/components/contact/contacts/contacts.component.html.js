--Container - fluid;
starts-- >
    /** @class */ (function () {
        function class_1() {
        }
        return class_1;
    }());
"container-fluid product-wrapper"[/** @class */ (function () {
    function class_2() {
    }
    return class_2;
}()).sidebaron] = "sidebaron" >
    /** @class */ (function () {
        function class_3() {
        }
        return class_3;
    }());
"product-grid" >
    /** @class */ (function () {
        function class_4() {
        }
        return class_4;
    }());
"card" >
    /** @class */ (function () {
        function class_5() {
        }
        return class_5;
    }());
"card-body" >
    /** @class */ (function () {
        function class_6() {
        }
        return class_6;
    }());
"row" >
    /** @class */ (function () {
        function class_7() {
        }
        return class_7;
    }());
"col-xl-6" >
    /** @class */ (function () {
        function class_8() {
        }
        return class_8;
    }());
"search-form contact-search" >
    /** @class */ (function () {
        function class_9() {
        }
        return class_9;
    }());
"form-group mb-0" >
    type;
"text";
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"form-control"[(ngModel)] = "searchValue"[ngModelOptions] = "{standalone: true}";
placeholder = "Search by name..."(keyup) = "searchByName()" >
    /div>
    < /form>
    < /div>
    < div;
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"col-xl-6" >
    /** @class */ (function () {
        function class_10() {
        }
        return class_10;
    }());
"contact-filter" >
    /** @class */ (function () {
        function class_11() {
        }
        return class_11;
    }());
"mb-0 mr-2" > Filter;
By;
Age < /h5>
    < ng5 - slider[(value)];
"value"[options] = "options"(userChangeStart) = "onUserChangeStart($event)"(userChange) = "onUserChange($event)"(userChangeEnd) = "onUserChangeEnd($event)" > /ng5-slider>
    < button;
var default_3 = /** @class */ (function () {
    function default_3() {
    }
    return default_3;
}());
"btn btn-primary ml-2"[routerLink] = "['/contact/new-user']" > ADD < /i></button >
    /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < div;
var default_4 = /** @class */ (function () {
    function default_4() {
    }
    return default_4;
}());
"product-wrapper-grid"[/** @class */ (function () {
    function class_12() {
    }
    return class_12;
}()).list - view] = "listView";
style = "opacity: 1;" >
    /** @class */ (function () {
        function class_13() {
        }
        return class_13;
    }());
"row" >
    /** @class */ (function () {
        function class_14() {
        }
        return class_14;
    }());
"col-sm-12" >
    /** @class */ (function () {
        function class_15() {
        }
        return class_15;
    }());
"card" >
    /** @class */ (function () {
        function class_16() {
        }
        return class_16;
    }());
"product-box table-responsive contact-table" >
    /** @class */ (function () {
        function class_17() {
        }
        return class_17;
    }());
"table" >
    /** @class */ (function () {
        function class_18() {
        }
        return class_18;
    }());
"mb-0" > Profile < /h5>
    < /th>
    < th >
    /** @class */ (function () {
        function class_19() {
        }
        return class_19;
    }());
"mb-0" > Name < /h5>
    < /th>
    < th >
    /** @class */ (function () {
        function class_20() {
        }
        return class_20;
    }());
"mb-0" > Surname < /h5>
    < /th>
    < th >
    /** @class */ (function () {
        function class_21() {
        }
        return class_21;
    }());
"mb-0" > Mobile < /h5>
    < /th>
    < th;
colspan = "2" >
    /** @class */ (function () {
        function class_22() {
        }
        return class_22;
    }());
"mb-0" > Age < /h5>
    < /th>
    < /tr>
    < /thead>
    < tbody * ngFor;
"let item of items" >
    /** @class */ (function () {
        function class_23() {
        }
        return class_23;
    }());
"img-60 rounded-circle";
src = "{{item.payload.doc.data().avatar}}";
alt = "#" > /td>
    < td >
    {};
{
    item.payload.doc.data().name;
}
/h6>
    < /td>
    < td >
    {};
{
    item.payload.doc.data().surname;
}
/h6>
    < /td>
    < td >
    {};
{
    item.payload.doc.data().mobile;
}
/h6>
    < /td>
    < td >
    {};
{
    item.payload.doc.data().age;
}
/h6>
    < /td>
    < td > /** @class */ (function () {
    function class_24() {
    }
    return class_24;
}());
"btn btn-primary mr-2"[routerLink] = "['/contact/edit-user',item.payload.doc.id]" > Edit < /a>
    < button;
var default_5 = /** @class */ (function () {
    function default_5() {
    }
    return default_5;
}());
"btn btn-secondary"(click) = "delete(item.payload.doc.id)" > Delete < /button></td >
    /tr>
    < /tbody>
    < /table>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < div;
var default_6 = /** @class */ (function () {
    function default_6() {
    }
    return default_6;
}());
"col-sm-12" >
     * ngIf;
"!items?.length" >
    /** @class */ (function () {
        function class_25() {
        }
        return class_25;
    }());
"search-not-found text-center" >
    src;
"assets/images/search-not-found.png";
alt = "";
var default_7 = /** @class */ (function () {
    function default_7() {
    }
    return default_7;
}());
"second-search" >
    Sorry, We;
didn;
't find any results matching this search</p>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < !--Container - fluid;
Ends-- >
;
//# sourceMappingURL=contacts.component.html.js.map