import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  //dependency injection
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.username === 'admin' && this.password === 'password') {
      //navigate welcome component (router)
      var new_pwd = prompt("If you would like to change your password, please do so here: ");
      this.router.navigate(['welcome']);
      this.invalidLogin = false;
      if (new_pwd != null) {
        this.password = new_pwd;
      } else {
        this.password = 'password'
      }

    } else {
      this.invalidLogin = true;
      //nvaigate to  error component
    }
  }

}
