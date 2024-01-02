import { Component, Input } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  @Input() userAuth!:any;

  constructor(private dataservice:DataserviceService, private cartservice:CartserviceService){}

  cartItems:any[]=[];

  ngOnInit(){
    if(this.userAuth.loggedin==true){
      this.dataservice.getcartitems({"email":this.userAuth.userid}).subscribe((data:any)=>{
        this.cartItems=[];
        this.cartItems.push(...data);
      })
    }else{
      let data = this.cartservice.getcartitems();
      this.cartItems=[];
      this.cartItems.push(...data);
    }
  }

  removeItem(itemId: number): void {
    if(this.userAuth.loggedin==true){
      for(let i=0;i<this.cartItems.length;i++){
        if(itemId===this.cartItems[i].id){
          const productTodelete = {
            ...this.cartItems[i],
            email: this.userAuth.userid,
            quantity:1 // Replace with the actual email property
        };
        this.dataservice.deletecartitem(productTodelete);
        break;
        }
      }
      this.dataservice.getcartitems({"email":this.userAuth.userid}).subscribe((data:any)=>{
        this.cartItems.push(...data);
      })
    }else{
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
      this.cartservice.deletedummycartitem(itemId);
    }

  }


  getTotalAmount(): number {
    return Number(this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0));
  }

}
