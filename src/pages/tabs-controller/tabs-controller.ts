import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GuidelinesPage } from '../guidelines/guidelines';
import { MonitorPage } from '../monitor/monitor';
import { GeneralInformationPage } from '../general-information/general-information';
import { ContactUsPage } from '../contact-us/contact-us';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = GuidelinesPage;
  tab3Root: any = MonitorPage;
  tab4Root: any = GeneralInformationPage;
  tab5Root: any = LoginPage;
  constructor(public navCtrl: NavController) {

  }
  
}
