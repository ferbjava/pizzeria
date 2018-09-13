import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss']
})
export class HeaderPanelComponent implements OnInit {

  @Input() title: string;
  @Input() isAdminLogged: boolean;

  constructor(
  ) {}

  ngOnInit() {
  }
}
