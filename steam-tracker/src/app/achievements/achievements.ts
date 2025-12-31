import { Component } from '@angular/core';
import { Achievement } from "../achievement/achievement";
import { AchievementInfo } from '../achievement/achievement-interface';

@Component({
  selector: 'app-achievements',
  imports: [Achievement],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css',
  standalone: true,
})
export class Achievements {

  achievementsList: AchievementInfo[] = [
    {
      apiname: "balatro-1",
      achieved: "false",
      unlockedAt: "Not yet unlocked",
      name: "Completionist++",
      description: "earn a gold sticker on every joker",
      icon: "/assets/achievement-icons/b-1.png"
    },
    {
      apiname: "balatro-2",
      achieved: "true",
      unlockedAt: "2025-11-01",
      name: "Completionist+",
      description: "win with every deck on gold stake difficulty",
      icon: "/assets/achievement-icons/b-2.png"
    },
    {
      apiname: "balatro-3",
      achieved: "true",
      unlockedAt: "2025-12-05",
      name: "Rule Breaker",
      description: "complete every challenge run",
      icon: "/assets/achievement-icons/b-3.png"
    }
  ];


}