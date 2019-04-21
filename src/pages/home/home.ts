import {Component, OnInit} from '@angular/core';
import {OutingService, OutingView, Team, TeamService} from 'front-end-common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  loading: boolean;
  outings: OutingView[];
  teams: Team[];

  constructor(
    private outingService: OutingService,
    private teamService: TeamService,
  ) {
    this.loading = true;
    this.teamService.loadTeam(2);
  }

  ngOnInit(): void {
    this.outingService.getSessionOuting()
      .subscribe(
        (currentOuting: OutingView) => {
          this.outings = Array.from([currentOuting]);
          this.loading = false;

          this.teams = Array.from([
            this.teamService.getTeam()
          ]);
        }
      );

  }

}
