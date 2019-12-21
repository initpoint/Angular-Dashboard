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
"col-sm-12 empty-cart-cls text-center" * ngIf;
"!selectCartItems.length" >
    src;
"assets/images/icon-empty-cart.png";
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"img-fluid mb-4" >
    Your;
Cart;
is;
Empty < /strong></h3 >
    Add;
something;
to;
make;
me;
happy: ;
/strong></h4 >
    /** @class */ (function () {
        function class_3() {
        }
        return class_3;
    }());
"btn btn-primary cart-btn-transform"[routerLink] = "['/ecommerce/products']" > ;
continue shopping;
/a>
    < /div>
    < div;
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"row" * ngIf;
'selectCartItems.length' >
    /** @class */ (function () {
        function class_4() {
        }
        return class_4;
    }());
"col-sm-12" >
    /** @class */ (function () {
        function class_5() {
        }
        return class_5;
    }());
"card" >
    /** @class */ (function () {
        function class_6() {
        }
        return class_6;
    }());
"card-header" >
    Add;
To;
Cart < /h5>
    < /div>
    < div;
var default_3 = /** @class */ (function () {
    function default_3() {
    }
    return default_3;
}());
"card-body cart" >
    /** @class */ (function () {
        function class_7() {
        }
        return class_7;
    }());
"order-history table-responsive wishlist" >
    /** @class */ (function () {
        function class_8() {
        }
        return class_8;
    }());
"table table-bordernone" >
    Prdouct < /th>
    < th > Prdouct;
Name < /th>
    < th > Price < /th>
    < th > Quantity < /th>
    < th > Action < /th>
    < th > Total < /th>
    < /tr>
    < /thead>
    < tbody >
    /** @class */ (function () {
        function class_9() {
        }
        return class_9;
    }());
"title-orders" >
    colspan;
"12" > New;
Orders < /td>
    < /tr>
    < tr * ngFor;
"let item of selectCartItems" >
    /** @class */ (function () {
        function class_10() {
        }
        return class_10;
    }());
"img-fluid img-60"[src] = "[item.product.img]";
alt = "#" > /td>
    < td >
    /** @class */ (function () {
        function class_11() {
        }
        return class_11;
    }());
"product-name" > [routerLink];
"['/ecommerce/product-details', item.product.id]" > {};
{
    item.product.name;
}
/a></div >
    /td>
    < td > {};
{
    item.product.price | currency;
    productsService ? .currency : 'symbol';
}
/td>
    < td >
    /** @class */ (function () {
        function class_12() {
        }
        return class_12;
    }());
"qty-box" >
    /** @class */ (function () {
        function class_13() {
        }
        return class_13;
    }());
"input-group" >
    /** @class */ (function () {
        function class_14() {
        }
        return class_14;
    }());
"fa fa-minus btnGtr"(click) = "decrement(item.product)" > /i>
    < input;
var default_4 = /** @class */ (function () {
    function default_4() {
    }
    return default_4;
}());
"touchspin1 text-center";
name = "quantity";
type = "text";
disabled[value] = "item.quantity" >
    /** @class */ (function () {
        function class_15() {
        }
        return class_15;
    }());
"fa fa-plus btnLess"(click) = "increment(item.product)" > /i>
    < /div>
    < /div>
    < /td>
    < td >
    -feather - icons;
var default_5 = /** @class */ (function () {
    function default_5() {
    }
    return default_5;
}());
"remove"[icon] = "'x-circle'"(click) = remove(item) > /app-feather-icons>
    < /td>
    < td > {};
{
    item.product.price * item.quantity | currency;
    productsService ? .currency : 'symbol';
}
/td>
    < tr >
    /** @class */ (function () {
        function class_16() {
        }
        return class_16;
    }());
"total-amount";
colspan = "5" >
    /** @class */ (function () {
        function class_17() {
        }
        return class_17;
    }());
"m-0" > /** @class */ (function () {
    function class_18() {
    }
    return class_18;
}());
"f-w-600" > Total;
Price: /span></h6 >
    /td>
    < td > {};
{
    getTotal() | async | currency;
    productsService ? .currency : 'symbol';
}
/span></td >
    /tr>
    < tr >
    colspan;
"5" > /** @class */ (function () {
    function class_19() {
    }
    return class_19;
}());
"btn btn-primary cart-btn-transform"[routerLink] = "['/ecommerce/products']" > ;
continue shopping;
/a></td >
    /** @class */ (function () {
        function class_20() {
        }
        return class_20;
    }());
"btn btn-primary cart-btn-transform"[routerLink] = "['/ecommerce/check-out']" > check;
out < /a></td >
    /tr>
    < /tbody>
    < /table>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>;
//# sourceMappingURL=add-cart.component.html.js.map