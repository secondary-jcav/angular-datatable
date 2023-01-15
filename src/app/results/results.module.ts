import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  declarations: [UsersComponent, PostsComponent],
  imports: [CommonModule, DataTablesModule, HttpClientModule],
  exports: [UsersComponent, PostsComponent],
})
export class ResultsModule {}
