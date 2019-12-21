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
"col-sm-12 col-xl-6" >
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
    Basic;
Rating < /h5>
    < /div>
    < div;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"card-body" >
    -rating[(rate)];
"currentRate";
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"rating-size" > /ngb-rating>
    < hr >
    /** @class */ (function () {
        function class_6() {
        }
        return class_6;
    }());
"mb-0" > Rate;
({});
{
    currentRate;
}
/b></pre >
    /div>
    < /div>
    < /div>
    < div;
var default_3 = /** @class */ (function () {
    function default_3() {
    }
    return default_3;
}());
"col-sm-12 col-xl-6" >
    /** @class */ (function () {
        function class_7() {
        }
        return class_7;
    }());
"card" >
    /** @class */ (function () {
        function class_8() {
        }
        return class_8;
    }());
"card-header" >
    Events;
and;
ratings < /h5>
    < /div>
    < div;
var default_4 = /** @class */ (function () {
    function default_4() {
    }
    return default_4;
}());
"card-body editable-rating" >
    -rating[(rate)];
"selected"(hover) = "hovered=$event"(leave) = "hovered=0"[readonly] = "readonly";
var default_5 = /** @class */ (function () {
    function default_5() {
    }
    return default_5;
}());
"rating-size" > /ngb-rating>
    < hr >
    /** @class */ (function () {
        function class_9() {
        }
        return class_9;
    }());
"mb-0" > Selected;
({});
{
    selected;
}
/b> Hovered: <b>{{hovered}}</b > /pre>
    < button;
var default_6 = /** @class */ (function () {
    function default_6() {
    }
    return default_6;
}());
"btn btn-sm btn-position btn-outline-{{readonly ? 'danger' : 'success'}}"(click) = "readonly = !readonly" >
    {};
{
    readonly ? "readonly" : "editable";
}
/button>
    < /div>
    < /div>
    < /div>
    < div;
var default_7 = /** @class */ (function () {
    function default_7() {
    }
    return default_7;
}());
"col-sm-12 col-xl-6" >
    /** @class */ (function () {
        function class_10() {
        }
        return class_10;
    }());
"card" >
    /** @class */ (function () {
        function class_11() {
        }
        return class_11;
    }());
"card-header" >
    Form;
integration < /h5>
    < /div>
    < div;
var default_8 = /** @class */ (function () {
    function default_8() {
    }
    return default_8;
}());
"card-body" >
    NgModel;
and;
reactive;
forms;
can;
be;
used;
without;
the;
'rate';
binding < /p>
    < div;
var default_9 = /** @class */ (function () {
    function default_9() {
    }
    return default_9;
}());
"form-group" >
    -rating[formControl];
"ctrl";
var default_10 = /** @class */ (function () {
    function default_10() {
    }
    return default_10;
}());
"rating-size" > /ngb-rating>
    < div;
var default_11 = /** @class */ (function () {
    function default_11() {
    }
    return default_11;
}());
"form-text small" >
     * ngIf;
"ctrl.valid";
var default_12 = /** @class */ (function () {
    function default_12() {
    }
    return default_12;
}());
"text-success" > Thanks < /div>
    < div * ngIf;
"ctrl.invalid";
var default_13 = /** @class */ (function () {
    function default_13() {
    }
    return default_13;
}());
"text-danger" > Please;
rate;
us < /div>
    < /div>
    < /div>
    < hr >
    Model;
({});
{
    ctrl.value;
}
/b></pre >
    /** @class */ (function () {
        function class_12() {
        }
        return class_12;
    }());
"btn btn-sm btn-outline-{{ ctrl.disabled ? 'danger' : 'success'}} mr-2"(click) = "toggle()" >
    {};
{
    ctrl.disabled ? "control disabled" : " control enabled";
}
/button>
    < button;
var default_14 = /** @class */ (function () {
    function default_14() {
    }
    return default_14;
}());
"btn btn-sm btn-outline-primary mr-2"(click) = "ctrl.setValue(null)" > Clear < /button>
    < /div>
    < /div>
    < /div>
    < div;
var default_15 = /** @class */ (function () {
    function default_15() {
    }
    return default_15;
}());
"col-sm-12 col-xl-6" >
    /** @class */ (function () {
        function class_13() {
        }
        return class_13;
    }());
"card" >
    /** @class */ (function () {
        function class_14() {
        }
        return class_14;
    }());
"card-header" >
    Custom;
decimal;
rating < /h5>
    < /div>
    < div;
var default_16 = /** @class */ (function () {
    function default_16() {
    }
    return default_16;
}());
"card-body" >
    Custom;
rating;
template;
provided;
via;
a;
variable.Shows;
fine - grained;
rating;
display < /p>
    < ng - template;
t;
let - fill;
"fill" >
    /** @class */ (function () {
        function class_15() {
        }
        return class_15;
    }());
"star"[/** @class */ (function () {
    function class_16() {
    }
    return class_16;
}()).full] = "fill === 100" >
    /** @class */ (function () {
        function class_17() {
        }
        return class_17;
    }());
"half"[style.width. % ] = "fill" >  & hearts;
/span>&hearts;
    < /span>
    < /ng-template>
    < ngb - rating[(rate)];
"heartRate"[starTemplate] = "t"[readonly] = "true";
max = "5" > /ngb-rating>
    < hr >
    Rate;
({});
{
    heartRate;
}
/b></pre >
    /** @class */ (function () {
        function class_18() {
        }
        return class_18;
    }());
"btn btn-sm btn-outline-primary mr-2"(click) = "heartRate = 1.35" > 1.35 < /button>
    < button;
var default_17 = /** @class */ (function () {
    function default_17() {
    }
    return default_17;
}());
"btn btn-sm btn-outline-primary mr-2"(click) = "heartRate = 4.72" > 4.72 < /button>
    < /div>
    < /div>
    < /div>
    < div;
var default_18 = /** @class */ (function () {
    function default_18() {
    }
    return default_18;
}());
"col-sm-12" >
    /** @class */ (function () {
        function class_19() {
        }
        return class_19;
    }());
"card" >
    /** @class */ (function () {
        function class_20() {
        }
        return class_20;
    }());
"card-header" >
    Custom;
star;
template < /h5>
    < /div>
    < div;
var default_19 = /** @class */ (function () {
    function default_19() {
    }
    return default_19;
}());
"card-body" >
    Custom;
rating;
template;
provided;
element < /p>
    < ngb - rating[(rate)];
"currentRate" >
    -template;
let - fill;
"fill";
let - index;
"index" >
    /** @class */ (function () {
        function class_21() {
        }
        return class_21;
    }());
"star"[/** @class */ (function () {
    function class_22() {
    }
    return class_22;
}()).filled] = "fill === 100"[/** @class */ (function () {
    function class_23() {
    }
    return class_23;
}()).bad] = "index < 3" >  & ;
9733;
/span>
    < /ng-template>
    < /ngb-rating>
    < hr >
    /** @class */ (function () {
        function class_24() {
        }
        return class_24;
    }());
"mb-0" > Rate;
({});
{
    currentRate;
}
/b></pre >
    /div>
    < /div>
    < /div>
    < /div>
    < /div>;
//# sourceMappingURL=rating.component.html.js.map