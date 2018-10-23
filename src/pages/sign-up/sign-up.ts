import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms'
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  email;
  password;
  form:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder:FormBuilder) {
    this.form = this.formBuilder.group(
      {name:( ['',[Validators.required]]),
      surname:(['',[Validators.required]]),
      email: (['',[Validators.required]]),
      password:(['',[Validators.required]])
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  Submit(){ 
    firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then( user => {
      this.navCtrl.push('HomePage')
      console.log(user)
    })
  }
}
