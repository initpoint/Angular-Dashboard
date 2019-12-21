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
    Quick;
and;
easy;
tooltips < /h5>
    < /div>
    < div;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"card-body btn-showcase" >
    type;
"button";
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"btn btn-outline-primary mr-2";
placement = "top";
ngbTooltip = "Tooltip on top" >
    Tooltip;
on;
top
    < /button>
    < button;
type = "button";
var default_3 = /** @class */ (function () {
    function default_3() {
    }
    return default_3;
}());
"btn btn-outline-primary mr-2";
placement = "right";
ngbTooltip = "Tooltip on right" >
    Tooltip;
on;
right
    < /button>
    < button;
type = "button";
var default_4 = /** @class */ (function () {
    function default_4() {
    }
    return default_4;
}());
"btn btn-outline-primary mr-2";
placement = "bottom";
ngbTooltip = "Tooltip on bottom" >
    Tooltip;
on;
bottom
    < /button>
    < button;
type = "button";
var default_5 = /** @class */ (function () {
    function default_5() {
    }
    return default_5;
}());
"btn btn-outline-primary";
placement = "left";
ngbTooltip = "Tooltip on left" >
    Tooltip;
on;
left
    < /button>
    < /div>
    < /div>
    < /div>
    < div;
var default_6 = /** @class */ (function () {
    function default_6() {
    }
    return default_6;
}());
"col-sm-12 col-xl-6" >
    /** @class */ (function () {
        function class_6() {
        }
        return class_6;
    }());
"card" >
    /** @class */ (function () {
        function class_7() {
        }
        return class_7;
    }());
"card-header" >
    HTML;
and;
bindings in tooltips < /h5>
    < /div>
    < div;
var default_7 = /** @class */ (function () {
    function default_7() {
    }
    return default_7;
}());
"card-body" >
    Tooltips;
can;
contain;
any;
arbitrary;
HTML, Angular;
bindings;
and;
even;
directives;
Simply;
enclose;
desired;
content in a( & lt);
ng - template & gt;
/code> element.
    < /p>
    < ng - template;
tipContent > Hello, {};
{
    name;
}
/b>!</ng - template >
    type;
"button";
var default_8 = /** @class */ (function () {
    function default_8() {
    }
    return default_8;
}());
"btn btn-outline-primary btn-xs-eplisis"[ngbTooltip] = "tipContent" >
    I;
've got markup and bindings in my tooltip!
    < /button>
    < /div>
    < /div>
    < /div>
    < div;
var default_9 = /** @class */ (function () {
    function default_9() {
    }
    return default_9;
}());
"col-sm-12 col-xl-6" >
    /** @class */ (function () {
        function class_8() {
        }
        return class_8;
    }());
"card" >
    /** @class */ (function () {
        function class_9() {
        }
        return class_9;
    }());
"card-header" >
    Custom;
and;
manual;
triggers < /h5>
    < /div>
    < div;
var default_10 = /** @class */ (function () {
    function default_10() {
    }
    return default_10;
}());
"card-body" >
    You;
can;
easily;
override;
open;
and;
close;
triggers;
by;
specifying;
event;
names(separated, by(/code>) in, the < code > triggers < /code> property.
    < /p>
    < button, type = "button", /** @class */ (function () {
    function class_10() {
    }
    return class_10;
}()) = "btn btn-outline-primary", ngbTooltip = "You see, I show up on click!", triggers = "click:blur" >
    Click, me
    < /button>
    < hr >
    Alternatively, you, can, take, full, manual, control, over, tooltip, opening / closing, events.
    < /p>
    < div, /** @class */ (function () {
    function class_11() {
    }
    return class_11;
}()) = "btn-showcase" >
    type, "button", /** @class */ (function () {
    function class_12() {
    }
    return class_12;
}()) = "btn btn-outline-primary mr-2", ngbTooltip = "What a great tip!"[autoClose] = "false", triggers = "manual", t = "ngbTooltip"(click) = "t.open()" >
    Click, me, to, open, a, tooltip
    < /button>
    < button, type = "button", /** @class */ (function () {
    function class_13() {
    }
    return class_13;
}()) = "btn btn-outline-primary"(click) = "t.close()" >
    Click, me, to, close, a, tooltip
    < /button>
    < /div>
    < /div>
    < /div>
    < /div>
    < div, /** @class */ (function () {
    function class_14() {
    }
    return class_14;
}()) = "col-sm-12 col-xl-6" >
    /** @class */ (function () {
        function class_15() {
        }
        return class_15;
    }()), "card" >
    /** @class */ (function () {
        function class_16() {
        }
        return class_16;
    }()), "card-header" >
    Automatic, closing));
with (keyboard)
    and;
mouse < /h5>
    < /div>
    < div;
var default_11 = /** @class */ (function () {
    function default_11() {
    }
    return default_11;
}());
"card-body" >
    As;
for (some; other; popup - based)
    widgets, you;
can;
set;
the;
tooltip;
to;
close;
automatically;
upon;
some;
events. < /p>
    < p > In;
