import { Component, OnInit } from '@angular/core';
import { LibrosServiceService } from '../../services/libros-service.service';
import { ILibro } from '../../interface/libros-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  libros: ILibro[] = []

  constructor(private service_libros: LibrosServiceService) { }

  ngOnInit() {
    this.lista_libros();
  }

  lista_libros(){
    this.service_libros.getLibros().subscribe(respuesta => {
      this.libros = respuesta;
      console.log(respuesta)
    })
  }

}
