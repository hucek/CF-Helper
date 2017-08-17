import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BodyMassIndexBMIPage } from '../body-mass-index-bmi/body-mass-index-bmi';
import { BMIHistoryPage } from '../b-mihistory/b-mihistory';
import { FEV1FVCPage } from '../fev1fvc/fev1fvc';
import { FEV1FVCHistoryPage } from '../fev1fvchistory/fev1fvchistory';
import { HbA1CPage } from '../hb-a1c/hb-a1c';
import { HbA1CHistoryPage } from '../hb-a1chistory/hb-a1chistory';
import { FoodIntakePage } from '../food-intake/food-intake';
import { FoodIntakeCaloriesHistoryPage } from '../food-intake-calories-history/food-intake-calories-history';

@Component({
  selector: 'page-monitor',
  templateUrl: 'monitor.html'
})
export class MonitorPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToBodyMassIndexBMI(params){
    if (!params) params = {};
    this.navCtrl.push(BodyMassIndexBMIPage);
  }goToBMIHistory(params){
    if (!params) params = {};
    this.navCtrl.push(BMIHistoryPage);
  }goToFEV1FVC(params){
    if (!params) params = {};
    this.navCtrl.push(FEV1FVCPage);
  }goToFEV1FVCHistory(params){
    if (!params) params = {};
    this.navCtrl.push(FEV1FVCHistoryPage);
  }goToHbA1C(params){
    if (!params) params = {};
    this.navCtrl.push(HbA1CPage);
  }goToHbA1CHistory(params){
    if (!params) params = {};
    this.navCtrl.push(HbA1CHistoryPage);
  }goToFoodIntake(params){
    if (!params) params = {};
    this.navCtrl.push(FoodIntakePage);
  }goToFoodIntakeCaloriesHistory(params){
    if (!params) params = {};
    this.navCtrl.push(FoodIntakeCaloriesHistoryPage);
  }
}
