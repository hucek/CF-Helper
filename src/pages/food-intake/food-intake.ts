import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodIntakeCaloriesHistoryPage } from '../food-intake-calories-history/food-intake-calories-history';

@Component({
  selector: 'page-food-intake',
  templateUrl: 'food-intake.html'
})
export class FoodIntakePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToFoodIntakeCaloriesHistory(params){
    if (!params) params = {};
    this.navCtrl.push(FoodIntakeCaloriesHistoryPage);
  }
}
