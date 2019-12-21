/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}());
"customizer-links"[ngClass] = "{'open' : customizer }";
id = "inner-customizer" >
    /** @class */ (function () {
        function class_2() {
        }
        return class_2;
    }());
"nav flex-column nac-pills";
id = "c-pills-tab";
role = "tablist";
aria - orientation;
"vertical" >
    href;
"javascript:void(0)";
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"nav-link"[ngClass] = "{'active show': customizer == 'settings' }";
id = "c-pills-home-tab"(click) = "openCustomizerSetting('settings')" >
    /** @class */ (function () {
        function class_3() {
        }
        return class_3;
    }());
"settings" > /** @class */ (function () {
    function class_4() {
    }
    return class_4;
}());
"icofont icofont-ui-settings" > /i> </div >
    /a>
    < a;
href = "javascript:void(0)";
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"nav-link"[ngClass] = "{'active show': customizer == 'color' }";
id = "c-pills-profile-tab"(click) = "openCustomizerSetting('color')" >
    /** @class */ (function () {
        function class_5() {
        }
        return class_5;
    }());
"settings color-settings" > /** @class */ (function () {
    function class_6() {
    }
    return class_6;
}());
"icofont icofont-color-bucket" > /i> </div >
    /a>
    < /div>
    < /div>
    < div;
var default_3 = /** @class */ (function () {
    function default_3() {
    }
    return default_3;
}());
"customizer-contain"[ngClass] = "{'open' : customizer }" >
    /** @class */ (function () {
        function class_7() {
        }
        return class_7;
    }());
"tab-content";
id = "c-pills-tabContent" >
    /** @class */ (function () {
        function class_8() {
        }
        return class_8;
    }());
"customizer-header" >
    /** @class */ (function () {
        function class_9() {
        }
        return class_9;
    }());
"icofont-close icon-close"(click) = "customizer = ''" > /i>
    < h5 > Customizer < /h5>
    < p;
var default_4 = /** @class */ (function () {
    function default_4() {
    }
    return default_4;
}());
"mb-0" > Customize & amp;
Preview;
Real;
Time < /p>
    < button;
var default_5 = /** @class */ (function () {
    function default_5() {
    }
    return default_5;
}());
"btn btn-primary plus-popup mt-2 "(click) = "copyConfig(popup,data)" > Configuration < /button>
    < ng - template;
popup;
let - modal >
    /** @class */ (function () {
        function class_10() {
        }
        return class_10;
    }());
"modal-header modal-copy-header" >
    /** @class */ (function () {
        function class_11() {
        }
        return class_11;
    }());
"headerTitle mb-0" > Customizer;
configuration < /h5>
    < button;
type = "button";
var default_6 = /** @class */ (function () {
    function default_6() {
    }
    return default_6;
}());
"close";
aria - label;
"Close"(click) = "modal.dismiss('Cross click')" >
    aria - hidden;
"true" >  & times;
/span>
    < /button>
    < /div>
    < div;
var default_7 = /** @class */ (function () {
    function default_7() {
    }
    return default_7;
}());
"modal-body" >
    /** @class */ (function () {
        function class_12() {
        }
        return class_12;
    }());
"modal-header config-popup" >
    To;
replace;
our;
design;
with (your)
    desired;
theme.Please;
do
    configuration / p >
        Path;
while ();
shared > data > config > config.ts < /b> </p >
;
var ConfigDB = /** @class */ (function () {
    function ConfigDB() {
    }
    return ConfigDB;
}());
export { ConfigDB };
 & ;
123;
data =  & ;
123;
settings & ;
58;
 & ;
123;
layout_type & ;
58;
'{{customize.data.settings.layout_type}}',
    sidebar & ;
58;
 & ;
123;
type & ;
58;
'{{customize.data.settings.sidebar.type}}',
    body_type & ;
58;
'{{customize.data.settings.sidebar.body_type}}'
    & ;
125;
sidebar_setting & ;
58;
'{{customize.data.settings.sidebar_setting}}',
    sidebar_backround & ;
58;
'{{customize.data.settings.sidebar_backround}}'
    & ;
125;
color & ;
58;
 & ;
123;
layout_version & ;
58;
'{{customize.data.color.layout_version}}',
    color & ;
