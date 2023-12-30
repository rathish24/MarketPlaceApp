import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkinternet',
  templateUrl: './checkinternet.page.html',
  styleUrls: ['./checkinternet.page.scss'],
})
export class CheckinternetPage implements OnInit {

  constructor(
    public apiService : ApiService,
    public loader : LoaderService,
  ) { }

  ngOnInit() {
  }

  reconnect(){
    // this.loader.showBlockingLoaderAuth();
    let url = "http://15.207.0.34:17700/api/test";
    this.apiService.get(url).subscribe(MyResponse => {
    window.history.back();
      // this.loader.hideBlockingLoaderAuth();

    },
      error => {
        // this.loader.hideBlockingLoaderAuth();
     
      })
  }
}
