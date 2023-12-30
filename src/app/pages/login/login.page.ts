import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { MenuController, ToastController, LoadingController,Platform,IonRouterOutlet } from '@ionic/angular';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { FacebookModule, FacebookService, LoginResponse, InitParams } from 'ngx-facebook';
import { JsonPipe } from '@angular/common';
import { FCM } from '@ionic-native/fcm/ngx';
import { SignuppopupPage } from '../signuppopup/signuppopup.page';
import { LoginpopupPage } from '../loginpopup/loginpopup.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData: any;
  hide = true;
  loginModel: any = {};
  loginDetails: any;
  gmailId : any = "";
  fbId : any = "";
  userName : any;
  userEmail : any;
  password :any = "password";
  gender : any=-1;
  isLoggedIn = false;
  imageUrl : any = "";
  users = { id: '', name: '', email: '', picture: { data: { url: '' } } };

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public toast: ToastController,
    public menuController: MenuController,
    public loader: LoaderService,
    private facebook: Facebook,
    private googlePlus: GooglePlus,
    public nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    public fcm: FCM,
    public apiCall: ApiService) {

      this.platform = platform;
      this.platform.backButton.subscribeWithPriority(-1, () => {
        if (this.routerOutlet.canGoBack()) {
          navigator['app'].exitApp();
        }
      });

    this.menuController.enable(false);

    // let initParams: InitParams = {
    //   appId: '293072848530685',
    //   xfbml: true,
    //   version: 'v2.8'
    // };

    // fb.init(initParams);

    facebook.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if (res.status === 'connect') {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log(e));

  }

  ngOnInit() {
  }


  fbLogin() {
    // this.fbLogout();
    this.facebook.login(['public_profile', 'email'])
      .then(res => {
        if (res.status === 'connected') {
          this.isLoggedIn = true;
          localStorage.setItem("loginType","fb");
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));

  }

  getUserDetail(userid: any) {
    this.facebook.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
      .then(res => {
        // this.router.navigate(['/home']);
      
        this.users = res;
        this.imageUrl = this.users.picture.data.url;
        console.log("show fb url:"+this.imageUrl);
        this.gmailId = "";
        this.fbId = res.id;
        this.userName = res.name;
        this.userEmail = res.email;
        this.login();
      })
      .catch(e => {
        console.log(e);
      });
  }

  loginClick(){

    console.log("login");

    const dialogRef = this.dialog.open(LoginpopupPage, {
      width: '500px',
      // panelClass : "add-city-dialog-container"
    });


    dialogRef.afterClosed().subscribe(async result => {
      console.log("show  name:" + JSON.stringify(result));
     
      if (result == "" || result == "undefined" || result == null) {

      } else {
          this.userEmail = result.email;
          this.password = result.password;

          this.getUserlogin();
      }
    });
  }

  getUserlogin(){

    let send_data= {
      "email" : this.userEmail,
      "password" : this.password
    }
    let url = environment.base_url + environment.version + "users/login";
    this.apiCall.post(url, send_data).subscribe(MyResponse => {
      if(MyResponse['result']['isActive'] == 1){
        localStorage.setItem("userId", MyResponse['result']['id']);
        // localStorage.setItem("loginType","email");
        localStorage.setItem("loginStatus", 'yes');
        localStorage.setItem("authToken",MyResponse['result']['jwt-token']);
        if(MyResponse['result']['image'] == null || MyResponse['result']['image'] == "" || MyResponse['result']['image'] == undefined){
          localStorage.setItem("profilePic", MyResponse['result']['image']);
        }else{
          localStorage.setItem("profilePic", MyResponse['result']['image']);
        }
        localStorage.setItem("userRole", MyResponse['result']['userRole']);
        localStorage.setItem("userName", MyResponse['result']['name']);
        localStorage.setItem("userCreated", MyResponse['result']['created']);
        this.router.navigate(['/home',{categoryId: "73"}],{ replaceUrl: true });
        // this.router.navigateByUrl('/profile', { replaceUrl: true }) 
        console.log("show login data:"+JSON.stringify(MyResponse['result']));
      }else{
        this.presentToast("Please try again");
      }
     
      this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.presentToast("Please try again");
      this.loader.hideBlockingLoaderAuth();

    })

  }

  signupClick(){

    console.log("signup");

    
      const dialogRef = this.dialog.open(SignuppopupPage, {
        width: '500px',
        // panelClass : "add-city-dialog-container"
      });
  
  
      dialogRef.afterClosed().subscribe(async result => {
        console.log("show  name:" + JSON.stringify(result));
       
        if (result == "" || result == "undefined" || result == null) {

        } else {

           this.userName = result.name;
           this.userEmail = result.email;
           if(result.gender=="male"){
             this.gender = 0;
           }

           if(result.gender=="female"){
            this.gender = 1;
          }
          this.password = result.password;
           this.login();
        }
  
       
  
      });
    
   
  }


  fbLogout() {
    this.facebook.logout()
      .then(res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }

  ionViewWillLeave() {
    // this.navCtrl.popToRoot();
    console.log("Looks like I’m about to leave :11");
   
    }

    ionViewWillEnter(){
      this.fcm.getToken().then(token => {
        console.log("TOKEN: " + token)
        localStorage.setItem("fcmToken", token);
        // alert("show token:"+token);
      });
    }



  login() {
  

    this.loader.showBlockingLoaderAuth();
    let send_date = {};


    send_date['name'] = this.userName;
    // send_date['mobile'] = this.loginModel.mobile;
    send_date['userRole'] = 0;

    if(this.imageUrl == "" || this.imageUrl == null){

    }else{
      send_date['image'] = this.imageUrl;
    }
   
    send_date['email'] = this.userEmail;

    if(this.gmailId != ""){
      send_date['gmailId'] = this.gmailId;
    }

    if(this.fbId != ""){
      send_date['facebookId'] = this.fbId;
    }

    send_date['gender'] = this.gender;

    send_date['password'] = this.password;
    
// send_date['name'] = "Akshay Madake";
// send_date['userRole'] = 0;
// send_date['image'] = "http://d3lgrseqpnv6xt.cloudfront.net/1593068644973.jpg";
// send_date['email'] = "akshaymadake1@gmail.com";
// send_date['gmailId'] = "108308451660503119865";

// send_date['name'] = "Asmita Belhekar";
// send_date['userRole'] = 0;
// send_date['image'] = "https://lh3.googleusercontent.com/a-/AOh14GgUQz70Tw0LjfLiFy0I7C-6RmtV2mdG5j9PEIX9Ww";
// send_date['email'] = "asmita.belhekar@gmail.com";
// send_date['gmailId'] = "110231677548942846776";



send_date['fcmToken'] =localStorage.getItem("fcmToken");

console.log("my token",""+JSON.stringify(send_date));
   

    let url = environment.base_url + environment.version + "users";
    this.apiCall.post(url, send_date).subscribe(MyResponse => {
      if(MyResponse['result']['isActive'] == 1){
       
        if(this.gmailId=="" && this.fbId ==""){
          this.presentToast("Registration done successfully");
        }else{
        localStorage.setItem("userId", MyResponse['result']['id']);
        // localStorage.setItem("loginType","email");
        localStorage.setItem("loginStatus", 'yes');
        localStorage.setItem("authToken",MyResponse['result']['jwt-token']);
        if(MyResponse['result']['image'] == null || MyResponse['result']['image'] == "" || MyResponse['result']['image'] == undefined){
          localStorage.setItem("profilePic", MyResponse['result']['image']);
        }else{
          localStorage.setItem("profilePic", MyResponse['result']['image']);
        }
        localStorage.setItem("userRole", MyResponse['result']['userRole']);
        localStorage.setItem("userName", MyResponse['result']['name']);
        localStorage.setItem("userCreated", MyResponse['result']['created']);
        this.router.navigate(['/home',{categoryId: "73"}],{ replaceUrl: true });
        // this.router.navigateByUrl('/profile', { replaceUrl: true }) 
        console.log("show login data:"+JSON.stringify(MyResponse['result']));
    
      }
      }else{
        this.presentToast("Please try again");
      }
     
      this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.presentToast("Please try again");
      this.loader.hideBlockingLoaderAuth();

    })
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }


  loginWithGmail() {
    console.log("login with gmail clicked");
    this.googlePlus.login({})
      .then((res) => {
        this.loginDetails = res;
        console.log("show gmail login detail:"+JSON.stringify(this.loginDetails));
        // localStorage.setItem("profileImage",res.imageUrl);
        this.gmailId = res.userId;
        this.imageUrl = res.imageUrl;
        if(this.imageUrl == null){
          this.imageUrl = "";
        }
        this.fbId="";
        this.userName = res.displayName;
        this.userEmail = res.email;
        localStorage.setItem("loginType","gmail");
        this.login();
      }, (err) => {
            console.log("Error :: ", err);
      })
  }

  logOut() {
    this.googlePlus.logout();
    alert("logged out");
  }


}


