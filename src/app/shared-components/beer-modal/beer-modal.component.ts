import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from 'src/app/_models/beer';
import { BeerService } from 'src/app/_services/beer.service';

@Component({
  selector: 'beer-brewer-beer-modal',
  templateUrl: './beer-modal.component.html',
  styleUrls: ['./beer-modal.component.scss']
})
export class BeerModalComponent implements OnInit {

  @Input() beer!: Beer;

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.beerService.setCurrentBeer(null)
  }

}
