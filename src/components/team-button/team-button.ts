import {Component, Input} from '@angular/core';
import {TeamView} from "../../pages/home/home";

/**
 * Represents a Team without any assigned members.
 */
@Component({
  selector: 'team-button',
  templateUrl: 'team-button.html'
})
export class TeamButtonComponent {

  @Input() team: TeamView;

  constructor() {}

}
