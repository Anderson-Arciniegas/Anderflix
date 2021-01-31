import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ResultComponent } from './components/result/result.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'favoritas', component: FavoritesComponent},
  {path: 'resultados/:movie', component: ResultComponent},
  {path: 'detalles/:id', component: DetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
