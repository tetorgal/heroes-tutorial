import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './view/heroes/table/table.component';
import { FormComponent } from './view/heroes/form/form.component';
import { HomeComponent } from './view/heroes/home/home.component';

const routes: Routes = [
  //Agrega dos componentes más y enrutarlos (Dashboard, Table, router-outlet, redireccionamiento a dashboard)
  //miercoles examen, martes libreta
  { path: "", redirectTo: "/dashboard", pathMatch: 'full' },
  { path: "dashboard", component: HomeComponent },
  { path: "tabla", component: TableComponent },
  { path: "form", component: FormComponent },
  { path: "form/:name", component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
