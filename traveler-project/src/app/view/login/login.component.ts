import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router:Router){}

  onSubmit(user: any){
    console.log(user);
    this.router.navigateByUrl("/map");
  }

  ngOnInit(): void {}
  

}