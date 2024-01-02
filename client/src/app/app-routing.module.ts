import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  // { path: 'Home', component: HomepageComponent },
  // { path: 'Login', component: LoginComponent },
  // { path: 'Signup', component: RegisterComponent },
  // { path: 'Profile', component: UserProfileComponent },
  // { path: 'Cart', component: CartComponent },
  // { path: 'Search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