the;
following;
examples, they;
will;
all;
close;
on < code > Escape < /code> as well as:</p >
    /** @class */ (function () {
        function class_17() {
        }
        return class_17;
    }());
"mb-2" >
    click;
inside: type;
"button";
var default_12 = /** @class */ (function () {
    function default_12() {
    }
    return default_12;
}());
"btn btn-outline-primary";
triggers = "click"[autoClose] = "'inside'";
ngbTooltip = "Click inside or press Escape to close" >
    Click;
to;
toggle
    < /button>
    < /li>
    < li;
var default_13 = /** @class */ (function () {
    function default_13() {
    }
    return default_13;
}());
"mb-2" >
    click;
outside: type;
"button";
var default_14 = /** @class */ (function () {
    function default_14() {
    }
    return default_14;
}());
"btn btn-outline-primary";
triggers = "click"[autoClose] = "'outside'";
ngbTooltip = "Click outside or press Escape to close" >
    Click;
to;
toggle
    < /button>
    < /li>
    < li;
var default_15 = /** @class */ (function () {
    function default_15() {
    }
    return default_15;
}());
"mb-2" >
    all;
clicks: /** @class */ (function () {
    function class_18() {
    }
    return class_18;
}());
"d-inline-block btn-showcase" >
    type;
"button";
var default_16 = /** @class */ (function () {
    function default_16() {
    }
    return default_16;
}());
"btn btn-outline-primary mr-0";
triggers = "click"[autoClose] = "true";
ngbTooltip = "Click anywhere or press Escape to close (try the toggling element too)";
tooltip3 = "ngbTooltip" >
    Click;
to;
toggle
    < /button>
    & nbsp;
type;
"button";
var default_17 = /** @class */ (function () {
    function default_17() {
    }
    return default_17;
}());
"btn btn-outline-primary btn-xs-eplisis"(click) = "tooltip3.toggle()" >
    Click;
to;
toggle;
the;
external;
tooltip
    < /button>
    < /div>
    < /li>
    < /ul>
    < /div>
    < /div>
    < /div>
    < div;
var default_18 = /** @class */ (function () {
    function default_18() {
    }
    return default_18;
}());
"col-sm-12 col-xl-6" >
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
    Context;
and;
manual;
triggers < /h5>
    < /div>
    < div;
var default_19 = /** @class */ (function () {
    function default_19() {
    }
    return default_19;
}());
"card-body" >
    You;
can;
optionally;
pass in a;
context;
when;
manually;
triggering;
a;
tooltip.
    < /p>
    < ng - template;
tipContent;
let - greeting;
"greeting" > {};
{
    greeting;
}
({});
{
    name;
}
/b>!</ng - template >
    /** @class */ (function () {
        function class_21() {
        }
        return class_21;
    }());
"btn-showcase" >
    type;
"button";
var default_20 = /** @class */ (function () {
    function default_20() {
    }
    return default_20;
}());
"btn btn-outline-primary mr-2"[ngbTooltip] = "tipContent";
triggers = "manual";
t1 = "ngbTooltip"(click) = "toggleWithGreeting(t1, 'Bonjour')" >
    French
    < /button>
    < button;
type = "button";
var default_21 = /** @class */ (function () {
    function default_21() {
    }
    return default_21;
}());
"btn btn-outline-primary mr-2"[ngbTooltip] = "tipContent";
triggers = "manual";
t2 = "ngbTooltip"(click) = "toggleWithGreeting(t2, 'Gutentag')" >
    German
    < /button>
    < button;
type = "button";
var default_22 = /** @class */ (function () {
    function default_22() {
    }
    return default_22;
}());
"btn btn-outline-primary mr-2"[ngbTooltip] = "tipContent";
triggers = "manual";
t3 = "ngbTooltip"(click) = "toggleWithGreeting(t3, 'Hello')" >
    English
    < /button>
    < /div>
    < /div>
    < /div>
    < /div>
    < div;
var default_23 = /** @class */ (function () {
    function default_23() {
    }
    return default_23;
}());
"col-sm-12 col-xl-6" >
    /** @class */ (function () {
        function class_22() {
        }
        return class_22;
    }());
"card" >
    /** @class */ (function () {
        function class_23() {
        }
        return class_23;
    }());
"card-header" >
    Context;
and;
manual;
triggers < /h5>
    < /div>
    < div;
var default_24 = /** @class */ (function () {
    function default_24() {
    }
    return default_24;
}());
"card-body" >
    You;
can;
optionally;
pass in a;
custom;
var via = /** @class */ (function () {
    function via() {
    }
    return via;
}());
tooltipClass < /code>
    < /p>
    < button;
type = "button";
var default_25 = /** @class */ (function () {
    function default_25() {
    }
    return default_25;
}());
"btn btn-outline-primary";
ngbTooltip = "Nice class!";
tooltipClass = "my-custom-class" >
    Tooltip;
with (custom) {
    var default_26 = /** @class */ (function () {
        function default_26() {
        }
        return default_26;
    }());
}
/button>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>;
//# sourceMappingURL=tooltip.component.html.js.map