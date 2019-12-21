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
"col-xl-12" >
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
    To - Do < /h5>
    < /div>
    < div;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"card-body" >
    /** @class */ (function () {
        function class_6() {
        }
        return class_6;
    }());
"todo todo-database" >
    /** @class */ (function () {
        function class_7() {
        }
        return class_7;
    }());
"todo-list-wrapper" >
    /** @class */ (function () {
        function class_8() {
        }
        return class_8;
    }());
"todo-list-container" >
    /** @class */ (function () {
        function class_9() {
        }
        return class_9;
    }());
"mark-all-tasks mark-all-firebase" >
    /** @class */ (function () {
        function class_10() {
        }
        return class_10;
    }());
"mark-all-tasks-container d-inline-block" >
    /** @class */ (function () {
        function class_11() {
        }
        return class_11;
    }());
"mark-all-btn"[ngClass] = "{'move-up':completed}";
id = "mark-all-finished";
role = "button" >
    /** @class */ (function () {
        function class_12() {
        }
        return class_12;
    }());
"btn-label" > Mark;
all / span >
    /** @class */ (function () {
        function class_13() {
        }
        return class_13;
    }());
"action-box completed"(click) = "markAllAction(true);" >
    /** @class */ (function () {
        function class_14() {
        }
        return class_14;
    }());
"icon" > /** @class */ (function () {
    function class_15() {
    }
    return class_15;
}());
"icon-check" > /i></i >
    /span>
    < /span>
    < span;
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"mark-all-btn"[ngClass] = "{'move-down':!completed}";
id = "mark-all-incomplete";
role = "button" >
    /** @class */ (function () {
        function class_16() {
        }
        return class_16;
    }());
"btn-label" > Mark;
all / span >
    /** @class */ (function () {
        function class_17() {
        }
        return class_17;
    }());
"action-box"(click) = "markAllAction(false);" >
    /** @class */ (function () {
        function class_18() {
        }
        return class_18;
    }());
"icon" > /** @class */ (function () {
    function class_19() {
    }
    return class_19;
}());
"icon-check" > /i></i >
    /span>
    < /span>
    < /div>
    < /div>
    < div;
var default_3 = /** @class */ (function () {
    function default_3() {
    }
    return default_3;
}());
"todo-list-body custom-scrollbar" >
    id;
"todo-list" >
    /** @class */ (function () {
        function class_20() {
        }
        return class_20;
    }());
"task"[ngClass] = "{'completed':todo.payload.doc.data().completed}"
    * ngFor;
"let todo of items" >
    /** @class */ (function () {
        function class_21() {
        }
        return class_21;
    }());
"task-container" >
    /** @class */ (function () {
        function class_22() {
        }
        return class_22;
    }());
"task-label" > {};
{
    todo.payload.doc.data().task;
}
/h4>
    < span;
var default_4 = /** @class */ (function () {
    function default_4() {
    }
    return default_4;
}());
"task-action-btn" >
    /** @class */ (function () {
        function class_23() {
        }
        return class_23;
    }());
"action-box large delete-btn";
title = "Delete Task"(click) = "taskDeleted(todo.payload.doc.id)" > /** @class */ (function () {
    function class_24() {
    }
    return class_24;
}());
"icon" > /** @class */ (function () {
    function class_25() {
    }
    return class_25;
}());
"icon-trash" > /i></i > /span>
    < span;
var default_5 = /** @class */ (function () {
    function default_5() {
    }
    return default_5;
}());
"action-box large complete-btn";
title = "Mark Complete"(click) = "taskCompleted(todo)" > /** @class */ (function () {
    function class_26() {
    }
    return class_26;
}());
"icon" > /** @class */ (function () {
    function class_27() {
    }
    return class_27;
}());
"icon-check" > /i></i > /span>
    < /span>
    < /div>
    < /li>
    < /ul>
    < /div>
    < div;
var default_6 = /** @class */ (function () {
    function default_6() {
    }
    return default_6;
}());
"todo-list-footer" >
    /** @class */ (function () {
        function class_28() {
        }
        return class_28;
    }());
"add-task-btn-wrapper" >
    /** @class */ (function () {
        function class_29() {
        }
        return class_29;
    }());
"add-task-btn"[ngClass] = "{'hide':visible}" >
    /** @class */ (function () {
        function class_30() {
        }
        return class_30;
    }());
"btn btn-primary"(click) = "visible=true" >
    /** @class */ (function () {
        function class_31() {
        }
        return class_31;
    }());
"icon-plus mr-1" > /i>Add new task
    < /button>
    < /span>
    < /div>
    < div;
var default_7 = /** @class */ (function () {
    function default_7() {
    }
    return default_7;
}());
"new-task-wrapper"[ngClass] = "{'visible':visible}" >
    id;
"new-task";
placeholder = "Enter new task here. . ."[(ngModel)] = "text"[/** @class */ (function () {
    function class_32() {
    }
    return class_32;
}()).border - danger] = "redBorder" > /textarea>
    < button;
var default_8 = /** @class */ (function () {
    function default_8() {
    }
    return default_8;
}());
"btn btn-danger cancel-btn";
id = "close-task-panel"(click) = "visible=false" > Close < /button>
    < button;
var default_9 = /** @class */ (function () {
    function default_9() {
    }
    return default_9;
}());
"btn btn-success ml-3 add-new-task-btn";
id = "add-task"(click) = "addTask(text)" > Add;
Task < /button>
    < /div>
    < /div>
    < /div>
    < /div>
    < div;
var default_10 = /** @class */ (function () {
    function default_10() {
    }
    return default_10;
}());
"notification-popup hide" >
    /** @class */ (function () {
        function class_33() {
        }
        return class_33;
    }());
"task" > /span><span class="notification-text"></span > /p>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < !--Container - fluid;
Ends-- >
;
//# sourceMappingURL=to-do-firebase.component.html.js.map