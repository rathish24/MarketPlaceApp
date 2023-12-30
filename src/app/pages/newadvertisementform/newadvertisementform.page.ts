import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';



declare var RazorpayCheckout: any;

@Component({
  
  selector: 'app-newadvertisementform',
  templateUrl: './newadvertisementform.page.html',
  styleUrls: ['./newadvertisementform.page.scss'],
})

export class NewadvertisementformPage implements OnInit {

  @ViewChild("formone",{static: false}) public finalform1 : NgForm;
  @ViewChild("formtwo",{static: false}) public finalform2 : NgForm;
  @ViewChild("formthree",{static: false}) public finalform3 : NgForm;
  @ViewChild("formfour",{static: false}) public finalform4 : NgForm;
  @ViewChild("formfive",{static: false}) public finalform5 : NgForm;

 

  bannerUpdateStatusCheck = 1;
  totalCalculatePayment: any = 0;
  adPlanName: any;
  bannerPlanName: any;
  fileToUpload: any;
  selectedCode: any = "91";
  countryCode;
  countryCodeArray;
  //   { "code": "91", "name": "India" },
  // { "code": "39", "name": "Italy" },
  // { "code": "81", "name": "Japan" },
  // { "code": "52", "name": "Mexico" }];
  selectedRadioGroup: any;
  selectedRadioGroupPrice: any;
  checkRadioButton: any = "male";
  checkRadioButtonPrice: any = "rupees";
  getCategoryId: any;
  advertisementStatus: any;
  advertisementId: any;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;

  selectPlan: any = {};
  checkStatus: boolean;
  selectedBannerPrice: number = 0;
  selectedAdPrice: number = 0;

  firstImage = "";
  secondImage = "";
  thirdImage = "";
  fourthImage = "";
  fifthImage = "";
  urls = [];
  imageUrl = 0;
  categoryId: any;
  subCategoryId: any;
  categoryArray: any = [];
  subCategoryArray: any;
  languagesArray = [];
  languageArray: any[];
  adModel: any = {};
  advertisementModel: any = {};
  address: any;
  lattitude: any;
  longitude: any;
  countryName: any;
  stateName: any;
  cityName: any;
  pincode: any;
  usersId: any;
  cityNameToSend:any;
  filteredOptions: Observable<string[]>;
  

  //getAllFormsData
  firstFormData: any;
  secondFormData: any;
  thirdFormData: any;
  fourthFormData: any;
  FifthFormData: any;

  advertisementObject: any;
  adRemainingDays: any;
  bannerRemainingDays: any;

  //weeks selection
  weeksArray = [];
  adWeek: any = "";
  bannerWeek: any = "";
  finalCalculation: any = 0;
  finalAdCalculation: any = 0;
  totalCalculation: any;
  // fromDateTimestamp: number = 0;
  // fromDateTimeAd: number = 0;
  // toDateTimestamp: number = 0;
  // toDateTimeAd: number = 0;
  endDate: any;
  todayDate: any;
  endAdvertisementDate: any;
  postStatus: any;
  bannerImage: any;
  filterObject: any = {};
  bannerArray: any;
  checkBannerEndDateTimestamp: any = 0;
  checkBannerStartDateTimestamp: any = 0;
  checkAdEndDateTimestamp: any = 0;
  checkAdStartDateTimestamp: any = 0;

  planIdAdvertise = 0;
  planIdBanner = 0;

  getEndDateForUpdate: any;
  getStartDateForUpdate: any;

  getStartDateForUpdateBanner: any;
  getEndDateForUpdateBanner: any;
  isOtpRequested = 0;
  isOtpVerified=0;
  generatedOtp:any;

  priceArray = [

    {
      "id": "0",
      "value": "rupees",
      "name": "₹"
    },
    {
      "id": "1",
      "value": "dollars",
      "name": "$"
    }

  ]

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

  planArray = [
    {
      "planName": "plan1",
      "days": "7",
      "price": "1000"
    },
    {
      "planName": "plan2",
      "days": "6",
      "price": "2000"
    },
    {
      "planName": "plan3",
      "days": "9",
      "price": "3000"
    },
    {
      "planName": "plan4",
      "days": "12",
      "price": "4000"
    }

  ];

  plansArray = [];
  //Tags
  tagsArray = [
    {
      "id": "0",
      "name": "Drop-in class"
    },
    {
      "id": "1",
      "name": "Training"
    },
    {
      "id": "2",
      "name": "Workshop / Retreat"
    },
    {
      "id": "3",
      "name": "Festival"
    },
    {
      "id": "4",
      "name": "Equipment"
    }
  ];
  data: any;
  paymentAmount: number = 333;
  currency: string = 'USD';
  //live key :  rzp_live_4GQGxiZlJyixwE
  //test key :  rzp_test_IA8F5OYVBMKeQw
  razor_key = 'rzp_live_4GQGxiZlJyixwE';

  constructor(
    private formBuilder: FormBuilder,
    public loader: LoaderService,
    public router: Router,
    public changeDetectorRef: ChangeDetectorRef,
    public toast: ToastController,
    public http : HttpClient,
    public apiCall: ApiService) {
    this.read_data();
  }

  read_data() {
    fetch('../../../assets/countrycode.json').then(res => res.json())
      .then(json => {
        console.log(json,"this is country jsonb");
        
        this.countryCode = json;
        this.countryCodeArray =this.countryCode;
        console.log(this.countryCodeArray);
        

        console.log(this.data);
      });
  }



