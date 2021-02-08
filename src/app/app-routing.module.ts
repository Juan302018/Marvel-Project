import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ComicdescComponent } from './pages/comics/comicdesc/comicdesc.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculadescComponent } from './pages/peliculas/peliculadesc/peliculadesc.component';
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
    path: 'comics', component: ComicsComponent,
    children: [
      { path: 'nuevo', component: ComicdescComponent}
    ]
  },

  {
    path: 'peliculas', component: PeliculasComponent,
    children: [
      { path: 'nuevo', component: PeliculadescComponent}
    ]
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
