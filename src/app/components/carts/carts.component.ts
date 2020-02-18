import {Component, OnInit, Output} from '@angular/core';
import {CartsService} from '../../shared/services/firebase/carts.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-carts',
    templateUrl: './carts.component.html',
    styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
    cartSource;
    lang = localStorage.getItem('lang') === 'ar';

    constructor(private cartService: CartsService, private router: Router, private toastr: ToastrService) {
        this.cartService.getCarts().subscribe(res => {
            res.map(cartRaw => {
                const cart: any = cartRaw;
                cart.itemsArray = Object.keys(cart.items).map(code => {
                    return {code: code, qty: cart.items[code]};
                });
            });
            this.cartSource = res;
        });
    }

    ngOnInit() {
    }

    addBill(event, cart) {
        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(event.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            /* read workbook */
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            /* grab first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            /* save data */
            const ArrayFromXLSX = XLSX.utils.sheet_to_json(ws, {
                header:
                    ['no', 'barCodeId', 'code', 'nameArFull', 'Qty', 'freeQty', 'unitNameAr', 'pricePerPiece', 'total']
            }).slice(1);

            // ArrayFromXLSX.forEach(item => {
            //     let oldItem = cart.itemsArray.find(x => x.code === item['code']);
            //     oldItem.shippedQty += item['Qty'];
            //     let newItems = cart.itemsArray.filter(x => x.code !== item['code']);
            //     newItems.push(oldItem);
            //     this.cartService.updateCart(cart.id, {items: newItems});
            // });
            const newId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            this.cartService.addShipment(cart.id, {
                id: newId,
                uploadDate: Date.now(),
                items: ArrayFromXLSX
            });
        };
        reader.readAsBinaryString(target.files[0]);
    }

    rowClick(e) {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet([...e.data.itemsArray, ...e.data.bills]);
        XLSX.utils.book_append_sheet(wb, ws, 'bill');
        XLSX.writeFile(wb, 'xlsxout.xlsx');

        // e.component.isRowExpanded(e.key) ? e.component.collapseRow(e.key) : e.component.expandRow(e.key);
    }
}
