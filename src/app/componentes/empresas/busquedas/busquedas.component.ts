import { Router, NavigationExtras } from '@angular/router';
import { BusquedasServicesService } from './../../../services/Busquedas/busquedas-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  styleUrls: ['./busquedas.component.css']
})
export class BusquedasComponent implements OnInit {
  data: any;
  result: any;
  constructor(
    private BusquedaService : BusquedasServicesService,
    private route : Router
  ) { }

  ngOnInit(): void {
  }


  getEmpresas(name: any) {
    const keyword = name.target.value;
    this.BusquedaService.searchEmpresas(keyword).then(
      response => {
        this.data  = response;
        // console.log(this.data);
    });
    // console.log(keyword);
  }

  getDetalles( result: any){
    console.log(result);
    const navigationExtras : NavigationExtras = {
      queryParams : {
        result: JSON.stringify(result)
      }
    }
    this.route.navigate(['buscar/detalles'], navigationExtras);
  }
}
