import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.css']
})
export class CalloutComponent {
  list1:any;
  constructor( public http:HttpClient){


this.http.get("http://localhost:3300/message/all").subscribe((data:any)=>{
    console.log(data);
    this.list1=data;
  });
  }

// show(){

  
// this.http.get("http://localhost:3300/user/all").subscribe((data:any)=>{
//   console.log(data);});
// }
  // console.log(err);

  
// })





//   public username:any;
// {
//   if(sessionStorage.getItem("username")==null)
//   {
//     this.username="guest";

//   }
//   else
//   {
//     this.username=sessionStorage.getItem("username");
//   }


}







