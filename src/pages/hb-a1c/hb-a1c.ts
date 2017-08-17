import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HbA1CHistoryPage } from '../hb-a1chistory/hb-a1chistory';

@Component({
  selector: 'page-hb-a1c',
  templateUrl: 'hb-a1c.html'
})
export class HbA1CPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToHbA1CHistory(params){
    if (!params) params = {};
    this.navCtrl.push(HbA1CHistoryPage);
  }
}
