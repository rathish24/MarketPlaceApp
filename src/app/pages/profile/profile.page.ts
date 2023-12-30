import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { NetworkService } from 'src/app/service/network/network.service';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { environment } from 'src/environments/environment';
import { MenuController, AlertController } from '@ionic/angular';
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AdplansimagePage } from '../adplansimage/adplansimage.page';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Option } from 'ionic-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  showMobile = 0;
  loginType: any;
  noInternet = 1;
  name: any;
  email: any;
  updateStatus = 0;
  gender :any;
  mobile: any;
  roleId: any;
  username: any;
  image: any;
  userId: any;
  lattitude: any;
  longitude: any;
  address: any;
  loginUserId: any;
  profileDetail: any;
  isLoggedIn = false;
  profileImg: any = "";
  bannersCount: any = 0;
  advertisementCount: any = 0;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public alertCtrl: AlertController,
    public networkServices: NetworkService,
    public activatedRoute: ActivatedRoute,
    public loader: LoaderService,
    private facebook: Facebook,
    private googlePlus: GooglePlus,
    public menuController: MenuController,
    public apiCall: ApiService,
    private callNumber: CallNumber,
    private emailComposer: EmailComposer
  ) {
    this.menuController.enable(false);
  }

  ngOnInit() {
    // this.profileImg = localStorage.getItem("profileImage");
    // this.userId = this.activatedRoute.snapshot.params['userId'];
    // console.log("user id:" + this.userId);
    // this.getProfileInfo();
    // this.getCountryCode();
  }

  ionViewWillEnter() {
    this.userId = this.activatedRoute.snapshot.params['userId'];
    console.log("user id:" + this.userId);
    this.loginType = localStorage.getItem("loginType");
    // if (this.userId == undefined || this.userId == "" || this.userId == null) {
    //   this.userId = localStorage.getItem('userId');
    //   this.updateStatus = 0;
    // } else {
    //   this.updateStatus = 1;
    // }

    this.getProfileInfo();
  }
  getCountryCode() {
    let url = "https://www.universal-tutorial.com/api/countries";
    this.apiCall.get(url).subscribe(MyResponse => {
      console.log("display::" + MyResponse);
    },
      error => {
        console.log("display::" + error);
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      });

  }

  getProfileInfo() {
    this.loader.showBlockingLoaderAuth();
    this.noInternet = 1;
    if (this.userId == undefined || this.userId == "" || this.userId == null) {
      this.userId = localStorage.getItem('userId');
      // this.updateStatus = 0;
    } else {
      // this.updateStatus = 1;
    }
    this.loginUserId = localStorage.getItem('userId');
    if (this.loginUserId == this.userId) {
      this.updateStatus = 0;
      console.log("match id:");
    } else {
      this.updateStatus = 1;
      console.log("id not match");
    }
    let url = environment.base_url + environment.version + "users/" + this.userId;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.profileDetail = MyResponse['result'];
      console.log("checking profile info",""+JSON.stringify(this.profileDetail));
      this.name = this.profileDetail.name;
      localStorage.setItem("getName", this.name);
      if (this.profileDetail.mobile == null || this.profileDetail.mobile == "null" || this.profileDetail.mobile == "") {
        this.mobile = "";
        this.showMobile = 1;
        console.log("ger profile mobile null:");
      } else {
        this.showMobile = 0;
        console.log("ger profile mobile:" + this.mobile);
        this.mobile = this.profileDetail.mobile;
      }
      // this.mobile = this.profileDetail.mobile;
      this.email = this.profileDetail.email;

      if(this.profileDetail.gender ==0){

        this.gender = "Male";

      }else if(this.profileDetail.gender ==1){
        this.gender = "Female";
      }else {
        this.gender = "not updated"
      }
      this.profileImg = this.profileDetail.image;
      if (this.profileImg == null || this.profileImg == undefined || this.profileImg == "") {
        console.log("ger profile empty");
        this.profileImg = "";
      }
      else {
        console.log("ger profileimage:" + this.profileImg);
        this.profileImg = this.profileDetail.image;
      }
      this.bannersCount = this.profileDetail.bannersCount;
      this.advertisementCount = this.profileDetail.advertisementCount;
      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.noInternet = 0;
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }

  callSupport(mobile){

    this.callNumber.callNumber(mobile, true)
   .then(res => console.log('Launched dialer!', res))
   .catch(err => console.log('Error launching dialer', err));
 
   }

   emailSupport(email){
     console.log("Email open",email)
     let emailData ={
      to: email,
     }
     this.emailComposer.open(emailData)
    //  .then(res => console.log("Launched email app",res))
    //  .catch(err => console.log("Error while opening email app",err))
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

  logOut() {

    localStorage.setItem("cityname", "");

    if (this.loginType == "fb") {
      this.facebook.logout()
        .then(res => this.isLoggedIn = false)
        .catch(e => console.log('Error logout from Facebook', e));
      localStorage.clear();
      this.router.navigate(['/login'],{ replaceUrl: true });
      localStorage.setItem("loginStatus", "no");

    } else if (this.loginType == "gmail") {
      this.googlePlus.logout();
      localStorage.clear();
      this.router.navigate(['/login'],{ replaceUrl: true });
      localStorage.setItem("loginStatus", "no");
    } else {
      localStorage.clear();
      this.router.navigate(['/login'],{ replaceUrl: true });
      localStorage.setItem("loginStatus", "no");
    }


  }

  goBackword() {
    window.history.back();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: '',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.logOut();
          }
        }
      ]
    });
    alert.setAttribute('role', 'alert');
    await alert.present();
  }

  updateProfile() {
    let profileData = {
      "name": this.name,
      "email": this.email,
      "mobile": this.mobile,
      "image": this.profileImg
    }
    this.router.navigate(['/updateprofile', { profileData: JSON.stringify(this.profileDetail) }]);
  }


  viewPaymentLogs() {
    let senData = {};
    senData['userId'] = this.userId;
    senData['status'] = "all";
    this.router.navigate(['/paymentlogs', { senPaymentLogData : JSON.stringify(senData)}]);
  }
}

