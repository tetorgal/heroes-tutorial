import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './view/heroes/table/table.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './view/heroes/form/form.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeroesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //añadir la importación
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
