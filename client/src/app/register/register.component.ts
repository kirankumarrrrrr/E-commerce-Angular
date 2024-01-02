import { Component,EventEmitter,Input, Output} from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @Output() childEmitter = new EventEmitter();

  loader: boolean=false;
  constructor(private dataservice:DataserviceService){}
  firstname:string="";
  lastname:string="";
  Email:string="";
  Password:string="";
  showpassword:boolean=true;
  alert:boolean=false;
  registration:boolean=false;
  formopen:boolean=true;

  submitSignup(){
    var validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (this.Email.match(validRegex)) {
      let data={
        "firstname":this.firstname,
        "lastname":this.lastname,
        "email":this.Email,
        "password":this.Password,
        "isAdmin":false
      }
      this.dataservice.singup(data).subscribe((res)=>{
        console.log(res,"res");
        this.clearform();
        this.formopen=false;
        this.loader=true;
        setTimeout(()=>{
          this.loader=false;
          this.registration=true;
        },1000);
        setTimeout(()=>{
          this.childEmitter.emit();
        },6000)
      })
    } else{
      this.alert=true;
      setTimeout(() => {
        this.alert=false;
      }, 2000);
      this.clearform();
    }
  }

  clearform(){
    this.firstname="";
    this.lastname="";
    this.Email="";
    this.Password="";
    this.showpassword=true;
  }

  redirecttologin(){
    this.childEmitter.emit();
  }

}
