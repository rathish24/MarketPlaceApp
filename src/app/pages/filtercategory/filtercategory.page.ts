import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomePage } from 'src/app/home/home.page';
 
@Component({
  selector: 'app-filtercategory',
  templateUrl: './filtercategory.page.html',
  styleUrls: ['./filtercategory.page.scss'],
})
export class FiltercategoryPage implements OnInit {


  categoryId = "";

  activeIndex = 0;

  isSameSection = 0;

  parentArray: any[];
  categoryArray = [];
  automaticClose = false;

  subCategoryId: any = "";

  constructor(private http: HttpClient,
    public dialogRef: MatDialogRef<HomePage>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiCall: ApiService) {
    // this.http.get('assets/information.json').subscribe(res => {
    //   this.information = res['items'];
    //   this.information[0].open = true;
    // });
  }
  ngOnInit(): void {

    this.getCategory();
    localStorage.setItem("filterOpen", "1");
    this.categoryId = localStorage.getItem("selectedParent");
    this.subCategoryId = localStorage.getItem("selectedChild");
    console.log("show category on filter screen:" + this.categoryId);
    //  this.toggleSection(this.parentSelectionIndex);
  }

  getCategory() {
    let url = environment.base_url + environment.version + "category/" + 0 + "/sub-category"
    this.apiCall.get(url).subscribe(MyResponse => {
      this.parentArray = MyResponse['result']['list'];
      console.log(this.parentArray,"This is array ")

      for (let i = 0; i < this.parentArray.length; i++) {
        if (this.parentArray[i]['name'] == "Parent Category") {
        } else {
          this.categoryArray.push(this.parentArray[i]);
        }
      }
      console.log("show category data:" + JSON.stringify(this.parentArray));
    },
      error => {

      })
  }

  toggleSection(index, categoryId) {
    this.categoryId = categoryId;
   let cId = localStorage.getItem("selectedParent");
   let sid = localStorage.get("selectedChild")
    if(cId ==  this.categoryId &&  this.isSameSection !=1){

        this.isSameSection =1;
     
    }else{
      this.isSameSection =0;
      
    }
    localStorage.setItem("selectedParent", this.categoryId);
   
   
    // this.categoryArray[index].open = !this.categoryArray[index].open;
    // if (this.automaticClose && this.categoryArray[index].open) {
    //   this.categoryArray
    //   .filter((item, itemIndex) => itemIndex != index)
    //   .map(item => item.open = false);
    // }
  }

  toggleItem(categoryId, subCategoryId) {
    this.isSameSection = 0
    this.subCategoryId = subCategoryId;
    localStorage.setItem("selectedChild", subCategoryId);
    // this.categoryArray[index].childrens[childIndex].open = !this.categoryArray[index].childrens[childIndex].open;
    let checkId = {
      "categoryId": categoryId,
      "subCategoryId": subCategoryId,
    }
    this.dialogRef.close(checkId);
  }

  goTo(data){
    let checkId
    if(data.childrens.length == 0){
      this.isSameSection = 1
      checkId = {
        "categoryId": data.id,
      }
    }else{
      this.goTo(this.toggleItem)
    }
    
    this.dialogRef.close(checkId);
  }


  applyFilter(titleName) {
    this.dialogRef.close(titleName);
  }

  clearFilter() {
    this.categoryId = "";
    this.subCategoryId = "";
    localStorage.setItem("selectedParent", this.categoryId);
    localStorage.setItem("selectedChild", this.subCategoryId);
    let checkId = {
      "categoryId":  "clear",
      "subCategoryId": "clear",
    }
    this.dialogRef.close(checkId);
  }

  closeFilter() {
    this.dialogRef.close();
  }

}
