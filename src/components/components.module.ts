import {NgModule} from '@angular/core';
import {ExpandedTeamComponent} from './expanded-team/expanded-team';
import {TeamNameFormComponent} from './team-name-form/team-name-form';
import {ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "ionic-angular";

@NgModule({
  declarations: [
    ExpandedTeamComponent,
    TeamNameFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [
    ExpandedTeamComponent,
    TeamNameFormComponent,
  ]
})
export class InviteComponentsModule {}
