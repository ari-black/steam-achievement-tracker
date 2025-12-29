import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
  standalone: true,
})
export class Search {

  searchUsers(text: string) {
    console.log(`Searching for user with name: ${text}`);
    return;
  }

}
