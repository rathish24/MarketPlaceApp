import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {



  loadingStatus = new Subject<boolean>();
  loaderTop = new Subject<boolean>();
  blockingLoader = new Subject<boolean>();
  blockingLoaderAuth = new Subject<boolean>();
  bgGrey = new Subject<boolean>();

  blockingLoaderFlag = false;
  loaderTopFlag = false;


  showBlockingLoader(){
    console.log("load");
    this.blockingLoader.next(true);
    this.blockingLoaderFlag = true;
  }

  hideBlockingLoader(){
    this.blockingLoader.next(false);
    this.blockingLoaderFlag = false;
  }

  showBlockingLoaderAuth(){
    this.blockingLoaderAuth.next(true);
  }

  hideBlockingLoaderAuth(){
    this.blockingLoaderAuth.next(false);
  }


  constructor() { }
}

  // constructor(public loadingController: LoadingController) { }

 

  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     message: 'Please wait...',
      
  //   });
  //   await loading.present();
  //   setTimeout(() => {
  //     loading.dismiss();
  //   }, );
  //   const { role, data } = await loading.onDidDismiss();
  //   console.log('Loading dismissed!' + role + ' Data: ' + data);
  
  // }
  
  // async stopLoading(){
  //   this.loadingController.dismiss();
  // }
  // }
  