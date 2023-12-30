import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-popupaddress',
  templateUrl: './popupaddress.component.html',
  styleUrls: ['./popupaddress.component.scss'],
})
export class PopupaddressComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<HomePage>,

  ) { }

  ngOnInit() {}

}
