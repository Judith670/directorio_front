import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpresasServicesService } from './../../../services/Empresas/empresas-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarEmpresasComponent implements OnInit {

  formularioEmpresa: FormGroup;
  idEmpresa : any;
  public error: any = [] ;


  constructor(
    private router : ActivatedRoute,
    private EmpresaService: EmpresasServicesService,
    private formulario : FormBuilder,
    private route : Router,

  ) {
    this.idEmpresa = this.router.snapshot.paramMap.get('id');
    // console.log(this.idEmpresa);
    this.EmpresaService.showEmpresa(this.idEmpresa).subscribe( res => {
      // console.log(res);
      this.formularioEmpresa.setValue({
        company_name: res[0]['company_name'],
        category: res[0]['category'],
        telephone: res[0]['telephone'],
        address: res[0]['address'],
        suburb: res[0]['suburb'],
        description: res[0]['description'],
      });
    });

    this.formularioEmpresa = this.formulario.group({
      company_name : [''],
      category : [''],
      telephone: [''],
      address: [''],
      suburb:[''],
      description: [''],
    });
  }

  ngOnInit(): void {
  }

  actualizarEmpresa(): any {
    // console.log(this.formularioEmpresa.value);
    this.EmpresaService.updateEmpresa(this.idEmpresa, this.formularioEmpresa.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
      ()=> {
    });
  }

  handleResponse(data: any){
    this.route.navigateByUrl('/empresas');
  }
  handleError(error: any){
    this.error = error.error.errors;
  }
}
