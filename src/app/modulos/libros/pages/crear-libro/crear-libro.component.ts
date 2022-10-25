import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrosServiceService } from '../../services/libros-service.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private service_libros: LibrosServiceService,
              private router: Router) { }

  formLibro: FormGroup = this.fb.group({
    'sku'         : [, [Validators.required]],
    'title'       : [, [Validators.required]],
    'author'      : [, [Validators.required]],
    'description' : [, [Validators.required]],
    'comments'    : [, [Validators.required]]
  })


  ngOnInit() {
  }

  redirectTo(){
    this.router.navigate(['/libros']);
  }

  submitLibro(){
    if(this.formLibro.invalid){
      this.formLibro.markAllAsTouched();
      return;
    }

    const data = {
      ...this.formLibro.value,
      created    : new Date().toISOString(),
      modified   : new Date().toISOString()
    }

    this.service_libros.postLibro(data).subscribe(respuesta => {
      this.redirectTo()
    }, err => {
      alert("Error al crear libro, verifique los campos e intentelo de nuevo")
    });
  }

  campoValido(campo: string){
    return  this.formLibro.controls[campo].touched && this.formLibro.get(campo)?.errors?.['required']
  }

}
