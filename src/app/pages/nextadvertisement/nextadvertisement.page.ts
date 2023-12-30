import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nextadvertisement',
  templateUrl: './nextadvertisement.page.html',
  styleUrls: ['./nextadvertisement.page.scss'],
})
export class NextadvertisementPage implements OnInit {

  firstImage = "";
  secondImage = "";
  thirdImage = "";
  fourthImage = "";
  fifthImage = "";
  getData: any;
  getNextData : any;
  selectedLanguages: any;
  fileToUpload
  profilePic: any;
  urls = [];
  advertisementModel: any = {};
  languagesArray = [];
  imageUrl = 0;

  address: any;
  lattitude: any;
  longitude: any;
  countryName: any;
  stateName: any;
  cityName: any;
  pincode: any;
  postStatus : any;
  advertisementObject = {};


  constructor(
    public activatedRoute: ActivatedRoute,
    public loader: LoaderService,
    public router : Router,
    public changeDetectorRef : ChangeDetectorRef,
    public toast : ToastController,
    public apiCall: ApiService) { }



  languageArray = [
    { id: 1, name: "English" },
    { id: 2, name: "Hindi" },
    { id: 3, name: "Marathi" },
    { id: 4, name: "Gujrati" },
    { id: 5, name: "Bangali" }
  ]
  ngOnInit() {
    this.getData = JSON.parse(this.activatedRoute.snapshot.params['advertisementData']);
    console.log("next advertisement data:" + (this.getData.title));
    this.postStatus = localStorage.getItem("postStatus");
    if(this.postStatus == "1"){
      var advertisementDetail = localStorage.getItem("ADVERTISEMENTDATA");
      this.advertisementObject = JSON.parse(advertisementDetail);
      console.log("advertisementObject:" +this.advertisementObject['address']);

      this.advertisementModel['address'] = this.advertisementObject['address'];
      this.advertisementModel['price'] = this.advertisementObject['price'];
      this.advertisementModel['images'] = this.advertisementObject['images'];
      this.lattitude = this.advertisementObject['latitude'];
      this.longitude = this.advertisementObject['longitude'];
      
      this.urls = [];
      // for(let i= 0;i < this.advertisementModel['images'].length; i++){
        if(this.advertisementModel['images'][0] == undefined){
          this.firstImage = "";
        }else{
        this.firstImage = this.advertisementModel['images'][0];
        this.urls.push(this.firstImage);

        }

        if(this.advertisementModel['images'][1] == undefined){
          this.secondImage = "";
        }else{
        this.secondImage = this.advertisementModel['images'][1];
        this.urls.push(this.secondImage);

        }

        if(this.advertisementModel['images'][2] == undefined){
          this.thirdImage = "";
        }else{
        this.thirdImage = this.advertisementModel['images'][2];
        this.urls.push(this.thirdImage);

        }

        if(this.advertisementModel['images'][3] == undefined){
          this.fourthImage = "";
        }else{
        this.fourthImage = this.advertisementModel['images'][3];
        this.urls.push(this.fourthImage);

        }

        if(this.advertisementModel['images'][4] == undefined){
          this.fifthImage = "";
        }else{
        this.fifthImage = this.advertisementModel['images'][4];
        this.urls.push(this.fifthImage);

        }
        // this.secondImage = this.advertisementModel['images'][1];
        // this.thirdImage = this.advertisementModel['images'][2];
        // this.fourthImage = this.advertisementModel['images'][3];
        // this.fifthImage = this.advertisementModel['images'][4];
      // }

      console.log("first image:"+this.firstImage);
      console.log("secondImage image:"+this.secondImage);
      console.log("thirdImage image:"+this.thirdImage);
      console.log("fourthImage image:"+this.fourthImage);
      console.log("fifthImage image:"+this.fifthImage);

    }
  }

  goBackword() {
    window.history.back();
  }

