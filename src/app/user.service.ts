import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

import { User } from './models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _currentUserSub$ = new BehaviorSubject<User>(null);
  private _usersSub$ = new BehaviorSubject<User[]>([]);

  get currentUsers$(): Observable<User> {
    return this._currentUserSub$.asObservable();
  }

  setCurrentUser(user: User) {
    this._currentUserSub$.next(user);
  }

  get users$(): Observable<User[]> {
    return this._usersSub$.asObservable();
  }

  setUsers(users: User[] = []) {
    this._usersSub$.next(users);
  }

  createUser(user: User): Observable<User> {
    this.setUsers([...this._usersSub$.getValue(), user]);
    return of (user);
  }

  findUser(email: string, password: string): Observable<User> {
   const users = this._usersSub$.getValue();
   const foundUser = users.find(u => u.email === email && u.password === password);
   return foundUser ? of(foundUser) : throwError({ message : 'User not found' });
  }
}
