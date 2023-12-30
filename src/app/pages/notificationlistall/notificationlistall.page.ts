import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { NetworkService } from 'src/app/service/network/network.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notificationlistall',
  templateUrl: './notificationlistall.page.html',
  styleUrls: ['./notificationlistall.page.scss'],
})
export class NotificationListAllPage implements OnInit {

  getData: any;
  userId: any;
  paymentLogsArray: any;
  logsCount: any;

  status: any = "";

  constructor(
    public apiCall: ApiService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public networkServices: NetworkService,
  ) { }

  ngOnInit() {
    this.getData = JSON.parse(this.activatedRoute.snapshot.params['senPaymentLogData']);
   
    this.status = this.getData.status;
    console.log("check getData :" + this.status);
    this.getPaymentLogs();

  }


  goBackword() {
    window.history.back();
  }

  gotoPerticularNotification(item){

 

    console.log("here",""+JSON.stringify(item));

    switch(item.typeOfNotification){
  
      case 0:
        this.router.navigate(['/detailchat', { userDetail: JSON.stringify(item.details) }]);                        
      break;

      case 1:
        this.router.navigate(['/home']);   
       break;

      case 2:
         this.router.navigate(['/advertisementdetail', { sendId: JSON.stringify(item.details) }]);
      break;

      case 3:
        this.router.navigate(['/chatlist']);
      break;

      default:
        this.router.navigate(['/home']);  
    }

  }


  getPaymentLogs() {
    // this.loader.showBlockingLoaderAuth();
    let filterObj = {};

    if(this.status == "add"){
       filterObj = {
        "userId": this.getData.userId,
        "advertisementId": this.getData.advertisementId
      }
    }else if(this.status == "all"){
       filterObj = {
        "userId": this.getData.userId
      }
    }else{
       filterObj = {
        "userId": this.getData.userId
      }
    }


    // ​userid​/{id}​/notification​/list
    
    // let url = environment.base_url + environment.version + "payment-gateway-logs?filters=" + JSON.stringify(filterObj);
    let userId= localStorage.getItem("userId");
    // let url = environment.base_url + environment.version + "userid​/"+userId​+"/notification​/list";
    // http://3.6.135.154:17700/api/v1.0.0/userid/35/notification/list?page=0&size=10&filters=%7B%7D
    // console.log(url);
    let url = "http://15.207.0.34:17700/api/v1.0.0/userid/"+userId+"/notification/list";
    this.apiCall.get(url).subscribe(MyResponse => {
      this.paymentLogsArray = MyResponse['result']['list'];
      this.logsCount = MyResponse['result']['count'];
      console.log("show payment logs:" + JSON.stringify(MyResponse));
      // this.loader.hideBlockingLoaderAuth();
    },
      error => {
        // this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }
}

