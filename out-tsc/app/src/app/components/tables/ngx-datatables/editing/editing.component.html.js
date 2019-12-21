--Container - fluid;
starts-- >
    /** @class */ (function () {
        function class_1() {
        }
        return class_1;
    }());
"container-fluid" >
    /** @class */ (function () {
        function class_2() {
        }
        return class_2;
    }());
"row" >
    /** @class */ (function () {
        function class_3() {
        }
        return class_3;
    }());
"col-sm-12" >
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
"card-header" >
    Editing;
Table < /h5>
    < /div>
    < div;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"card-body custom-datatable" >
    -datatable;
mydatatable;
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"bootstrap"[headerHeight] = "50"[limit] = "5"[columnMode] = "'force'"[footerHeight] = "50"[rowHeight] = "'auto'"[rows] = "company" >
    -datatable - column;
name = "Name" >
    -template;
ngx - datatable - cell - template;
let - rowIndex;
"rowIndex";
let - value;
"value";
let - row;
"row" >
    title;
"Double click to edit"(dblclick) = "editing[rowIndex + '-name'] = true"
    * ngIf;
"!editing[rowIndex + '-name']" >
    {};
{
    value;
}
/span>
    < input;
autofocus(blur) = "updateValue($event, 'name', rowIndex)" * ngIf;
"editing[rowIndex+ '-name']";
type = "text"[value] = "value" /  >
    /ng-template>
    < /ngx-datatable-column>
    < ngx - datatable - column;
name = "Gender" >
    -template;
ngx - datatable - cell - template;
let - rowIndex;
"rowIndex";
let - row;
"row";
let - value;
"value" >
    title;
"Double click to edit"(dblclick) = "editing[rowIndex + '-gender'] = true"
    * ngIf;
"!editing[rowIndex + '-gender']" >
    {};
{
    value;
}
/span>
    < select * ngIf;
"editing[rowIndex + '-gender']"(change) = "updateValue($event, 'gender', rowIndex)"[value] = "value" >
    value;
"male" > Male < /option>
    < option;
value = "female" > Female < /option>
    < /select>
    < /ng-template>
    < /ngx-datatable-column>
    < ngx - datatable - column;
name = "Age" >
    -template;
ngx - datatable - cell - template;
let - value;
"value" >
    {};
{
    value;
}
/ng-template>
    < /ngx-datatable-column>
    < /ngx-datatable>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < !--Container - fluid;
Ends-- >
;
//# sourceMappingURL=editing.component.html.js.map