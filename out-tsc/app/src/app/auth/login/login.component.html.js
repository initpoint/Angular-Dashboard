/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}());
"page-wrapper" >
    /** @class */ (function () {
        function class_2() {
        }
        return class_2;
    }());
"auth-bg" >
    /** @class */ (function () {
        function class_3() {
        }
        return class_3;
    }());
"authentication-box" >
    /** @class */ (function () {
        function class_4() {
        }
        return class_4;
    }());
"text-center" > src;
"assets/images/endless-logo.png";
alt = "" > /div>
    < div;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"card mt-4" >
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
"text-center" >
    LOGIN < /h4>
    < h6 > Enter;
your;
Username;
and;
Password < /h6>
    < /div>
    < form;
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"theme-form"[formGroup] = "loginForm" * ngIf;
"!newUser" >
    /** @class */ (function () {
        function class_7() {
        }
        return class_7;
    }());
"form-group" >
    /** @class */ (function () {
        function class_8() {
        }
        return class_8;
    }());
"col-form-label pt-0" > Email < /label>
    < input;
var default_3 = /** @class */ (function () {
    function default_3() {
    }
    return default_3;
}());
"form-control";
formControlName = "email";
type = "email";
required = "" >
     * ngIf;
"loginForm.controls.email.touched && loginForm.controls.email.errors?.required";
var default_4 = /** @class */ (function () {
    function default_4() {
    }
    return default_4;
}());
"text text-danger mt-1" >
    Email;
is;
required
    < /div>
    < div * ngIf;
"loginForm.controls.email.touched && loginForm.controls.email.errors?.email";
var default_5 = /** @class */ (function () {
    function default_5() {
    }
    return default_5;
}());
"text text-danger mt-1" >
    Invalid;
Email
    < /div>
    < /div>
    < div;
var default_6 = /** @class */ (function () {
    function default_6() {
    }
    return default_6;
}());
"form-group" >
    /** @class */ (function () {
        function class_9() {
        }
        return class_9;
    }());
"col-form-label" > Password < /label>
    < input;
var default_7 = /** @class */ (function () {
    function default_7() {
    }
    return default_7;
}());
"form-control";
type = "password";
formControlName = "password";
required = "" >
     * ngIf;
"loginForm.controls.password.touched && loginForm.controls.password.errors?.required";
var default_8 = /** @class */ (function () {
    function default_8() {
    }
    return default_8;
}());
"text text-danger mt-1" >
    Password;
is;
required
    < /div>
    < /div>
    < div;
var default_9 = /** @class */ (function () {
    function default_9() {
    }
    return default_9;
}());
"checkbox p-0" >
    id;
"checkbox1";
type = "checkbox" >
;
for ( = "checkbox1" > Remember; me < /label>
    < /div>
    < div; /** @class */ (function () {
    function class_10() {
    }
    return class_10;
}()) = "form-group form-row mt-3 mb-0" >
    /** @class */ (function () {
        function class_11() {
        }
        return class_11;
    }()))
     = "btn btn-primary btn-block btn-lg"[/** @class */ (function () {
        function class_12() {
        }
        return class_12;
    }()).loader--];
text;
"authService.showLoader"[disabled] = "!loginForm.valid || authService.showLoader"(click) = "login(loginForm.value)";
type = "submit" > {};
{
    authService.showLoader ? '' : 'Login';
}
/span>
    < /button>
    < /div>
    < div;
var default_10 = /** @class */ (function () {
    function default_10() {
    }
    return default_10;
}());
"login-divider" > /div>
    < div;
var default_11 = /** @class */ (function () {
    function default_11() {
    }
    return default_11;
}());
"social mt-3" >
    /** @class */ (function () {
        function class_13() {
        }
        return class_13;
    }());
"form-group btn-showcase d-flex" >
    /** @class */ (function () {
        function class_14() {
        }
        return class_14;
    }());
"btn social-btn btn-fb d-inline-block"(click) = "loginFacebook()" >
    /** @class */ (function () {
        function class_15() {
        }
        return class_15;
    }());
"fa fa-facebook" > /i>
    < /button>
    < button;
var default_12 = /** @class */ (function () {
    function default_12() {
    }
    return default_12;
}());
"btn social-btn btn-twitter d-inline-block"(click) = "loginTwitter()" >
    /** @class */ (function () {
        function class_16() {
        }
        return class_16;
    }());
"fa fa-twitter" > /i>
    < /button>
    < button;
var default_13 = /** @class */ (function () {
    function default_13() {
    }
    return default_13;
}());
"btn social-btn btn-google d-inline-block"(click) = "loginGoogle()" >
    /** @class */ (function () {
        function class_17() {
        }
        return class_17;
    }());
"fa fa-google" > /i>
    < /button>
    < /div>
    < /div>
    < /form>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>;
//# sourceMappingURL=login.component.html.js.map