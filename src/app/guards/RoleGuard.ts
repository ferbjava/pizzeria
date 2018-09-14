import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {LoginService} from '../services/login.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly role: LoginService) {}

  isLogged: boolean;
  message = 'Please authenticate to get access to this page!!!';

  canActivate() {
    this.isLogged = this.role.getLoginStatus();
    if(!this.isLogged) {
      window.alert(this.message);
    }
    return this.isLogged;
  }
}
