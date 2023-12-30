import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from 'src/app/pages/login/login.page';
import { GooglePlaceModule, GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-signuppopup',
  templateUrl: './signuppopup.page.html',
  styleUrls: ['./signuppopup.page.scss'],
})
export class SignuppopupPage implements OnInit {

  genderArray = [
    {
      "id": "0",
      "value": "male",
      "name": "Male"
    },
    {
      "id": "1",
      "value": "female",
      "name": "Female"
    }
  ];
  
  cityName = "";
  name="";
  email="";
  password="";
  gender: any = "male";
  confirmPassword="";
  postStatus : any;
  addressModel : any ={};
  getFilterName = "";
  popupModel: any = {};
  selectedRadioGroup: any;


  constructor(
    public dialogRef: MatDialogRef<LoginPage>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public changeDetectorRef : ChangeDetectorRef,
    public toast : ToastController
  ) { }

  ngOnInit() {
    let getCityName = localStorage.getItem('cityname');
    if(getCityName == "undefined" || getCityName == "" || getCityName == null){
      this.popupModel['filterName'] = "";
    }else{
     this.cityName = getCityName;
    }
  }

  closeDialog() {
   let city =  localStorage.getItem("cityname");
   if(city== undefined || city == "" || city == null){
     let cityname = "";
    localStorage.setItem("cityname",cityname);
    this.dialogRef.close(city);
   }else{
    localStorage.setItem("cityname",city);
    this.dialogRef.close(city);
   }
  }

  radioGroupChange(event) {
    console.log("radioGroupChange", event.detail.value);
    this.selectedRadioGroup = event.detail.value;
    if (this.selectedRadioGroup == 'male') {
     
      this.gender = "male";
    } else if (this.selectedRadioGroup == 'female') {
     
      this.gender = "female";
    } 
  }


  applyFilter(titleName) {

    this.dialogRef.close(titleName);
  }

  submit() {

  //  console.log(this.name);
    // this.popupModel['filterName'] = this.cityName;
    if(this.name == "" || this.name == undefined){
      this.presentToast("Please enter name");
    }else if(this.email == "" || this.email == undefined){
      this.presentToast("Please enter email");
    }else if(this.password == "" || this.password == undefined){
      this.presentToast("Please enter password");
    }else if(this.confirmPassword == "" || this.confirmPassword == undefined){
      this.presentToast("Please enter confirm password");
    }else if(this.confirmPassword != this.password){
      this.presentToast("Password and confirm password is not matching");
    }else{


      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
      console.log(this.confirmPassword);
    //  console.log(this.name);
     
      let obj = {
        "name" : this.name,
        "email" : this.email,
        "password" : this.password,
        "confirmPassword" : this.confirmPassword,
        "gender" :this.gender
      }

      console.log("my signup obj",""+obj);
      this.dialogRef.close(obj);
    }
   
  }


  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }
 

}
