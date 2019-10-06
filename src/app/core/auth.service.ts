import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { sleep } from '../util';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { LoginData, RegistrationData } from './auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  constructor(private router: Router,
              private userService: UserService) {}

  async registration(data: RegistrationData): Promise<User | null> {
    try {
      await sleep(1000);
      const user = await this.userService.createUser(data).toPromise();
      this.setAuth(true);
      return user;
    } catch (e) {
      throw e;
    }
  }

  async login(data: LoginData): Promise<User> {
    try {
      await sleep(1000);
      const user = await this.userService.findUser(data.email, data.password).toPromise();
      this.userService.setCurrentUser(user);
      this.setAuth(true);
      return user;
    } catch (e) {
      throw e;
    }
  }

  isAuthorized(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    this.setAuth(false);
    this.userService.setCurrentUser(null);
    this.router.navigate(['/auth']);
  }

  setAuth(fl: boolean) {
    this.isAuthenticated = fl;
  }
}
