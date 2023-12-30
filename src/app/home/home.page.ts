import { Component, OnInit } from '@angular/core';
import { IonSlides, MenuController, ToastController, AlertController,Platform,IonRouterOutlet } from '@ionic/angular';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PopupPage } from '../pages/popup/popup.page';
import { FilterpopupComponent } from '../filterpopup/filterpopup.component';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../service/apiservice/api.service';
import { LoaderService } from '../service/loaderservice/loader.service';
import { NetworkService } from '../service/network/network.service';
import { empty } from 'rxjs';
import { FiltercategoryPage } from '../pages/filtercategory/filtercategory.page';
import { FiltercategoryPageModule } from '../pages/filtercategory/filtercategory.module';
import { GoogleMap, GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AdplansimagePage } from '../pages/adplansimage/adplansimage.page';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  showNoBanner = 0;
  getBookMarkArray: any;
  Languages: any;
  userId: any;
  arrayLength: any;
  countAdvertisement: any;
  bookmarkId: any;
  checkString: string;
  bannerImg: any;
  bannerCount: any;
  checkStatus: boolean;
  categoryId: any = "clear";
  categoryName = "";
  noInternet = "0";
  displayCategory: any = "clear";
  languageImage = "";
  cityName = "";
  distance = "";
  currentPage = 0;
  parentArray = [];
  keysObject = [];
  bannerArray = [];
  categoryArray = [];
  advertisementArray = [];
  getBookmarkObj: any = {};
  postBookmarkObj: any = {};
  advertisementModel: any = {};
  lastPage: any;
  firstView = 1;
  loadingBlock;
  isTracking: any;
  currentLat: any =18.5204;
  currentLong: any = 73.8567;
  selectedLanguage = "English";

  queryText : string;

  public searchControl: FormControl;
  public items: any;

  public ISO = false;

  

  ngOnInit() {


    // this.loader.blockingLoaderAuth.subscribe(event => {
    //   this.loadingBlock = event;
    // });

    // this.advertisementArray = [];
    // this.currentPage = 0;
    // this.getAdvertisement(this.categoryId);
    // var data={"id" : 1, "second" : "abcd"};
    this.getLocation();

    this.setFilteredItems("");

    this.searchControl.valueChanges
      .pipe()
      .subscribe(search => {
        this.setFilteredItems(search);
      });
  }

  constructor(
    public dialog: MatDialog,
    public apiCall: ApiService,
    public toast: ToastController,
    public alertCtrl: AlertController,
    public loader: LoaderService,
    public google: GoogleMaps,
    private geolocation: Geolocation,
    public networkServices: NetworkService,
    public menuController: MenuController,
    public activatedRoute: ActivatedRoute,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    public router: Router,
    ) {
    this.searchControl = new FormControl();
    this.menuController.enable(false);
    this.getCategory();
    this.getLanguages();
    this.platform = platform;
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        navigator['app'].exitApp();
      }
    });
   
    // this.getBannerData(this.categoryId);
    // this.advertisementArray = [];
    // this.currentPage = 0;
    // this.getAdvertisement(this.categoryId);

  }
  setFilteredItems(searchTerm) {
    let url
    if(searchTerm.length > 2 ) {
     url = environment.base_url + environment.version + "advertisements" + "?" +`search=${searchTerm}`
    }else{
    url = environment.base_url + environment.version + "advertisements"
    }
    console.log("This is url",url)
    console.log("This is search item we are going to send to service", searchTerm)
    this.apiCall.getAd(url).subscribe(res =>{
      console.log(res," raw Data we get from server")
      this.items = this.prepareData(res, searchTerm )
     console.log(this.items,"This is data we want finially")
     
    })
    // this.items = this.dataService.filterItems(searchTerm);
  }
  prepareData(data, searchTerm){
    let itemData = data.result.list
    return itemData.filter(item =>{
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  updateCatagory(event){
   // let query = this.queryText;
    console.log(event.target.value)
  }

  ionViewWillLeave() {
    // this.navCtrl.popToRoot();
    console.log("Looks like I’m about to leave :11");
    
    }

    getLocation() {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.currentLat = resp.coords.latitude;
        this.currentLong = resp.coords.longitude;

        console.log(" hh"+ resp);

        console.log( "kk" +this.currentLong);
  
        // let obj = {};
        // obj['lat'] = this.latt;
        // obj['lng'] = this.lng;
        // this.storage.set("current_location", obj).then(() => {
  
        // })
        this.getAdvertisement(this.categoryId);
        this.getBannerData(this.categoryId);
        console.log(resp);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }
  

  ionViewWillEnter() {

    document.getElementById('container1').scrollLeft += 30; 

    if(this.activatedRoute.snapshot.params['categoryId'] == null){
      this.categoryId = localStorage.getItem('categoryId')
      localStorage.removeItem('categoryId')
      this.displayCategory  = "clear";
    }else{
      this.categoryId = this.activatedRoute.snapshot.params['categoryId'];
    }

  
    // this.categoryId = "clear";

    this.advertisementArray = [];
    // this.currentPage = 0;
    // this.getAdvertisement(this.categoryId);
    let city = localStorage.getItem("cityname");
     let distance = localStorage.getItem('distance');
    if (city == "" || city == "undefined" || city == null) {
      this.cityName = "";
       this.distance= "";
      console.log("city name display undefined:" + city);
    } else {
      this.cityName = city;
       this.distance = distance
      console.log("city name display:" + city);
    }

    // var jsonString = localStorage.getItem("BOOKMARK");
    // this.postBookmarkObj = JSON.parse(jsonString);
    // if (this.postBookmarkObj == null || this.postBookmarkObj == "" || this.postBookmarkObj == undefined) {
    //   this.postBookmarkObj = {};
    // } else {

    // }

    // console.log("show retrieved object:" + this.postBookmarkObj);
    if (this.categoryId == undefined) {
      this.categoryId = "clear";
      console.log("check ::0");
      this.advertisementArray = [];
      this.currentPage = 0;
      this.getAdvertisement(this.categoryId);
      this.getBannerData(this.categoryId);
    } else {
      // if (this.categoryId == 1) {
      //   this.categoryName = "Dance";
      //   console.log("check ::1");
      // } else if (this.categoryId == 2) {
      //   this.categoryName = "Yoga";
      //   console.log("check ::2");
      // } else if (this.categoryId == 3) {
      //   this.categoryName = "Meditation";
      //   console.log("check ::3");
      // } else if (this.categoryId == 4) {
      //   this.categoryName = "Massage";
      //   console.log("check ::4");
      // } else if (this.categoryId == 5) {
      //   this.categoryName = "Music";
      //   console.log("check ::5");
      // } else {
      //   this.categoryName = "Music";
      //   console.log("check ::6");
      // }
      this.checkType(this.categoryName, this.categoryId);
    }
    console.log("get categoryId::" + this.categoryId);
    // this.getBannerData(this.categoryId);

  }

  getCategory() {
    this.loader.showBlockingLoaderAuth();
    let url = environment.base_url + environment.version + "category/" + 0 + "/sub-category"
    this.apiCall.get(url).subscribe(MyResponse => {
      this.parentArray = MyResponse['result']['list'];
      for (let i = 0; i < this.parentArray.length; i++) {
        // this.displayCategory = this.parentArray[0]['id'];
        if (this.parentArray[i]['name'] == "Parent Category") {
        } else {
          this.categoryArray.push(this.parentArray[i]);
        }
      }
      this.loader.hideBlockingLoaderAuth();
      this.noInternet = '0';
    },
      error => {
        this.noInternet = '1';
        this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }

  

  onSlideChanged(slides: IonSlides){

   slides.getActiveIndex().then(index => {
     
      let item =  this.bannerArray[index];


    this.callViewBannerCount(item.id,item.categoryId);


   });

  

  }
 

 

  getAdvertisement(categoryId) {
    console.log("check fb ads::")
    if(this.currentPage == 0){
      this.advertisementArray = [];
    }
    this.loader.showBlockingLoaderAuth();
    let url;

   if(this.cityName.length > 0){
     let parseDistance = parseInt(this.distance)
    if(parseDistance > 0){
      if (categoryId == "clear") {
        url = environment.base_url + environment.version + "advertisements?page=" + this.currentPage + "&size=10&latitude="+this.currentLat+"&longitude="+this.currentLong+"&language="+this.selectedLanguage+"&city="+this.cityName.trim()+"&distance="+this.distance;
      } else {
        url = environment.base_url + environment.version + "categories/" + categoryId + "/advertisements?page=" + this.currentPage + "&size=10&latitude="+this.currentLat+"&longitude="+this.currentLong+"&language="+this.selectedLanguage+"&city="+this.cityName.trim()+"&distance="+this.distance;
      }
    }else{
      if (categoryId == "clear") {
        url = environment.base_url + environment.version + "advertisements?page=" + this.currentPage + "&size=10&latitude="+this.currentLat+"&longitude="+this.currentLong+"&language="+this.selectedLanguage+"&city="+this.cityName.trim();
      } else {
        url = environment.base_url + environment.version + "categories/" + categoryId + "/advertisements?page=" + this.currentPage + "&size=10&latitude="+this.currentLat+"&longitude="+this.currentLong+"&language="+this.selectedLanguage+"&city="+this.cityName.trim();
      }
    }
      
    

   } else{

    if (categoryId == "clear") {
      url = environment.base_url + environment.version + "advertisements?page=" + this.currentPage + "&size=10&latitude="+this.currentLat+"&longitude="+this.currentLong+"&language="+this.selectedLanguage ;
    } else {
      url = environment.base_url + environment.version + "categories/" + categoryId + "/advertisements?page=" + this.currentPage + "&size=10&latitude="+this.currentLat+"&longitude="+this.currentLong+"&language="+this.selectedLanguage;
    }


   }


  

    console.log("url",""+url);
    this.apiCall.getAd(url).subscribe(MyResponse => {

      this.advertisementArray = this.advertisementArray.concat(MyResponse['result']['list']);
      console.log("This is advertizement",this.advertisementArray)
      this.countAdvertisement = MyResponse['result']['count'];
      this.lastPage = Math.ceil(this.countAdvertisement / 10);
      console.log("show total count:" + this.lastPage);
      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }

  getAdvertisementWithSubcategory(categoryId,subCategoryId) {
    console.log("check fb ads::")
    if(this.currentPage == 0){
      this.advertisementArray = [];
    }

    // /api/v1.0.0/categories/{categoryId}/subcategories/{subcategoryId}/advertisements

    this.loader.showBlockingLoaderAuth();
    let url;
    if (categoryId == "clear") {
      url = environment.base_url + environment.version + "advertisements?page=" + this.currentPage + "&size=10";
    } else {
      url = environment.base_url + environment.version + "categories/" + categoryId+ "/subcategories/"+subCategoryId + "/advertisements?page=" + this.currentPage + "&size=10";
    }
    this.apiCall.getAd(url).subscribe(MyResponse => {

      this.advertisementArray = this.advertisementArray.concat(MyResponse['result']['list']);
      this.countAdvertisement = MyResponse['result']['count'];
      this.lastPage = Math.ceil(this.countAdvertisement / 10);
      console.log("show total count:" + this.lastPage);
      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }

  viewMore() {
    this.currentPage += 1;

    this.getAdvertisement(this.categoryId);

    // let url = environment.base_url + environment.version + "categories/" + categoryId + "/advertisements?page=" + this.currentPage + "&size=1";

  }

  getBannerData(categoryId) {
    this.loader.showBlockingLoaderAuth();
    let url;

    if(this.cityName.length > 0){
      let parseDistance = parseInt(this.distance)
      if(parseDistance > 0){
        if (categoryId == "clear") {
          url = environment.base_url + environment.version + "banners?" + "size=1000&latitude="+this.currentLat+"&longitude="+this.currentLong+"&language="+this.selectedLanguage+"&city="+this.cityName.trim()+"&distance="+this.distance ;
        } else {
          url = environment.base_url + environment.version + "category/" + categoryId + "/banners?" + "size=1000&latitude="+this.currentLat+"&longitude="+this.currentLong+"&language="+this.selectedLanguage+"&city="+this.cityName.trim() +"&distance="+this.distance;
        }
      }else{
        if (categoryId == "clear") {
          url = environment.base_url + environment.version + "banners?" + "size=1000&latitude="+this.currentLat+"&longitude="+this.currentLong+"&language="+this.selectedLanguage+"&city="+this.cityName.trim() ;
        } else {
          url = environment.base_url + environment.version + "category/" + categoryId + "/banners?" + "size=1000&latitude="+this.currentLat+"&longitude="+this.currentLong+"&language="+this.selectedLanguage+"&city="+this.cityName.trim();
        }
      }
   
  }else{
    if (categoryId == "clear") {
      url = environment.base_url + environment.version + "banners?" + "size=1000&latitude="+this.currentLat+"&longitude="+this.currentLong+"&language="+this.selectedLanguage;
    } else {
      url = environment.base_url + environment.version + "category/" + categoryId + "/banners?" + "size=1000&latitude="+this.currentLat+"&longitude="+this.currentLong+"&language="+this.selectedLanguage;
    }

  }


    //  url = environment.base_url + environment.version + "category/" + categoryId + "/banners?" + "size=" + 1000;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.bannerArray = MyResponse['result']['list'];
      this.bannerCount = MyResponse['result']['count'];
      if (this.bannerCount == 0) {
        this.showNoBanner = 0;
      } else {
        this.showNoBanner = 0;
      }
      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }


  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();

    
  }


  getLanguages() {

    let url = environment.base_url + environment.version + "languages?"  + "size=" + 1000;;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.Languages = MyResponse['result']['list'];
      this.languageImage = this.Languages[0]['image'];
      this.selectedLanguage = this.Languages[0]['name'];
      console.log("checkinglanguage",""+this.selectedLanguage);
      this.loader.hideBlockingLoaderAuth();
      this.noInternet = '0';
    },
      error => {
        this.noInternet = '1';
        this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }

  scrollHorizontal(){

    // let  p = this.categoryArray.length -4;

    // let n = p * 60;
  
    document.getElementById('container1').scrollLeft += 30; 
  }




  filter() {
    const dialogRef = this.dialog.open(FiltercategoryPage, {

      width: '200px',
      panelClass: "show-filter-category-dialogue"

    });

    
    dialogRef.afterClosed().subscribe(async result => {
      console.log("show filter category:" + result);
      console.log("show filtered data:" + JSON.stringify(result));

      if (result.categoryId == "clear") {
        this.currentPage = 0;
      }
      this.categoryId = result.categoryId;
      this.getBannerData(result.categoryId);
      this.getAdvertisement(result.categoryId);
      // this.getAdvertisement(result.subCategoryId);
      this.getAdvertisementWithSubcategory(result.categoryId,result.subCategoryId);
      this.displayCategory = result.categoryId;
      localStorage.setItem("categoryId", result.subCategoryId);

      localStorage.setItem("filterOpen", "0");

    });
    // this.router.navigate(['/showfilterdata']);
  }




  checkType(title, id) {
    console.log("check title id ::" + title + "   " + "id" + id);
    this.categoryId = id;
    this.displayCategory = id;

    this.getBannerData(id);
    this.advertisementArray = [];
    this.currentPage = 0;
    this.getAdvertisement(id);
    // if (title == "Dance") {
    //   this.getBannerData(id);
    //   this.advertisementArray = [];
    //   this.currentPage = 0;
    //   this.getAdvertisement(id);
    // } else if (title == "Yoga") {
    //   this.getBannerData(id);
    //   this.advertisementArray = [];
    //   this.currentPage = 0;
    //   this.getAdvertisement(id);
    // } else if (title == "Meditation") {
    //   this.getBannerData(id);
    //   this.advertisementArray = [];
    //   this.currentPage = 0;
    //   this.getAdvertisement(id);
    // }
    // else if (title == "Massage") {
    //   this.getBannerData(id);
    //   this.advertisementArray = [];
    //   this.currentPage = 0;
    //   this.getAdvertisement(id);
    // }
    // else if (title == "Music") {
    //   this.getBannerData(id);
    //   this.advertisementArray = [];
    //   this.currentPage = 0;
    //   this.getAdvertisement(id);
    // }
  }

  async presentPrompt() {
    let alert = await this.alertCtrl.create({
      inputs: [
        {
          name: 'location',
          placeholder: 'Location'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }

  showPopup() {
    const dialogRef = this.dialog.open(PopupPage, {
      width: '800px',
       panelClass : "add-city-dialog-container"
    });


    dialogRef.afterClosed().subscribe(async result => {
      console.log("show city name:" + JSON.stringify(result));
      // this.cityName = result.city_name;
      if (result == "" || result == "undefined" || result == null) {
        // this.cityName = "";
        //  this.distance="";
      } else {
        this.cityName = result.city_name;
        this.currentLat = result.latitude;
        this.currentLong = result.longitude;
         this.distance = result.distance
      }

      this.getAdvertisement(this.categoryId);
      this.getBannerData(this.categoryId);

      localStorage.setItem("cityname", this.cityName);
       localStorage.setItem("distance",this.distance)

    });
  }

  openChatList() {
    this.router.navigate(['/chatlist']);
  }

  postAdvertisement() {
    const dialogRef = this.dialog.open(AdplansimagePage, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        let status = "0";
        localStorage.setItem("postStatus", status);
        this.router.navigate(['/newadvertisementform']);
      }
    });
  }

  home() {
    this.router.navigate(['/home']);
  }

  openFavourite() {
    this.router.navigate(['/favourite']);
  }

  openProfile() {
    // this.router.navigate(['/razorpay']);
    this.router.navigate(['/profile']);
  }


  showAdvertisementDetail(categoryId, id, isBookmarked,bannerId) {
    console.log("check bookmarked:" + isBookmarked);
    let sendId = {
      "id": id,
      "categoryId": categoryId,
      "status": "category",
      "adType": 1,
      "isBookmarked": isBookmarked
    }

    // this.callViewBannerCount(bannerId,categoryId);

    console.log("send image::" + id);
    this.currentPage = 0;
    this.advertisementArray = [];
    this.router.navigate(['/advertisementdetail', { sendId: JSON.stringify(sendId) }]);
  }

  callViewBannerCount(bannerId,categoryId){

    // console.log("dddddd",""+bannerId);

    let send_data = {

      "userId":localStorage.getItem("userId"),
      "bannerId" : bannerId,
      "categoryId": categoryId,

    }
   
    let url = environment.base_url + environment.version + "banners/view_count";

    // console.log("my url",""+url);
    this.apiCall.post(url, send_data).subscribe(MyResponse => {
      // this.getAdvertisement(this.categoryId);
      this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.presentToast("Please try again");
      this.loader.hideBlockingLoaderAuth();

    })


  }


  bookmarkAdvertisement(advertisementid, isBookmarked, item) {
    console.log("show isBookmarked:" + isBookmarked);
    console.log("show advertisementid:" + advertisementid);
    console.log("show advertisement object:" + JSON.stringify(item));

    let getObj = item;


    if (isBookmarked == 1) {
      for (let i = 0; i < this.advertisementArray.length; i++) {
        if (advertisementid == this.advertisementArray[i]['id']) {
          console.log("show advertisementid inside if:" + this.advertisementArray[i]['id']);
          this.advertisementArray[i]['isBookmarked'] = 0;
        }
      }

      this.removeBookmark(advertisementid);
    } else {
      for (let i = 0; i < this.advertisementArray.length; i++) {
        if (advertisementid == this.advertisementArray[i]['id']) {
          this.advertisementArray[i]['isBookmarked'] = 1;
        }
      }

      let send_date = {};
      this.advertisementModel['userId'] = localStorage.getItem("userId");

      send_date['userId'] = this.advertisementModel['userId'];
      let url = environment.base_url + environment.version + "categories/" + this.categoryId + "/advertisements/" + advertisementid + "/bookmark";
      this.apiCall.postAuth(url, send_date).subscribe(MyResponse => {
        // this.getAdvertisement(this.categoryId);
        this.loader.hideBlockingLoaderAuth();
      }, error => {
        this.presentToast("Please try again");
        this.loader.hideBlockingLoaderAuth();

      })
    }
  }

  // bookmarkAdvertisement(advertisementid) {
  //   this.checkStatus = this.postBookmarkObj.hasOwnProperty(advertisementid);
  //   console.log("check for status:" + this.checkStatus);
  //   if (this.checkStatus) {
  //     console.log("before delete:" + (this.postBookmarkObj));
  //     delete this.postBookmarkObj[advertisementid];
  //     localStorage.setItem("BOOKMARK", JSON.stringify(this.postBookmarkObj));
  //     this.removeBookmark(advertisementid);



  //     console.log("after delete:" + (this.postBookmarkObj));
  //   } else {
  //     this.postBookmarkObj[advertisementid] = true;
  //     localStorage.setItem("BOOKMARK", JSON.stringify(this.postBookmarkObj));
  //     console.log("display object:" + (this.postBookmarkObj));

  //     this.loader.showBlockingLoaderAuth();
  //     let send_date = {};
  //     this.advertisementModel['userId'] = localStorage.getItem("userId");

  //     send_date['userId'] = this.advertisementModel['userId'];
  //     let url = environment.base_url + environment.version + "categories/" + this.categoryId + "/advertisements/" + advertisementid + "/bookmark";
  //     this.apiCall.postAuth(url, send_date).subscribe(MyResponse => {
  //       this.getAdvertisement(this.categoryId);
  //       this.loader.hideBlockingLoaderAuth();
  //     }, error => {
  //       this.presentToast("Please try again");
  //       this.loader.hideBlockingLoaderAuth();

  //     })
  //   }

  // }

  removeBookmark(advertisementId) {
    this.userId = localStorage.getItem("userId");
    let url = environment.base_url + environment.version + "users/" + this.userId + "/bookmarks?" + "size=" + 1000;
    this.apiCall.getAd(url).subscribe(MyResponse => {
      this.getBookMarkArray = MyResponse['result']['list'];
      for (let i = 0; i < this.getBookMarkArray.length; i++) {

        console.log("show advertisement id:" + advertisementId);

        if (this.getBookMarkArray[i]['id'] == advertisementId) {
          console.log("show advertisement bookmark id:" + this.getBookMarkArray[i]['bookmarkId']);

          this.bookmarkId = this.getBookMarkArray[i]['bookmarkId'];
          console.log("check ------ bookmark id:" + this.bookmarkId);

        } else {
          console.log("show advertisement bookmark id failure ::" + this.getBookMarkArray[i]['bookmarkId']);

        }
      }
      console.log("show advertisement bookmark id:" + this.bookmarkId);

      let url = environment.base_url + environment.version + "users/" + this.userId + "/bookmarks/" + this.bookmarkId;
      this.apiCall.deleteAuth(url).subscribe(MyResponse => {
        // this.getAdvertisement(this.categoryId);
        this.loader.hideBlockingLoaderAuth();
      }, error => {
        this.presentToast("Please try again");
        this.loader.hideBlockingLoaderAuth();

      })
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


  notifications() {
    let senData = {};
    senData['userId'] = this.userId;
    senData['status'] = "all";
    this.router.navigate(['/notificationlistall', { senPaymentLogData : JSON.stringify(senData)}]);

  }

  getLanguage(data) {
    this.languageImage = data.image;

    this.selectedLanguage = data.name;

    this.getAdvertisement(this.categoryId);
    this.getBannerData(this.categoryId);
    
    console.log("language image show:" + data.image);
  }
}
