import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {TeamEditPage} from "../pages/team-edit/team-edit";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ComponentsModule, OutingService} from "front-end-common";
import {InviteComponentsModule} from "../components/components.module";
import {LoaderComponentModule, MemberChipComponentModule} from "front-end-common";
import {AutoCompleteModule} from "../components/auto-complete/auto-complete.module";
import { MemberDataProvider } from '../providers/member-data/member-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TeamEditPage,
  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    ComponentsModule.forRoot(),
    InviteComponentsModule,
    IonicModule.forRoot(MyApp),
    LoaderComponentModule,
    MemberChipComponentModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TeamEditPage,
  ],
  providers: [
    OutingService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MemberDataProvider
  ]
})
export class AppModule {}
