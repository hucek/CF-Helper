import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-food-intake-calories-history',
  templateUrl: 'food-intake-calories-history.html'
})
export class FoodIntakeCaloriesHistoryPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
