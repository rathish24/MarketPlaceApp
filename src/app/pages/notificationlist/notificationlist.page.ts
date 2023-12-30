import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notificationlist',
  templateUrl: './notificationlist.page.html',
  styleUrls: ['./notificationlist.page.scss'],
})
export class NotificationlistPage implements OnInit {

  price: any = '100';
  gmailData : any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let data = localStorage.getItem("gmailData");
    this.gmailData = JSON.parse(data);
    alert("show data in notifications page:"+JSON.stringify(this.gmailData));
    this.price = this.route.snapshot.params['price'];
  }

}
