import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomePage } from 'src/app/home/home.page';
 

@Component({
  selector: 'app-adplansimage',
  templateUrl: './adplansimage.page.html',
  styleUrls: ['./adplansimage.page.scss'],
})
export class AdplansimagePage implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HomePage>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // this.http.get('assets/information.json').subscribe(res => {
    //   this.information = res['items'];
    //   this.information[0].open = true;
    // });
  }

  ngOnInit() {
  }



  clear(value){


this.dialogRef.close(value);

  }

}
