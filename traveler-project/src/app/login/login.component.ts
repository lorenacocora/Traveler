import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl();
  password = new FormControl();

  loginFormGroup: FormGroup = new FormGroup({
    username: this.username,
    password: this.password
  });

  ngOnInit(): void {}
  

}