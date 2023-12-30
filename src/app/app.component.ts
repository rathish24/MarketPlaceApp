import { Component, ViewChild } from '@angular/core';
import { App, Nav } from 'ionic-angular';
import { Platform, AlertController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { LoaderService } from './service/loaderservice/loader.service';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { HomePage } from './home/home.page';
import { AdvertisementdetailPage } from './pages/advertisementdetail/advertisementdetail.page';
import { NgZone } from '@angular/core';
import { ChatlistPage } from './pages/chatlist/chatlist.page';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { FCM } from '@ionic-native/fcm/ngx';
import { timer } from 'rxjs/observable/timer';

// import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // rootPage:any = HomePage;
  // showSplash = true;


  @ViewChild('myNav', { static: false }) navCtrl: NavController;
  @ViewChild(NavController, { static: false }) navChild: NavController;
  loadingBlock;
  appPages = [
    {
      title: 'Home',
      url: '/home',

    },
    {
      title: 'Chat List',
      url: '/chatlist',

    },
    {
      title: 'Profile',
      url: '/profile',

    },
    {
      title: 'Post Advertisement',
      url: '/postadvertisement',

    },
    {
      title: 'Log Out',
      url: '/',
    }
  ];
  constructor(
    private platform: Platform,
    public router: Router,
    public navController: NavController,
    public alertCtrl: AlertController,
    public preloader: LoaderService,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public deeplinks: Deeplinks,
    public zone: NgZone,
    public fcm: FCM,
    public localNotifications: LocalNotifications
  ) {
    this.initializeApp();
   
  }



  ngOnInit() {
    this.preloader.blockingLoaderAuth.subscribe(event => {
      this.loadingBlock = event;
    });
  }


  initializeApp() {
    // this.preloader.showBlockingLoaderAuth();
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
    

      this.splashScreen.hide();
      // if (this.platform.is('cordova')) {
      // } else {
      // }

      
      // timer(2000).subscribe(() => this.showSplash = false)




      // setTimeout (
      //   () => {
      //     this.preloader.blockingLoaderAuth.subscribe(event => {
      //       this.loadingBlock = event;
      //     });
      //   }, 4 * 1000
      // );

      this.loginSession();
      this.fcm.subscribeToTopic('people');
      this.fcmNotification();

      

      this.platform.backButton.subscribe(() => {

        let checkFilterPopup = localStorage.getItem("filterOpen");
        if(checkFilterPopup ==  "0" || checkFilterPopup == undefined){
          // this.router.navigate(['/home']);
        }else{
          if (this.router.url === '/home') {
            this.presentAlert()
            return
          }
        }
      });


      //share deep linking
      this.deeplinks.route({
        "/": {}
      }).subscribe((match) => {
        let sendId = {
          "id": match.$args.id,
          "categoryId": match.$args.categoryId,
          "status": "category",
          "adType": 1
        }

        this.router.navigate(['/advertisementdetail', { sendId: JSON.stringify(sendId) }]);

        console.log('Successfully routed', match);
      }, (nomatch) => {
        console.log('Unmatched Route', nomatch);
      });



      // this.platform.backButton.subscribeWithPriority(9999, () => {
      //   document.addEventListener('backbutton', function (event) {
      //     event.preventDefault();
      //     event.stopPropagation();
      //     console.log('hello');
      //   }, false);
      // });
    });
  }


  fcmNotification() {
    this.fcm.getToken().then(token => {
      console.log("TOKEN: " + token)
      localStorage.setItem("fcmToken", token);
      // alert("show token:"+token);
    });

    this.fcm.onTokenRefresh().subscribe(token => {
     
      console.log(token);
    });
    this.fcm.onNotification().subscribe(data => {
      console.log("show notification data:" + JSON.stringify(data));
      if (data.wasTapped) {
        this.router.navigate(['notificationlist']);
        console.log("Received in background");
      } else {
        console.log(JSON.stringify(data));
        this.localNotifications.schedule({
          id: 1,
          title: data.title,
          text: data.body,
          foreground: true,
          sound: "default",
          trigger: { at: new Date() },
          icon: 'http://d3lgrseqpnv6xt.cloudfront.net/1593765236250.png',
          actions: "FCM_PLUGIN_ACTIVITY",
          data: {
            type:data.type,
            details:data.details
          }
        });

        this.localNotifications.on('click').subscribe(notification => {
          console.log('Notification str: ' + JSON.stringify(notification))   
          switch(notification.data.type){
  
            case "0":
              this.router.navigate(['/detailchat', { userDetail: notification.data.details }]);                        
            break;
  
            case "1":
              this.router.navigate(['/home']);   
             break;
  
            case "2":
               this.router.navigate(['/advertisementdetail', { sendId: notification.data.details }]);
            break;
  
            case "3":
              this.router.navigate(['/chatlist']);
            break;

            default:
              this.router.navigate(['/home']);  
          }
        })
      };
    });
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: '',
      message: 'Do you want to exit?',
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
            // this.platform.;
            navigator['app'].exitApp()
          }
        }
      ]
    });
    alert.setAttribute('role', 'alert');
    await alert.present();
  }

  loginSession() {
    let loginStatus = localStorage.getItem("loginStatus");
    localStorage.setItem("cityname", "");
    if (loginStatus == "yes") {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
    this.preloader.hideBlockingLoaderAuth();
  }
  sideMenuClicked(pages) {
    if (pages == "Log Out") {
      localStorage.setItem("loginStatus", "no");
    }
  }
}




 


        // AIzaSyDZTo3RezTgFPhJOaUEMYMFCAv0RJxjYfQ