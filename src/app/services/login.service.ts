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

  constructor(
    private readonly http: HttpClient,
    private router: Router
  ) {}

  getUser(): Observable<User> {
    const id = 1;
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  validateLogin(user: User, loggedUser: User): boolean {
    if (user.name === loggedUser.name && user.password === loggedUser.password) {
      this.router.navigate([this.adminUrl]);
      return true;
    } else {
      return false;
    }
  }
}
