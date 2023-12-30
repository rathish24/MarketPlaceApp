import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { NetworkService } from 'src/app/service/network/network.service';
import { ToastController,IonContent } from '@ionic/angular';

@Component({
  selector: 'app-detailchat',
  templateUrl: './detailchat.page.html',
  styleUrls: ['./detailchat.page.scss'],
})
export class DetailchatPage implements OnInit {

  @ViewChild(IonContent, {read: IonContent, static: false}) myContent: IonContent;
  detailData: any;
  chatModel: any = {};
  chatArray = [];
  noInternet = "0";
  msgCount: any;
  userId: any;
  name: any;
  id: any;
  image: any = "";

  constructor(
    public activatedRoute: ActivatedRoute,
    public apiCall: ApiService,
    public networkServices: NetworkService,
    public loader: LoaderService,
    public toast: ToastController
  ) { }


  ScrollToBottom(){
    setTimeout(() => {
      this.myContent.scrollToBottom(300);
   }, 1000);
  }

  ngOnInit() {

    this.detailData = JSON.parse(this.activatedRoute.snapshot.params['userDetail']);
    this.name = this.detailData.name;
    this.id = this.detailData.id;

    console.log(this.name);
    console.log("pp "+this.id);
    
    if(this.detailData.image == null || this.detailData.image == ""){
      this.image = "";
    }else{
      this.image =this.detailData.image;
    }
    this.getChatMassages();

  }

  ionViewWillEnter() {
    this.getChatMassages();
    
  }


  ionViewDidLoad(){
    this.ScrollToBottom();
  }
 



  goBackword() {
    window.history.back();
  }

  sendMessage() {
    console.log("show msg :"+this.chatModel['message']);
    if (this.chatModel['message'] == undefined || this.chatModel['message'] == null || this.chatModel['message'] == "") {
     
    } else {
      this.loader.showBlockingLoaderAuth();
      let send_date = {};


      send_date['message'] = this.chatModel['message'];
      this.userId = localStorage.getItem("userId");
      let url = environment.base_url + environment.version + "sender/" + this.userId + "/receive/" + this.id + "?" + "size=" + 1000;
      this.apiCall.post(url, send_date).subscribe(MyResponse => {

        this.getChatMassages();
        this.chatModel['message'] = "";
        this.loader.hideBlockingLoaderAuth();
      }, error => {
        this.presentToast("Please try again");
        this.loader.hideBlockingLoaderAuth();

      })
    }

  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  getChatMassages() {
    // this.loader.showBlockingLoaderAuth();
    this.userId = localStorage.getItem("userId");
    let url = environment.base_url + environment.version + "sender/" + this.userId + "/receive/" + this.id+ "?" + "size=" + 1000;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.chatArray = MyResponse['result']['list'];
      this.msgCount = MyResponse['result']['count'];
      console.log("show users:" + JSON.stringify(this.chatArray));


      for(let k=0;k< this.chatArray.length; k++){

        // toLocaleString(); 
        this.chatArray[k].created = new Date(this.chatArray[k].created).toLocaleDateString() +" "+ new Date(this.chatArray[k].created).toLocaleTimeString();

        // var localDate = new Date(utcDate);
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


}
