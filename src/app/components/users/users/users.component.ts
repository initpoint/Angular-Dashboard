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
    userSource: DataSource;
    userData: CustomeStore;
    lang = localStorage.getItem('lang') == 'ar';

    constructor(private userService: UserService, private router: Router, private toastr: ToastrService) {

            this.userData = new CustomeStore({
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
        this.userSource = new DataSource({
            store: this.userData,
        });
    }


    onEditorPreparing(e) {
        if (e.parentType === 'dataRow' && e.dataField === 'password' && e.row.data.uid) {
            e.editorOptions.disabled = true;
            e.editorOptions.visible = false;
            e.cancel = true;
        }

    }


    // activeUser(data) {
    //     console.log(data.cellElement.querySelector('.btn-success'));
    //     this.userService.setUser(data.data.uid, {isActive: data.value}).then(res => {
    //         this.toastr.success('User is active');
    //     }).catch(err => {
    //         console.error(err);
    //     });
    // }

    ngOnInit() {
    }
}
