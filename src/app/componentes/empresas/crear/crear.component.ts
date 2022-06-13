
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TokenService } from './../../../services/token.service';
import { AuthService } from './../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasServicesService } from './../../../services/Empresas/empresas-services.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearEmpresasComponent implements OnInit {

  // formularioEmpresa: FormGroup;
    public form = {
      company_name: null,
      category: null,
      telephone: null,
      address: null,
      suburb: null,
      description: null
    };
    public error: any = [] ;

  constructor(
    private Token: TokenService,
    private EmpresaService: EmpresasServicesService,
    private router : Router,
    private Auth: AuthService,
    public formulario:FormBuilder,
    ) {
    // this.formularioEmpresa = this.formulario.group({
    //   company_name: [''],
    //   category: [''],
    //   direccion: [''],
    //   colonia: [''],
    // });

  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    // console.log('Enviando formulario...');
    this.EmpresaService.createEmpresas(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)

    );
  }


  handleResponse(data: any){
    this.router.navigateByUrl('/empresas');
  }
  handleError(error: any){
    this.error = error.error.errors;
  }
}
