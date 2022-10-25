import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ILibro } from '../interface/libros-interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosServiceService {

constructor(private http: HttpClient) { }

url: string = environment.url;


getLibros(){
  try {
    return this.http.get<ILibro[]>(`${ this.url }`);
  } catch (error) {
    throw new Error("Error al obtener listado de libros");
  }
}


postLibro(data: ILibro){
  try {
    return this.http.post(`${ this.url }`, data );
  } catch (error) {
    throw new Error("Error al crear libro");
  }
}

}
