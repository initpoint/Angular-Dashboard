import {Component, OnInit, Output} from '@angular/core';
import {UserService} from '../../shared/services/firebase/user.service';
import {LogsService} from '../../shared/services/firebase/logs.service';
import CustomeStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import {Router} from '@angular/router';
@Component({
    selector: 'app-user',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    customerSource: DataSource;
    customerData: CustomeStore;
    currentUser = JSON.parse(localStorage.getItem('user'));
    lang = localStorage.getItem('lang') == 'ar';
    fieldView: boolean = true;

    constructor(private userService: UserService, private logs: LogsService,private router:Router) {
        this.customerData = new CustomeStore({
            key: 'uid',
            load: (opts) => {
                return new Promise((resolve, reject) => {
                    this.lang = localStorage.getItem('lang') == 'ar';
                    this.userService.getUsers().subscribe(res => {
                        resolve({data: res});
                    });
                });
            },
            update: (key, values) => {
                const logData = 'Updated user [' + this.customerSource.items().find(user => user.uid === key).name + '] data [' + Object.keys(values) + '] to [' + Object.values(values) + ']';
                this.logs.createLog(logData);
                return this.userService.updateUser(key, values);
            },
            remove: (key) => {
                const logData = 'User [' + this.customerSource.items().find(user => user.uid === key).name + '] deleted';
                this.logs.createLog(logData);
                return this.userService.deleteUser(key);
            },
            insert: (values) => {
                const logData = 'Created new user [' + values.name + ']';
                this.logs.createLog(logData);
                return this.userService.createUser(values);
            },
        });
        this.customerSource = new DataSource({
            store: this.customerData,
        });
    }

    onEditorPreparing(e) {
        if (e.parentType === 'dataRow' && e.dataField === 'password' && e.row.data.uid) {
            e.editorOptions.disabled = true;
            e.editorOptions.visible = false;
            e.cancel = true;
            this.fieldView = false;
        }
    }

    ngOnInit() {
        this.currentUser.permissions.canUpdate = this.currentUser.permissions.update.includes(this.router.url);
        this.currentUser.permissions.canCreate = this.currentUser.permissions.create.includes(this.router.url);
        this.currentUser.permissions.canRemove = this.currentUser.permissions.delete.includes(this.router.url);
        this.currentUser.permissions.canExport = this.currentUser.permissions.export.includes(this.router.url);
        this.currentUser.permissions.canImport = this.currentUser.permissions.import.includes(this.router.url);
        this.currentUser.permissions.canView = this.currentUser.permissions.view.includes(this.router.url);
    }
}
