import { Component } from '@angular/core';
import { MiniProfile } from '../mini-profile/mini-profile';
import { Achievements } from "../achievements/achievements";
import { Search } from '../search/search';
import { Games } from '../games/games';

@Component({
  selector: 'app-profile',
  imports: [MiniProfile, Achievements, Search, Games],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

}
