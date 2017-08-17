import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-b-mihistory',
  templateUrl: 'b-mihistory.html'
})
export class BMIHistoryPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(private storage: Storage,public navCtrl: NavController) {
  		let data: string ;
		this.storage.get('BMI').then((val) => {
          data = val;
        });


       setTimeout(() => {
       		this.init(data);
       		console.log('History Data is ', data);
		}, 100);


        console.log('Your BMI is', this.lineChartData);

  }

  private parseDate(data){
  	var str_array = data.split(','); 
  	var z = 0;
	for(var i = 0; i < str_array.length; i++) {
	   // Trim the excess whitespace.
	   if(z == 0){
	   	str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
	   	
	   }else{
	   	z = 0;
	   }
	   
	   // Add additional code here, such as:
	   i++;
	}
	return str_array;
  }

 

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 0], label: 'BMI'},
  ];
  public lineChartLabels:Array<any> = ['11th Aug','12th Aug','13th Aug', '14th Aug', '15th Aug', '16th Aug'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public init(data):void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
   _lineChartData[0] =15.5;
   _lineChartData[1] =16.5;
   _lineChartData[2] =20.1;
   _lineChartData[3] =14.4;
   _lineChartData[4] =17.5;
   _lineChartData[5] =data;
 console.log("rrrrrrrrrrrr", data);
    this.lineChartData = _lineChartData; 
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
}
