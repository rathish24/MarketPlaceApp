import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";
import { Platform, IonSlides, ActionSheetController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { NetworkService } from 'src/app/service/network/network.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-advertisementdetail',
  templateUrl: './advertisementdetail.page.html',
  styleUrls: ['./advertisementdetail.page.scss'],
})
export class AdvertisementdetailPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  date: any;
  price: any;
  priceType : any;
  displayfavourite = "0";
  title: any;
  userId: any;
  description: any;
  mobile: any;
  advertisementId: any;
  categoryId: any;
  lattitude = 0;
  longitude = 0;
  profileDetail: any;
  address: any;
  // city: any;
  cityName: any;
  advertisementImages = [];
  stateName: any;
  countryName: any;
  loc: any = {};
  getImage = localStorage.getItem("url");
  getIds: any;
  advertisementArray = [];
  userName: any;
  userImg :any = "";
  userCreated: any;
  url: any;
  getBookmarkObj: any = {};
  keysObject = [];
  advertisementType: any;
  getBase64Image: any;
  getpathofimage: any;
  isBookmarked : any = 0;
  userMobile : any = "";
  image: any;
  gender : any;
  advertisementModel: any = {};
  getBookMarkArray: any;
  bookmarkId: any;
  public sendTo: any;
  public subject: string = 'Message from Marketplace App';
  public message: string = 'Marketplace App .';
  // public image : string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcO627ajsCYsf_HE5L8MXfugvvUe8ouCm8A6688WXreyA73dVf&usqp=CAU';
  // public image: string = "data:image/jpeg;base64,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";
  // public uri: string = 'https://marketplace.arraypointer.com/advertisementDetails?id=';
  public uri: string = 'marketplaceapp://marketplace.arraypointer.com/?id='
  img: any;
  deleteAd: number = 0;

  constructor(public activatedRoute: ActivatedRoute,
    public platform: Platform,
    public networkServices: NetworkService,
    public apiCall: ApiService,
    public networkService: NetworkService,
    public callNumber: CallNumber,
    public googlemaps: GoogleMaps,
    public router: Router,
    public fileChooser: FileChooser,
    private base64: Base64,
    public file: File,
    public actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    public nativeGeocoder: NativeGeocoder,
    public filePath: FilePath,
    public toast : ToastController,
    public loader: LoaderService,
    public alertController : AlertController) {

  }


  slidesDidLoad(slides: IonSlides) {
    // slides.startAutoplay();
  }

  nextSlide(slides: IonSlides) {
    slides.slideNext();
  }

  prevSlide(slides: IonSlides) {
    slides.slidePrev();
  }

  ngOnInit() {
    // var data={"id" : 1, "second" : "abcd"};
  }

  getDetailAdvertisement() {

    this.loader.showBlockingLoaderAuth();
    this.apiCall.getAd(this.url).subscribe(MyResponse => {
      this.advertisementArray = MyResponse['result'];
      this.advertisementId = this.advertisementArray['id'];
      this.address = this.advertisementArray['address'];
      this.description = this.advertisementArray['description'];
      this.title = this.advertisementArray['title'];
      this.lattitude = this.advertisementArray['latitude'];
      this.longitude = this.advertisementArray['longitude'];
      this.price = this.advertisementArray['price'];
      this.priceType = this.advertisementArray['adPriceType']
      this.gender = this.advertisementArray['gender'];
      this.mobile = this.advertisementArray['mobile'];
      this.date = this.advertisementArray['modified'];
      this.userId = this.advertisementArray['userId'];
      this.categoryId = this.advertisementArray['categoryId'];
      this.advertisementImages = this.advertisementArray['images'];
      console.log("show first image of advertisement:" + this.advertisementImages[0]);
      let getFirstImage = this.advertisementImages[0];
      localStorage.setItem("ADVERTISEMENTDATA", JSON.stringify(this.advertisementArray));
      this.getpathofimage = 'https://cors-anywhere.herokuapp.com/' + getFirstImage;
      let checkBase64 = this.convertToDataURLviaCanvas(this.getpathofimage, "image/jpeg").then((base64) =>

        console.log(this.getBase64Image = base64)

      )
      this.image = this.getBase64Image;
      console.log("show final base64Image:" + this.getBase64Image)
      this.getProfileDetail();
      this.loadMap();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.networkService.checkInternetConnection();
        this.networkService.onPageLoadCheckInternet();
      })
  }

  ionViewWillEnter() {

    this.loader.showBlockingLoaderAuth();
    this.userId = localStorage.getItem('userId');
    this.getIds = JSON.parse(this.activatedRoute.snapshot.params['sendId']);
    this.advertisementType = this.getIds.adType;
    this.isBookmarked = this.getIds.isBookmarked;
    let getStatus = this.getIds.status;
    console.log("get status in ad detail::"+getStatus);
    // this.getIds = JSON.parse(getdata);
    if (this.getIds.status == "users") {

      this.advertisementId = this.getIds.id;
      this.url = environment.base_url + environment.version + "users/" + this.userId + "/advertisements/" + this.advertisementId;
      this.getDetailAdvertisement();
    } else {

      this.advertisementId = this.getIds.id;
      this.categoryId = this.getIds.categoryId;
      console.log("show categoryId::" + this.categoryId);
      this.url = environment.base_url + environment.version + "categories/" + this.categoryId + "/advertisements/" + this.advertisementId;
      this.getDetailAdvertisement();
    }

    var jsonString = localStorage.getItem("BOOKMARK");
    this.getBookmarkObj = JSON.parse(jsonString);
    if (this.getBookmarkObj == null || this.getBookmarkObj == "" || this.getBookmarkObj == undefined) {
      this.getBookmarkObj = {};
    } else {

    }

    console.log("show retrieved object:" + this.getBookmarkObj);

    // let data = localStorage.getItem("BOOKMARK");

    // this.getBookmarkObj = JSON.parse(data);
    // console.log("getBookmarkObj::" + this.getBookmarkObj);
    // this.keysObject = Object.keys(this.getBookmarkObj);
    // for(let i=0; i< this.keysObject.length; i++){
    //   if(this.advertisementId == this.keysObject[i]){
    //     this.displayfavourite = "0";
    //   }
    //   else{
    //     this.displayfavourite = "1";
    //   }
    // }
    this.loader.hideBlockingLoaderAuth();
  }

  async presentActionSheet(image) {
    console.log("image:" + image);
    let checkBase64 = this.convertToDataURLviaCanvas(image, "image/jpeg").then(base64 =>

      console.log(this.getBase64Image = base64)
    )
    this.image = this.getBase64Image;
    // console.log("show final base64Image:" + this.image)
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: "Share on Whatsup",
          role: "destructive",
          icon: 'logo-whatsup',
          handler: () => {
            this.socialSharing
              .shareViaWhatsApp(this.message + "\n", this.image, "https://marketplace.arraypointer.com/?id=" + this.advertisementId + "&categoryId=" + this.categoryId)
              .catch(err => {
              })
              .catch(err => {
              });
          }
        },
        // {
        //   text: "Share on Email",
        //   role: "destructive",
        //   icon: 'mail',
        //   handler: () => {
        //     this.socialSharing.shareViaEmail(this.uri, this.message, this.sendTo)
        //       .then((data) => {
        //         console.log('Shared via Email');
        //       })
        //       .catch((err) => {
        //         console.log('Not able to be shared via Email');
        //       });
        //   }
        // },
        {
          text: "Share",
          role: "destructive",
          icon: 'share',
          handler: () => {
            this.socialSharing.share("marketplaceapp://marketplace.arraypointer.com/?id=" + this.advertisementId + "&categoryId=" + this.categoryId, this.message, this.image)
              .then(() => {
              })
              .catch(() => {
              });
          }
        },

      ]
    });
    actionSheet.present();
  }

  AskdeleteAdvertisement(){

    this.alertController.create({
      header : "Delete Advertisement !",
      subHeader : "Are you sure ?",
      buttons : [
        {
          text : "No",
          role : 'cancel',
          handler : (data)=>{
            console.log(data)
        }
        },
        {
          text : "Yes",
          handler : (data)=>{
            this.deleteAdvertisement(1)
          }
        }
      ]
    }).then((confirmElement)=>{
      confirmElement.present()
    })
  }

  deleteAdvertisement(value){
    if(value == 1){
      let url = environment.base_url + environment.version + "advertisements/" + this.advertisementId
      this.apiCall.deleteAdvertisement(url).subscribe(res =>{
        window.history.back()
      },err =>{
        console.log(err)
      })
    }
  }



  bookmarkAdvertisement(advertisementid, isBookmarked) {
    console.log("show isBookmarked:" + isBookmarked);
    console.log("show advertisementid:" + advertisementid);
    // console.log("show advertisement object:" + JSON.stringify(item));

    // let getObj = item;


    if (isBookmarked == 1) {
      
      this.isBookmarked = 0;
      this.removeBookmark(advertisementid);
    } else {
      // for (let i = 0; i < this.advertisementArray.length; i++) {
      //   if (advertisementid == this.advertisementArray[i]['id']) {
      //     this.advertisementArray[i]['isBookmarked'] = 1;
      //   }
      // }

      let send_date = {};
      this.advertisementModel['userId'] = localStorage.getItem("userId");

      send_date['userId'] = this.advertisementModel['userId'];
      let url = environment.base_url + environment.version + "categories/" + this.categoryId + "/advertisements/" + advertisementid + "/bookmark";
      this.apiCall.postAuth(url, send_date).subscribe(MyResponse => {

        console.log("checking",""+JSON.stringify(MyResponse));

        console.log(MyResponse["isSuccess"]);

        if(MyResponse["isSuccess"]){

          this.isBookmarked =1;
        }

        // this.getAdvertisement(this.categoryId);
        this.loader.hideBlockingLoaderAuth();
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


  //  removeBookmark(advertisementId) {
  //   this.userId = localStorage.getItem("userId");
    // let url = environment.base_url + environment.version + "users/" + this.userId + "/bookmarks?" + "size=" + 1000;
    // this.apiCall.getAd(url).subscribe(MyResponse => {
      // this.getBookMarkArray = MyResponse['result']['list'];
      // for (let i = 0; i < this.getBookMarkArray.length; i++) {

      //   console.log("show advertisement id:" + advertisementId);

      //   if (this.getBookMarkArray[i]['id'] == advertisementId) {
      //     console.log("show advertisement bookmark id:" + this.getBookMarkArray[i]['bookmarkId']);

      //     this.bookmarkId = this.getBookMarkArray[i]['bookmarkId'];
      //     console.log("check ------ bookmark id:" + this.bookmarkId);

      //   } else {
      //     console.log("show advertisement bookmark id failure ::" + this.getBookMarkArray[i]['bookmarkId']);

      //   }
      // }
      // console.log("show advertisement bookmark id:" + this.bookmarkId);

      // let url = environment.base_url + environment.version + "users/" + this.userId + "/bookmarks/" + advertisementId;
      // this.apiCall.deleteAuth(url).subscribe(MyResponse => {
      //   // this.getAdvertisement(this.categoryId);
      //   this.loader.hideBlockingLoaderAuth();
      // }, error => {
      //   this.presentToast("Please try again");
      //   this.loader.hideBlockingLoaderAuth();

      // })
    // },
    //   error => {

    //   })
  // }



  sharePicker(image) {

    var str = image;
    var dotIndex = str.lastIndexOf('.');
    var ext = str.substring(dotIndex);
    console.log("show first image:" + ext)
    if(ext == ".jpg" || ext == ".png" || ext == ".jpeg"){
      console.log("match image");
      this.image = image;
    }
    else{
      console.log("not match image");

    }
    this.platform.ready()
      .then(() => {
        this.socialSharing.share("", "", this.image, "https://marketplace.arraypointer.com/?id=" + this.advertisementId + "&categoryId=" + this.categoryId)
          .then((data) => {
            console.log('Shared via SharePicker');
          })
          .catch((err) => {
            console.log('Was not shared via SharePicker');
          });
      });
    console.log("share image:" + this.image);
    // this.platform.ready()
    //   .then(() => {

    //     this.socialSharing.share("https://marketplace.arraypointer.com/?id=" + this.advertisementId + "&categoryId=" + this.categoryId,this.image)
    //       .then(() => {
    //       })
    //       .catch(() => {
    //       });
    //   });
  }

  convertToDataURLviaCanvas(url, outputFormat) {
    return new Promise((resolve, reject) => {
      this.img = new Image();
      this.img.crossOrigin = 'anonymous';
      this.img.onload = () => {
        let canvas = <HTMLCanvasElement>document.createElement('CANVAS'),
          ctx = canvas.getContext('2d'),
          dataURL;
        canvas.height = this.img.height;
        canvas.width = this.img.width;
        ctx.drawImage(this.img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        resolve(dataURL);
        canvas = null;
      };
      this.img.src = url;
    });
  }

  getDataUrl(img) {
    console.log("show img in getdata function:" + img);
    // this.fileChooser.open().then((fileUri) => {
    //   console.log("show image uri:"+fileUri);
    //   this.filePath.resolveNativePath(fileUri).then((filePath) =>
    //   this.base64.encodeFile("filePath").then((base64String) => {
    //     alert("base64String:" + base64String);
    //   })

    // )
    //   .catch(err => console.log(err));
    // })


  }


  goBackword() {
    if (this.advertisementType == '0') {
      this.router.navigate(['/favourite']);
    }
    else {
      this.router.navigate(['/home', { categoryId: this.categoryId }]);
    }

  }

  getProfileDetail() {
    this.loader.showBlockingLoaderAuth();

    let url = environment.base_url + environment.version + "users/" + this.userId;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.profileDetail = MyResponse['result'];
      this.userName = this.profileDetail.name;
      // this.userMobile = this.profileDetail.mobile;
      localStorage.setItem("getName",this.userName);
      this.userId = this.profileDetail.id;
      if( this.profileDetail.image == "" || this.profileDetail.image == null){
        this.userImg = "";
      }else{
        this.userImg = this.profileDetail.image;
      }
      
      this.userCreated = this.profileDetail.created;
      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }

  loadMap() {
    // this.loader.showBlockingLoaderAuth();
    try {
      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: {
            lat: this.lattitude,
            lng: this.longitude
          },
          zoom: 18,
          tilt: 30
        }
      });

      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
        async (data) => {
          console.log("Click MAP", data);
          await this.map.animateCamera({
            target: {
              lat: this.lattitude,
              lng: this.longitude
            },
            zoom: 17,
            duration: 2000
          });
          let marker = await this.map.addMarker({
            title: 'Move pin to adjust',
            icon: 'red',
            animation: 'DROP',
            draggable: true,
            visible: true,
            position: {
              lat: this.lattitude,
              lng: this.longitude
            },

          })

          this.getAddressFromCoords(event[0]['lat'], event[0]['lng']);
        }
      );
    }
    catch (err) {
      console.log("loadmap function", err);
    }
  }


  getAddressFromCoords(lattitude, longitude) {
    try {
      console.log("getAddressFromCoords " + lattitude + " " + longitude);
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };


      this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
        .then((result: NativeGeocoderResult[]) => {
          this.address = "";
          let responseAddress = [];
          console.log("result", result);

          this.loc = {};

          this.loc['location'] = result[0]['subLocality'] + ", " + result[0]['locality'] + ", " + result[0]['subAdministrativeArea'];
          this.loc['address'] = result[0]['thoroughfare'];
          this.cityName = result[0]['subAdministrativeArea'] == "" ? result[0]['locality'] : result[0]['subAdministrativeArea'];
          this.stateName = result[0]['administrativeArea'];
          this.countryName = result[0]['countryName'];

          console.log("address", this.loc);

          this.loader.hideBlockingLoaderAuth();
        })
        .catch((error: any) => {
          this.loader.hideBlockingLoaderAuth();
          this.address = "Address Not Available!";
          // this.loader.hideBlockingLoaderAuth();

        });
    }
    catch (err) {
      console.log("get address function", err);
      // this.loader.hideBlockingLoaderAuth();

    }

  }


  makeCall() {
    this.userMobile = this.mobile;
    if(this.userMobile == "" || this.userMobile == "null" || this.userMobile == undefined){
      console.log("show number empty::::"+this.userMobile);
      this.presentToast("Sorry, you don't have number for call");
    }else{
      console.log("show number:"+this.userMobile);
      this.callNumber.callNumber(this.userMobile, true);
    }
  }


  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  sendMessage() {
    let userDetail = {
      "name": this.userName,
      "id": this.userId,
      "image" : this.userImg
    }
    this.router.navigate(['/detailchat', { userDetail: JSON.stringify(userDetail) }]);
    // this.router.navigate(['/detailchat', { name: "Asmita Belhekar" }]);
  }


  viewProfile() {
    this.router.navigate(['/profile', { userId: this.userId }]);
  }

  editAdvertisement() {
    let status = "1";
    localStorage.setItem("postStatus", status);
    this.router.navigate(['/newadvertisementform']);
  }

  viewPaymentLogs() {
    let senData = {}
    senData['userId'] = this.userId;
    senData['advertisementId'] = this.advertisementId;
    senData['status'] = "add";
   
    this.router.navigate(['/paymentlogs', { senPaymentLogData : JSON.stringify(senData)}]);
  }

}
