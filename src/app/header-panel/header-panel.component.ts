import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss']
})
export class HeaderPanelComponent implements OnInit {

  @Input() title: string;

  constructor(
    private readonly loginService: LoginService
  ) {}

  ngOnInit() {
  }

  getLoginStatus(): boolean {
    return this.loginService.getLoginStatus();
  }

  logOut(): void {
    this.loginService.logOut();
  }
}