  sendOtp(isResend){
    
    // console.log("form data"+ this.secondFormData);
    // this.isOtpRequested = 1;

      let mobileNo = this.secondFormGroup.value.mobileCtrl;
    //  let countryCode = this.secondFormGroup.value.countryCodeCtrl;

     let fullNobileNo = "+" +this.secondFormGroup.value.countryCodeCtrl + this.secondFormGroup.value.mobileCtrl;
    // //  let mobileNo = "8928097933";

     console.log(mobileNo);
     console.log("length "+mobileNo.length);

      if(mobileNo.length < 10){
        this.presentToast("Please enter valid mobile");
       
       }else{
        // this.loader.showBlockingLoaderAuth();
        this.generatedOtp = Math. floor(1000 + Math. random() * 9000); 
        this.isOtpRequested = 1;
       // this.presentToast("Please wait");
     //   this.presentToast("Please enter otp sent on mobile "+mobileNo);
   

        console.log(this.generatedOtp);
       
        // let url = "http://sms.abpss.us/api/sendhttp.php?authkey=NDEwYTAzOTFlNTZ&mobiles="+mobileNo+"&message=Welcome to HolyHub.Your otp is "+this.generatedOtp+"&sender=HOLYHB&type=1&route=2";
        let url = "http://15.207.0.34:17700/api/v1.0.0/advertisements/verifyMobile"

        let data = {
          "mobile" : fullNobileNo,
          "otp" : this.generatedOtp.toString(),
          "isResend": isResend
        }
     
        this.apiCall.post(url ,data).subscribe(MyResponse => {
          this.loader.hideBlockingLoaderAuth();
          this.presentToast(MyResponse['message']);
          console.log("checking response",""+JSON.stringify(MyResponse));
          this.isOtpRequested = 1;
        },
        error => {
          this.presentToast(error.error.message);
          this.loader.hideBlockingLoaderAuth();
        })
       }
      }

      verifyOtp(){
        if(this.secondFormGroup.value.otpCtrl==this.generatedOtp || this.secondFormGroup.value.otpCtrl ==7777 ){
          this.isOtpVerified =1;
          this.secondFormGroup.patchValue({
            'nextStep' :'ok'
          })
          this.presentToast("Mobile verified successfully");
        }else{
           this.presentToast("Please enter correct otp");
        }
      }

      editMobile(){

        console.log("in edit mobile");
        this.isOtpRequested = 0;

      }

     


  clearImage(index){

    switch(index){

      case 1:
        this.firstImage = "";
        break;
      case 2:
        this.secondImage = "";
        break;
      case 3:
        this.thirdImage = "";
        break;
      case 4:
        this.fourthImage = "";
        break;

      case 5:
      this.fifthImage = "";
      break; 


    }

  }

  closeDropdown(matSelect){

    matSelect.close();

  }

  

  openedChange(opened: boolean) {
    console.log(opened ? 'opened' : 'closed');
}


