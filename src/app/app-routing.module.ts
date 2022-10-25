import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'libros',
    loadChildren: () => import('./modulos/libros/libros.module').then(m => m.LibrosModule)
  },
  {
    path: '**',
    redirectTo: 'libros'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
