import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { Router } from '@angular/router';
import { NetworkService } from 'src/app/service/network/network.service';

@Component({
  selector: 'app-showfilterdata',
  templateUrl: './showfilterdata.page.html',
  styleUrls: ['./showfilterdata.page.scss'],
})
export class ShowfilterdataPage implements OnInit {

  categoryArray: any;
  categoryName: any;

  constructor(public loader: LoaderService,
    public networkServices : NetworkService,
    public router: Router,
    public apiCall: ApiService
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  ionViewWillEnter() {
    this.categoryName = localStorage.getItem("categoryName");
    if (this.categoryName == undefined || this.categoryName == null || this.categoryName == "") {

    } else {

    }
  }

  getCategory() {
    this.loader.showBlockingLoaderAuth();
    let url = environment.base_url + environment.version + "category/" + 0 + "/sub-category"
    this.apiCall.get(url).subscribe(MyResponse => {
      this.categoryArray = MyResponse['result']['list'];
      this.loader.hideBlockingLoaderAuth();
    },
      error => {
        this.loader.hideBlockingLoaderAuth();
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }

  goBackword() {
    window.history.back();
  }

  applyFilter(id, name) {
    console.log("get id::" + id);
    localStorage.setItem("categoryName", id);
    this.router.navigate(['/home', { categoryId: id }]);
  }
}
