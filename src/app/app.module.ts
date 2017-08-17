import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GuidelinesPage } from '../pages/guidelines/guidelines';
import { MonitorPage } from '../pages/monitor/monitor';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { GeneralInformationPage } from '../pages/general-information/general-information';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { VitaminsMineralsPage } from '../pages/vitamins-minerals/vitamins-minerals';
import { EnzymesPage } from '../pages/enzymes/enzymes';
import { CaloriesPage } from '../pages/calories/calories';
import { BodyMassIndexBMIPage } from '../pages/body-mass-index-bmi/body-mass-index-bmi';
import { FEV1FVCPage } from '../pages/fev1fvc/fev1fvc';
import { HbA1CPage } from '../pages/hb-a1c/hb-a1c';
import { FoodIntakePage } from '../pages/food-intake/food-intake';
import { FEV1FVCHistoryPage } from '../pages/fev1fvchistory/fev1fvchistory';
import { HbA1CHistoryPage } from '../pages/hb-a1chistory/hb-a1chistory';
import { BMIHistoryPage } from '../pages/b-mihistory/b-mihistory';
import { FoodIntakeCaloriesHistoryPage } from '../pages/food-intake-calories-history/food-intake-calories-history';
import { PhamaciesPage } from '../pages/phamacies/phamacies';
import { MedicinesPage } from '../pages/medicines/medicines';
import { ClinicsPage } from '../pages/clinics/clinics';
import { DoctorsPage } from '../pages/doctors/doctors';
import { DiagnosticsPage } from '../pages/diagnostics/diagnostics';
import { ChartsModule } from 'ng2-charts';


import { HttpModule } from '@angular/http';

import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GuidelinesPage,
    MonitorPage,
    TabsControllerPage,
    GeneralInformationPage,
    ContactUsPage,
    LoginPage,
    SignupPage,
    VitaminsMineralsPage,
    EnzymesPage,
    CaloriesPage,
    BodyMassIndexBMIPage,
    FEV1FVCPage,
    HbA1CPage,
    FoodIntakePage,
    FEV1FVCHistoryPage,
    HbA1CHistoryPage,
    BMIHistoryPage,
    FoodIntakeCaloriesHistoryPage,
    PhamaciesPage,
    MedicinesPage,
    ClinicsPage,
    DoctorsPage,
    DiagnosticsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GuidelinesPage,
    MonitorPage,
    TabsControllerPage,
    GeneralInformationPage,
    ContactUsPage,
    LoginPage,
    SignupPage,
    VitaminsMineralsPage,
    EnzymesPage,
    CaloriesPage,
    BodyMassIndexBMIPage,
    FEV1FVCPage,
    HbA1CPage,
    FoodIntakePage,
    FEV1FVCHistoryPage,
    HbA1CHistoryPage,
    BMIHistoryPage,
    FoodIntakeCaloriesHistoryPage,
    PhamaciesPage,
    MedicinesPage,
    ClinicsPage,
    DoctorsPage,
    DiagnosticsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}