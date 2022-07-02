import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersComponent } from './beers.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchBeerComponent } from './search-beer/search-beer.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component: BeersComponent
  },

];

@NgModule({
  declarations: [
    BeersComponent,
    SearchBeerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
    NgxPaginationModule
  ]
})
export class BeersModule { }
