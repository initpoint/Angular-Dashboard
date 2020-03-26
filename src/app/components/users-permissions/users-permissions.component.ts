import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {UserService} from '../../shared/services/firebase/user.service';
import {LogsService} from '../../shared/services/firebase/logs.service';
import {DxDataGridComponent} from 'devextreme-angular';
import CustomeStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import {NavService} from '../../shared/services/nav.service';
import {Router} from '@angular/router';

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
    selectedUser;
    customerSource: DataSource;
    customerData: CustomeStore;
    allPages = [];
    currentUser = JSON.parse(localStorage.getItem('user'));
    constructor(public userService: UserService, public logs: LogsService,private router: Router,
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
        this.currentUser.permissions.canUpdate = this.currentUser.permissions.update.includes(this.router.url);
        this.currentUser.permissions.canCreate = this.currentUser.permissions.create.includes(this.router.url);
        this.currentUser.permissions.canRemove = this.currentUser.permissions.delete.includes(this.router.url);
        this.currentUser.permissions.canExport = this.currentUser.permissions.export.includes(this.router.url);
        this.currentUser.permissions.canImport = this.currentUser.permissions.import.includes(this.router.url);
        this.currentUser.permissions.canView = this.currentUser.permissions.view.includes(this.router.url);
    }


    onFocusedRowChanged(e: any) {
        this.selectedUser = e.row.data;
        this.userPermissions = this.selectedUser.permissions;
        this.pages.instance.selectRows(this.userPermissions[this.permissionType.nativeElement.value], false);
    }


    saveUserPermissions() {
        if (!this.selectedUser.permissions) {
            this.selectedUser.permissions = {};
        }
        this.selectedUser.permissions[this.permissionType.nativeElement.value] = this.pages.instance.getSelectedRowsData().map(page => page.path);
        const logData = 'User [' + this.selectedUser.name + '] Permissions Set [' + this.permissionType.nativeElement.value + '] to ' + this.selectedUser.permissions[this.permissionType.nativeElement.value];
        this.logs.createLog(logData);
        this.userService.updateUser(this.selectedUser.uid, {permissions: this.selectedUser.permissions}).then(res => {
            this.userService.toastrService.success('User Permission Updated');
        });
    }

    updatePermissionType(permission) {
        this.pages.instance.selectRows(this.userPermissions[permission], false);
    }
}
