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
popovers < /h5>
    < /div>
    < div;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"card-body btn-showcase popover-mr" >
    type;
"button";
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"btn btn-outline-primary";
placement = "top";
ngbPopover = "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.";
popoverTitle = "Popover on top" >
    Popover;
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
"btn btn-outline-primary";
placement = "right";
ngbPopover = "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.";
popoverTitle = "Popover on right" >
    Popover;
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
"btn btn-outline-primary";
placement = "bottom";
ngbPopover = "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.";
popoverTitle = "Popover on bottom" >
    Popover;
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
ngbPopover = "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.";
popoverTitle = "Popover on left" >
    Popover;
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
    Global;
configuration;
of;
popovers < /h5>
    < /div>
    < div;
var default_7 = /** @class */ (function () {
    function default_7() {
    }
    return default_7;
}());
"card-body" >
    type;
"button";
var default_8 = /** @class */ (function () {
    function default_8() {
    }
    return default_8;
}());
"btn btn-outline-primary";
ngbPopover = "This popover gets its inputs from the customized configuration";
popoverTitle = "Customized popover" >
    Customized;
popover
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
}()) = "btn btn-outline-primary", ngbPopover = "You see, I show up on hover!", triggers = "mouseenter:mouseleave", popoverTitle = "Pop title" >
    Hover, over, me
    < /button>
    < hr >
    Alternatively, you, can, take, full, manual, control, over, popover, opening / closing, events.
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
}()) = "btn btn-outline-primary mr-2", ngbPopover = "What a great tip!"[autoClose] = "false", triggers = "manual", p = "ngbPopover"(click) = "p.open()", popoverTitle = "Pop title" >
    Click, me, to, open, a, popover
    < /button>
    < button, type = "button", /** @class */ (function () {
    function class_13() {
    }
    return class_13;
}()) = "btn btn-outline-primary"(click) = "p.close()" >
    Click, me, to, close, a, popover
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
popover;
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
popoverTitle = "Pop title"[autoClose] = "'inside'";
ngbPopover = "Click inside or press Escape to close" >
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
popoverTitle = "Pop title"[autoClose] = "'outside'";
ngbPopover = "Click outside or press Escape to close" >
    Click;
to;
toggle
    < /button>
    < /li>
    < li >
    all;
clicks: /** @class */ (function () {
    function class_18() {
    }
    return class_18;
}());
"btn-showcase d-inline-block" >
    type;
"button";
var default_15 = /** @class */ (function () {
    function default_15() {
    }
    return default_15;
}());
"btn btn-outline-primary mr-0";
popoverTitle = "Pop title"[autoClose] = "true";
ngbPopover = "Click anywhere or press Escape to close (try the toggling element too)";
popover3 = "ngbPopover" >
    Click;
to;
toggle
    < /button>
    & nbsp;
type;
"button";
var default_16 = /** @class */ (function () {
    function default_16() {
    }
    return default_16;
}());
"btn btn-outline-primary mr-0 btn-xs-eplisis"(click) = "popover3.toggle()" >
    Click;
to;
toggle;
the;
external;
popover
    < /button>
    < /div>
    < /li>
    < /ul>
    < /div>
    < /div>
    < /div>
    < div;
