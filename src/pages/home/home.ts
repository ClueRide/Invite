import {Component, OnInit} from '@angular/core';
import {OutingService, OutingView, Team, TeamService} from 'front-end-common';
import {from} from "rxjs/observable/from";
import {ItemSliding, ModalController, NavController} from "ionic-angular";
import {TeamEditPage} from "../team-edit/team-edit";

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

  busy: boolean;
  outings: OutingView[];
  teams: TeamView[];

  constructor(
    private outingService: OutingService,
    private teamService: TeamService,
    private modalController: ModalController,
    private navCtrl: NavController,
  ) {
    this.busy = true;
  }

  ngOnInit(): void {
    this.outingService.getSessionOuting()
      .subscribe(
        (currentOuting: OutingView) => {
          this.outings = Array.from([currentOuting]);
          this.busy = false;

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

  addTeam(): void {
    this.modalController.create(
      'NewTeamModalPage'
    ).present()
      .catch(
        (err) => console.error("Failure in presenting New Team Modal", err)
      );
  }

  editTeam(
    id: number,
    teamSlider: ItemSliding
  ): void {
    teamSlider.close();
    this.navCtrl.push(
      TeamEditPage,
      {
        teamId: id
      }
    ).catch((reason: any) => console.error('Unable to open Team Edit page', reason)
    );
  }

}
