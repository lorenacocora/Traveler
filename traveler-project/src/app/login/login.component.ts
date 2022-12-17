import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('',Validators.required);
  password = new FormControl('',Validators.required);

  loginForm: FormGroup = new FormGroup({
    username: this.username,
    password: this.password
  });

  onSubmit(user: any){
    console.log(user);
  }

  onClickSignUp(){
    console.log("To sign up");
  }

  ngOnInit(): void {}
  

}