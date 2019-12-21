import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../../../shared/services/firebase/user.service';
import { Router } from '@angular/router';
import { Options, ChangeContext, PointerType, LabelType } from 'ng5-slider';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacts',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public searchValue: string = "";
  public items: Array<any>;
  public name_filtered_items: Array<any>;
  public user: any;
  public age: any;
  public sidebaron: any;
  public listView: any;

  constructor(private userService: UserService, private router: Router,private toastr :ToastrService) { }

  showDelete() {
    this.toastr.error('User Deleted !');
  }

 

  public logText: string = '';
  public min: number;
  public value: number = 10;
  public highValue: number = 50;
  public options: Options = {
    floor: 0,
    ceil: 100,
  };


  searchByName() {
    let value = this.searchValue.toLowerCase();
    this.userService.searchUsers(value)
      .subscribe(result => {
        this.name_filtered_items = result;
        this.items = this.combineLists(result, this.name_filtered_items);
      })
  }


  combineLists(a, b) {
    let result = [];

    a.filter(x => {
      return b.filter(x2 => {
        if (x2.payload.doc.id == x.payload.doc.id) {
          result.push(x2);
        }
      });
    });
    return result;
  }

  delete(userId) {
    this.userService.deleteUser(userId)
      .then(
        res => {
          this.router.navigate(['/user/show']);
          this.showDelete();
        },
        err => {
        }
      )
  }

  getData() {
    this.userService.getUsers()
      .subscribe(result => {
        this.items = result;
        this.name_filtered_items = result;
      })
  }
  ngOnInit() {
    this.getData();
  }
}