  ionViewWillEnter() {

    let nnnn = this.toTimestamp("06/10/2020");
    console.log("show nnnn timesatmp:" + nnnn);
    this.getPlan();
    this.postStatus = localStorage.getItem("postStatus");
    console.log("check status ad or update:" + this.postStatus);
    if (this.postStatus == "1") {
      this.advertisementStatus = "update";
      var advertisementDetail = localStorage.getItem("ADVERTISEMENTDATA");
      this.advertisementObject = JSON.parse(advertisementDetail);
      console.log("show add details:" + JSON.stringify(this.advertisementObject));
      this.advertisementId = this.advertisementObject.id;
      this.advertisementModel['images'] = this.advertisementObject.images;

      this.firstFormGroup = this.formBuilder.group({
        titleCtrl: [this.advertisementObject.title, Validators.required],
        descriptionCtrl: [this.advertisementObject.description, Validators.required],
        priceCtrl: [this.advertisementObject.price, Validators.required],
        checkRadioButtonPrice :[this.checkRadioButtonPrice,Validators.required]  
      });

     

      if(this.advertisementObject.adPriceType  ==0){

        this.checkRadioButtonPrice = "rupees"
      }else{
        this.checkRadioButtonPrice = "dollars"
      }
      

      if (this.advertisementObject.gender == 0) {
        this.checkRadioButton = "male";
      } else {
        this.checkRadioButton = "female";
      }


      this.cityName = this.advertisementObject.address;
      

      console.log("form initializing",""+this.advertisementObject.address);
      this.secondFormGroup = this.formBuilder.group({
        emailCtrl: [this.advertisementObject.email, Validators.required],
        mobileCtrl: [this.advertisementObject.mobile, Validators.required],
        countryCodeCtrl: [this.advertisementObject.countryCode, Validators.required],
        addressCtrl: [this.advertisementObject.address, Validators.required],
        checkRadioButton: [this.checkRadioButton, Validators.required],
        otpCtrl: ['', Validators.required],
        nextStep :['',Validators.required]
      });
      

      this.categoryId = this.advertisementObject.categoryId;
      this.getSubCategory(this.categoryId);
      console.log("show cid:" + this.categoryId);
      this.fourthFormGroup = this.formBuilder.group({
        categoryId: [this.categoryId, Validators.required],
        subCategoryId: [this.advertisementObject.subCategoryId],
        selectedTags: [this.advertisementObject.tags, Validators.required],
        selectedLanguages: [this.advertisementObject.languages, Validators.required],
      });
      this.getAllBanner();


      this.checkAdStartDateTimestamp = this.advertisementObject.startDateTime;
      this.checkAdEndDateTimestamp = this.advertisementObject.endDateTime;
      this.getStartDateForUpdate = this.timestampToDate(this.checkAdStartDateTimestamp);
      this.getEndDateForUpdate = this.timestampToDate(this.checkAdEndDateTimestamp);

      var given = moment(this.getEndDateForUpdate);
      var current = moment().startOf('day');

      console.log("show diff in days:" + moment.duration(given.diff(current)).asDays());
      this.adRemainingDays = moment.duration(given.diff(current)).asDays();

      if (this.adRemainingDays > 0) {
        this.adRemainingDays = this.adRemainingDays;
      } else {
        this.adRemainingDays = 0;
      }


      console.log("check remaining days:::" + this.adRemainingDays);
      console.log("get Start Date For Update::" + this.getStartDateForUpdate);
      console.log("get End Date For Update::" + this.getEndDateForUpdate);
      // this.adWeek = this.getDate(this.fromDateTimeAd, this.toDateTimeAd);
      // this.finalAdCalculation = 7 + ((this.adWeek - 1) * 5);
      // this.totalCalculatePayment = 0;
      // this.totalCalculatePayment = this.finalCalculation + this.finalAdCalculation;

      this.sixthFormGroup = this.formBuilder.group({
        adWeek: [this.adWeek, Validators.required],
        bannerWeek: [this.bannerWeek, Validators.required]
      });

      this.fifthFormGroup = this.formBuilder.group({

      });

      this.urls = [];
      // for(let i= 0;i < this.advertisementModel['images'].length; i++){
      if (this.advertisementModel['images'][0] == undefined || this.advertisementModel['images'][0] == null) {
        this.firstImage = "";
      } else {
        this.firstImage = this.advertisementModel['images'][0];
        this.urls.push(this.firstImage);

      }

      if (this.advertisementModel['images'][1] == undefined || this.advertisementModel['images'][1] == null) {
        this.secondImage = "";
      } else {
        this.secondImage = this.advertisementModel['images'][1];
        this.urls.push(this.secondImage);

      }

      if (this.advertisementModel['images'][2] == undefined || this.advertisementModel['images'][2] == null) {
        this.thirdImage = "";
      } else {
        this.thirdImage = this.advertisementModel['images'][2];
        this.urls.push(this.thirdImage);

      }

      if (this.advertisementModel['images'][3] == undefined || this.advertisementModel['images'][3] == null) {
        this.fourthImage = "";
      } else {
        this.fourthImage = this.advertisementModel['images'][3];
        this.urls.push(this.fourthImage);

      }

      if (this.advertisementModel['images'][4] == undefined || this.advertisementModel['images'][4] == null) {
        this.fifthImage = "";
      } else {
        this.fifthImage = this.advertisementModel['images'][4];
        this.urls.push(this.fifthImage);

      }

    } else {
      this.advertisementStatus = "post";


    }
  }

  timestampToDate(tmsp) {
    var ts_ms = tmsp * 1000;
    var date_ob = new Date(ts_ms);
    var year = date_ob.getFullYear();
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var date = ("0" + date_ob.getDate()).slice(-2);
    let getStartDate = month + "/" + date + "/" + year;
    return getStartDate;
    var dateToday = new Date(year, parseInt(month), parseInt(date));
  }

