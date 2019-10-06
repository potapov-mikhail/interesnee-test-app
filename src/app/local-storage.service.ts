import { Injectable } from '@angular/core';

import { User } from './models/user.model';
import { UserService } from './user.service';
import { AuthService } from './core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private usersKey = 'users';
  private currentUserKey = 'currentUser';

  constructor(private userService: UserService,
              private authService: AuthService) {

    this.synchronization();
    this.userService.users$.subscribe(users => this.updateUsers(users));
    this.userService.currentUsers$.subscribe(user => this.updateCurrentUser(user));
  }

  synchronization() {
    const usersData = localStorage.getItem(this.usersKey) || '[]';
    const currentUserData = localStorage.getItem(this.currentUserKey);
    const users = JSON.parse(usersData);
    const currentUser = currentUserData ? JSON.parse(currentUserData) : null;
    this.userService.setCurrentUser(currentUser);
    this.authService.setAuth(!!currentUser);
    this.userService.setUsers(users);
  }

  updateCurrentUser(user: User) {
    if (user) {
      const userData = JSON.stringify(user);
      localStorage.setItem(this.currentUserKey, userData);
    } else {
      localStorage.removeItem(this.currentUserKey);
    }
  }

  updateUsers(users: User[]) {
    const usersData = JSON.stringify(users);
    localStorage.setItem(this.usersKey, usersData);
  }
}
