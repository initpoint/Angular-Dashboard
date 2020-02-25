import {Component, OnInit, Output} from '@angular/core';
import {UserService} from '../../../shared/services/firebase/user.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import CustomeStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'app-user',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    customerSource: DataSource;
    customerData: CustomeStore;
    lang = localStorage.getItem('lang') == 'ar';
    fieldView: boolean = true;

    constructor(private userService: UserService) {
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
                return this.userService.updateUser(key, values);
            },
            remove: (key) => {
                return this.userService.deleteUser(key);
            },
            insert: (values) => {
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
    }
}
