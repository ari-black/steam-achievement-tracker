import { Component } from '@angular/core';
import { MiniProfile } from '../mini-profile/mini-profile';
import { Achievement } from "../achievement/achievement";
import { Search } from '../search/search';
import { Games } from '../games/games';

@Component({
  selector: 'app-profile',
  imports: [MiniProfile, Achievement, Search, Games],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

}
