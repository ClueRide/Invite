import {Component} from '@angular/core';
import {IonicPage, ViewController} from 'ionic-angular';
import {TeamService, Team} from "front-end-common";

/**
 * Presents dialog for entering a new team's name.
 */
@IonicPage()
@Component({
  selector: 'page-new-team-modal',
  templateUrl: 'new-team-modal.html',
})
export class NewTeamModalPage {

  constructor(
    private viewController: ViewController,
    private teamService: TeamService,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTeamModalPage');
  }

  createTeam($event: string) {
    console.log('creating new team for ', $event);
    this.teamService.createTeam($event)
      .subscribe(
        (team: Team) => {
          console.log("what do we do here?");
        }
      );

    this.viewController.dismiss()
      .catch(
        (err) => console.error("Failure in closing New Team Modal", err)
      );
  }

}
