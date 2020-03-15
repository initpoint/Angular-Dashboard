import {Component, OnInit, Output} from '@angular/core';
import {ReportsService} from '../../shared/services/firebase/reports.service';
import {UserService} from '../../shared/services/firebase/user.service';
import {CustomerService} from '../../shared/services/firebase/customer.service';
import {NavService} from '../../shared/services/nav.service';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
    currentReport;
    reportsFilter: any;
    lang = localStorage.getItem('lang') == 'ar';
    selectedUser: string;
    selectedItem: string;
    selectedCustomer: string;
    selectedOptional: string;

    constructor(private reportsService: ReportsService, public userService: UserService, public navService: NavService, public customerService: CustomerService,) {
    }

    onFocusedRowChanged(e: any) {
        this.currentReport = e.row.data;
        this.reportsFilter = [];
        if (this.currentReport.name == 'Users Actions') {
            this.userService.getUsers().subscribe(res => {
                this.reportsFilter.default = res;
                this.reportsFilter.optionals = this.navService.MENUITEMS;
                console.log(this.reportsFilter.optionals[0]);
            });
        }
        if (this.currentReport.name == 'Cart') {
            this.customerService.getCustomers().subscribe(res => {
                this.reportsFilter.default = res;
            });
        }
        if (this.currentReport.name == 'Customers Permissions') {
            this.customerService.getCustomers().subscribe(res => {
                this.reportsFilter.default = res;
            });
        }
    }

    onFiltersChanged() {
        var h = screen.height / 1.5;
        var w = screen.width / 1.5;
        if (this.currentReport.name == 'Users Actions') {
            let printContents = '';
            this.reportsService.db.collection('logs', ref => ref.where('user', '==', this.selectedUser)).valueChanges().subscribe(logs => {
                this.reportsService.db.collection('users', ref => ref.where('name', '==', this.selectedUser)).valueChanges().subscribe(user => {
                    let allLogs = logs;
                    const WindowObject = window.open('', 'PrintWindow', 'width=' + w + ',height=' + h + ',top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes'
                    );
                    if (this.selectedOptional != 'all' && this.selectedOptional != undefined) {
                        allLogs = logs.filter(log => log['page'] === this.selectedOptional);
                    }
                    allLogs.forEach(data => {
                        printContents += `<tr><td>${user[0]['code']}</td>`;
                        // Add columns data to table
                        this.currentReport.fields.forEach(column => {
                            printContents += `<td>${data[column]}</td>`;
                        });
                        printContents += '</tr>';
                    });
                    let htmlData = '<html><style>table, th, td {border: 1px solid black;border-collapse: collapse;}td {text-align:center}</style><body><table style="width: 100%;margin-bottom: 1rem;color: #212529;"><thead><tr>';
                    htmlData += '<th scope="col">User Code</th>';
                    // Add columns names to table
                    this.currentReport.fields.forEach(column => {
                        htmlData += `<th scope="col">${column}</th>`;
                    });
                    htmlData += '</tr></thead><tbody>' + printContents + '</tbody></table></body></html>';
                    WindowObject.document.writeln(htmlData);
                    WindowObject.document.close();
                    WindowObject.focus();
                    WindowObject.print();
                });

            });
        }
        if (this.currentReport.name == 'Customers Permissions') {
            let printContents = '';
            this.reportsService.db.collection('customers', ref => ref.where('name', '==', this.selectedCustomer)).valueChanges().subscribe(customer => {
                this.reportsService.db.collection('permission').doc(customer[0]['uid']).valueChanges().subscribe(permission => {
                    const WindowObject = window.open('', 'PrintWindow', 'width=' + w + ',height=' + h + ',top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes'
                    );
                    let htmlData = '<html><style>table, th, td {border: 1px solid black;border-collapse: collapse;}td {text-align:center}</style><body><table style="width: 100%;margin-bottom: 1rem;color: #212529;"><thead><tr>';

                    permission['permissions'].forEach(item => {
                        this.reportsService.db.collection('combinations').doc(item).valueChanges().subscribe(combination => {
                            // Permissions Data should be here
                            // printContents += `<tr><td>${user[0]['code']}</td>`;
                            // this.currentReport.fields.forEach(column => {
                            //     printContents += `<td>${data[column]}</td>`;
                            // });
                            // printContents += '</tr>';
                        });
                    });
                });

            });
        }
        if (this.currentReport.name == 'Cart') {
            let printContents = '';
            let selectedCarts = this.reportsFilter.optionals;
            if (this.selectedOptional != 'all' && this.selectedOptional != undefined) {
                selectedCarts = this.reportsFilter.optionals.filter(cart => cart.id == this.selectedOptional);
            }
            const WindowObject = window.open('', 'PrintWindow', 'width=' + w + ',height=' + h + ',top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes'
            );

            printContents += '<tr>';
            selectedCarts.forEach(cart => {
                printContents += `<td>${cart.data().customerId}</td>`;
                printContents += '<td>';
                Object.keys(cart.data().items).forEach(item => {
                    this.reportsService.db.collection('combinations', ref => ref.where('code', '==', item)).valueChanges().subscribe(combination => {
                        printContents += `${combination['nameArFull']},`;
                    });
                });
                printContents += '</td>';
                // htmlData += `<li>${cart.data().customerId}</li>`;
            });
            printContents += '</tr>';
            let htmlData = '<html><style>table, th, td {border: 1px solid black;border-collapse: collapse;}td {text-align:center}</style><body><table style="width: 100%;margin-bottom: 1rem;color: #212529;"><thead><tr>';

            htmlData += `<th scope="col">Customer</th>`;
            htmlData += `<th scope="col">Items</th>`;
            htmlData += '</tr></thead><tbody>' + printContents + '</tbody></table></body></html>';
            WindowObject.document.writeln(htmlData);
            WindowObject.document.close();
            WindowObject.focus();
            WindowObject.print();
        }
    }

    ngOnInit() {
    }


    getCustomerCarts(id) {
        this.reportsService.db.collection('carts', ref => ref.where('customerId', '==', id)).get().subscribe(carts => {
            this.reportsFilter.optionals = carts.docs;
        });
    }
}
