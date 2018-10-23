import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  name;
  email;
  picture;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get("name");
    this.email = navParams.get("email");
    this.picture = navParams.get("picture");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  SignOut(){
    firebase.auth().signOut().then(() => {
     this.navCtrl.push("HomePage");
    })
  }
}
