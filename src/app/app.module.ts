import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { StudentFormComponent } from './form/student-form.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentlistComponent } from './studentlist/studentlist.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentlistComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
