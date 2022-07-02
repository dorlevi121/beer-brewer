import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { BeerModalComponent } from './beer-modal/beer-modal.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalComponent } from './modal/modal.component';

const components = [
  BeerCardComponent,
  BeerModalComponent,
  BeersListComponent,
  ModalComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    ...components
  ]
})
export class SharedComponentsModule { }
