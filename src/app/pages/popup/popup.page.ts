import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomePage } from 'src/app/home/home.page';
import { GooglePlaceModule, GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Platform, ToastController } from '@ionic/angular';
import { NativeGeocoderOptions, NativeGeocoderResult, NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

 
@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {
  @ViewChild("placesRef", {static: false}) placesRef : GooglePlaceDirective;
  address: any;
  lattitude: any;
  longitude: any;
  countryName: any;
  stateName: any;
  cityName = "";
  pincode: any;
  postStatus : any;
  addressModel : any ={};
  getFilterName = "";
  popupModel: any = {};
  onlyCityName: any;
  distance = "0";
  addressControl:any  = "";
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
};

  constructor(
    public dialogRef: MatDialogRef<HomePage>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public changeDetectorRef : ChangeDetectorRef,
    public toast : ToastController,
    public nativeGeocoder: NativeGeocoder,
    public geolocation: Geolocation,
    private platform: Platform,
    private permission : AndroidPermissions,
    private locationAccuracy: LocationAccuracy
  ) { }

  ngOnInit() {
    this.chckAppGpsPermission()
    let getCityName = localStorage.getItem('cityname');
    let getDistace = localStorage.getItem('distance');
    console.log("This is city name i changed" ,getCityName)
    if(getCityName == "undefined" || getCityName == "" || getCityName == null){
      this.popupModel['filterName'] = "";
    }else{
     this.cityName = getCityName;
     this.distance = getDistace
    }
  }


  chckAppGpsPermission() {
    this.permission.checkPermission(this.permission.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        console.log(1)
        if (result.hasPermission) {
          this.requestToSwitchOnGPS()
        } else {
          this.askGPSPermission();
        } 
      },
      err => {
        console.log(err)
      }
    );
  }

  askGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      console.log(2);
      
      if (canRequest) {
      } else {
        this.permission.requestPermission(this.permission.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              this.requestToSwitchOnGPS()
            },
            error => {
              console.log(error)
            }
          );
      }
    });
  }

  requestToSwitchOnGPS() {
    console.log(3);
    
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        this.getLocation();
      },
      error => alert(JSON.stringify(error))
    );
  }

  getLocation() {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.lattitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
          console.log("whole data"+ resp);
       
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }

  clicklocation(){
    this.getLocation();
    this.nativeGeocoder.reverseGeocode(this.lattitude,this.longitude,this.options)
    .then((result : NativeGeocoderResult[])=>{
      console.log(JSON.stringify(result[0]))
      console.log(result[0].locality + result[0].subAdministrativeArea + result[0].administrativeArea +result[0].countryName+result[0].postalCode);
      let addres = result[0].locality + ", " + result[0].subAdministrativeArea + ", " + result[0].administrativeArea + ", " + result[0].countryName+ " - " + result[0].postalCode+ ".";
    
      this.addressControl = addres 
      console.log(this.addressControl,"This is address.........reverse")
      
      this.cityName = this.addressControl
      this.onlyCityName = result[0].locality
      console.log(this.onlyCityName,"This is locally")
    }).catch(err =>{console.log(err)})
  }

  rangeChange(event : any){
    console.log(event.detail.value)
    let dis = event.detail.value
    this.distance= dis

  }
  closeDialog() {
  //  let city =  localStorage.getItem("cityname");
  //  let distance = localStorage.getItem('distance');
  //  console.log("This is what happen when i touch cancel" , city)
  //  if(city== undefined || city == "" || city == null){
  //    let cityname = "";
  //   localStorage.setItem("cityname",cityname);
  //   let obj = {
  //     "city_name" : "",
  //     "latitude" : 0,
  //     "longitude" :0,
  //      "distance" :0
  //   }
  //   this.dialogRef.close(obj);
  //  }else{
  //   localStorage.setItem("cityname",city);
  //   // localStorage.setItem("distance",distance)
  //   let obj = {
  //     "city_name" : city,
  //     "latitude" : 0,
  //     "longitude":0,
  //      "distance":distance
  //   }
    this.dialogRef.close();
  //  }
  }


  applyFilter(titleName) {

    this.dialogRef.close(titleName);
  }

  submit() {
    // this.popupModel['filterName'] = this.cityName;
    if(this.onlyCityName == null){
      let arr = [];
      arr = this.cityName.split(",");
      for (let index = arr.length - 1; index >= 0; index--) {
       this.onlyCityName  = arr[arr.length - 3] != null ? arr[arr.length - 3] : "";           //arr[arr.length - 3] != null ? arr[arr.length - 3] : ""
      }
    }
   
    console.log("This is city name after clicking submmit",this.onlyCityName)
    if(this.cityName == "" || this.cityName == undefined){
      // this.presentToast("Please enter city name");
    }else{
      localStorage.setItem("cityname",this.onlyCityName);
      localStorage.setItem('distance',this.distance)
      let obj = {
        "city_name" : this.onlyCityName,
        "latitude" : this.lattitude,
        "longitude" : this.longitude,
        "distance" :this.distance
      }
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
  handleAddressChange(data) {

    console.log("Address Dataddddddddddddddddddddddddd", data);

    this.lattitude = data.geometry.location.lat();
    this.longitude = data.geometry.location.lng();
    console.log("Address Data lattitude one::", this.lattitude);
    console.log("Address Data longitude one::", this.longitude);


    console.log("lat", this.lattitude, this.longitude);
    let string = "";
    string = data['formatted_address']
    console.log("This is full data we get form google",string)
    let arr = [];
    let str = "";
    let ss = [];
    arr = string.split(",");
    for (let index = arr.length - 1; index >= 0; index--) {
      console.log(index, "data ", arr[index]);
      this.addressModel['landmark'] = arr[2];
      this.addressModel['address'] = data.vicinity;
      this.addressModel['location'] = data.name;
      this.countryName = arr[arr.length - 1] != null ? arr[arr.length - 1] : "";
      str = arr[arr.length - 2] != null ? arr[arr.length - 2] : "";
      let statestr = str.split(' ');
      ss = statestr;
      this.stateName = ss[1];
      this.pincode = ss[2];
      this.cityName = string; 
      this.onlyCityName = arr[arr.length - 3] != null ? arr[arr.length - 3] : "";
      this.changeDetectorRef.detectChanges();

    }
    console.log(this.cityName, this.stateName, this.countryName, this.pincode, this.addressModel['landmark'], this.addressModel['location']);
    this.address = this.addressModel['landmark'], this.addressModel['location'], this.cityName, this.countryName, this.pincode;
  }

}
