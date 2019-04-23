import {Component, OnInit} from '@angular/core';
import {OutingService, OutingView, Team, TeamService} from 'front-end-common';
import {from} from "rxjs/observable/from";

export class TeamView extends Team {

  expanded: boolean;

  constructor(team: Team) {
    super();
    this.expanded = false;
    this.id = team.id;
    this.members = team.members;
    this.name = team.name;
  }

}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  loading: boolean;
  outings: OutingView[];
  teams: TeamView[];

  constructor(
    private outingService: OutingService,
    private teamService: TeamService,
  ) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.outingService.getSessionOuting()
      .subscribe(
        (currentOuting: OutingView) => {
          this.outings = Array.from([currentOuting]);
          this.loading = false;

          this.teamService.getTeams()
            .subscribe(
              (teams) => {
                this.teams = [];
                from(teams).subscribe(
                  (team) => this.teams.push(new TeamView(team))
                );
              }
            );

        }
      );

  }

  toggleExpansion(team: TeamView): void {
    team.expanded = !team.expanded;
  }

}
