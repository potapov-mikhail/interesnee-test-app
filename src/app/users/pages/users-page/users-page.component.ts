import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { User } from '../../../models/user.model';
import { UserService } from '../../../user.service';

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  selectedUser: User;
  users$: Observable<User[]>;

  constructor(private userService: UserService) {
    this.users$ = this.userService.users$;
  }

  public handleSelect(user) {
    this.selectedUser = user;
  }
}
