import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { MenuController, ToastController, IonSlides } from '@ionic/angular';
import { AdplansimagePage } from '../adplansimage/adplansimage.page';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  getBookMarkArray: any;
  bookmarkId: any;
  categoryId = 0;
  arrayLength: any;
  bookmarkLength: any;
  tabTitle = "0";
  checkStatus: boolean;
  advertisementModel: any = {};
  selectedTab = 0;
  advertisementArray: any;
  userId: any;
  getBookmarkObj: any = {};
  // imageArray = [
  //   {
  //     "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
  //   },
  //   {
  //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXeBX1noYQ2ohp9RRcj6almCOdV1gxfom6IC8IU6rVTq5qMxEN&usqp=CAU"
  //   },
  //   {
  //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk6eFBj7WsT3CA-hXtm1XIXyrOl_4VGM7KeeRyOwrxlWImybUs&usqp=CAU"
  //   },
  //   {
  //     "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
  //   },
  //   {
  //     "image": "https://i.pinimg.com/564x/54/c9/9b/54c99b01a6e6574724eda35b4ced31a8.jpg"
  //   },
  //   {
  //     "image": "https://i.pinimg.com/564x/54/c9/9b/54c99b01a6e6574724eda35b4ced31a8.jpg"
  //   },
  //   {
  //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPbANJ346aMhq6fHmxibMF3nWG4PZ-RYurGwBLXz0J-I2h26s8&usqp=CAU"
  //   },
  //   {
  //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRToTUk2HOJ-99u3Mv4qRCO6V3lq5AC6-J7KVA4mRBOh_2moumu&usqp=CAU"
  //   },
  //   {
  //     "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
  //   },
  //   {
  //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcO627ajsCYsf_HE5L8MXfugvvUe8ouCm8A6688WXreyA73dVf&usqp=CAU"
  //   },
  //   {
  //     "image": "data:image/jpeg;base64,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"
  //   },
  //   {
  //     "image": "http://fish.socialflix.in/wp-content/uploads/2020/02/orange-mercedes-benz-g63-164654.jpg"
  //   }
  // ];
  segment = 0;
  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400
  };

  selectedSlide: any;


  constructor(
    public dialog: MatDialog,
    public router: Router,
    public apiCall: ApiService,
    public toast: ToastController,
    public menuController: MenuController,
    public loader: LoaderService) {
    this.menuController.enable(false);
  }

  ngOnInit() {
    if (this.tabTitle == "0") {
      this.selectedTab = 0;
      this.getAdvertisement();
    } else {
      this.selectedTab = 1;
      this.getBookmarks();
    }
    // this.arrayLength = this.imageArray.length;
  }

  ionViewWillEnter() {
    if (this.tabTitle == "0") {

      var jsonString = localStorage.getItem("BOOKMARK");
      this.getBookmarkObj = JSON.parse(jsonString);
      if (this.getBookmarkObj == null || this.getBookmarkObj == "" || this.getBookmarkObj == undefined) {
        this.getBookmarkObj = {};
      } else {

      }

      console.log("show retrieved object:" + this.getBookmarkObj);

      this.selectedTab = 0;
      this.getAdvertisement();
    } else {
      this.selectedTab = 1;
      this.getBookmarks();
    }
  }

  activeInactiveAd(item){

    let isActive = 0;
    if(item.isActive){
      isActive = 0;
      console.log();

    }else{

      isActive = 1;
    }
    

    console.log("check",""+JSON.stringify(item));
    // /api/v1.0.0/users/{userId}/advertisementsActiveInactive/{id}

    let send_date = {};
    send_date['userId'] = item.userId;
    // send_date['isActive'] = isActive;
    send_date['id'] = item.id;
    // /api/v1.0.0/users/{userId}/advertisementsActiveInactive/{id}
    // /api/v1.0.0/users/{userId}/advertisementsActiveInactive/{id}
    let url = environment.base_url + environment.version + "users/" + item.userId + "/advertisementsActiveInactive/" + item.id ;   
    this.apiCall.putOnlyUrl(url).subscribe(MyResponse => {


      if(MyResponse['isSuccess']){


        this.changeActiveStatus(MyResponse['result'][0]);
      }
      

      // console.log("checking",""+JSON.stringify(MyResponse));

      // this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.presentToast("Please try again");
      this.loader.hideBlockingLoaderAuth();

    })

  }

  changeActiveStatus(item){

    for(let k=0 ;k < this.advertisementArray.length;k++){

      if(item.id==this.advertisementArray[k].id){

        this.advertisementArray[k].isActive = item.isActive
      }


    }
  }

  bookmarkAdvertisement(advertisementid) {

    this.checkStatus = this.getBookmarkObj.hasOwnProperty(advertisementid);
    console.log("check for status:" + this.checkStatus);
    if (this.checkStatus) {
      console.log("before delete:" + (this.getBookmarkObj));
      delete this.getBookmarkObj[advertisementid];
      localStorage.setItem("BOOKMARK", JSON.stringify(this.getBookmarkObj));
      this.removeBookmark(advertisementid);
    } else {
      this.getBookmarkObj[advertisementid] = true;
      localStorage.setItem("BOOKMARK", JSON.stringify(this.getBookmarkObj));
      console.log("display object:" + (this.getBookmarkObj));

      // this.loader.showBlockingLoaderAuth();
      let send_date = {};
      this.advertisementModel['userId'] = localStorage.getItem("userId");

      send_date['userId'] = this.advertisementModel['userId'];
      let url = environment.base_url + environment.version + "categories/" + this.categoryId + "/advertisements/" + advertisementid + "/bookmark";
      this.apiCall.postAuth(url, send_date).subscribe(MyResponse => {

        // this.loader.hideBlockingLoaderAuth();
      }, error => {
        this.presentToast("Please try again");
        this.loader.hideBlockingLoaderAuth();

      })
    }


  }
  

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

  async segmentChanged(ev: any) {

    await this.selectedSlide.slideTo(this.segment);

    this.tabTitle = ev.detail.value;

    if (this.tabTitle == "0") {
      this.selectedTab = 0;
      this.getAdvertisement();
    } else {
      this.selectedTab = 1;
      this.getBookmarks();
    }
    console.log('Segment changed', ev.detail.value);
  }

  async slideChanged(slides: IonSlides) {
    this.loader.showBlockingLoaderAuth();
    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex => {
      this.segment = selectedIndex;
      console.log("show index:"+this.segment);
    })
    this.loader.hideBlockingLoaderAuth();
  }

  getBookmarks() {

    this.loader.showBlockingLoaderAuth();
    let userId = localStorage.getItem("userId");
    let url = environment.base_url + environment.version + "users/" + userId + "/bookmarks?" + "size=" + 1000;
    this.apiCall.getAd(url).subscribe(MyResponse => {
      this.advertisementArray = MyResponse['result']['list'];
      this.bookmarkLength = MyResponse['result']['count'];
      // this.arrayLength = 0;
      //  console.log("advertisement data::"+JSON.stringify(this.advertisementArray));
      this.loader.hideBlockingLoaderAuth();

    },
      error => {
        this.loader.hideBlockingLoaderAuth();

      })
  }


  getAdvertisement() {
    this.loader.showBlockingLoaderAuth();
    let userId = localStorage.getItem("userId");
    let url = environment.base_url + environment.version + "users/" + userId + "/advertisements?" + "size=" + 1000;
    this.apiCall.getAd(url).subscribe(MyResponse => {
      this.advertisementArray = MyResponse['result']['list'];
      this.arrayLength = MyResponse['result']['count'];
      // this.arrayLength = 0;
      //  console.log("advertisement data::"+JSON.stringify(this.advertisementArray));
      this.loader.hideBlockingLoaderAuth();

    },
      error => {
        this.loader.hideBlockingLoaderAuth();

      })
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
    this.router.navigate(['/profile']);
  }

  showAdvertisementDetail(data, id, isBookmarked,isActive) {


    if(isActive){
    console.log("check myadd bookmarked:"+isBookmarked);
    let sendId = {
      "id": id,
      "categoryId": this.categoryId,
      "status": "users",
      "adType": 0,
      "isBookmarked":isBookmarked
    }
    // alert("show data::"+JSON.stringify(data));
    localStorage.setItem("url", data);
    console.log("send image::" + id);
    this.router.navigate(['/advertisementdetail', { sendId: JSON.stringify(sendId) }]);
  }else{
    this.presentToast("Advertise is inactive");
  }

  }

  showBookmarkAdvertisementDetail(categoryId, adId,isBookmarked){
    console.log("check bookmark bookmarked:"+isBookmarked);
    let sendId = {
      "id": adId,
      "categoryId": categoryId,
      "status": "category",
      "adType": 1,
      "isBookmarked":isBookmarked
    }
    // alert("show data::"+JSON.stringify(data));
    // localStorage.setItem("url", data);
    // console.log("send image::" + id);
    this.router.navigate(['/advertisementdetail', { sendId: JSON.stringify(sendId) }]);
  }
}