58;
'{{customize.data.color.color}}',
    primary_color & ;
58;
'{{customize.data.color.primary_color}}',
    secondary_color & ;
58;
'{{customize.data.color.secondary_color}}',
    mix_layout & ;
58;
'{{customize.data.color.mix_layout}}'
    & ;
125;
router_animation & ;
58;
'fadeIn'
    & ;
125;
    & ;
125;
/code>
    < /pre>
    < /div>
    < !-- < textarea;
var default_8 = /** @class */ (function () {
    function default_8() {
    }
    return default_8;
}());
"form-control";
id = "exampleFormControlTextarea4";
rows = "3";
value = "{{this.customize.data.color}}";
disabled > /textarea> -->
    < button;
var default_9 = /** @class */ (function () {
    function default_9() {
    }
    return default_9;
}());
"btn btn-primary mt-2"(click) = "copyText(this.customize.data)" > Copy;
Json < /button>
    < /div>
    < /div>
    < /ng-template>
    < /div>
    < div;
var default_10 = /** @class */ (function () {
    function default_10() {
    }
    return default_10;
}());
"customizer-body custom-scrollbar" >
    /** @class */ (function () {
        function class_13() {
        }
        return class_13;
    }());
"tab-pane fade"[ngClass] = "{'active show': customizer == 'settings' }";
id = "c-pills-home";
role = "tabpanel";
aria - labelledby;
"c-pills-home-tab" >
    Layout;
Type < /h6>
    < ul;
var default_11 = /** @class */ (function () {
    function default_11() {
    }
    return default_11;
}());
"main-layout layout-grid" >
    data - attr;
"ltr"[ngClass] = "{'active': layoutType == 'ltr'}"(click) = "customizeLayoutType('ltr')" >
    /** @class */ (function () {
        function class_14() {
        }
        return class_14;
    }());
"header bg-light" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_12 = /** @class */ (function () {
    function default_12() {
    }
    return default_12;
}());
"body" >
    /** @class */ (function () {
        function class_15() {
        }
        return class_15;
    }());
"bg-dark sidebar" > /li>
    < li;
var default_13 = /** @class */ (function () {
    function default_13() {
    }
    return default_13;
}());
"bg-light body" > /** @class */ (function () {
    function class_16() {
    }
    return class_16;
}());
"badge badge-dark" > LTR;
Layout < /span> </li >
    /ul>
    < /div>
    < /li>
    < li;
data - attr;
"rtl"[ngClass] = "{'active': layoutType == 'rtl'}"(click) = "customizeLayoutType('rtl')" >
    /** @class */ (function () {
        function class_17() {
        }
        return class_17;
    }());
"header bg-light" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_14 = /** @class */ (function () {
    function default_14() {
    }
    return default_14;
}());
"body" >
    /** @class */ (function () {
        function class_18() {
        }
        return class_18;
    }());
"bg-light body" > /** @class */ (function () {
    function class_19() {
    }
    return class_19;
}());
"badge badge-dark" > RTL;
Layout < /span> </li >
    /** @class */ (function () {
        function class_20() {
        }
        return class_20;
    }());
"bg-dark sidebar" > /li>
    < /ul>
    < /div>
    < /li>
    < /ul>
    < h6;
var default_15 = /** @class */ (function () {
    function default_15() {
    }
    return default_15;
}());
"" > Sidebar;
Type < /h6>
    < ul;
var default_16 = /** @class */ (function () {
    function default_16() {
    }
    return default_16;
}());
"sidebar-type layout-grid" >
    data - attr;
"normal-sidebar"[ngClass] = "{'active': sidebarType == 'default'}"(click) = "customizeSidebarType('default')" >
    /** @class */ (function () {
        function class_21() {
        }
        return class_21;
    }());
"header bg-light" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_17 = /** @class */ (function () {
    function default_17() {
    }
    return default_17;
}());
"body" >
    /** @class */ (function () {
        function class_22() {
        }
        return class_22;
    }());
"bg-dark sidebar" > /li>
    < li;
var default_18 = /** @class */ (function () {
    function default_18() {
    }
    return default_18;
}());
"bg-light body" > /li>
    < /ul>
    < /div>
    < /li>
    < li;
