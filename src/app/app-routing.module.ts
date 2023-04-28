import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body/body.component';
import { ListUsersComponent } from './body/list-users/list-users.component';
import { RegisterComponent } from './body/register/register.component';
import { ShowProductsComponent } from './body/register/show-product/show-product.component';


const routes: Routes = [
  {path:'body', component:BodyComponent},
  {path:'register', component:RegisterComponent},
  {path:'users', component:ShowProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
