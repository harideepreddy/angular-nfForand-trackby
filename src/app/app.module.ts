import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {EmployeeListComponent} from './employeelist.component';
import { EmployeePipe } from './employee.pipe.ts';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, EmployeeListComponent, EmployeePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
