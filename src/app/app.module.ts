import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycompoComponent } from './mycompo/mycompo.component';
import { SomeComponent } from './some/some.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { AddUserComponent } from './user/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MycompoComponent,
    SomeComponent,
    CustomerComponent,
    EmployeeComponent,
    UserComponent,
    ProductComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
