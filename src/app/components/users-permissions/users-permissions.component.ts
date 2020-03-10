import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {UserService} from '../../shared/services/firebase/user.service';
import {LogsService} from '../../shared/services/firebase/logs.service';
import {DxDataGridComponent} from 'devextreme-angular';
import CustomeStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import {NavService} from '../../shared/services/nav.service';

@Component({
    selector: 'app-users-permissions',
    templateUrl: './users-permissions.component.html',
    styleUrls: ['./users-permissions.component.scss']
})
export class UsersPermissionsComponent implements OnInit {
    @ViewChild('DataGrid', {static: false}) pages: DxDataGridComponent;
    @ViewChild('permissions', {static: false}) permissionType: ElementRef;
    userPermissions: [] = [];
    lang;
    currentUser;
    customerSource: DataSource;
    customerData: CustomeStore;
    allPages = [];

    constructor(public userService: UserService, public logs: LogsService,
                private navService: NavService) {
        this.navService.items.subscribe(menuItems => {
            this.allPages = menuItems;
        });
        this.customerData = new CustomeStore({
            key: 'uid',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    this.userService.getUsers().subscribe(res => {
                        resolve(res);
                    });
                });
            },
        });
        this.customerSource = new DataSource({
            store: this.customerData,
        });
    }

    ngOnInit() {
        this.lang = localStorage.getItem('lang') === 'ar';

    }


    onFocusedRowChanged(e: any) {
        this.currentUser = e.row.data;
        this.userPermissions = this.currentUser.permissions;
        this.pages.instance.selectRows(this.userPermissions[this.permissionType.nativeElement.value], false);
    }


    saveUserPermissions() {
        this.currentUser.permissions[this.permissionType.nativeElement.value] = this.pages.instance.getSelectedRowsData().map(page => page.path);
        const logData = 'User [' + this.currentUser.name + '] Permissions Set [' + this.permissionType.nativeElement.value + '] to ' + this.currentUser.permissions[this.permissionType.nativeElement.value];
        this.logs.createLog(logData);
        this.userService.updateUser(this.currentUser.uid, {permissions: this.currentUser.permissions}).then(res => {
            this.userService.toastrService.success('User Permission Updated');
        });
    }

    updatePermissionType(permission) {
        this.pages.instance.selectRows(this.userPermissions[permission], false);
    }
}