  detectEventGallery(event, index) {
    this.loader.showBlockingLoaderAuth();
    console.log(event);
    let files = event.target.files;
    console.log(files);
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
        }
        console.log(file);
        this.fileToUpload = file;
        reader.readAsDataURL(this.fileToUpload);
      }
      if(index == 0){
        this.handleFirstFileInput(this.fileToUpload);
      }else if(index == 1){
        this.handleSecondFileInput(this.fileToUpload); 
      }else if(index == 2){
        this.handleThirdFileInput(this.fileToUpload);
      }else if(index == 3){
        this.handleFourthFileInput(this.fileToUpload);
      }else if(index == 4){
        this.handleFifthFileInput(this.fileToUpload);
      }else{
       
      }
    

    }
    console.log("file uploaded::" + JSON.stringify(this.fileToUpload));
  }


  handleFirstFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
    // let url = "http://3.6.135.154:9000/api/" + "upload-image";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        // this.urls.push(MyResponse['result'][0])
        this.urls[0]= MyResponse['result'][0];
      
        if (this.urls.length > 4) {
          this.imageUrl = 0;
        } else {
          this.imageUrl = 1;
        }
        this.loader.hideBlockingLoaderAuth();
        this.firstImage = MyResponse['result'][0];
        console.log("print url resonce:" + this.firstImage);
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        console.log(error);

      }
    );
  }

  handleSecondFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
    // let url = "http://3.6.135.154:9000/api/" + "upload-image";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        // this.urls.push(MyResponse['result'][0])
        this.urls[1]= MyResponse['result'][0];
        if (this.urls.length > 4) {
          this.imageUrl = 0;
        } else {
          this.imageUrl = 1;
        }
        this.loader.hideBlockingLoaderAuth();
        this.secondImage = MyResponse['result'][0];
        console.log("print url secondImage:" + this.secondImage);
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        console.log(error);

      }
    );
  }

  handleThirdFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
    // let url = "http://3.6.135.154:9000/api/" + "upload-image";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {
        this.urls[2]= MyResponse['result'][0];
        // this.urls.push(MyResponse['result'][0])
       
        if (this.urls.length > 4) {
          this.imageUrl = 0;
        } else {
          this.imageUrl = 1;
        }
        this.loader.hideBlockingLoaderAuth();
        this.thirdImage = MyResponse['result'][0];
        console.log("print url thirdImage:" + this.thirdImage);
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        console.log(error);

      }
    );
  }

  handleFourthFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
    // let url = "http://3.6.135.154:9000/api/" + "upload-image";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        // this.urls.push(MyResponse['result'][0])
        this.urls[3]= MyResponse['result'][0];
        if (this.urls.length > 4) {
          this.imageUrl = 0;
        } else {
          this.imageUrl = 1;
        }
        this.loader.hideBlockingLoaderAuth();
        this.fourthImage = MyResponse['result'][0];
        console.log("print url fourthImage:" + this.fourthImage);
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        console.log(error);

      }
    );
  }

  handleFifthFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
    // let url = "http://3.6.135.154:9000/api/" + "upload-image";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        // this.urls.push(MyResponse['result'][0])
        this.urls[4]= MyResponse['result'][0];
        if (this.urls.length > 4) {
          this.imageUrl = 0;
        } else {
          this.imageUrl = 1;
        }
        this.loader.hideBlockingLoaderAuth();
        this.fifthImage = MyResponse['result'][0];
        console.log("print url fifthImage:" + this.fifthImage);
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        console.log(error);

      }
    );
  }


  selectedChanged(selectedLanguage) {
    // alert("selectedLanguage:"+JSON.stringify(selectedLanguage));
    this.languagesArray = (selectedLanguage);
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }
  next(){
    
    if(this.urls.length == 0) {
     this.presentToast("Please upload images");
    }else {
      this.getNextData = {
        "title": this.getData.title,
      "description": this.getData.description,
      "lattitude": this.lattitude,
      "longitude": this.longitude,
      "address": this.advertisementModel['address'],
      "gender": this.getData.gender,
      "languages": this.getData.languages,
      "email": this.getData.email,
      "categoryId": this.getData.categoryId,
      "price" : this.advertisementModel['price'],
      "contact" : this.getData.contact,
      "images" : this.urls,
      "countryCode" : this.getData.countryCode
  
      }
  // alert("show data:"+this.getNextData);
      this.router.navigate(['/secondpageadvertisement' , { FinalObject : JSON.stringify(this.getNextData)}])
    }
   

  }


  // "lattitude": this.lattitude,
  // "longitude": this.longitude,
  // "address": this.address,

  handleAddressChange(data) {

    console.log("Address Data", data);

    this.lattitude = data.geometry.location.lat();
    this.longitude = data.geometry.location.lng();
    console.log("Address Data lattitude one::", this.lattitude);
    console.log("Address Data longitude one::", this.longitude);


    console.log("lat", this.lattitude, this.longitude);
    let string = "";
    string = data['formatted_address']
    let arr = [];
    let str = "";
    let ss = [];
    arr = string.split(",");
    for (let index = arr.length - 1; index >= 0; index--) {
      console.log(index, "data ", arr[index]);
      this.advertisementModel['landmark'] = arr[2];
      this.advertisementModel['address'] = data.vicinity;
      this.advertisementModel['location'] = data.name;
      this.countryName = arr[arr.length - 1] != null ? arr[arr.length - 1] : "";
      str = arr[arr.length - 2] != null ? arr[arr.length - 2] : "";
      let statestr = str.split(' ');
      ss = statestr;
      this.stateName = ss[1];
      this.pincode = ss[2];
      this.cityName = arr[arr.length - 3] != null ? arr[arr.length - 3] : "";
      this.changeDetectorRef.detectChanges();

    }
    console.log(this.cityName, this.stateName, this.countryName, this.pincode, this.advertisementModel['landmark'], this.advertisementModel['location']);
    this.address = this.advertisementModel['landmark'], this.advertisementModel['location'], this.cityName, this.countryName, this.pincode;
  }


  openChatList(){
    this.router.navigate(['/chatlist']);
  }

  postAdvertisement(){
    this.router.navigate(['/postadvertisement']);
    // this.router.navigate(['/secondpageadvertisement']);
  }

  home(){
    this.router.navigate(['/home']);
  }

  openFavourite(){
    this.router.navigate(['/favourite']);
  }

  openProfile(){
    this.router.navigate(['/profile']);
  }
  
}
