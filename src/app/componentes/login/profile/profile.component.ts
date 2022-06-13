import { TokenService } from './../../../services/token.service';
import { ServicesService } from './../../../services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private Service : ServicesService,
    private Token : TokenService,
  ) { }

  ngOnInit(): void {
    this.Service.getUser().subscribe(res => {
      console.log(res);
    });
      // this.Empresas = res;
  }

}