data - attr;
"compact-sidebar"[ngClass] = "{'active': sidebarType == 'compact'}"(click) = "customizeSidebarType('compact')" >
    /** @class */ (function () {
        function class_23() {
        }
        return class_23;
    }());
"header bg-light" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_19 = /** @class */ (function () {
    function default_19() {
    }
    return default_19;
}());
"body" >
    /** @class */ (function () {
        function class_24() {
        }
        return class_24;
    }());
"bg-dark sidebar compact" > /li>
    < li;
var default_20 = /** @class */ (function () {
    function default_20() {
    }
    return default_20;
}());
"bg-light body" > /li>
    < /ul>
    < /div>
    < /li>
    < li;
data - attr;
"compact-icon-sidebar"[ngClass] = "{'active': sidebarType == 'compact-icon'}"(click) = "customizeSidebarType('compact-icon')" >
    /** @class */ (function () {
        function class_25() {
        }
        return class_25;
    }());
"header bg-light" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_21 = /** @class */ (function () {
    function default_21() {
    }
    return default_21;
}());
"body" >
    /** @class */ (function () {
        function class_26() {
        }
        return class_26;
    }());
"bg-dark sidebar compact-icon" > /li>
    < li;
var default_22 = /** @class */ (function () {
    function default_22() {
    }
    return default_22;
}());
"bg-light body" > /li>
    < /ul>
    < /div>
    < /li>
    < /ul>
    < h6;
var default_23 = /** @class */ (function () {
    function default_23() {
    }
    return default_23;
}());
"" > Sidebar;
settings < /h6>
    < ul;
var default_24 = /** @class */ (function () {
    function default_24() {
    }
    return default_24;
}());
"sidebar-setting layout-grid" >
    data - attr;
"default-sidebar"[ngClass] = "{'active': customize.data.settings.sidebar_setting == 'default-sidebar'}"(click) = "customizeSidebarSetting('default-sidebar')" >
    /** @class */ (function () {
        function class_27() {
        }
        return class_27;
    }());
"header bg-light" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_25 = /** @class */ (function () {
    function default_25() {
    }
    return default_25;
}());
"body bg-light" > /** @class */ (function () {
    function class_28() {
    }
    return class_28;
}());
"badge badge-dark" > Default < /span> </div >
    /li>
    < li;
data - attr;
"border-sidebar"[ngClass] = "{'active': customize.data.settings.sidebar_setting == 'border-sidebar'}"(click) = "customizeSidebarSetting('border-sidebar')" >
    /** @class */ (function () {
        function class_29() {
        }
        return class_29;
    }());
"header bg-light" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_26 = /** @class */ (function () {
    function default_26() {
    }
    return default_26;
}());
"body bg-light" > /** @class */ (function () {
    function class_30() {
    }
    return class_30;
}());
"badge badge-dark" > Border < /span> </div >
    /li>
    < li;
data - attr;
"iconcolor-sidebar"[ngClass] = "{'active': customize.data.settings.sidebar_setting == 'iconcolor-sidebar'}"(click) = "customizeSidebarSetting('iconcolor-sidebar')" >
    /** @class */ (function () {
        function class_31() {
        }
        return class_31;
    }());
"header bg-light" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_27 = /** @class */ (function () {
    function default_27() {
    }
    return default_27;
}());
"body bg-light" > /** @class */ (function () {
    function class_32() {
    }
    return class_32;
}());
"badge badge-dark" > icon;
Color < /span> </div >
    /li>
    < /ul>
    < /div>
    < div;
var default_28 = /** @class */ (function () {
    function default_28() {
    }
    return default_28;
}());
"tab-pane fade"[ngClass] = "{'active show': customizer == 'color' }";
id = "c-pills-profile";
role = "tabpanel";
aria - labelledby;
"c-pills-profile-tab" >
    Light;
layout < /h6>
    < ul;
var default_29 = /** @class */ (function () {
    function default_29() {
    }
    return default_29;
}());
"layout-grid customizer-color" >
    /** @class */ (function () {
        function class_33() {
        }
        return class_33;
    }());
