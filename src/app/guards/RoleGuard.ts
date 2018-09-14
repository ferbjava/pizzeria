import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {LoginService} from '../services/login.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly role: LoginService) {}

  canActivate() {
    return this.role.getLoginStatus();
  }
}
