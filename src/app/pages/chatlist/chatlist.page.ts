import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';
import { MenuController } from '@ionic/angular';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { NetworkService } from 'src/app/service/network/network.service';
import { AdplansimagePage } from 'src/app/pages/adplansimage/adplansimage.page';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {
  lastMessage: any;
  profileImg: any = "";
  usersCount: any = 0;
  userId: any;
  noInternet = "0";
  usersArray = [];
  showSearch = 0;
  showClose = 0;
  url : any;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public loader: LoaderService,
    public apiCall: ApiService,
    public networkServices: NetworkService,
    public menuController: MenuController) {
    this.menuController.enable(false);
    this.userId = localStorage.getItem("userId");
  }

  ngOnInit() {
    this.profileImg = localStorage.getItem("profileImage");
    // this.getUsers();
    this.userId = localStorage.getItem("userId");
  }

  ionViewWillEnter() {
    this.url = environment.base_url + environment.version + "users/" + this.userId + "/chat-users";
    this.userId = localStorage.getItem("userId");
    console.log("get userId:" + this.userId);
    this.getUsers(this.url);

    console.log("show page : Chat List");
  }

  detailChat(name, id, image) {
    if (image == null) {
      image = "";
    }

    console.log("show image as abc::::" + image);
    let userDetail = {
      "name": name,
      "id": id,
      "image": image
    }
    this.router.navigate(['/detailchat', { userDetail: JSON.stringify(userDetail) }]);
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
      }else{
        dialogRef.close();
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

  getUsers(url) {
    // this.loader.showBlockingLoaderAuth();
    // let url = environment.base_url + environment.version + "users/" + this.userId + "/chat-users";
    this.apiCall.get(url).subscribe(MyResponse => {
      this.usersArray = MyResponse['result']['list'];
      this.usersCount = MyResponse['result']['count'];
      console.log("show users:" + this.usersArray);
      // this.loader.hideBlockingLoaderAuth();
      this.noInternet = '0';
    },
      error => {
        this.noInternet = '1';
        // this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }

  searchShow() {
    this.showSearch = 1;

  }

  goBackword() {
    this.showSearch = 0;
  }

  clearSearch(){
    this.showSearch = 0;
    this.url = environment.base_url + environment.version + "users/" + this.userId + "/chat-users";
   
    this.getUsers(this.url);
  }

  search($event) {
    console.log("show key search:" + $event.data);
    let getKey = $event.data;
    if(getKey.length > 0){
      this.showClose = 1;

      this.url = environment.base_url + environment.version + "users/" + this.userId + "/chat-users?" + "search=" + getKey;
      this.getUsers(this.url);
    }else{
      this.url = environment.base_url + environment.version + "users/" + this.userId + "/chat-users";
      this.getUsers(this.url);
    }
  }
}
