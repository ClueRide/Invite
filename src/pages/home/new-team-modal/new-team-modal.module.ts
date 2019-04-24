import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTeamModalPage } from './new-team-modal';
import {InviteComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    NewTeamModalPage,
  ],
  imports: [
    InviteComponentsModule,
    IonicPageModule.forChild(NewTeamModalPage),
  ],
})
export class NewTeamModalPageModule {}
