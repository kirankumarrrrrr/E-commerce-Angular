import { Component,Output,EventEmitter, ViewChild } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  @Output() parentcall = new EventEmitter();
  @ViewChild('childComponentRef') childComponent!: CartComponent;


  Email: string = '';
  Password: string = '';
  showpassword: boolean = true;
  alert: boolean = false;
  validuser: boolean = false;
  alertmessage: string = '';

  constructor(private dataservice: DataserviceService) {}

  submitLogin() {
    if (this.Email != '' && this.Password != '') {
      var validRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (this.Email.match(validRegex)) {
        let data = {
          email: this.Email,
          password: this.Password,
        };
        this.dataservice.Login(data).subscribe((data: any) => {
          if (data.success) {
            this.validuser = true;
            this.parentcall.emit({
              "userid":this.Email,
              "loggedin":true
            });
            // this.childComponent.refreshcartdata(this.Email);
            this.clearform();
          } else {
            this.alert = true;
            this.alertmessage = 'Invalid Credentials, please try again :)';
            setTimeout(() => {
              this.alert = false;
            }, 3000);
            this.clearform();
          }
        });
      } else {
        this.alert = true;
        this.alertmessage = 'Please enter valid Email';
        setTimeout(() => {
          this.alert = false;
        }, 3000);
        this.clearform();
      }
    }
  }

  clearform() {
    this.Email = '';
    this.Password = '';
    this.showpassword = true;
  }
}
