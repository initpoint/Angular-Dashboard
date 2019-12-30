import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { ProductsService } from './products.service';

@Injectable()
export class EditProductResolver implements Resolve<any> {

  constructor(public productsService: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, ) {

    return new Promise((resolve, reject) => {
      let key = route.paramMap.get('id');
      this.productsService.getCategory(key)
        .subscribe(
          data => {
            resolve(data);
          }
        );
    })
  }
}
