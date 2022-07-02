import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteBeerComponent } from './favorite-beer.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: FavoriteBeerComponent
  },

];

@NgModule({
  declarations: [
    FavoriteBeerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
  ]
})
export class FavoriteBeerModule { }
