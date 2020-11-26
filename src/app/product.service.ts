import { Injectable } from '@angular/core';
import { Product } from './product'
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cart: any
  constructor(private db: AngularFirestore) { }

 
  // productLists: Product[] = [
  //   {
      
  //     name: "Nike",
  //     price: "R500",
  //     description: "Just Do It",
  //     picture:
  //       "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  //   },
  //   {
      
  //     name: "Puma",
  //     price: "R600",
  //     description: "we are Forever Faster",
  //     picture:
  //       "https://images.pexels.com/photos/2016145/pexels-photo-2016145.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  //   },
  //   {
      
  //     name: "Adidas",
  //     price: "R800",
  //     description: "Adidas is all in",
  //     picture:
  //       "https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  //   },
  //   {
      
  //     name: "Rebook",
  //     price: "R300",
  //     description: "I am what I am",
  //     picture:
  //       "https://images.unsplash.com/photo-1580977251946-c5f692a4db0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  //   },
  //   {
      
  //     name: "puma",
  //     price: "R300",
  //     description: "we are Forever Faster",
  //     picture:
  //       "https://images.unsplash.com/photo-1571736772567-3aa763ff559a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  //   }

  // ];
  // local
  // getAllProduct() {
  //   return this.productLists;
  // }

  //local
  // updateProduct(pro: Product) {
  //   const index = this.productLists.findIndex(c => c.id === pro.id);
  //   if (index > -1) {
  //     this.productLists[index] = pro;
  //   }
  // }
  // //local
  // deleteProduct(id: number) {
  //   const pro = this.productLists.findIndex(c => c.id == id);
  //   if (pro > -1) {
  //     this.productLists.splice(pro, 1);
  //   }
  // }

  // local

  // addProduct(prod: Product) {
  //   this.productLists.push({
  //     id: this.productLists.length + 1,
  //     name: prod.name,
  //     price: prod.price,
  //     description: prod.description,
  //     picture: prod.picture,

  //   });
  // }


  // firebase

  // getAllProduct() {
  //   let productLists=[]
  //   this.db.collection("product").snapshotChanges().subscribe(result =>{
  //     console.log(result);
  //     result.forEach((doc)=>{
  //       productLists.push(doc.payload.doc.data())
  //       productLists.map(prod =>{
  //         prod['id'] = doc.payload.doc.id;
  //       })
  //         console.log(productLists);
   
  //     });
  //   })
  // return this.productLists;
  // }

  getAllProduct() {
    this.cart = this.db.collection("product").snapshotChanges()
    return this.cart;  

  }

  // firebase
  
  

  addProduct(prod: Product) {
    let Id = Math.floor(Math.random() * 50);
    this.db.collection("product").doc(Id.toString()).set({
      //  id: this.productLists.length + 1,
      name: prod.name,
      price: prod.price,
      description: prod.description,
      picture: prod.picture,
      
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }


  updateProduct(id: number,prod:Product){
    console.log(id)
    return this.db.doc("product/" + id).update(prod)
  }
  deleteProduct(id: number){
    this.db.doc('product/' + id).delete()

  }
 
  

}
  

