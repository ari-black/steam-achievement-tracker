import { Component } from '@angular/core';
import { MiniProfile } from '../mini-profile/mini-profile';

@Component({
  selector: 'app-home',
  imports: [MiniProfile],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
