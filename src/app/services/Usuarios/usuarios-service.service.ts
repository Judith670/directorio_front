import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {
  private baseUrl = 'http://127.0.0.1:8000/api/v1/usuarios';
  constructor(
    private http: HttpClient,
  ) { }

  getUsuarios(){
    return this.http.get(this.baseUrl);
  }

  createUsuarios(data:any){
    return this.http.post(`${this.baseUrl}`,data);
  }

  deleteUsuarios(id: any){
    return this.http.delete(`${this.baseUrl}/`+id);
  }

  showUsuario(id:any) : Observable<any> {
    return this.http.get(`${this.baseUrl}/`+id);
  }

  updateUsuario(id:any, data: any) : Observable<any> {
    return this.http.patch(`${this.baseUrl}/`+id, data);
  }

}
