import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { FooterComponent } from './admin/layout/block/footer/footer.component';
import { HeaderComponent } from './admin/layout/block/header/header.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UserComponent } from './admin/pages/user/user.component';
import { FormUserComponent } from './admin/pages/user/form-user/form-user.component';
import { ListUserComponent } from './admin/pages/user/list-user/list-user.component';
import { ProductComponent } from './admin/pages/product/product.component';
import { ListProductComponent } from './admin/pages/product/list-product/list-product.component';
import { FormProductComponent } from './admin/pages/product/form-product/form-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    HighlightDirective,
    UserComponent,
    FormUserComponent,
    ListUserComponent,
    ProductComponent,
    ListProductComponent,
    FormProductComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
