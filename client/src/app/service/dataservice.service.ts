import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpClient: HttpClient) { }

  Login(reqparam: any) {
    return this.httpClient.post("http://localhost:4000/api/user/Login", reqparam)
      .pipe(catchError(error => {
        console.error('Login error:', error);
        return throwError(error); // Or handle the error differently
      }));
  }

  singup(reqparam: any){
    return this.httpClient.post("http://localhost:4000/api/user/register", reqparam)
    .pipe(catchError(error => {
      console.error('Login error:', error);
      return throwError(error); // Or handle the error differently
    }));
  }

  addtocart(reqparam: any){
    return this.httpClient.post("http://localhost:4000/api/cart/addtocart", reqparam)
    .pipe(catchError(error => {
      console.error('Login error:', error);
      return throwError(error); // Or handle the error differently
    }));
  }
  deletecartitem(reqparam: any){
    return this.httpClient.post("http://localhost:4000/api/cart/deletecartitem", reqparam)
    .pipe(catchError(error => {
      console.error('Login error:', error);
      return throwError(error); // Or handle the error differently
    }));
  }

  getcartitems(reqparam: any){
    return this.httpClient.post("http://localhost:4000/api/cart/getCartdataByuser", reqparam)
    .pipe(catchError(error => {
      console.error('Login error:', error);
      return throwError(error); // Or handle the error differently
    }));
  }

    getProducts(){
    return this.httpClient.get("http://localhost:4000/api/product/getProducts")
    .pipe(catchError(error => {
      console.error('Login error:', error);
      return throwError(error); // Or handle the error differently
    }));
  }

}
