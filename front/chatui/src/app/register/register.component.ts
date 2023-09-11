import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private http: HttpClient) { }


  myform2 = new FormGroup({
     mail : new FormControl(),
     name : new FormControl(),
     password: new FormControl(),
    user: new FormControl()

  });

  Submit(){

    console.log(this.myform2.value);

    this.http.post("http://localhost:3300/user/create", this.myform2.value).subscribe((data: any) => {
      // if(data.error=="false")
      console.log(data.message);
      alert(data.message);
      location.reload();
    })



  }

}