var default_17 = /** @class */ (function () {
    function default_17() {
    }
    return default_17;
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
    Popover;
with (custom) {
    var default_18 = /** @class */ (function () {
        function default_18() {
        }
        return default_18;
    }());
}
/h5>
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
custom;
var via = /** @class */ (function () {
    function via() {
    }
    return via;
}());
popoverClass < /code>
    < /p>
    < button;
type = "button";
var default_20 = /** @class */ (function () {
    function default_20() {
    }
    return default_20;
}());
"btn btn-outline-primary";
ngbPopover = "Nice class!";
popoverClass = "my-custom-class" >
    Popover;
with (custom) {
    var default_21 = /** @class */ (function () {
        function default_21() {
        }
        return default_21;
    }());
}
/button>
    < /div>
    < /div>
    < /div>
    < div;
var default_22 = /** @class */ (function () {
    function default_22() {
    }
    return default_22;
}());
"col-sm-12 col-xl-6" >
    /** @class */ (function () {
        function class_21() {
        }
        return class_21;
    }());
"card" >
    /** @class */ (function () {
        function class_22() {
        }
        return class_22;
    }());
"card-header" >
    Context;
and;
manual;
triggers < /h5>
    < /div>
    < div;
var default_23 = /** @class */ (function () {
    function default_23() {
    }
    return default_23;
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
popover.
    < /p>
    < ng - template;
popContent;
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
    -template;
popTitle;
let - language;
"language" > Greeting in {};
{
    language;
}
/ng-template>
    < div;
var default_24 = /** @class */ (function () {
    function default_24() {
    }
    return default_24;
}());
"btn-showcase" >
    type;
"button";
var default_25 = /** @class */ (function () {
    function default_25() {
    }
    return default_25;
}());
"btn btn-outline-primary mr-2"[ngbPopover] = "popContent"[popoverTitle] = "popTitle";
triggers = "manual";
p1 = "ngbPopover"(click) = "toggleWithGreeting(p1, 'Bonjour', 'French')" >
    French
    < /button>
    < button;
type = "button";
var default_26 = /** @class */ (function () {
    function default_26() {
    }
    return default_26;
}());
"btn btn-outline-primary mr-2"[ngbPopover] = "popContent"[popoverTitle] = "popTitle";
triggers = "manual";
p2 = "ngbPopover"(click) = "toggleWithGreeting(p2, 'Gutentag', 'German')" >
    German
    < /button>
    < button;
type = "button";
var default_27 = /** @class */ (function () {
    function default_27() {
    }
    return default_27;
}());
"btn btn-outline-primary mr-2"[ngbPopover] = "popContent"[popoverTitle] = "popTitle";
triggers = "manual";
p3 = "ngbPopover"(click) = "toggleWithGreeting(p3, 'Hello', 'English')" >
    English
    < /button>
    < /div>
    < /div>
    < /div>
    < /div>
    < div;
var default_28 = /** @class */ (function () {
    function default_28() {
    }
    return default_28;
}());
"col-sm-12 col-xl-6" >
    /** @class */ (function () {
        function class_23() {
        }
        return class_23;
    }());
"card" >
    /** @class */ (function () {
        function class_24() {
        }
        return class_24;
    }());
"card-header" >
    Popover;
visibility;
events < /h5>
    < /div>
    < div;
var default_29 = /** @class */ (function () {
    function default_29() {
    }
    return default_29;
}());
"card-body" >
    type;
"button";
var default_30 = /** @class */ (function () {
    function default_30() {
    }
    return default_30;
}());
"btn btn-outline-primary";
placement = "top";
ngbPopover = "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.";
popoverTitle = "Popover on top";
popover = "ngbPopover"(shown) = "recordShown()"(hidden) = "recordHidden()" >
    Open;
Popover
    < /button>
    < hr >
    Popover;
is;
currently: ({});
{
    popover.isOpen() ? 'open' : 'closed';
}
/code></li >
    Last;
shown;
at: ({});
{
    lastShown | date;
    'h:mm:ss';
}
/code></li >
    Last;
hidden;
at: ({});
{
    lastHidden | date;
    'h:mm:ss';
}
/code></li >
    /ul>
    < /div>
    < /div>
    < /div>
    < div;
var default_31 = /** @class */ (function () {
    function default_31() {
    }
    return default_31;
}());
"col-sm-12 col-xl-6" >
    /** @class */ (function () {
        function class_25() {
        }
        return class_25;
    }());
"card" >
    /** @class */ (function () {
        function class_26() {
        }
        return class_26;
    }());
"card-header" >
    HTML;
and;
bindings in popovers < /h5>
    < /div>
    < div;
var default_32 = /** @class */ (function () {
    function default_32() {
    }
    return default_32;
}());
"card-body" >
    Popovers;
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
content;
or;
title in a( & lt);
ng - template & gt;
/code> element.
    < /p>
    < ng - template;
popContent > Hello, {};
{
    name;
}
/b>!</ng - template >
    -template;
popTitle > Fancy < b > content < /b></ng - template >
    type;
"button";
var default_33 = /** @class */ (function () {
    function default_33() {
    }
    return default_33;
}());
"btn btn-outline-primary btn-xs-eplisis"[ngbPopover] = "popContent"[popoverTitle] = "popTitle" >
    I;
've got markup and bindings in my popover!
    < /button>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>;
//# sourceMappingURL=popover.component.html.js.map