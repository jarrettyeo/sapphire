import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Interview2Page } from '../interview2/interview2';
import { Interview3Page } from '../interview3/interview3';
import { Interview4Page } from '../interview4/interview4';
import { SummaryPage } from '../summary/summary';
import { MainMenu3Page } from '../main-menu3/main-menu3';
import { MainMenu4Page } from '../main-menu4/main-menu4';
import { MainMenuPage } from '../main-menu/main-menu';
import { MainMenu2Page } from '../main-menu2/main-menu2';
import { ConnectingToRoomCameraPage } from '../connecting-to-room-camera/connecting-to-room-camera';
import { InterviewPage } from '../interview/interview';
import { CandidatesPage } from '../candidates/candidates';

@Component({
  selector: 'page-interview',
  templateUrl: 'interview.html'
})
export class InterviewPage {

  constructor(public navCtrl: NavController) {
  }
  goToInterview2(params){
    if (!params) params = {};
    this.navCtrl.push(Interview2Page);
  }goToInterview3(params){
    if (!params) params = {};
    this.navCtrl.push(Interview3Page);
  }goToInterview4(params){
    if (!params) params = {};
    this.navCtrl.push(Interview4Page);
  }goToSummary(params){
    if (!params) params = {};
    this.navCtrl.push(SummaryPage);
  }goToMainMenu3(params){
    if (!params) params = {};
    this.navCtrl.push(MainMenu3Page);
  }goToMainMenu4(params){
    if (!params) params = {};
    this.navCtrl.push(MainMenu4Page);
  }goToMainMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MainMenuPage);
  }goToMainMenu2(params){
    if (!params) params = {};
    this.navCtrl.push(MainMenu2Page);
  }goToConnectingToRoomCamera(params){
    if (!params) params = {};
    this.navCtrl.push(ConnectingToRoomCameraPage);
  }goToInterview(params){
    if (!params) params = {};
    this.navCtrl.push(InterviewPage);
  }goToCandidates(params){
    if (!params) params = {};
    this.navCtrl.push(CandidatesPage);
  }
}
