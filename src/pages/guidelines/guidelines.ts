import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VitaminsMineralsPage } from '../vitamins-minerals/vitamins-minerals';
import { CaloriesPage } from '../calories/calories';
import { EnzymesPage } from '../enzymes/enzymes';

@Component({
  selector: 'page-guidelines',
  templateUrl: 'guidelines.html'
})
export class GuidelinesPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToVitaminsMinerals(params){
    if (!params) params = {};
    this.navCtrl.push(VitaminsMineralsPage);
  }goToCalories(params){
    if (!params) params = {};
    this.navCtrl.push(CaloriesPage);
  }goToEnzymes(params){
    if (!params) params = {};
    this.navCtrl.push(EnzymesPage);
  }
}
