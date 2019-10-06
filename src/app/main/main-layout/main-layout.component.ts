import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { User } from '../../models/user.model';
import { UserService } from '../../user.service';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  user$: Observable<User>;

  constructor(private userService: UserService,
              private authService: AuthService) {

    this.user$ = this.userService.currentUsers$;
  }

  handleLogout() {
    this.userService.setCurrentUser(null);
    this.authService.logout();
  }
}
