import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuariosServiceService } from './../../../services/Usuarios/usuarios-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarUsuariosComponent implements OnInit {

  formularioUsuario: FormGroup;
  idUsuario : any;
  public error: any = [];

  constructor(
    private router : ActivatedRoute,
    private UsuarioService : UsuariosServiceService,
    private formulario : FormBuilder,
    private route : Router,
  ) {
    this.idUsuario = this.router.snapshot.paramMap.get('id');
    // console.log(this.idUsuario);
    this.UsuarioService.showUsuario(this.idUsuario).subscribe( res => {
      // console.log(res);
      this.formularioUsuario.setValue({
          name: res[0]['name'],
          email: res[0]['email'],
          username: res[0]['username'],
          phone: res[0]['phone'],
          address: res[0]['address'],
          suburb: res[0]['suburb'],
      });
      console.log(res);
    });

    this.formularioUsuario = this.formulario.group({
        name : [''],
        email : [''],
        username : [''],
        phone : [''],
        address : [''],
        suburb : [''],
    });

  }

  ngOnInit(): void {
  }

  actualizarUsuario(): any {
    console.log(this.formularioUsuario.value);

    this.UsuarioService.updateUsuario(this.idUsuario, this.formularioUsuario.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
      () => {});
  }

  handleResponse(data: any){
    this.route.navigateByUrl('/usuarios');
  }

  handleError(error: any){
    this.error  = error.error.errors;
  }
}
