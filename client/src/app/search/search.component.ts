import { Component,Input } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { CartComponent } from '../cart/cart.component';
import { CartserviceService } from '../service/cartservice.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})


export class SearchComponent {
  @Input() userAuth!:any;
  @Input() searchinputfromHome!:any;

  recommendedProducts:any[]=[];
  searchedProducts: any;
  searchQuery: string = '';
  onSearch:boolean=false;
  

  constructor(private dataservice:DataserviceService, public cartcomp:CartComponent,private cartservice:CartserviceService,private appcomp:AppComponent){}
  ngOnInit(){
    this.dataservice.getProducts().subscribe((data) => {
      if (Array.isArray(data)) {
        this.recommendedProducts.push(...data);
        if (this.searchinputfromHome.searched) {
          this.onSearch = true;
          this.searchedProducts = this.recommendedProducts.filter((product) =>
            product.category
              .toLowerCase()
              .includes(this.searchinputfromHome.category.toLowerCase())
          );
        }
      }
    });
  }


  search(query: string) {
    if (query.trim() !== '') {
        this.searchedProducts = this.recommendedProducts.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        this.onSearch=true;
    } else {
        this.searchedProducts = []; // Clear the array if the query is empty
        this.onSearch=true;
    }
  }

  clearsearch(){
    this.onSearch=!this.onSearch;
    this.appcomp.listenclearformsearchcomp();
  }

  addtocart(id:any){
    if(this.userAuth.loggedin==false){
      for(let i=0;i<this.recommendedProducts.length;i++){
        if(id===this.recommendedProducts[i].id){
          const productToAdd = {
            ...this.recommendedProducts[i],
            quantity:1
        };
        this.cartservice.addtocart(productToAdd);
        break;
        }
      }
    }else{
      for(let i=0;i<this.recommendedProducts.length;i++){
        if(id===this.recommendedProducts[i].id){
          const productToAdd = {
            ...this.recommendedProducts[i],
            email: this.userAuth.userid,
            quantity:1 
        };
        this.dataservice.addtocart(productToAdd);
        break;
        }
      }
    }
  }
}


