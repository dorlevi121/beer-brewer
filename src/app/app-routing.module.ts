import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import("./modules/beers/beers.module").then(mod => mod.BeersModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import("./modules/favorite-beer/favorite-beer.module").then(mod => mod.FavoriteBeerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
