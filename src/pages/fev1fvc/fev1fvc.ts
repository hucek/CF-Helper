import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FEV1FVCHistoryPage } from '../fev1fvchistory/fev1fvchistory';

@Component({
  selector: 'page-fev1fvc',
  templateUrl: 'fev1fvc.html'
})
export class FEV1FVCPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToFEV1FVCHistory(params){
    if (!params) params = {};
    this.navCtrl.push(FEV1FVCHistoryPage);
  }
}
