import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform, ToastController } from '@ionic/angular';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  checkStatus: any;

  public NetworkStatus: BehaviorSubject<boolean>;
  private WatchConnect: Subscription;
  private WatchDisconnect: Subscription;


  constructor(public network: Network,
    public router: Router,
    public toastController: ToastController,
    public platform: Platform,
    private http: HttpClient) {

    console.log('Hello NetworkConnectivityProvider');
    this.NetworkStatus = new BehaviorSubject(false);            // Assume Network is offline
    this.CheckNetworkStatus();
    this.CreateNetworkObserverSubscriptions();
  }

  checkInternetConnection() {
    this.network.onDisconnect().subscribe(() => {
      // this.presentToast()
      this.router.navigate(['/checkinternet']);
      // this.navigateInternetPage();
      // this.dialogs.alert('You are not connected to the internet');
    });
    this.network.onConnect().subscribe(() => {
      // this.presentSuccessToast()
      // this.dialogs.alert('You are connected to the internet');
      setTimeout(() => {
      }, 2000);
    });
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'You are not connected to the internet',
      duration: 2000,
      cssClass: 'my-custom-fail-class',
    });
    toast.present();
  }

  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: "You are connected to the internet",
      cssClass: "my-custom-success-class",
      duration: 2000
    });
    toast.present();
  }

  CheckNetworkStatus() {
    if (this.platform.is('cordova')) {
      if (this.network.type === undefined || this.network.type === null || this.network.type === 'unknown') {
        this.UpdateNetworkStatus(false);
      } else {
        this.UpdateNetworkStatus(true);
      }
    } else {
      this.UpdateNetworkStatus(navigator.onLine);
    }
    return this.network.type;
  }

  onPageLoadCheckInternet() {

    this.checkStatus = this.CheckNetworkStatus();
    if (this.checkStatus == "none" || this.checkStatus == "" || this.checkStatus == undefined || this.checkStatus == null) {
      // this.presentToast();
      this.router.navigate(['/checkinternet']);
      // this.navigateInternetPage();
    }
    else {
      // this.presentSuccessToast()
    }

    return this.checkStatus;
  }

  CreateNetworkObserverSubscriptions() {
    this.WatchConnect = this.network.onConnect().subscribe(
      data => { this.UpdateNetworkStatus(true); },
      error => { console.log(error); }
    );
    this.WatchDisconnect = this.network.onDisconnect().subscribe(
      data => { this.UpdateNetworkStatus(false); },
      error => { console.log(error); }
    );
  }

  UpdateNetworkStatus(IsOnline: boolean) {
    console.log('Network ', (IsOnline == true ? 'Online' : 'Offline'));
    this.NetworkStatus.next(IsOnline);
    return IsOnline;
  }


  // navigateInternetPage() {
  //   this.router.navigate(['/checkinternetconnection']);

  // }
}
