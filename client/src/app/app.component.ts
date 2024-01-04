import { Component, ViewChild } from '@angular/core';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  @ViewChild('childComponentRef') childComponent!: CartComponent;

  title = 'commerce';
  comps:string= 'Home';
  loggedin:boolean=false;
  searchbar:boolean=false;
  userid:string="";
  userAuth:any= {
    'userid':'',
    'loggedin':false
  };
  searchinputfromHome:any={
    searched:false,
    category:''
  }

  setComps(value:string){
    this.comps=value;
  }

  authuser(value:any){
    console.log(value);
    this.loggedin=value.loggedin;
    this.userAuth=value;
    this.comps='Home';
    // this.childComponent.refreshcartdata(value.email);
  }

  logout(){
    this.userAuth= {
      'userid':'',
      'loggedin':false
    };
    this.loggedin=false;
    this.comps='Home';
  }

  getserachcomp(value:any){
    this.comps='Search';
    this.searchinputfromHome={
      searched:true,
      category:value
    }
  }

  listenclearformsearchcomp(){
    this.searchinputfromHome={
      searched:false,
      category:''
    }
  }
}

