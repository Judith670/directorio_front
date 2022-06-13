import { AuthService } from './../../services/auth.service';
import { TokenService } from './../../services/token.service';
import { ServicesService } from './../../services/services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };
  public error = null;

  constructor(
    private Service: ServicesService,
    private Token: TokenService,
    private router : Router,
    private Auth: AuthService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.Service.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data: any){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error: any){
    this.error = error.error.errors;
  }

}
