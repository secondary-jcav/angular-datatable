import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [AppComponent, UsersComponent],
  imports: [BrowserModule, DataTablesModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
