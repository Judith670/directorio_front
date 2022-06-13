import { EmpresasServicesService } from './../../../services/Empresas/empresas-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarEmpresasComponent implements OnInit {
  Empresas:any;

  constructor(
    private EmpresasService : EmpresasServicesService
  ) { }

  ngOnInit(): void {
    this.EmpresasService.getEmpresas().subscribe(res => {
        // console.log(res);
        this.Empresas = res;
    });
  }

  deleteEmpresa(id:any, iControl:any){
    // console.log(id);
    if(window.confirm("¿Desea eliminar la empresa?"))
    this.EmpresasService.deleteEmpresa(id).subscribe((res) => {
      this.Empresas.splice(iControl,1);
    });
  }

}
