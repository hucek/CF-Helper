import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhamaciesPage } from '../phamacies/phamacies';
import { MedicinesPage } from '../medicines/medicines';
import { ClinicsPage } from '../clinics/clinics';
import { DoctorsPage } from '../doctors/doctors';
import { DiagnosticsPage } from '../diagnostics/diagnostics';

@Component({
  selector: 'page-general-information',
  templateUrl: 'general-information.html'
})
export class GeneralInformationPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToPhamacies(params){
    if (!params) params = {};
    this.navCtrl.push(PhamaciesPage);
  }goToMedicines(params){
    if (!params) params = {};
    this.navCtrl.push(MedicinesPage);
  }goToClinics(params){
    if (!params) params = {};
    this.navCtrl.push(ClinicsPage);
  }goToDoctors(params){
    if (!params) params = {};
    this.navCtrl.push(DoctorsPage);
  }goToDiagnostics(params){
    if (!params) params = {};
    this.navCtrl.push(DiagnosticsPage);
  }
}
