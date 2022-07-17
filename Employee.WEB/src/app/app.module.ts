import { HttpClientModule } from '@angular/common/http';
import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';   
import { EmployeeListComponent } from './employee/list.component';
import { AddEmployeeComponent } from './employee/add.component';
@NgModule({
  declarations: [
    AppComponent, 
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    RouterModule.forRoot([

      { path: 'empList', component: EmployeeListComponent, pathMatch: 'full' },
      { path: '', component: EmployeeListComponent, pathMatch: 'full' },
      { path: 'addEmp/:id', component: AddEmployeeComponent },
      { path: 'addEmp', component: AddEmployeeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
