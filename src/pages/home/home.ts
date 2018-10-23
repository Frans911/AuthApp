import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup,FormBuilder,Validators} from '@angular/forms'
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  email;
  password;
  form:FormGroup;

  account = {
    name:'',
    email:'',
    picture:''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder:FormBuilder) {
    this.form = this.formBuilder.group(
      {email: ['',[Validators.required]],
      password:['',[Validators.minLength(10)]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  SignIn(){ 
    firebase.auth().signInWithEmailAndPassword(this.email,this.password).then( user => {
      
      this.navCtrl.push('MainPage')
    })
  }
  SignUp(){
    this.navCtrl.push('SignUpPage')
  }
  googleSignIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then( (user) =>{
   this.account.name = user.displayName;
   this.account.email = user.email;
   this.account.picture = user.photoURL;
   console.log(user)
    this.navCtrl.push("MainPage",{name:this.account.name,email:this.account.email,picture:this.account.picture})
    })
  }
}