"color-layout";
data - attr;
"light-1";
data - primary;
"#4466f2";
data - secondary;
"#1ea6ec"(click) = "customizeLightColorScheme('color-1')" >
    /div>
    < /li>
    < li;
var default_30 = /** @class */ (function () {
    function default_30() {
    }
    return default_30;
}());
"color-layout";
data - attr;
"light-2";
data - primary;
"#0288d1";
data - secondary;
"#26c6da"(click) = "customizeLightColorScheme('color-2')" >
    /div>
    < /li>
    < li;
var default_31 = /** @class */ (function () {
    function default_31() {
    }
    return default_31;
}());
"color-layout";
data - attr;
"light-3";
data - primary;
"#8e24aa";
data - secondary;
"#ff6e40"(click) = "customizeLightColorScheme('color-3')" >
    /div>
    < /li>
    < li;
var default_32 = /** @class */ (function () {
    function default_32() {
    }
    return default_32;
}());
"color-layout";
data - attr;
"light-4";
data - primary;
"#4c2fbf";
data - secondary;
"#2e9de4"(click) = "customizeLightColorScheme('color-4')" >
    /div>
    < /li>
    < li;
var default_33 = /** @class */ (function () {
    function default_33() {
    }
    return default_33;
}());
"color-layout";
data - attr;
"light-5";
data - primary;
"#7c4dff";
data - secondary;
"#7b1fa2"(click) = "customizeLightColorScheme('color-5')" >
    /div>
    < /li>
    < li;
var default_34 = /** @class */ (function () {
    function default_34() {
    }
    return default_34;
}());
"color-layout";
data - attr;
"light-6";
data - primary;
"#3949ab";
data - secondary;
"#4fc3f7"(click) = "customizeLightColorScheme('color-6')" >
    /div>
    < /li>
    < /ul>
    < h6;
var default_35 = /** @class */ (function () {
    function default_35() {
    }
    return default_35;
}());
"" > Dark;
Layout < /h6>
    < ul;
var default_36 = /** @class */ (function () {
    function default_36() {
    }
    return default_36;
}());
"layout-grid customizer-color dark" >
    /** @class */ (function () {
        function class_34() {
        }
        return class_34;
    }());
"color-layout";
data - attr;
"dark-1";
data - primary;
"#4466f2";
data - secondary;
"#1ea6ec"(click) = "customizeDarkColorScheme('color-1')" >
    /div>
    < /li>
    < li;
var default_37 = /** @class */ (function () {
    function default_37() {
    }
    return default_37;
}());
"color-layout";
data - attr;
"dark-2";
data - primary;
"#0288d1";
data - secondary;
"#26c6da"(click) = "customizeDarkColorScheme('color-2')" >
    /div>
    < /li>
    < li;
var default_38 = /** @class */ (function () {
    function default_38() {
    }
    return default_38;
}());
"color-layout";
data - attr;
"dark-3";
data - primary;
"#8e24aa";
data - secondary;
"#ff6e40"(click) = "customizeDarkColorScheme('color-3')" >
    /div>
    < /li>
    < li;
var default_39 = /** @class */ (function () {
    function default_39() {
    }
    return default_39;
}());
"color-layout";
data - attr;
"dark-4";
data - primary;
"#4c2fbf";
data - secondary;
"#2e9de4"(click) = "customizeDarkColorScheme('color-4')" >
    /div>
    < /li>
    < li;
var default_40 = /** @class */ (function () {
    function default_40() {
    }
    return default_40;
}());
"color-layout";
data - attr;
"dark-5";
data - primary;
"#7c4dff";
data - secondary;
"#7b1fa2"(click) = "customizeDarkColorScheme('color-5')" >
    /div>
    < /li>
    < li;
var default_41 = /** @class */ (function () {
    function default_41() {
    }
    return default_41;
}());
"color-layout";
data - attr;
"dark-6";
data - primary;
"#3949ab";
data - secondary;
"#4fc3f7"(click) = "customizeDarkColorScheme('color-6')" >
    /div>
    < /li>
    < /ul>
    < h6;
var default_42 = /** @class */ (function () {
    function default_42() {
    }
    return default_42;
}());
"" > Mix;
Layout < /h6>
    < ul;
