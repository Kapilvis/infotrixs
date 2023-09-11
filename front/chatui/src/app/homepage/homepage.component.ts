import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  
  myform2 = new FormGroup({
    //  mail : new FormControl(),
    //  name : new FormControl(),
    user: new FormControl(),
    password: new FormControl()

  });
  username:any;
  constructor(private http: HttpClient, public dialog: MatDialog) { 
    if(sessionStorage.getItem("username")==null)
    {
      this.username="Guest";

    }
    else
    {
      this.username=sessionStorage.getItem("username");
    }
  }


  show() {
    this.dialog.open(RegisterComponent, {
      width: "800px"
    });

  };

  // 


  Sign() {
    console.log(this.myform2.value);

    this.http.post("http://localhost:3300/user/login", this.myform2.value).subscribe((data: any) => {
      // if(data.error=="false")
      console.log(data.message);
      if(data.message=="Success")
      {
        sessionStorage.clear();
        alert(data.message);
        sessionStorage.setItem("username",this.myform2.controls.user.value);
        this.username=sessionStorage.getItem("username");
        console.log(this.username);
        
        // location.reload();

      }
      // sess
    })

  }

  Input(val:any){
    if(sessionStorage.getItem("username")!=null)
    {
      this.http.post("http://localhost:3300/message/create",{
        "user_name": this.username,
        // "time":"2023-03-01" ,
        "message":val,
      }).subscribe((data:any)=>{
        console.log(data);
        location.reload();

        
      });


    }
    else
    {
      alert("please login first");
    }
  }


Logout(){
  sessionStorage.clear();
  location.reload();



}

bottom(){
  this.show()
}
  
}