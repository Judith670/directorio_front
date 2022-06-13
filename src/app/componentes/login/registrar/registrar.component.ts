import { TokenService } from './../../../services/token.service';
import { ServicesService } from './../../../services/services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  public register = {
    name: null,
    username: null,
    email: null,
    phone: null,
    address: null,
    suburb: null,
    password: null,
    password_confirmation: null,
    company_name: null,
    category: null
  };

  public error: any = [] ;

  constructor(
    private Service: ServicesService,
    private Token: TokenService,
    private router: Router
    ) { }


  ngOnInit(): void {
  }

  onRegister(){
    // console.log(this.form);
    this.Service.registro(this.register).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data: any){
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error: any){
    this.error = error.error.errors;
  }
}
