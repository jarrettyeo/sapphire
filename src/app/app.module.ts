import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PagePage } from '../pages/page/page';
import { MainMenuPage } from '../pages/main-menu/main-menu';
import { CandidatesPage } from '../pages/candidates/candidates';
import { MainMenu2Page } from '../pages/main-menu2/main-menu2';
import { ConnectingToRoomCameraPage } from '../pages/connecting-to-room-camera/connecting-to-room-camera';
import { InterviewPage } from '../pages/interview/interview';
import { Interview2Page } from '../pages/interview2/interview2';
import { Interview3Page } from '../pages/interview3/interview3';
import { Interview4Page } from '../pages/interview4/interview4';
import { SummaryPage } from '../pages/summary/summary';
import { MainMenu3Page } from '../pages/main-menu3/main-menu3';
import { MainMenu4Page } from '../pages/main-menu4/main-menu4';
import { SplashscreenPage } from '../pages/splashscreen/splashscreen';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PagePage,
    MainMenuPage,
    CandidatesPage,
    MainMenu2Page,
    ConnectingToRoomCameraPage,
    InterviewPage,
    Interview2Page,
    Interview3Page,
    Interview4Page,
    SummaryPage,
    MainMenu3Page,
    MainMenu4Page,
    SplashscreenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PagePage,
    MainMenuPage,
    CandidatesPage,
    MainMenu2Page,
    ConnectingToRoomCameraPage,
    InterviewPage,
    Interview2Page,
    Interview3Page,
    Interview4Page,
    SummaryPage,
    MainMenu3Page,
    MainMenu4Page,
    SplashscreenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}