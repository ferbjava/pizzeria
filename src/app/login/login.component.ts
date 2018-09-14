import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private readonly destroy$ = new Subject();
  private message = 'Invalid User or Password!';
  user: User;
  userInDB: User;

  loginForm = new FormGroup( {
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private readonly loginService: LoginService,
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(): void {
    this.loginService.getUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.userInDB = res);
  }

  logIn() {
    this.user = this.loginForm.value;
    if (!this.loginService.validateLogin(this.user, this.userInDB)) {
      window.alert(this.message);
      this.loginForm.reset();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
