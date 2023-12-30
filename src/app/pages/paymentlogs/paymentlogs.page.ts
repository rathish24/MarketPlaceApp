import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { NetworkService } from 'src/app/service/network/network.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paymentlogs',
  templateUrl: './paymentlogs.page.html',
  styleUrls: ['./paymentlogs.page.scss'],
})
export class PaymentlogsPage implements OnInit {

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
    
    let url = environment.base_url + environment.version + "payment-gateway-logs?filters=" + JSON.stringify(filterObj);
    this.apiCall.get(url).subscribe(MyResponse => {
      this.paymentLogsArray = MyResponse['result']['list'];
      this.logsCount = MyResponse['result']['count'];
      console.log("show payment logs:" + JSON.stringify(this.paymentLogsArray));
      // this.loader.hideBlockingLoaderAuth();
    },
      error => {
        // this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }
}
