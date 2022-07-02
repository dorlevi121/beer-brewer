import { Component, OnInit } from '@angular/core';
import { Beer } from './_models/beer';
import { BeerService } from './_services/beer.service';

@Component({
  selector: 'beer-brewer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public beerModal: Beer | null = null;

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.currentBeer.subscribe(data => {
      this.beerModal = data;
    });
  }
}