var default_43 = /** @class */ (function () {
    function default_43() {
    }
    return default_43;
}());
"layout-grid customizer-mix" >
    /** @class */ (function () {
        function class_35() {
        }
        return class_35;
    }());
"color-layout";
data - attr;
"light-only"(click) = "customizeMixLayout('light-only')" >
    /** @class */ (function () {
        function class_36() {
        }
        return class_36;
    }());
"header bg-light" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_44 = /** @class */ (function () {
    function default_44() {
    }
    return default_44;
}());
"body" >
    /** @class */ (function () {
        function class_37() {
        }
        return class_37;
    }());
"bg-light sidebar" > /li>
    < li;
var default_45 = /** @class */ (function () {
    function default_45() {
    }
    return default_45;
}());
"bg-light body" > /li>
    < /ul>
    < /div>
    < /li>
    < li;
var default_46 = /** @class */ (function () {
    function default_46() {
    }
    return default_46;
}());
"color-layout";
data - attr;
""(click) = "customizeMixLayout('default')" >
    /** @class */ (function () {
        function class_38() {
        }
        return class_38;
    }());
"header bg-light" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_47 = /** @class */ (function () {
    function default_47() {
    }
    return default_47;
}());
"body" >
    /** @class */ (function () {
        function class_39() {
        }
        return class_39;
    }());
"bg-dark sidebar" > /li>
    < li;
var default_48 = /** @class */ (function () {
    function default_48() {
    }
    return default_48;
}());
"bg-light body" > /li>
    < /ul>
    < /div>
    < /li>
    < li;
var default_49 = /** @class */ (function () {
    function default_49() {
    }
    return default_49;
}());
"color-layout";
data - attr;
"dark-body-only"(click) = "customizeMixLayout('dark-body-only')" >
    /** @class */ (function () {
        function class_40() {
        }
        return class_40;
    }());
"header bg-light" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_50 = /** @class */ (function () {
    function default_50() {
    }
    return default_50;
}());
"body" >
    /** @class */ (function () {
        function class_41() {
        }
        return class_41;
    }());
"bg-light sidebar" > /li>
    < li;
var default_51 = /** @class */ (function () {
    function default_51() {
    }
    return default_51;
}());
"bg-dark body" > /li>
    < /ul>
    < /div>
    < /li>
    < li;
var default_52 = /** @class */ (function () {
    function default_52() {
    }
    return default_52;
}());
"color-layout";
data - attr;
"dark-sidebar-body-mix"(click) = "customizeMixLayout('dark-sidebar-body-mix')" >
    /** @class */ (function () {
        function class_42() {
        }
        return class_42;
    }());
"header bg-light" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_53 = /** @class */ (function () {
    function default_53() {
    }
    return default_53;
}());
"body" >
    /** @class */ (function () {
        function class_43() {
        }
        return class_43;
    }());
"bg-dark sidebar" > /li>
    < li;
var default_54 = /** @class */ (function () {
    function default_54() {
    }
    return default_54;
}());
"bg-dark body" > /li>
    < /ul>
    < /div>
    < /li>
    < li;
var default_55 = /** @class */ (function () {
    function default_55() {
    }
    return default_55;
}());
"color-layout";
data - attr;
"dark-header-sidebar-mix"(click) = "customizeMixLayout('dark-header-sidebar-mix')" >
    /** @class */ (function () {
        function class_44() {
        }
        return class_44;
    }());
"header bg-dark" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_56 = /** @class */ (function () {
    function default_56() {
    }
    return default_56;
}());
"body" >
    /** @class */ (function () {
        function class_45() {
        }
        return class_45;
    }());
"bg-dark sidebar" > /li>
    < li;
var default_57 = /** @class */ (function () {
    function default_57() {
    }
    return default_57;
}());
"bg-light body" > /li>
    < /ul>
    < /div>
    < /li>
    < li;
var default_58 = /** @class */ (function () {
    function default_58() {
    }
    return default_58;
}());
"color-layout";
data - attr;
"dark-only"(click) = "customizeMixLayout('dark-only')" >
    /** @class */ (function () {
        function class_46() {
        }
        return class_46;
    }());
"header bg-dark" >
    /li>
    < li > /li>
    < li > /li>
    < /ul>
    < /div>
    < div;
