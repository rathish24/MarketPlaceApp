import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, NgModel, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-postadvertisement',
  templateUrl: './postadvertisement.page.html',
  styleUrls: ['./postadvertisement.page.scss'],
})
export class PostadvertisementPage implements OnInit {

 
  
  selectedCode : any = "91";
  countryCode = [{"code" : "91","name" : "India"},
  {"code" : "39","name":"Italy"},
  {"code" : "81", "name" : "Japan"},
  {"code" : "52","name" : "Mexico"}];
  selectedGender: any;
  selectedRadioGroup: any;
  categoryId: any;
  status: any;
  advertisementId: any;
  postStatus: any;
  languagesArray = [];
  myControl = new FormControl();
  advertisementModel: any = {};
  advertisementArray = [];
  advertisementObject = {};
  checkRadioButton: any;
  categoryArray = [
    {
      "categoryName": "abc",
      "categoryId": "1"
    },
    {
      "categoryName": "abcd",
      "categoryId": "2"
    },
    {
      "categoryName": "abce",
      "categoryId": "3"
    },
    {
      "categoryName": "abcf",
      "categoryId": "4"
    }
  ];


  genderArray = [
    {
      "gender": "Male",
      "genderId": "0"
    },
    {
      "gender": "Female",
      "genderId": "1"
    }

  ];


  selectedLanguages: any[];
  languageArray: any[];
  //toCheck: boolean =  false;

  equals(objOne, objTwo) {
    // if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
    //   return objTwo.id === objOne.id;
    // }
  }

  selectAll(checkAll, select: NgModel, values) {
    console.log("selected languages:" + select);
    console.log("selected values:" + values);
    console.log("selected values:" + this.selectedLanguages);
    if (checkAll) {
      select.update.emit(values);
    }
    else {
      select.update.emit([]);
    }
  }


  ionViewWillEnter() {
    this.getCategory();
    this.getLanguages();
    // this.advertisementModel['categoryId']= "2";
    this.postStatus = localStorage.getItem("postStatus");
    // this.status = this.activatedRoute.snapshot.params['advertisementStatus'];

    if (this.postStatus == "1") {
      var advertisementDetail = localStorage.getItem("ADVERTISEMENTDATA");
      this.advertisementObject = JSON.parse(advertisementDetail);
      console.log("advertisementObject:" + this.advertisementObject['address']);

      this.advertisementModel['description'] = this.advertisementObject['description'];
      this.advertisementModel['title'] = this.advertisementObject['title'];
      this.selectedCode = this.advertisementObject['countryCode'];
      let checkType = this.advertisementObject['gender'];
      if (checkType == 0) {
        this.checkRadioButton = "male";
      } else {
        this.checkRadioButton = "female";
      }
      this.categoryId = this.advertisementObject['categoryId'];
      this.advertisementModel['email'] = this.advertisementObject['email'];
      this.advertisementModel['contact'] = this.advertisementObject['mobile'];
      this.selectedLanguages = this.advertisementObject['languages'];
      this.languagesArray = this.advertisementObject['languages'];
      console.log("languagesArray ::" + this.selectedLanguages);

    } else {
      this.advertisementModel['description'] = "";
      this.advertisementModel['title'] = "";
      this.advertisementModel['email'] = "";
      this.advertisementModel['contact'] = "";
      this.languagesArray =  [];
      this.selectedLanguages = [];
      this.checkRadioButton = "check";
      this.categoryId = 0;
    }

  }

  ngOnInit() {
  }

  getLanguages() {

    let url = environment.base_url + environment.version + "languages";
    this.apiCall.get(url).subscribe(MyResponse => {
      this.languageArray = MyResponse['result']['list'];
      // this.loader.hideBlockingLoaderAuth();
    },
      error => {
        // this.loader.hideBlockingLoaderAuth();
        // this.networkServices.checkInternetConnection();
        // this.networkServices.onPageLoadCheckInternet();
      })
  }

  constructor(public router: Router,
    public apiCall: ApiService,
    public toast: ToastController,
    public activatedRoute: ActivatedRoute,
    public changeDetectorRef: ChangeDetectorRef) { }


  getCategory() {
    let url = environment.base_url + environment.version + "category/" + 0 + "/sub-category"
    this.apiCall.get(url).subscribe(MyResponse => {
      this.categoryArray = MyResponse['result']['list'];
    },
      error => {

      })
  }
  addAdvertisementData(data) {
    // category, languages, gender
    // let languageArray = data.languages;
    // this.languagesArray = languageArray.split(',');

    if (this.languagesArray.length == 0) {
      this.presentToast("Please select languages");
    } else {
      if (this.advertisementModel['gender'] == '0' || this.advertisementModel['gender'] == '1') {


        if (this.categoryId == undefined || this.categoryId == null || this.categoryId == "") {
          this.presentToast("Please select category id");
        } else {
          let advertisemntInfo = {
            "title": data.title,
            "description": data.description,
            "contact": this.advertisementModel['contact'],

            "gender": this.advertisementModel['gender'],
            "languages": this.languagesArray,
            "email": this.advertisementModel['email'],
            "countryCode" : this.selectedCode,
            "categoryId": this.categoryId
          }
          console.log("data:" + JSON.stringify(advertisemntInfo));
          this.router.navigate(['/nextadvertisement', { advertisementData: JSON.stringify(advertisemntInfo) }]);
          // this.router.navigate(['/nextadvertisement']);

        }
      } else {

        this.presentToast("Please select gender");
      }
    }


  }

  radioGroupChange(event) {
    console.log("radioGroupChange", event.detail);
    this.selectedRadioGroup = event.detail.value;
    if (this.selectedRadioGroup == 'male') {
      this.advertisementModel['gender'] = 0;
      this.checkRadioButton = "male";
    } else if (this.selectedRadioGroup == 'female') {
      this.advertisementModel['gender'] = 1;
      this.checkRadioButton = "female";
    } else {
      this.advertisementModel['gender'] = 1;
      this.checkRadioButton = "female";
    }
  }

  selectCountryCode(data){
  this.selectedCode = data;
    console.log("countryCode:"+(this.selectedCode));
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }


  selectCategoryType(data) {
    // alert("check data:"+data);
    console.log("show id:" + data);
    this.categoryId = data;
  }

  selectGenderType(id) {
    this.advertisementModel['gender'] = id;
  }

  selectedChanged(selectedLanguage) {
    // alert("selectedLanguage:"+JSON.stringify(selectedLanguage));
    this.languagesArray = (selectedLanguage);
  }

  openChatList() {
    this.router.navigate(['/chatlist']);
  }

  postAdvertisement() {
    this.router.navigate(['/postadvertisement']);
    // this.router.navigate(['/secondpageadvertisement']);
  }

  home() {
    this.router.navigate(['/home']);
  }

  openFavourite() {
    this.router.navigate(['/favourite']);
  }

  openProfile() {
    this.router.navigate(['/profile']);
  }
}
