import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { MoreInfoComponent } from './more-info/more-info.component';

@Component({
  selector: 'app-root',
  imports: [UserInfoComponent, MoreInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-project';
}