var default_59 = /** @class */ (function () {
    function default_59() {
    }
    return default_59;
}());
"body" >
    /** @class */ (function () {
        function class_47() {
        }
        return class_47;
    }());
"bg-dark sidebar" > /li>
    < li;
var default_60 = /** @class */ (function () {
    function default_60() {
    }
    return default_60;
}());
"bg-dark body" > /li>
    < /ul>
    < /div>
    < /li>
    < /ul>
    < h6;
var default_61 = /** @class */ (function () {
    function default_61() {
    }
    return default_61;
}());
"" > Sidebar;
background;
setting < /h6>
    < ul;
var default_62 = /** @class */ (function () {
    function default_62() {
    }
    return default_62;
}());
"nav nac-pills";
id = "pills-tab";
role = "tablist" >
    /** @class */ (function () {
        function class_48() {
        }
        return class_48;
    }());
"nav-item" >
    href;
"javascript:void(0)";
var default_63 = /** @class */ (function () {
    function default_63() {
    }
    return default_63;
}());
"nav-link"[ngClass] = "{'active show': sidebarSetting == 'color' }";
id = "pills-home-tab"(click) = "customizerSetting('color')" > Color < /a>
    < /li>
    < li;
var default_64 = /** @class */ (function () {
    function default_64() {
    }
    return default_64;
}());
"nav-item" >
    href;
"javascript:void(0)";
var default_65 = /** @class */ (function () {
    function default_65() {
    }
    return default_65;
}());
"nav-link"[ngClass] = "{'active show': sidebarSetting == 'pattern' }";
id = "pills-profile-tab"(click) = "customizerSetting('pattern')" > Pattern < /a>
    < /li>
    < li;
var default_66 = /** @class */ (function () {
    function default_66() {
    }
    return default_66;
}());
"nav-item" >
    href;
"javascript:void(0)";
var default_67 = /** @class */ (function () {
    function default_67() {
    }
    return default_67;
}());
"nav-link"[ngClass] = "{'active show': sidebarSetting == 'image' }";
id = "pills-contact-tab"(click) = "customizerSetting('image')" > image < /a>
    < /li>
    < /ul>
    < div;
var default_68 = /** @class */ (function () {
    function default_68() {
    }
    return default_68;
}());
"tab-content sidebar-main-bg-setting";
id = "pills-tabContent" >
    /** @class */ (function () {
        function class_49() {
        }
        return class_49;
    }());
"tab-pane fade"[ngClass] = "{'active show': sidebarSetting == 'color' }";
id = "pills-home";
role = "tabpanel";
aria - labelledby;
"pills-home-tab" >
    /** @class */ (function () {
        function class_50() {
        }
        return class_50;
    }());
"sidebar-bg-settings" >
    /** @class */ (function () {
        function class_51() {
        }
        return class_51;
    }());
"bg-dark";
data - attr;
"dark-sidebar"(click) = "customizeSidebarBackround('dark-sidebar')" >
    /li>
    < li;
var default_69 = /** @class */ (function () {
    function default_69() {
    }
    return default_69;
}());
"bg-white";
data - attr;
"light-sidebar"(click) = "customizeSidebarBackround('light-sidebar')" > /li>
    < li;
var default_70 = /** @class */ (function () {
    function default_70() {
    }
    return default_70;
}());
"bg-color1";
data - attr;
"color1-sidebar"(click) = "customizeSidebarBackround('color1-sidebar')" > /li>
    < li;
var default_71 = /** @class */ (function () {
    function default_71() {
    }
    return default_71;
}());
"bg-color2";
data - attr;
"color2-sidebar"(click) = "customizeSidebarBackround('color2-sidebar')" > /li>
    < li;
var default_72 = /** @class */ (function () {
    function default_72() {
    }
    return default_72;
}());
"bg-color3";
data - attr;
"color3-sidebar"(click) = "customizeSidebarBackround('color3-sidebar')" > /li>
    < li;
var default_73 = /** @class */ (function () {
    function default_73() {
    }
    return default_73;
}());
"bg-color4";
data - attr;
"color4-sidebar"(click) = "customizeSidebarBackround('color4-sidebar')" > /li>
    < li;
