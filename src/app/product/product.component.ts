import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  prod_List:Product []=[]
  constructor(private prod: ProductService, private router: Router, private db:AngularFirestore) { }

  ngOnInit(): void {
    this.getproductLists()
  }
  // productLists(){
  //   this.prod_List = this.prod.getAllProduct();
  // }

  // get productLists() {
  //   return this.prod.getAllProduct()
  // } 

  getproductLists() {
    return this.prod.getAllProduct().subscribe(res => {
      this.prod_List = res.map((product) => {
        return {
          ...product.payload.doc.data(),
          id:product.payload.doc.id

        } as Product
      })
    })
  }

  ViewProduct(product) {
    this.router.navigateByUrl('/product', { state: product });
  }
 
}
