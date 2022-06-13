import { AuthInterceptorService } from './services/auth-interceptor.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearEmpresasComponent } from './componentes/empresas/crear/crear.component';
import { EditarEmpresasComponent } from './componentes/empresas/editar/editar.component';
import { ListarEmpresasComponent } from './componentes/empresas/listar/listar.component';
import { RegistrarComponent } from './componentes/login/registrar/registrar.component';
import { CrearUsuariosComponent } from './componentes/usuarios/crear/crear.component';
import { EditarUsuariosComponent } from './componentes/usuarios/editar/editar.component';
import { ListarUsuariosComponent } from './componentes/usuarios/listar/listar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ServicesService } from './services/services.service';
import { ProfileComponent } from './componentes/login/profile/profile.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BusquedasComponent } from './componentes/empresas/busquedas/busquedas.component';
import { DetallesComponent } from './componentes/empresas/busquedas/detalles/detalles.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListarEmpresasComponent,
    EditarEmpresasComponent,
    CrearEmpresasComponent,
    CrearUsuariosComponent,
    EditarUsuariosComponent,
    ListarUsuariosComponent,
    RegistrarComponent,
    InicioComponent,
    ProfileComponent,
    NavbarComponent,
    BusquedasComponent,
    DetallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
       { path: '', pathMatch: 'full', redirectTo: 'login' },
       { path: 'login', component: LoginComponent },
    ]),

  ],
  providers: [
    ServicesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
