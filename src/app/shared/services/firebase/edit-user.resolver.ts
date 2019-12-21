import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { UserService } from './user.service';

@Injectable()
export class EditUserResolver implements Resolve<any> {

  constructor(public userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, ) {

    return new Promise((resolve, reject) => {
      let userId = route.paramMap.get('id');
      this.userService.getUser(userId)
        .subscribe(
          data => {
            resolve(data);
          }
        );
    })
  }
}