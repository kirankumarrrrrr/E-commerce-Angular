import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  cartitems:any[]=[];
  constructor() { }

  addtocart(item:any){
    if(this.cartitems.length){
      let itemFound = false;
      for (let i = 0; i < this.cartitems.length; i++) {
        if (item.id === this.cartitems[i].id) {
          this.cartitems[i].quantity = this.cartitems[i].quantity + 1;
          itemFound = true;
          break;
        }
      }
      if (!itemFound) {
        this.cartitems.push(item);
      }
      }else{
      this.cartitems.push(item);
    }
  }

  getcartitems(){
    return this.cartitems;
  }

  deletedummycartitem(itemId:Number){
    this.cartitems = this.cartitems.filter(item => item.id !== itemId);
  }
}
