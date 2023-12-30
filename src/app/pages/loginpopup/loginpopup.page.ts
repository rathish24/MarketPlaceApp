import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from 'src/app/pages/login/login.page';
import { GooglePlaceModule, GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-loginpopup',
  templateUrl: './loginpopup.page.html',
  styleUrls: ['./loginpopup.page.scss'],
})
export class LoginpopupPage implements OnInit {

    
    
    cityName = "";
   
    email="";
    password="";
    
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
  

  
    applyFilter(titleName) {
  
      this.dialogRef.close(titleName);
    }
  
    submit() {
  
    //  console.log(this.name);
      // this.popupModel['filterName'] = this.cityName;
      if(this.email == "" || this.email == undefined){
        this.presentToast("Please enter email");
      }else if(this.password == "" || this.password == undefined){
        this.presentToast("Please enter password");
      
      }else{
  
        let obj = {

          "email" : this.email,
          "password" : this.password
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
  