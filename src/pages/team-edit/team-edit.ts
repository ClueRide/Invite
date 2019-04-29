import {Component, EventEmitter, Output} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {Team, TeamService} from "front-end-common";
import {MemberDataProvider} from "../../providers/member-data/member-data";

/**
 * Presents the team for the given ID and permits adding / deleting members.
 *
 * Probably will permit editing the name too, but not at this point.
 */

@IonicPage()
@Component({
  selector: 'page-team-edit',
  templateUrl: 'team-edit.html',
})
export class TeamEditPage {

  @Output() team: EventEmitter<Team>;

  /* Public properties. */
  busy: boolean;
  teamToEdit: Team = {
    id: null,
    name: '',
    members: []
  };

  constructor(
    public memberDataProvider: MemberDataProvider,
    private teamService: TeamService,
    navParams: NavParams,
  ) {
    this.busy = true;
    this.team = new EventEmitter<Team>();

    /* Retrieve the team we're editing. */
    this.teamService.getTeamById(navParams.get("teamId"))
      .subscribe(
        (team: Team) => {
          this.teamToEdit = team;
          this.busy = false;
        }
      );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamEditPage');
  }

  onItemSelected($event: any) {
    this.teamToEdit.members.push($event);
  }

}
