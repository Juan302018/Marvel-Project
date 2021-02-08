import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './_material/material.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { HomeComponent } from './pages/home/home.component';
import { CaracteristicasComponent } from './pages/personajes/caracteristicas/caracteristicas.component';
import { ComicdescComponent } from './pages/comics/comicdesc/comicdesc.component';
import { PeliculadescComponent } from './pages/peliculas/peliculadesc/peliculadesc.component';
import { MatCardModule } from '@angular/material/card';
import { BannerComponent } from './pages/home/banner/banner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    ComicsComponent,
    PeliculasComponent,
    HomeComponent,
    CaracteristicasComponent,
    ComicdescComponent,
    PeliculadescComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
