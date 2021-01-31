import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ComicsComponent } from './pages/comics/comics.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { CaracteristicasComponent } from './pages/personajes/caracteristicas/caracteristicas.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';


const routes: Routes = [

  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },

  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'banner', component: BannerComponent}
    ]
  },

  {
    path: 'personajes', component: PersonajesComponent,
    children: [
      { path: 'caracteristicas/:id', component: CaracteristicasComponent}
    ]
  },

  {
    path: 'comics', component: ComicsComponent
  },

  {
    path: 'peliculas', component: PeliculasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
