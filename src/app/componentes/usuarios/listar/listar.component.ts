import { UsuariosServiceService } from './../../../services/Usuarios/usuarios-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  Usuarios : any;
  constructor(
    private UsuariosService : UsuariosServiceService
  ) { }

  ngOnInit(): void {
    this.UsuariosService.getUsuarios().subscribe(res => {
      this.Usuarios = res;
    });
  }

  deleteUsuario(id:any, iControl:any){
    // console.log(id);
    if(window.confirm("¿Desea eliminar el usuario?"))
    this.UsuariosService.deleteUsuarios(id).subscribe((res) => {
      this.Usuarios.splice(iControl,1);
    });
  }

}
