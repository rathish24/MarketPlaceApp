import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment'
import { ToastController } from '@ionic/angular';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';

@Component({
  selector: 'app-secondpageadvertisement',
  templateUrl: './secondpageadvertisement.page.html',
  styleUrls: ['./secondpageadvertisement.page.scss'],
})
export class SecondpageadvertisementPage implements OnInit {
  getData: any;
  fileToUpload: any;
  profilePic: any;
  usersId: any;
  imageUrl = 1;
  urls = [];
  defaultAdvertisementWeekPrice = "7";
  furtherAdvertisementWeeksPrice : any;

  defaultBannerWeekPrice = "7";
  furtherBannerWeeksPrice : any;
  submitAdvertisementData
  advertisementModel: any = {};
  fromDateTimestamp: number = 0;
  fromDateTimeAd: number = 0;
  toDateTimestamp: number = 0;
  toDateTimeAd: number = 0;
  endDate: any;
  endAdvertisementDate: any;
  selectedWeek: any = "1";
  selectedAdvertisementWeek: any;
  finalCalculation: any;
  bannerImage: any;
  totalCalculation: any;
  weeksArray = ["1", "2", "3", "4", "5"];
  todayDate: any;
  checkBoostStatus = '0';
  updateBoost: any;
  postStatus: any;
  advertisementObject = {};
  advertisementId: any;
  selectedNoOfWeek: any = "1";
  advertisementStatus: any;
  bannerArray: any;
  filterObject: any = {};
  updatedWeeks: any = "1";
  pricingArray = [];
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public loader: LoaderService,
    public toast: ToastController,
    public apiCall: ApiService) {
    this.selectedWeek = '1';
  }


  ngOnInit() {

  }

  ionViewWillEnter() {
    this.getPricing();
    this.todayDate = new Date();
    this.getData = JSON.parse(this.activatedRoute.snapshot.params['FinalObject']);
    this.bannerImage = this.getData.images[0];
    this.postStatus = localStorage.getItem("postStatus");

    if (this.postStatus == "1") {
      var advertisementDetail = localStorage.getItem("ADVERTISEMENTDATA");
      this.advertisementObject = JSON.parse(advertisementDetail);
      this.advertisementId = this.advertisementObject['id'];
      this.getAllBanner();
      console.log("advertisementObject:" + this.advertisementObject['address']);

      this.fromDateTimeAd = this.advertisementObject['startDateTime'];
      this.toDateTimeAd = this.advertisementObject['endDateTime'];
      this.updatedWeeks = this.getDate(this.fromDateTimeAd, this.toDateTimeAd);
      console.log("display ----:" + this.updatedWeeks);
    
      this.advertisementStatus = "update";
    } else {
      this.advertisementStatus = "post";

      this.selectAdvertisementNoOfWeeksType(1);

    }

    this.advertisementModel['noofweek'] = "1";
    this.selectedWeek = '1';
    this.selectNoOfWeeksType(1);
    localStorage.setItem("boostStatus", '0');

  }

  getPricing(){
    let url = environment.base_url + environment.version + "subscriptions" ;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.pricingArray = MyResponse['result']['list'];
      for(let i=0; i< this.pricingArray.length; i++){
        if(this.pricingArray[i]['name'] == "advertisement" || this.pricingArray[i]['name'] == "Advertisement"){
          this.defaultAdvertisementWeekPrice = this.pricingArray[i]['firstWeekPrice'];
          this.furtherAdvertisementWeeksPrice = this.pricingArray[i]['furtherOnwardsPrice'];
        }else if(this.pricingArray[i]['name'] == "banner" || this.pricingArray[i]['name'] == "Banner"){
          this.defaultBannerWeekPrice = this.pricingArray[i]['firstWeekPrice'];
          this.furtherBannerWeeksPrice = this.pricingArray[i]['furtherOnwardsPrice'];
        }
        else{
          this.defaultAdvertisementWeekPrice = this.pricingArray[i]['firstWeekPrice'];
          this.furtherAdvertisementWeeksPrice = this.pricingArray[i]['furtherOnwardsPrice'];
        }
      }
      this.loader.hideBlockingLoaderAuth();
    },
      error => {

      })
  }

  goBackword() {
    window.history.back();
  }


  toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
  }
  // submmitAdvertisementData(dat) {
  // this.fromDateTimestamp = this.toTimestamp(this.todayDate);
  // this.toDateTimestamp = this.toTimestamp(this.endDate);
  // alert("from date::"+this.fromDateTimestamp+ "to date:" +this.toDateTimestamp);

  // }



  selectAdvertisementNoOfWeeksType(type) {
    this.selectedAdvertisementWeek = type;
    this.todayDate = new Date();
    console.log("show no of week value::" + type);
    this.endAdvertisementDate = moment(this.todayDate).add(type, 'weeks').format('MM/DD/YYYY');

    let startDateTime = this.toTimestamp(this.todayDate);
    let endDateTime = this.toTimestamp(this.endAdvertisementDate);
    this.fromDateTimeAd = startDateTime;
    this.toDateTimeAd = endDateTime;
    console.log("start date timestamp:" + startDateTime);
    console.log("end date timestamp:" + endDateTime);


    console.log("show next date:" + moment(this.todayDate).add(type, 'weeks').format('MM/DD/YYYY'));
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


  getBannerDate(start, end) {
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


    let weeks = this.calculateBannerNumberOfWeeks(getStartDate, getEndDate);
    console.log("show weeks:" + weeks);

    return Math.abs(weeks);

  }

  calculateBannerNumberOfWeeks = function (d1, d2) {
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
      // this.selectedNoOfWeek = this.w;
     
      return this.w;
    }
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

  weeksBetween(d1, d2) {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
  }

  selectNoOfWeeksType(data) {
    this.selectedWeek = data;

    localStorage.setItem("boostStatus", '0');
    this.checkBoostStatus = localStorage.getItem("boostStatus");

    this.finalCalculation = 7 + ((data - 1) * 5);
    this.totalCalculation = this.finalCalculation;
    this.endDate = moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY');

    let startDateTimeStamp = this.toTimestamp(this.todayDate);
    let endDateTimeStamp = this.toTimestamp(this.endDate);
    this.fromDateTimestamp = startDateTimeStamp;
    this.toDateTimestamp = endDateTimeStamp;

    console.log("show next date:" + moment(this.todayDate).add(data, 'weeks').format('MM/DD/YYYY'));
  }

  calculateFinal() {
    this.checkBoostStatus = localStorage.getItem("boostStatus");
    if (this.checkBoostStatus == '0') {
      this.checkBoostStatus = '1';
      this.totalCalculation = this.finalCalculation + 100;
      localStorage.setItem("boostStatus", '1');
      this.updateBoost = localStorage.getItem("bannerId");
      // if(this.updateBoost == undefined || this.updateBoost == "" || this.updateBoost == null){
      //   this.postBanner(this.getData.categoryId);
      // }else{
      // this.updateBanner(this.getData.categoryId);
      // }
    } else {
      this.checkBoostStatus = '0';
      this.totalCalculation = this.totalCalculation - 100;
      localStorage.setItem("boostStatus", '0');
    }
  }

  postBanner(id) {
    this.loader.showBlockingLoaderAuth();
    let send_date = {};
    send_date['image'] = this.bannerImage;
    send_date['title'] = this.getData.title;
    send_date['description'] = this.getData.description;
    send_date['startDateTime'] = this.fromDateTimestamp;
    send_date['endDateTime'] = this.toDateTimestamp;
    send_date['lat'] = this.getData.lattitude;
    send_date['lng'] = this.getData.longitude;
    send_date['isActive'] = 1;
    send_date['city'] = this.getData.address;
    send_date['advertisementId'] = this.advertisementId;
    send_date['userId'] = this.usersId;

    let url = environment.base_url + environment.version + "category/" + id + "/banners";
    this.apiCall.post(url, send_date).subscribe(MyResponse => {

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
    send_date['title'] = this.getData.title;
    send_date['description'] = this.getData.description;
    send_date['startDateTime'] = this.fromDateTimestamp;
    send_date['endDateTime'] = this.toDateTimestamp;
    send_date['lat'] = this.getData.lattitude;
    send_date['lng'] = this.getData.longitude;
    send_date['isActive'] = 1;
    send_date['city'] = this.getData.address;
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
  submmitAdvertisementData(data) {

    this.loader.showBlockingLoaderAuth();

    if (this.toDateTimestamp == undefined || this.toDateTimestamp == null || this.toDateTimestamp == NaN) {
      this.presentToast("Please select weeks");
    } else {
      if (this.fromDateTimestamp == undefined || this.fromDateTimestamp == null) {
        this.presentToast("Please select weeks");
      } else {

        let send_date = {};
        send_date['title'] = this.getData.title;
        send_date['description'] = this.getData.description;
        send_date['price'] = this.getData.price;
        send_date['latitude'] = this.getData.lattitude;
        send_date['longitude'] = this.getData.longitude;
        send_date['address'] = this.getData.address;
        send_date['gender'] = this.getData.gender;
        send_date['languages'] = this.getData.languages;
        send_date['email'] = this.getData.email;
        send_date['mobile'] = this.getData.contact;
        send_date['categoryId'] = this.getData.categoryId;
        send_date['startDateTime'] = this.fromDateTimeAd;
        send_date['endDateTime'] = this.toDateTimeAd;
        send_date['isActive'] = 1;
        send_date['images'] = this.getData.images;
        send_date['countryCode'] = this.getData.countryCode;
        // send_date['transaction'] = "credited";

        this.usersId = localStorage.getItem("userId");

        if (this.advertisementStatus == "post") {

          let url = environment.base_url + environment.version + "users/" + this.usersId + "/advertisements";
          this.apiCall.post(url, send_date).subscribe(MyResponse => {
            this.advertisementId = MyResponse['result']['id'];
            localStorage.setItem("categoryId", this.getData.categoryId);
            this.presentToast("Advertisement posted successfully.");
            if (this.checkBoostStatus == '1') {
              this.postBanner(this.getData.categoryId);
            }
            this.router.navigate(['/home', { categoryId: this.getData.categoryId }]);
            this.loader.showBlockingLoaderAuth();
          }, error => {
            this.loader.hideBlockingLoaderAuth();
            this.presentToast("Please try again.");
          });

        } else {

          let url = environment.base_url + environment.version + "users/" + this.usersId + "/advertisements/" + this.advertisementId;
          this.apiCall.put(url, send_date).subscribe(MyResponse => {
            localStorage.setItem("categoryId", this.getData.categoryId);
            this.presentToast("Advertisement updated successfully.");


            // this.getAllBanner();
            if (this.checkBoostStatus == '1') {
              this.updateBanner(this.getData.categoryId);
            } else {
              this.postBanner(this.getData.categoryId);
            }
            this.router.navigate(['/favourite', { categoryId: this.getData.categoryId }]);
            this.loader.showBlockingLoaderAuth();
          }, error => {
            this.loader.hideBlockingLoaderAuth();
            this.presentToast("Please try again.");
          });
        }

      }
    }
  }

  getAllBanner() {
    this.loader.showBlockingLoaderAuth();
    this.filterObject = {};
    this.filterObject['advertisementId'] = this.advertisementId;
    this.filterObject['userId'] = this.usersId;

    let url = environment.base_url + environment.version + "category/" + this.getData.categoryId + "/banners?" + "filters=" + JSON.stringify(this.filterObject);
    this.apiCall.get(url).subscribe(MyResponse => {
      this.bannerArray = MyResponse['result']['list'];
      if (MyResponse['result']['count'] > 0) {
        this.checkBoostStatus = '1';
        let getBannerId = MyResponse['result']['list'][0]['id'];
        this.fromDateTimestamp = MyResponse['result']['list'][0]['startDateTime'];
        this.toDateTimestamp = MyResponse['result']['list'][0]['endDateTime'];
        localStorage.setItem("bannerId", getBannerId);
        this.selectedWeek = this.getBannerDate(this.fromDateTimestamp, this.toDateTimestamp);
        console.log("selected banner week show:"+this.selectedWeek);
        //   console.log("update banner API");
        //  this.updateBanner(this.getData.categoryId, getBannerId);
      } else {
        console.log("post bannee API");
        this.checkBoostStatus = '0';
        // this.postBanner(this.getData.categoryId);
      }
     
      this.loader.hideBlockingLoaderAuth();
    },
      error => {

      })

  }


  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
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
