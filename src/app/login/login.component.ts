import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginsService } from '../services/login/logins.service';
import { AuthentificationService } from '../services/authentification/authentification.service';
import { TokenStorage } from '../core/token.storage';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  passwordFormControl = new FormControl('', [Validators.required,]);
  loginFomrControl = new FormControl('', [Validators.required,]);


  constructor(private router: Router,
              private loginService: LoginsService,
              private authenService: AuthentificationService,
              private token: TokenStorage
            ) { }

  login(): void {

    // if (this.loginFomrControl.value == 'admin' && this.passwordFormControl.value == 'admin') {
    //   this.router.navigate(["user"]);
    // } else {
    //   alert("Invalid credentials");
    // }

      this.authenService.attemptAuth(this.loginFomrControl.value, this.passwordFormControl.value)
      .subscribe (
        res => {
          this.token.saveToken(res.token);
          this.router.navigate(['user']);
        }
      )
  
  
  }

  ngOnInit() {
  }

  

}
