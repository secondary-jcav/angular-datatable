import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ADTSettings } from 'angular-datatables/src/models/settings';

import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<ADTSettings>();

  allUsers: any = [];

  ngOnInit(): void {
    this.users();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  users() {
    this.usersService.users().subscribe((response: any) => {
      this.allUsers = response;
      console.log(response);
      this.dtTrigger.next(response);
    });
  }
}
