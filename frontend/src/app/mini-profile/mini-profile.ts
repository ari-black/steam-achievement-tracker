import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-profile',
  imports: [],
  templateUrl: './mini-profile.html',
  styleUrl: './mini-profile.css',
})
export class MiniProfile {

  // set static profile name and photo for now
  protected readonly profileName = 'ari'
  readonly imageUrl = 'assets/cat.png';
  profilePhoto = `$this.imageUrl`;


}
