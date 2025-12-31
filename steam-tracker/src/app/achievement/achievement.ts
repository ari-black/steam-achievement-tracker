import { Component, input } from '@angular/core';
import { AchievementInfo } from './achievement-interface';

@Component({
  selector: 'app-achievement',
  imports: [],
  templateUrl: './achievement.html',
  styleUrl: './achievement.css',
  standalone: true,
})
export class Achievement {

  achievement = input.required<AchievementInfo>();
  

}
