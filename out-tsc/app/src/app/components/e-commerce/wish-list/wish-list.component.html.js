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
    Wishlist < /h5>
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
"order-history table-responsive wishlist" >
    /** @class */ (function () {
        function class_7() {
        }
        return class_7;
    }());
"table table-bordernone" >
    Prdouct < /th>
    < th > Prdouct;
Name < /th>
    < th > Price < /th>
    < th > Availability < /th>
    < th > Action < /th>
    < /tr>
    < /thead>
    < tbody >
    /** @class */ (function () {
        function class_8() {
        }
        return class_8;
    }());
"title-orders" >
    colspan;
"12" > New;
Orders < /td>
    < /tr>
    < tr * ngFor;
"let item of selectCartItems" >
    /** @class */ (function () {
        function class_9() {
        }
        return class_9;
    }());
"img-fluid img-60"[src] = "[item.product.img]";
alt = "#" > /td>
    < td >
    /** @class */ (function () {
        function class_10() {
        }
        return class_10;
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
    < td > {};
{
    item.product.stock;
}
/td>
    < td >
    -feather - icons[icon];
"'x-circle'"(click) = remove(item) > /app-feather-icons>
    < /td>
    < /tr>
    < tr >
    colspan;
"5" > /** @class */ (function () {
    function class_11() {
    }
    return class_11;
}());
"btn btn-primary cart-btn-transform"[routerLink] = "['/ecommerce/products']" > ;
continue shopping;
/a></td >
    /tr>
    < /tbody>
    < /table>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>;
//# sourceMappingURL=wish-list.component.html.js.map