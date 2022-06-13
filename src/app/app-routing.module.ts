import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { LoginComponent } from './componentes/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListarUsuariosComponent } from './componentes/usuarios/listar/listar.component';
import { CrearUsuariosComponent } from './componentes/usuarios/crear/crear.component';
import { EditarUsuariosComponent } from './componentes/usuarios/editar/editar.component';
import { CrearEmpresasComponent } from './componentes/empresas/crear/crear.component';
import { EditarEmpresasComponent } from './componentes/empresas/editar/editar.component';
import { ListarEmpresasComponent } from './componentes/empresas/listar/listar.component';
import { RegistrarComponent } from './componentes/login/registrar/registrar.component';
import { ProfileComponent } from './componentes/login/profile/profile.component';
import { BusquedasComponent } from './componentes/empresas/busquedas/busquedas.component';
import { DetallesComponent } from './componentes/empresas/busquedas/detalles/detalles.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path: 'login', component: LoginComponent, canActivate:[BeforeLoginService]},
  {path: 'registrar', component: RegistrarComponent, canActivate: [BeforeLoginService] },
  {path: 'inicio', component: InicioComponent, canActivate:[AfterLoginService] },
  {path: 'profile', component: ProfileComponent, canActivate: [AfterLoginService] },
  {path: 'usuarios', component: ListarUsuariosComponent, canActivate: [AfterLoginService] },
  {path: 'usuarios/crear', component: CrearUsuariosComponent, canActivate: [AfterLoginService] },
  {path: 'usuarios/editar/:id', component: EditarUsuariosComponent, canActivate: [AfterLoginService] },
  {path: 'empresas', component: ListarEmpresasComponent, canActivate: [AfterLoginService] },
  {path: 'empresas/crear', component: CrearEmpresasComponent, canActivate: [AfterLoginService] },
  {path: 'empresas/editar/:id', component: EditarEmpresasComponent, canActivate: [AfterLoginService] },
  {path: 'buscar', component: BusquedasComponent},
  {path: 'buscar/detalles', component: DetallesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