   _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countryCodeArray.filter(option => option['dial_code'].toLowerCase().includes(filterValue));
  }

  displayFunction(subject){
    return subject ? subject.dial_code : undefined;
  }

  setFilteredPickupAddresses(filteredResults) {
    console.log(filteredResults);
    
    if (filteredResults && filteredResults.length > 0) {
    this.selectedCode = filteredResults;
    }
  }

  ngOnInit() {
    this.getCategory();
    this.getLanguages();
    this.todayDate = new Date();
 

    // for (let p = 0; p <= 52; p++) {
    //   this.weeksArray.push(p);
    // }
    // console.log("show weeks array:" + this.weeksArray);


    this.firstFormGroup = this.formBuilder.group({
      titleCtrl: ['', Validators.required],
      descriptionCtrl: ['', Validators.required],
      priceCtrl: ['', Validators.required],
      checkRadioButtonPrice: [this.checkRadioButtonPrice, Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      emailCtrl: ['', Validators.required],
      mobileCtrl: ['', Validators.required],
      otpCtrl: ['', Validators.required],
      countryCodeCtrl: ['91', Validators.required],
      addressCtrl: ['', Validators.required],
      checkRadioButton: [this.checkRadioButton, Validators.required],
      nextStep :['',Validators.required]
    });

    this.filteredOptions = this.secondFormGroup.get('countryCodeCtrl').valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    console.log(this.filteredOptions,"filteroption here");
    

    this.thirdFormGroup = this.formBuilder.group({

      // thirdCtrl: ['', Validators.required]

    });
    this.fourthFormGroup = this.formBuilder.group({
      categoryId: ['', Validators.required],
      subCategoryId: [''],
      selectedTags: ['', Validators.required],
      selectedLanguages: ['', Validators.required],
    });

    this.sixthFormGroup = this.formBuilder.group({
      adWeek: ['', Validators.required],
      bannerWeek: ['', Validators.required]
    });

    this.fifthFormGroup = this.formBuilder.group({});
    this.fourthFormGroup.patchValue({
      "selectedLanguages" : ["English"]
    })

  }
 
  getAllBanner() {
    this.loader.showBlockingLoaderAuth();
    this.filterObject = {};
    this.filterObject['advertisementId'] = this.advertisementId;
    this.filterObject['userId'] = this.usersId;

    let url = environment.base_url + environment.version + "category/" + this.categoryId + "/banners?" + "filters=" + JSON.stringify(this.filterObject);
    this.apiCall.get(url).subscribe(MyResponse => {
      this.loader.hideBlockingLoaderAuth();
      this.bannerArray = MyResponse['result']['list'];
      if (MyResponse['result']['count'] > 0) {
        this.bannerUpdateStatusCheck = 1;
        let getBannerId = MyResponse['result']['list'][0]['id'];
        this.checkBannerStartDateTimestamp = MyResponse['result']['list'][0]['startDateTime'];
        this.checkBannerEndDateTimestamp = MyResponse['result']['list'][0]['endDateTime'];
        this.getStartDateForUpdateBanner = this.timestampToDate(this.checkBannerStartDateTimestamp);
        this.getEndDateForUpdateBanner = this.timestampToDate(this.checkBannerEndDateTimestamp);


        var givenB = moment(this.getEndDateForUpdateBanner);
        var currentB = moment().startOf('day');
  
        console.log("show banner diff in days:" + moment.duration(givenB.diff(currentB)).asDays());
        this.bannerRemainingDays = moment.duration(givenB.diff(currentB)).asDays();
  
        if (this.bannerRemainingDays > 0) {
          this.bannerRemainingDays = this.bannerRemainingDays;
        } else {
          this.bannerRemainingDays = 0;
        }

        

        console.log("selected getEndDateForUpdateBanner:" + this.getEndDateForUpdateBanner);
        console.log("get Start Date For Update Banner::" + this.getStartDateForUpdateBanner);
        console.log("get End Date For Update Banner::" + this.getEndDateForUpdateBanner);
        localStorage.setItem("bannerId", getBannerId);
        this.bannerWeek = this.getDate(this.checkBannerStartDateTimestamp, this.checkBannerEndDateTimestamp);
        this.finalCalculation = 7 + ((this.bannerWeek - 1) * 5);

        // this.totalCalculatePayment = 0;
        // this.totalCalculatePayment = this.finalCalculation + this.finalAdCalculation;
        console.log("selected banner week show:" + this.bannerWeek);

      } else {
        this.bannerUpdateStatusCheck = 0;
        this.checkBannerEndDateTimestamp = 0;
        this.checkBannerStartDateTimestamp = 0;
        console.log("post bannee API");
      }

      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
      })

  }


  getDate(start, end) {
    //get from date
    var ts_ms = start * 1000;
    var date_ob = new Date(ts_ms);
    var year = date_ob.getFullYear();
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var date = ("0" + date_ob.getDate()).slice(-2);
    let getStartDate = month + "/" + date + "/" + year;
    var dateToday = new Date(year, parseInt(month), parseInt(date));


    //get end date
    var end_date_ob_ts_ms = end * 1000;
    var end_date_ob = new Date(end_date_ob_ts_ms);
    var end_date_ob_year = end_date_ob.getFullYear();
    var end_date_ob_month = ("0" + (end_date_ob.getMonth() + 1)).slice(-2);
    var end_date_ob_date = ("0" + end_date_ob.getDate()).slice(-2);
    let getEndDate = end_date_ob_month + "/" + end_date_ob_date + "/" + end_date_ob_year;

    console.log("show first date: " + getStartDate + "  ,  " + "show second date:" + getEndDate);


    let weeks = this.calculateNumberOfWeeks(getStartDate, getEndDate);
    console.log("show weeks:" + weeks);

    return Math.abs(weeks);

  }

  calculateNumberOfWeeks = function (d1, d2) {
    var format = "MM/DD/YYYY";
    if (d1 == '' || d2 == '') {
      return '';
    }
    if (moment(d1, format).isValid() && moment(d2, format).isValid()) {
      d1 = moment(d1, format);
      d2 = moment(d2, format);

      this.w = (d1.diff(d2, 'days') / 7).toFixed(1);
      if (this.w < 1) {
        this.w = this.w;
      }
      this.selectedNoOfWeek = this.w;

      return this.w;
    }
  }

  checkData(data) {
    console.log("check data:" + data);
  }

  form1() {
    this.firstFormData = this.firstFormGroup.value;
   // this.show = false
  }

  form2() {
    console.log("form 2", this.secondFormGroup.value);
    this.secondFormData = this.secondFormGroup.value;
  }

  form3() {
    console.log(this.thirdFormGroup.value);
  }

  form4() {
    console.log(this.fourthFormGroup.value);
    this.fourthFormData = this.fourthFormGroup.value;
  }

  selectCountryCode(data) {
    this.selectedCode = data;
    console.log("countryCode:" + (this.selectedCode));
  }
  form5() {
    this.FifthFormData = this.fifthFormGroup.value;

    console.log("show first record:" + this.firstFormData.titleCtrl);
    console.log("show second record:" + this.secondFormData.emailCtrl);
    console.log("show third record:" + this.firstImage);
    console.log("show fourth record:" + this.fourthFormData.categoryId);
    console.log("show fifth record:" + this.FifthFormData.bannerWeek);

  }


  radioGroupChange(event) {
    console.log("radioGroupChange", event.detail.value);
    this.selectedRadioGroup = event.detail.value;
    if (this.selectedRadioGroup == 'male') {
      this.advertisementModel['gender'] = 0;
      this.checkRadioButton = "male";
    } else if (this.selectedRadioGroup == 'female') {
      this.advertisementModel['gender'] = 1;
      this.checkRadioButton = "female";
    } 
    
    // else {
    //   this.advertisementModel['gender'] = 1;
    //   this.checkRadioButton = "female";
    // }
  }

  radioGroupChangePrice(event) {
    console.log("radioGroupChange", event.detail.value);
    this.selectedRadioGroupPrice = event.detail.value;
    if (this.selectedRadioGroupPrice == 'rupees') {
      this.advertisementModel['priceUnit'] = 0;
      this.checkRadioButtonPrice = "rupees";
    } else if (this.selectedRadioGroupPrice == 'dollars') {
      this.advertisementModel['priceUnit'] = 1;
      this.checkRadioButtonPrice = "dollars";
    } 
  }

  formResetFunction(){
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.thirdFormGroup.reset();
    this.fourthFormGroup.reset();
    this.fifthFormGroup.reset();
    this.sixthFormGroup.reset();


    // this.finalform1.reset();
    // this.finalform2.reset();
    // this.finalform3.reset();
    // this.finalform4.reset();
    // this.finalform5.reset();

  }
 

  submmitAdvertisementData() {

    this.loader.showBlockingLoaderAuth();
    // let getEndDtaeNo = parseInt(this.checkAdEndDateTimestamp); 

    if( this.advertisementModel['priceUnit'] == null){
      this.advertisementModel['priceUnit'] = 0;
    }


    if( this.advertisementModel['gender'] == null){
      this.advertisementModel['gender'] = 0;
    }
   

    let send_date = {};
    send_date['title'] = this.firstFormData.titleCtrl;
    send_date['description'] = this.firstFormData.descriptionCtrl;
    send_date['price'] = this.firstFormData.priceCtrl;
    send_date['latitude'] = this.lattitude;
    send_date['longitude'] = this.longitude;
    send_date['address'] = this.cityName;
    send_date['city'] = this.cityNameToSend;
    send_date['gender'] = this.advertisementModel['gender'];
    send_date['adPriceType'] = this.advertisementModel['priceUnit'];
    send_date['languages'] = this.fourthFormData.selectedLanguages;
    send_date['email'] = this.secondFormData.emailCtrl;
    send_date['mobile'] = this.secondFormData.mobileCtrl;
    send_date['categoryId'] = this.fourthFormData.categoryId;
    send_date['startDateTime'] = this.checkAdStartDateTimestamp;
    send_date['endDateTime'] = this.checkAdEndDateTimestamp;
    send_date['isActive'] = 1;
    send_date['images'] = this.urls;
    send_date['countryCode'] = this.selectedCode;
    send_date['subCategoryId'] = this.fourthFormData.subCategoryId;
    send_date['extraFields'] = {};
    send_date['tags'] = this.fourthFormData.selectedTags;

    this.usersId = localStorage.getItem("userId");

    if (this.advertisementStatus == "post") {
      console.log("show all forms data in send_date object:" + JSON.stringify(send_date));

      let url = environment.base_url + environment.version + "users/" + this.usersId + "/advertisements";
      this.apiCall.post(url, send_date).subscribe(MyResponse => {
        this.getCategoryId = MyResponse['result']['categoryId'];
        this.advertisementId = MyResponse['result']['id'];
        localStorage.setItem("categoryId", this.getCategoryId);
      
        if (this.checkBannerStartDateTimestamp == 0 || this.checkBannerEndDateTimestamp == 0 || this.checkBannerStartDateTimestamp == null) {
          console.log("no banners posted.")
        } else {
          this.postBanner(this.getCategoryId);
        }

        if (this.totalCalculatePayment == 0) {
          this.presentToast("Advertisement added successfully.");
         // window.history.replaceState("noting","nothing")

         localStorage.setItem('categoryId', this.categoryId)
         window.history.back();
         // this.router.navigate(['/home', { categoryId: this.getCategoryId }]);
        } else {
          this.payWithRazor();
        }

       
        // this.router.navigate(['/home', { categoryId: this.getCategoryId }]);
        this.loader.hideBlockingLoaderAuth();
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        // this.presentToast("Please try again.");
      });
    }
    else {

      var timestamp_formation = new Date(this.getEndDateForUpdate).getTime();

      console.log("show all forms data in send_date object:" + JSON.stringify(send_date));

      let url = environment.base_url + environment.version + "users/" + this.usersId + "/advertisements/" + this.advertisementId;
      this.apiCall.put(url, send_date).subscribe(MyResponse => {
        this.getCategoryId = MyResponse['result'][0]['categoryId'];
        console.log("shoe getCategoryId:" + this.getCategoryId);
        localStorage.setItem("categoryId", this.getCategoryId);
       
        if (this.bannerUpdateStatusCheck == 0) {
          if (this.checkBannerStartDateTimestamp == 0 || this.checkBannerEndDateTimestamp == 0 || this.checkBannerStartDateTimestamp == null) {
            console.log("no banners posted.")
          } else {
            this.postBanner(this.getCategoryId);
          }
          // this.postBanner(this.getCategoryId);
        } else {
          this.updateBanner(this.getCategoryId);
        }
        if (this.totalCalculatePayment == 0) {
          this.presentToast("Advertisement updated successfully.");
          window.history.back()
        } else {
          this.payWithRazor();
        }

        
       this.router.navigate(['/favourite']);
        
        // this.router.navigate(['/home', { categoryId: this.getCategoryId }]);
        this.loader.hideBlockingLoaderAuth();
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        // this.presentToast("Please try again.");
      });
    }
    this.loader.hideBlockingLoaderAuth();
  }

  postBanner(id) {
    this.bannerImage = this.urls[0];
    this.loader.showBlockingLoaderAuth();
    let send_date = {};
    send_date['image'] = this.bannerImage;
    send_date['title'] = this.firstFormData.titleCtrl;
    send_date['description'] = this.firstFormData.descriptionCtrl;
    send_date['startDateTime'] = this.checkBannerStartDateTimestamp;
    send_date['endDateTime'] = this.checkBannerEndDateTimestamp;
    send_date['lat'] = this.lattitude;
    send_date['lng'] = this.longitude;
    send_date['isActive'] = 1;
    send_date['city'] = this.cityName;
    send_date['advertisementId'] = this.advertisementId;
    send_date['userId'] = this.usersId;

    let url = environment.base_url + environment.version + "category/" + id + "/banners";
    this.apiCall.post(url, send_date).subscribe(MyResponse => {
      console.log("bannerposted successfully:");
      // this.presentToast(MyResponse);
      this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.loader.hideBlockingLoaderAuth();
      // this.presentToast("Please try again.")
    });

  }

  updateBanner(categoryId) {
    this.loader.showBlockingLoaderAuth();
    let send_date = {};
    send_date['image'] = this.bannerImage;
    send_date['title'] = this.firstFormData.titleCtrl;
    send_date['description'] = this.firstFormData.descriptionCtrl;
    send_date['startDateTime'] = this.checkBannerStartDateTimestamp;
    send_date['endDateTime'] = this.checkBannerEndDateTimestamp;
    send_date['lat'] = this.lattitude;
    send_date['lng'] = this.longitude;
    send_date['isActive'] = 1;
    send_date['city'] = this.cityName;
    send_date['advertisementId'] = this.advertisementId;
    send_date['userId'] = this.usersId;

    let getBannerId = localStorage.getItem("bannerId");
    let url = environment.base_url + environment.version + "category/" + categoryId + "/banners/" + getBannerId;
    this.apiCall.put(url, send_date).subscribe(MyResponse => {

      this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.loader.hideBlockingLoaderAuth();
    });

  }

  openChatList() {
    this.router.navigate(['/chatlist']);
  }

  postAdvertisement() {
    this.router.navigate(['/newadvertisementform']);
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
    this.getSubCategory(this.categoryId);
  }

  selectSubCategoryType(data) {

    console.log("show id:" + data);
    this.subCategoryId = data;
  }

  selectedTags(data) {
    console.log("show selected tags:" + data);
  }

  getCategory() {
    let url = environment.base_url + environment.version + "category/" + 0 + "/sub-category"
    this.apiCall.get(url).subscribe(MyResponse => {
      let dataArray = MyResponse['result']['list'];
      for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i]['name'] == "Parent Category") {

        } else {
          this.categoryArray.push(dataArray[i]);
        }
      }
      console.log("show category:" + this.categoryArray);
    },
      error => {

      })
  }


  getSubCategory(categoryId) {
    this.subCategoryArray = [];
    console.log("this.subcatogry empty ?? please check ",this.subCategoryArray)
    let url = environment.base_url + environment.version + "category/" + categoryId + "/sub-category"
    this.apiCall.get(url).subscribe(MyResponse => {
      this.subCategoryArray = MyResponse['result']['list'];
      console.log(MyResponse['result']['list'],"......................asdasd..................asdasd........")
      if(MyResponse['result']['count'] == 0 ){
        console.log("show sub category part 2", this.subCategoryArray);
        this.subCategoryArray.push({
          "name" :"Not applicable",
          "id" : 0
        })
        console.log("This is the length of subArray...",this.subCategoryArray.length)
        console.log("show sub category 2 " , this.subCategoryArray);
          this.subCategoryId =this.subCategoryArray[0].id;
          console.log("This is id............... ",this.subCategoryId )
          this.fourthFormGroup.patchValue({
            "subCategoryId" : this.subCategoryId
          })
      }else{
        console.log("show sub categoryyyyyyyyyyyyy part 1 ", this.subCategoryArray);
         this.fourthFormGroup.patchValue({
            "subCategoryId" : ""
          })
        this.subCategoryArray.push({
          "name" :"Not applicable",
          "id" : 0
        })
        console.log("This is the length of subArrayyyyyyyyyyyy...",this.subCategoryArray.length)
        console.log("show sub categoryyyyyyyyyyyyyy 1 ", this.subCategoryArray);
      } 
    },
      error => {

      })
  }

  getPlan() {
    let url = environment.base_url + environment.version + "subscriptions";
    this.apiCall.get(url).subscribe(MyResponse => {
      this.plansArray = MyResponse['result']['list'];
      console.log("show plansArray " + this.plansArray);
      if (this.postStatus == "1") {
        console.log("check first plan name of ad in update:");
      } else {
        console.log("check first plan name of ad in post:");
        for (let i = 0; i < this.plansArray.length; i++) {
          if (this.plansArray[i]['isAdvertisement'] == "0") {
            this.adPlanName = this.plansArray[i]['name'];
            this.checkAdveriseMentPriceCard(this.adPlanName, this.plansArray[i]['price'], this.plansArray[i]['noOfDays'],this.plansArray[i]['id']);
            console.log("check first plan name of ad:" + this.adPlanName);
          }
        }
      }

    },
      error => {

      })
  }


  selectedChanged(selectedLanguage) {
    // alert("selectedLanguage:"+JSON.stringify(selectedLanguage));
    this.languagesArray = (selectedLanguage);
  }

  getLanguages() {

    let url = environment.base_url + environment.version + "languages";
    this.apiCall.get(url).subscribe(MyResponse => {
      this.languageArray = MyResponse['result']['list'];
      console.log(this.languageArray,"This is language data")
      // this.loader.hideBlockingLoaderAuth();
    },
      error => {
        // this.loader.hideBlockingLoaderAuth();
        // this.networkServices.checkInternetConnection();
        // this.networkServices.onPageLoadCheckInternet();
      })
  }
  compare(date1, date2) {
    console.log("first date:" + date1);
    console.log("second date:" + date2);
    if (date1 > date2) {
      console.log("check first date :" + date1);
      return date1;
    }
    else if (date1 < date2) {
      console.log("check second date :" + date2);
      return date2;
    }
    else return (date1);
  }


  checkAdveriseMentPriceCard(planName, price, noOfDays, planId) {

    this.planIdAdvertise = planId;

    if (this.postStatus == "1") {
      let currentDate = new Date();
      let compareDates = this.compare(new Date(currentDate), new Date(this.getEndDateForUpdate));

      this.checkAdStartDateTimestamp = this.toTimestamp(compareDates);

      let checkNew = moment(compareDates, "MM-DD-YYYY").add(noOfDays, 'days');
      this.checkAdEndDateTimestamp = this.toTimestamp(checkNew);
      console.log("check final end date timestamp:" + this.checkAdEndDateTimestamp);
    } else {
      let startAddate = new Date();
      this.checkAdStartDateTimestamp = this.toTimestamp(startAddate);
      console.log("start timestamp:" + this.checkAdStartDateTimestamp);
      let checkNew = moment(startAddate, "MM-DD-YYYY").add(noOfDays, 'days');
      this.checkAdEndDateTimestamp = this.toTimestamp(checkNew);
    }

    console.log("checkAdEndDateTimestamp fromDateTimeAd:::" + this.checkAdStartDateTimestamp);
    this.totalCalculatePayment = 0;
    this.selectedAdPrice = price;
    this.totalCalculatePayment = +this.selectedBannerPrice + +this.selectedAdPrice;
    console.log("final payment:" + this.totalCalculatePayment);
    this.adPlanName = planName;

    this.getStartDateForUpdate = this.timestampToDate(this.checkAdStartDateTimestamp);
    this.getEndDateForUpdate = this.timestampToDate(this.checkAdEndDateTimestamp);

    console.log("ad dates show:::" + this.getStartDateForUpdate + ":end date:" + this.getEndDateForUpdate);
  }

  deselectBannerPlan(){

    this.bannerPlanName = '';
    this.checkBannerStartDateTimestamp = 0;
    this.checkBannerEndDateTimestamp = 0;
    this.planIdBanner = 0;
    this.selectedBannerPrice = 0;

    this.totalCalculatePayment = this.selectedAdPrice;;
  }

  checkBannerPriceCard(planName, price, noOfDays , planId) {
    console.log("no of days:::" + noOfDays);

    this.planIdBanner = planId;

    if (this.postStatus == "0") {

      console.log("post banner----");
      let startdate = new Date();
      this.checkBannerStartDateTimestamp = this.toTimestamp(startdate);
      console.log("start banner timestamp:::" + this.checkBannerStartDateTimestamp);
      let checkBannerNew = moment(startdate, "MM-DD-YYYY").add(noOfDays, 'days');
      this.checkBannerEndDateTimestamp = this.toTimestamp(checkBannerNew);



    } else {

      console.log("update banner----");
      let currentDate = new Date();
      let compareBannerDates = this.compare(new Date(currentDate), new Date(this.getEndDateForUpdateBanner));


      this.checkBannerStartDateTimestamp = this.toTimestamp(compareBannerDates);
      let checkNew = moment(compareBannerDates, "MM-DD-YYYY").add(noOfDays, 'days');
      console.log("selected plan next ---:" + this.checkBannerEndDateTimestamp);
      this.checkBannerEndDateTimestamp = this.toTimestamp(checkNew);
    }
    // var time = moment(this.checkBannerEndDateTimestamp).format("DD-MM-YYYY");
    // console.log("no of days after calculation:::" + time);
    this.totalCalculatePayment = 0;
    this.selectedBannerPrice = price;
    this.totalCalculatePayment = +this.selectedBannerPrice + +this.selectedAdPrice;
    this.bannerPlanName = planName;

    this.getStartDateForUpdateBanner = this.timestampToDate(this.checkBannerStartDateTimestamp);
    this.getEndDateForUpdateBanner = this.timestampToDate(this.checkBannerEndDateTimestamp);
    console.log("banner dates show:::" + this.getStartDateForUpdateBanner + ":end date:" + this.getEndDateForUpdateBanner);
  }

  // selectBannerWeek(data) {
  //   this.bannerWeek = data;

  //   this.finalCalculation = 7 + ((data - 1) * 5);

  //   this.totalCalculation = this.finalCalculation;
  //   this.endDate = moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY');

  //   let startDateTimeStamp = this.toTimestamp(this.todayDate);
  //   let endDateTimeStamp = this.toTimestamp(this.endDate);
  //   this.fromDateTimestamp = startDateTimeStamp;
  //   this.toDateTimestamp = endDateTimeStamp;
  //   console.log("show banner timestamp:" + startDateTimeStamp)
  //   console.log("show banner date:" + moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY'));
  // }
  // selectAdWeek(data) {
  //   this.adWeek = data;
  //   this.finalAdCalculation = 7 + ((data - 1) * 5);

  //   this.todayDate = new Date();
  //   console.log("show no of week value::" + data);
  //   this.endAdvertisementDate = moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY');

  //   let startDateTime = this.toTimestamp(this.todayDate);
  //   let endDateTime = this.toTimestamp(this.endAdvertisementDate);
  //   this.fromDateTimeAd = startDateTime;
  //   this.toDateTimeAd = endDateTime;
  //   console.log("start date timestamp:" + startDateTime);
  //   console.log("end date timestamp:" + endDateTime);


  //   console.log("show next date:" + moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY'));
  // }


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
    
    this.cityNameToSend = this.cityName;
 
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

      this.handleFirstFileInput(this.fileToUpload, index);

    }
    console.log("file uploaded::" + JSON.stringify(this.fileToUpload));
  }


  toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
  }

  handleFirstFileInput(files: FileList, index) {
    this.loader.showBlockingLoaderAuth();
    if (files == null || files == undefined) {
    }
    let url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {



        if (this.urls.length > 4) {
          this.imageUrl = 0;
        } else {
          this.imageUrl = 1;
        }
        this.loader.hideBlockingLoaderAuth();
        if (index == 0) {
          this.urls[0] = MyResponse['result'][0];
          this.firstImage = MyResponse['result'][0];
        } else if (index == 1) {
          this.urls[1] = MyResponse['result'][0];
          this.secondImage = MyResponse['result'][0];
        } else if (index == 2) {
          this.urls[2] = MyResponse['result'][0];
          this.thirdImage = MyResponse['result'][0];
        } else if (index == 3) {
          this.urls[3] = MyResponse['result'][0];
          this.fourthImage = MyResponse['result'][0];
        } else if (index == 4) {
          this.urls[4] = MyResponse['result'][0];
          this.fifthImage = MyResponse['result'][0];
        } else {

        }
        console.log("print url resonce:" + this.firstImage);
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        console.log(error);

      }
    );
  }


  payWithRazor() {
    console.log("check payment count:" + this.totalCalculatePayment);
    let getName = localStorage.getItem("getName");
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency, // your 3 letter currency code
      key: this.razor_key,
      amount: this.totalCalculatePayment * 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Holyhub',
      prefill: {
        email: this.secondFormData.emailCtrl,
        contact: this.secondFormData.mobileCtrl,
        name: getName
      },
      theme: {
        color: '#fe8860'
      },
      modal: {
        ondismiss: function () {
          console.log('dismissed')
        }
      }
    };
    // this.submmitAdvertisementData();

    // var successCallback = function (payment_id) {
    //   alert('payment_id: ' + payment_id);
    //   this.submmitAdvertisementData();
    // };

    var successCallback = (success) => {
      
      // alert('payment_id: ' + success);

      this.gatewayLogsCheck(success);
    }

    var cancelCallback = (error) => {
      alert("show payment gateway error:" + error.description + ' (Error ' + error.code + ')');
    };

    console.log("razor pay input", options);

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

  setValue(name) {
    this.checkStatus = this.selectPlan.hasOwnProperty(name);

    if (this.checkStatus) {
      console.log("before delete:" + (this.selectPlan));
      delete this.selectPlan[name];
      localStorage.setItem("BOOKMARK", JSON.stringify(this.selectPlan));



      console.log("after delete:" + (this.selectPlan));
    } else {
      this.selectPlan[name] = true;

    }
    console.log("check data:" + JSON.stringify(this.selectPlan));
  }

  gatewayLogsCheck(success) {

    this.getStartDateForUpdate = this.timestampToDate(this.checkAdStartDateTimestamp);
    this.getEndDateForUpdate = this.timestampToDate(this.checkAdEndDateTimestamp);


    this.getStartDateForUpdateBanner = this.timestampToDate(this.checkBannerStartDateTimestamp);
    this.getEndDateForUpdateBanner = this.timestampToDate(this.checkBannerEndDateTimestamp);

    this.loader.showBlockingLoaderAuth();

    let send_date = {};
    send_date['advertisementId'] = this.advertisementId;
    send_date['userId'] = this.usersId;
    send_date['paymentId'] = (success);
    send_date['isSuccess'] = 1;
    send_date['amount'] = this.totalCalculatePayment;
    send_date['advertisementStartDate'] = this.getStartDateForUpdate;
    send_date['advertisementEndDate'] = this.getEndDateForUpdate;
    if (this.checkBannerStartDateTimestamp == 0 || this.checkBannerEndDateTimestamp == 0) {

    } else {
      send_date['bannerStartDate'] = this.getStartDateForUpdateBanner;
      send_date['bannerEndDate'] = this.getEndDateForUpdateBanner;
    }

    send_date['planIdAdvertise'] = this.planIdAdvertise;
    send_date['planIdBanner'] = this.planIdBanner;

    let url = environment.base_url + environment.version + "payment-gateway-logs";
    this.apiCall.post(url, send_date).subscribe(MyResponse => {
      this.router.navigate(['/home', { categoryId: this.getCategoryId }]);
      this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.loader.hideBlockingLoaderAuth();
    });
  }
}
