import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { CrearLibroComponent } from './pages/crear-libro/crear-libro.component';


@NgModule({
  declarations: [
    HomeComponent,
    CrearLibroComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LibrosModule { }
