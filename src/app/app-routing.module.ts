import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: "header",
    component: HeaderComponent,
    children:[
      {path: 'home',
      component: HomeComponent,}
    ]
  }
  ,
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
 
 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatFormFieldModule],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
