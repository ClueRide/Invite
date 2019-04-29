import {Component, Input} from '@angular/core';
import {TeamView} from "../../pages/home/home";

/**
 * Presents a Team with members as an accordion that expands to show the members.
 */
@Component({
  selector: 'expandable-team',
  templateUrl: 'expandable-team.html'
})
export class ExpandableTeamComponent {

  @Input() team: TeamView;

  constructor() {
    console.log('Hello ExpandableTeamComponent Component');
  }

  toggleExpansion(team: TeamView): void {
    team.expanded = !team.expanded;
  }

}
