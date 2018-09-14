import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // isAdminLogged = false;
  title = 'Michalangelo Pizzeria';

  constructor(
  ) {}

  // onLogged(emiter: boolean) {
  //   emiter ? this.isAdminLogged = true : this.isAdminLogged = false;
  // }
}
