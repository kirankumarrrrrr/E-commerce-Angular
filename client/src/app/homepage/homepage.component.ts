import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  constructor(private appcomp:AppComponent){}

  list:Array<any>=[]

  getdatabycategory(category:any){
    this.appcomp.getserachcomp(category);
  }
}
