import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { ToastController } from '@ionic/angular';
import { LoaderService } from 'src/app/service/loaderservice/loader.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.page.html',
  styleUrls: ['./updateprofile.page.scss'],
})
export class UpdateprofilePage implements OnInit {

  loginUserId: any;
  updateStatus = 0;
  userRole: any;
  getProfileDetail: any;
  getProfileDetailN: any;
  profileModel: any = {};
  profileImg: any = "";
  fileToUpload: any;
  selectedRadioGroup: any;
  checkRadioButton: any = "male";
  genderArray = [
    {
      "id": "0",
      "value": "0",
      "name": "Male"
    },
    {
      "id": "1",
      "value": "1",
      "name": "Female"
    }
  ];

  // genderArray = [
  //   {
  //     "id": "0",
  //     "value": "male",
  //     "name": "Male"
  //   },
  //   {
  //     "id": "1",
  //     "value": "female",
  //     "name": "Female"
  //   }
  // ];

  constructor(
    public router: Router,
    public apiCall: ApiService,
    public loader: LoaderService,
    public toast: ToastController,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginUserId = localStorage.getItem('userId');
    this.userRole = localStorage.getItem('userRole');

    let getData = this.activatedRoute.snapshot.params['profileData'];
    this.getProfileDetail = JSON.parse(getData);
    // this.callGetUserDetails();

    console.log("getProfileDetail id:" + this.getProfileDetail.id);
    this.profileImg = this.getProfileDetail.image;
    console.log("ger profile image:" + this.profileImg);
    if (this.profileImg == null || this.profileImg == undefined || this.profileImg == "") {
      console.log("ger profile empty");
      this.profileImg = "1";
    }
    else {
      console.log("ger profileimage:" + this.profileImg);
      this.profileImg = this.getProfileDetail.image;
    }


    if (this.loginUserId == this.getProfileDetail.id) {
      this.updateStatus = 0;
    } else {
      this.updateStatus = 1;
    }
    this.profileModel['name'] = this.getProfileDetail.name;
    this.profileModel['email'] = this.getProfileDetail.email;
    this.profileModel['contact'] = this.getProfileDetail.mobile;


   
    // if(this.getProfileDetail.gender ==0){
    //   this.selectedRadioGroup = "male"
    // }else if(this.getProfileDetail.gender ==1){
    //   this.selectedRadioGroup = "female"

    // }
    // this.profileModel['gender'] =  
    // this.selectedRadioGroup= this.getProfileDetail.gender;
    // this.profileModel['password'] = this.getProfileDetail.password;
  }

  // callGetUserDetails() {

  //   let url = environment.base_url + environment.version + "users/" + this.loginUserId
  //   this.apiCall.get(url).subscribe(MyResponse => {

     
  //       this.getProfileDetailN = MyResponse['result'];

  //       this.profileModel['gender'] = this.getProfileDetailN['gender'];

  //       if(this.profileModel['gender'] == 0){
  //         this.selectedRadioGroup = "0";
  //       }else if(this.profileModel['gender'] == 1){
  //         this.selectedRadioGroup = "1";
  //       }
      
  //        console.log("json string",""+JSON.stringify(this.getProfileDetailN));

  //   });

  // }




  goBackword() {
    window.history.back();
  }

  // radioGroupChange(event) {
  //   console.log("radioGroupChange", event.detail.value);
  //   this.selectedRadioGroup = event.detail.value;
  //   if (this.selectedRadioGroup == 'male' ) {
  //     this.profileModel['gender'] = 0;
  //     // this.checkRadioButton = "male";
  //   } else if (this.selectedRadioGroup == 'female' ) {
  //     this.profileModel['gender'] = 1;
  //     // this.checkRadioButton = "female";
  //   }

   
  // }

  updateProfileData() {

    if (this.profileImg == "1" || this.profileImg == null) {
      this.presentToast("Please upload profile picture.");
    } else {
      if (this.profileModel['contact'] == null) {
        this.profileModel['contact'] = "";
      }
      console.log("profile name:" + this.profileModel['name']);
      console.log("profile email:" + this.profileModel['email']);
      console.log("profile contact:" + this.profileModel['contact']);

      let send_date = {};
      send_date['name'] = this.profileModel['name'];
      send_date['image'] = this.profileImg;
      localStorage.setItem("getName", send_date['name']);
      send_date['email'] = this.profileModel['email'];
      send_date['mobile'] = this.profileModel['contact'];
      send_date['gender'] = -1;
      // send_date['token'] =localStorage.getItem("fcmToken");
      // send_date['isActive'] = 1;
      // send_date['userRole'] = this.userRole;
      // send_date['password'] = this.getProfileDetail.password;

      let url = environment.base_url + environment.version + "users/" + this.getProfileDetail.id;
      this.apiCall.put(url, send_date).subscribe(MyResponse => {
        this.presentToast("Profile updated successfully.");
        this.router.navigate(['/profile']);
      }, error => {
      });
    }

  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  detectEventGallery(event) {
    this.loader.showBlockingLoaderAuth();
    console.log(event);
    let files = event.target.files;
    console.log(files);
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
        }
        console.log(file);
        this.fileToUpload = file;
        reader.readAsDataURL(this.fileToUpload);
      }

      this.handleFirstFileInput(this.fileToUpload);

    }
    console.log("file uploaded::" + JSON.stringify(this.fileToUpload));
  }


  handleFirstFileInput(files: FileList) {
    this.loader.showBlockingLoaderAuth();
    if (files == null || files == undefined) {
    }
    let url = "https://xy2y3lhble.execute-api.ap-south-1.amazonaws.com/dev";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {


        this.loader.hideBlockingLoaderAuth();

        this.profileImg = MyResponse['result'][0];

        console.log("print url resonce:" + this.profileImg);
      }, error => {
        this.loader.hideBlockingLoaderAuth();
        console.log(error);

      }
    );
  }


}
