import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http : HttpClient) { }

   //Image Upload Post
   callPostApiForImage(url: string, data: any) {
    let formData: FormData = new FormData();
    formData.append('image', data);
    // formData.append('isSaveToLocal', 'false');
    // console.log("url", url,data,options);
    return this.http.post(url, formData)
  }


  
//POST
public post(url,data) {

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }
  console.log(url);
  
  return this.http.post(url,data,httpOptions);
}


//POST
public postAuth(url,data) {
 let auth_token = localStorage.getItem("authToken");

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':auth_token
    })
  }
  console.log(url);
  
  return this.http.post(url,data,httpOptions);
}


 //GET

 public get(url) {
  

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization':this.auth_token
    })
  }
  console.log(url);
  return this.http.get(url,httpOptions);
}


public getUrl(url) {
  

  const httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'application/json',
      // 'Authorization':this.auth_token
    })
  }
  console.log(url);
  return this.http.get(url,httpOptions);
}



public getAd(url) {
  let auth_token = localStorage.getItem("authToken");
  console.log(auth_token,"This is auth token")

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':auth_token
    })
  }
  console.log(url);
  return this.http.get(url,httpOptions);
}

// public getCode(url,token) {
// console.log("show token::"+token);
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json',
//       'Authorization':'Token' + " " +"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdmdhZGFnaUBnbWFpbC5jb20ifSwiZXhwIjoxNTY2MjM0ODU0fQ.nMWPN38zptwwDKAo11bFyjhCRuzNhZc6NqqCaYJVxP0"
//     })
//   }
//   console.log(url);
//   return this.http.get(url,httpOptions);
// }


public delete(url) {

  console.log(url);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization':this.auth_token
    })
  }
  
  return this.http.delete(url);
}


public deleteAuth(url) {
  let auth_token = localStorage.getItem("authToken");
  console.log();
  console.log(url);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':auth_token
    })
  }
  
  return this.http.delete(url,httpOptions);
}
public deleteAdvertisement(url) {
  let auth_token = localStorage.getItem("authToken");
  console.log();
  console.log(url);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':auth_token
    })
  }
  
  return this.http.delete(url,httpOptions);
}



//PUT

public putAuth(url,data) {
  let auth_token = localStorage.getItem("authToken");
  console.log(url);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':auth_token
    })
  }
  return this.http.put(url,data,httpOptions);
}


//PUT

public put(url,data) {
  console.log(url);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
    })
  }
  return this.http.put(url,data,httpOptions);
}


public putOnlyUrl(url) {
  console.log(url);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
    })
  }
  return this.http.put(url,httpOptions);
}


}
