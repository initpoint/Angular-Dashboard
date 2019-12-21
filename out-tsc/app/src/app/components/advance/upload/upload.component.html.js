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
"col-md-12" >
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
    Select;
files < /h5>
    < /div>
    < div;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"card-body" >
    ng2FileDrop[uploader];
"uploader"[ngClass] = "{'nv-file-over': hasBaseDropZoneOver}"(fileOver) = "fileOverBase($event)";
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"well my-drop-zone" >
    Base;
drop;
zone
    < /div>
    < div;
ng2FileDrop[uploader] = "uploader"[ngClass] = "{'another-file-over-class': hasAnotherDropZoneOver}"(fileOver) = "fileOverAnother($event)";
var default_3 = /** @class */ (function () {
    function default_3() {
    }
    return default_3;
}());
"well my-drop-zone" >
    Another;
drop;
zone
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
"col-md-12" >
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
    Upload;
queue < /h5>
    < /div>
    < div;
var default_5 = /** @class */ (function () {
    function default_5() {
    }
    return default_5;
}());
"card-body  upload-input" >
    /** @class */ (function () {
        function class_8() {
        }
        return class_8;
    }());
"row" >
    /** @class */ (function () {
        function class_9() {
        }
        return class_9;
    }());
"col-md-6 col-xl-3 xl-40 upload-space-sm" >
    Multiple;
type;
"file";
ng2FileSelect[uploader] = "uploader";
multiple /  > />;
Single: type;
"file";
ng2FileSelect[uploader] = "uploader";
var default_6 = /** @class */ (function () {
    function default_6() {
    }
    return default_6;
}());
"mb-0" /  >
    /div>
    < div;
var default_7 = /** @class */ (function () {
    function default_7() {
    }
    return default_7;
}());
"col-xl-9 col-md-6 xl-60 upload-table" >
    Queue;
length: {
    {
        uploader ? .queue ? .length :  : ;
    }
}
/p>
    < div;
var default_8 = /** @class */ (function () {
    function default_8() {
    }
    return default_8;
}());
"table-responsive" >
    /** @class */ (function () {
        function class_10() {
        }
        return class_10;
    }());
"table" >
    width;
"50%" > Name < /th>
    < th > Status < /th>
    < th > Actions < /th>
    < /tr>
    < /thead>
    < tbody >
     * ngFor;
"let item of uploader.queue" >
    {};
{
    item ? .file ? .name :  : ;
}
/strong></td >
     * ngIf;
"uploader.isHTML5" >
    /** @class */ (function () {
        function class_11() {
        }
        return class_11;
    }());
"progress mb-0" >
    /** @class */ (function () {
        function class_12() {
        }
        return class_12;
    }());
"progress-bar";
role = "progressbar"[ngStyle] = "{ 'width': item.progress + '%' }" > /div>
    < /div>
    < /td>
    < td >
     * ngIf;
"item.isSuccess" > /** @class */ (function () {
    function class_13() {
    }
    return class_13;
}());
"fa fa-check-square-o" > /i></span >
     * ngIf;
"item.isError" > /** @class */ (function () {
    function class_14() {
    }
    return class_14;
}());
"fa fa-trash" > /i></span >
    /td>
    < td;
nowrap >
    type;
"button";
var default_9 = /** @class */ (function () {
    function default_9() {
    }
    return default_9;
}());
"btn btn-success btn-xs mr-1"(click) = "item.upload()"[disabled] = "item.isReady || item.isUploading || item.isSuccess" >
    /** @class */ (function () {
        function class_15() {
        }
        return class_15;
    }());
"fa fa-upload" > /span> Upload
    < /button>
    < button;
type = "button";
var default_10 = /** @class */ (function () {
    function default_10() {
    }
    return default_10;
}());
"btn btn-danger btn-xs"(click) = "item.remove()" >
    /** @class */ (function () {
        function class_16() {
        }
        return class_16;
    }());
"fa fa-trash" > /span> Remove
    < /button>
    < /td>
    < /tr>
    < /tbody>
    < /table>
    < /div>
    < div >
    /** @class */ (function () {
        function class_17() {
        }
        return class_17;
    }());
"fill-progress" >
    Queue;
progress: /** @class */ (function () {
    function class_18() {
    }
    return class_18;
}());
"progress" >
    /** @class */ (function () {
        function class_19() {
        }
        return class_19;
    }());
"progress-bar";
role = "progressbar"[ngStyle] = "{ 'width': uploader.progress + '%' }" > /div>
    < /div>
    < /div>
    < button;
type = "button";
var default_11 = /** @class */ (function () {
    function default_11() {
    }
    return default_11;
}());
"btn btn-success btn-s mr-1"(click) = "uploader.uploadAll()"[disabled] = "!uploader.getNotUploadedItems().length" >
    /** @class */ (function () {
        function class_20() {
        }
        return class_20;
    }());
"fa fa-upload" > /span> Upload all
    < /button>
    < button;
type = "button";
var default_12 = /** @class */ (function () {
    function default_12() {
    }
    return default_12;
}());
"btn btn-danger btn-s"(click) = "uploader.clearQueue()"[disabled] = "!uploader.queue.length" >
    /** @class */ (function () {
        function class_21() {
        }
        return class_21;
    }());
"fa fa-trash" > /span> Remove all
    < /button>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>;
//# sourceMappingURL=upload.component.html.js.map