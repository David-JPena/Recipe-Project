import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private recipeUrl = 'http://localhost:3000/api/services'; // Rutas de recetas

  constructor(private http: HttpClient) {}


  createService(data: any): Observable<any> {
    return this.http.post<any>(this.recipeUrl , data);
  }

  getAllServices(): Observable<any> {
    return this.http.get<any>(this.recipeUrl );
  }

  getServiceById(id: string): Observable<any> {
    return this.http.get<any>(`${this.recipeUrl }/${id}`);
  }

  deleteService(id: string): Observable<any> {
    return this.http.delete<any>(`${this.recipeUrl }/${id}`);
    
  }

  updateService(id: string, data: FormData): Observable<any> {
    return this.http.put<any>(`${this.recipeUrl }/${id}`, data);
  }
}