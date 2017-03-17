import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
declare let cordova: any;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  open(){
    alert(1);
    cordova.plugins.WPlugin.coolMethod('coolMethod',function(msg){
    alert(2);
	
   cordova.plugins.WPlugin.helloMethod('hello');
},function(msg){
 alert(3);
})
  }
}
