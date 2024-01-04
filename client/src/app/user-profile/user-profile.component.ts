import { Component, Input } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  @Input() userAuth!:any

  selectedFile: File | null = null;
  firstname:string='';
  lastname:string='';
  dob:string='';
  mobile:string='';
  email:string='';
  gender:string='';
  isediting:boolean=false;
  Newgender:string='';
  Newdob:string='';
  Newlastname:string='';
  Newfirstname:string='';
  Newmobile: string='';
  loggingout:boolean=false;
  alert:boolean=false;

  constructor(private dataservice:DataserviceService,private appcomp:AppComponent) {}

  ngOnInit(){
    this.dataservice.getProfile({email:this.userAuth.userid}).subscribe((res:any)=>{
      this.firstname = res.firstname;
      this.lastname = res.lastname;
      this.email = res.email;
      this.dob = res.dob;
      this.mobile= res.mobile;
      this.gender = res.gender;
    })
  }

  logout(): void {
    this.loggingout=true;
    setTimeout(()=>{
      this.appcomp.logout();
    },3000)
  }

  isedit(){
    this.isediting= !this.isediting;
    this.Newfirstname = this.firstname;
    this.Newlastname = this.lastname;
    this.Newdob = this.dob;
    this.Newmobile= this.mobile;
    this.Newgender = this.gender;
  }

  savechanges(){
    this.alert=true;
    setTimeout(()=>{
      this.alert=false;
      this.isediting=false;
    },3000)
    let data ={
      "firstname" : this.Newfirstname,
      "lastname"  :  this.Newlastname,
      "email":this.userAuth.userid,
      "dob"  :  this.Newdob,
      "mobile" :  this.Newmobile,
      "gender"  :  this.Newgender
    }
    this.dataservice.editProfile(data).subscribe((res:any)=>{})
  }

}