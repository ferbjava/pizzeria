import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usersUrl = 'api/users';
  private adminUrl = `/administration`;
  private isLogged = false;

  constructor(
    private readonly http: HttpClient,
    private router: Router
  ) {}

  getUser(): Observable<User> {
    const id = 1;
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  validateLogin(user: User, userInDb: User): boolean {
    if (user.name === userInDb.name && user.password === userInDb.password) {
      this.router.navigate([this.adminUrl]);
      this.isLogged = true;
      return this.isLogged;
    }
  }

  logOut(): void {
    this.isLogged = false;
  }

  getLoginStatus(): boolean {
    return this.isLogged;
  }
}