var default_74 = /** @class */ (function () {
    function default_74() {
    }
    return default_74;
}());
"bg-color5";
data - attr;
"color5-sidebar"(click) = "customizeSidebarBackround('color5-sidebar')" > /li>
    < /ul>
    < /div>
    < div;
var default_75 = /** @class */ (function () {
    function default_75() {
    }
    return default_75;
}());
"tab-pane fade"[ngClass] = "{'active show': sidebarSetting == 'pattern' }";
id = "pills-profile";
role = "tabpanel";
aria - labelledby;
"pills-profile-tab" >
    /** @class */ (function () {
        function class_52() {
        }
        return class_52;
    }());
"sidebar-bg-settings" >
    /** @class */ (function () {
        function class_53() {
        }
        return class_53;
    }());
"bg-pattern1";
data - attr;
"sidebar-pattern1"(click) = "customizeSidebarBackround('sidebar-pattern1')" > /li>
    < li;
var default_76 = /** @class */ (function () {
    function default_76() {
    }
    return default_76;
}());
"bg-pattern2";
data - attr;
"sidebar-pattern2"(click) = "customizeSidebarBackround('sidebar-pattern2')" > /li>
    < li;
var default_77 = /** @class */ (function () {
    function default_77() {
    }
    return default_77;
}());
"bg-pattern3";
data - attr;
"sidebar-pattern3"(click) = "customizeSidebarBackround('sidebar-pattern3')" > /li>
    < li;
var default_78 = /** @class */ (function () {
    function default_78() {
    }
    return default_78;
}());
"bg-pattern4";
data - attr;
"sidebar-pattern4"(click) = "customizeSidebarBackround('sidebar-pattern4')" > /li>
    < li;
var default_79 = /** @class */ (function () {
    function default_79() {
    }
    return default_79;
}());
"bg-pattern5";
data - attr;
"sidebar-pattern5"(click) = "customizeSidebarBackround('sidebar-pattern5')" > /li>
    < li;
var default_80 = /** @class */ (function () {
    function default_80() {
    }
    return default_80;
}());
"bg-pattern6";
data - attr;
"sidebar-pattern6"(click) = "customizeSidebarBackround('sidebar-pattern6')" > /li>
    < /ul>
    < /div>
    < div;
var default_81 = /** @class */ (function () {
    function default_81() {
    }
    return default_81;
}());
"tab-pane fade"[ngClass] = "{'active show': sidebarSetting == 'image' }";
id = "pills-contact";
role = "tabpanel";
aria - labelledby;
"pills-contact-tab" >
    /** @class */ (function () {
        function class_54() {
        }
        return class_54;
    }());
"sidebar-bg-settings" >
    /** @class */ (function () {
        function class_55() {
        }
        return class_55;
    }());
"bg-img1";
data - attr;
"sidebar-img1"(click) = "customizeSidebarBackround('sidebar-img1')" >
    /li>
    < li;
var default_82 = /** @class */ (function () {
    function default_82() {
    }
    return default_82;
}());
"bg-img2";
data - attr;
"sidebar-img2"(click) = "customizeSidebarBackround('sidebar-img2')" >
    /li>
    < li;
var default_83 = /** @class */ (function () {
    function default_83() {
    }
    return default_83;
}());
"bg-img3";
data - attr;
"sidebar-img3"(click) = "customizeSidebarBackround('sidebar-img3')" >
    /li>
    < li;
var default_84 = /** @class */ (function () {
    function default_84() {
    }
    return default_84;
}());
"bg-img4";
data - attr;
"sidebar-img4"(click) = "customizeSidebarBackround('sidebar-img4')" >
    /li>
    < li;
var default_85 = /** @class */ (function () {
    function default_85() {
    }
    return default_85;
}());
"bg-img5";
data - attr;
"sidebar-img5"(click) = "customizeSidebarBackround('sidebar-img5')" >
    /li>
    < li;
var default_86 = /** @class */ (function () {
    function default_86() {
    }
    return default_86;
}());
"bg-img6";
data - attr;
"sidebar-img6"(click) = "customizeSidebarBackround('sidebar-img6')" >
    /li>
    < /ul>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>;
//# sourceMappingURL=customizer.component.html.js.map