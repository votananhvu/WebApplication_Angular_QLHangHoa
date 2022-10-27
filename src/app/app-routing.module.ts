import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { ProductComponent } from './admin/pages/product/product.component';
import { UserComponent } from './admin/pages/user/user.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    component: LoginComponent,
    path: 'login',
    pathMatch: 'full'
  },
  {
    component: RegisterComponent,
    path: 'register',
  },
  {
    component: AdminComponent,
    canActivate: [AuthGuard],
    path: 'admin',
    children: [
      {
        redirectTo: 'dashboard',
        pathMatch: 'full',
        path: ''
      },    
      {
        component: DashboardComponent,
        path: 'dashboard'
      },
      {
        component: UserComponent,
        path: 'user'
      },
      {
        component: ProductComponent,
        path: 'product'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
