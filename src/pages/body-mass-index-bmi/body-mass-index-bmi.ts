import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BMIHistoryPage } from '../b-mihistory/b-mihistory';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-body-mass-index-bmi',
  templateUrl: 'body-mass-index-bmi.html'
})
export class BodyMassIndexBMIPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  private bodyMassIndexBMI : FormGroup;
  
  constructor(private storage: Storage, private  formBuilder: FormBuilder , public navCtrl: NavController) {
    this.bodyMassIndexBMI = this.formBuilder.group({
      height: ['' , Validators.required],
      weight: ['', Validators.required],
    });

     //storage.set('name', 'Max');
  }
  goToBMIHistory(params){
    if (!params) params = {};
    this.navCtrl.push(BMIHistoryPage);
  }

  goToBMIAdd(){

  var formdata = this.bodyMassIndexBMI.value;

   //Convert all units to metric
        var   height=formdata.height/39.3700787;
        var  weight= formdata.weight/2.20462;


       var d = new Date();
       var n = d.toLocaleTimeString();

        //Perform calculation
        var BMI=weight/Math.pow(height,2);
        var BMI_input;
        let data: string ;

        this.storage.get('BMI').then((val) => {
          BMI_input =  val;
        });

        setTimeout(() => {
  
          if(BMI_input != undefined){
            data = BMI_input + n + "," + BMI + ",";
          }else{
            data = n + "," + BMI + ",";
          }

          console.log("Data",data);

          this.storage.set('BMI', BMI);

        this.storage.get('BMI').then((val) => {
          console.log('Your age is', val);
        });
        
    }, 100);

       


 
      
  }


}
