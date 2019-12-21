import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { CustomerService } from './customer.service';

@Injectable()
export class EditCustomerResolver implements Resolve<any> {

  constructor(public customerService: CustomerService) { }

  resolve(route: ActivatedRouteSnapshot, ) {

    return new Promise((resolve, reject) => {
      let userId = route.paramMap.get('id');
      this.customerService.getCustomer(userId)
        .subscribe(
          data => {
            resolve(data);
          }
        );
    })
  }
}