import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresasServicesService {
  private baseUrl = 'http://127.0.0.1:8000/api/v1/empresas';
  constructor(
    private http: HttpClient,
    ) {}

  getEmpresas(){
    return this.http.get(this.baseUrl);
  }

  createEmpresas(data:any){
    return this.http.post(`${this.baseUrl}`, data);
  }

  deleteEmpresa(id:any){
    // return this.http.delete(`${this.baseUrl}`, id);
    return this.http.delete(`${this.baseUrl}/`+id);
  }

  showEmpresa(id:any) : Observable<any> {
    return this.http.get(`${this.baseUrl}/`+id);
  }

  updateEmpresa(id:any , data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/`+id, data);
  }


}
