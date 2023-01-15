import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ADTSettings } from 'angular-datatables/src/models/settings';

import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<ADTSettings>();

  allPosts: any = [];

  ngOnInit(): void {
    this.usersPosts();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  usersPosts() {
    this.usersService.usersPosts().subscribe((response: any) => {
      this.allPosts = response;
      console.log(response);
      this.dtTrigger.next(response);
    });
  }
}
