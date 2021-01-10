import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ComicsComponent } from './pages/comics/comics.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';


const routes: Routes = [

  {
    path: 'inicio', component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'personajes', component: PersonajesComponent
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
