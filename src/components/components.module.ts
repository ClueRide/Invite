import {NgModule} from '@angular/core';
import {ExpandedTeamComponent} from './expanded-team/expanded-team';
import {TeamNameFormComponent} from './team-name-form/team-name-form';
import {ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "ionic-angular";
import { ExpandableTeamComponent } from './expandable-team/expandable-team';
import {MemberChipComponentModule} from "front-end-common";
import { TeamButtonComponent } from './team-button/team-button';

@NgModule({
  declarations: [
    ExpandedTeamComponent,
    TeamNameFormComponent,
    ExpandableTeamComponent,
    TeamButtonComponent,
  ],
  imports: [
    ReactiveFormsModule,
    IonicModule,
    MemberChipComponentModule,
  ],
  exports: [
    ExpandedTeamComponent,
    TeamNameFormComponent,
    ExpandableTeamComponent,
    TeamButtonComponent,
  ]
})
export class InviteComponentsModule {}
