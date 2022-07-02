import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/_models/beer';
import { BeerService } from 'src/app/_services/beer.service';
import { FavoriteService } from 'src/app/_services/favorite.service';

@Component({
  selector: 'beer-brewer-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {

  @Input() beer!: Beer;
  public isFavorite: boolean = false;

  constructor(private favoriteService: FavoriteService, private beerService: BeerService) { }

  ngOnInit(): void {
    this.isFavorite = this.favoriteService.isFavorite(this.beer.id);
  }

  onHeartClick() {
    if (this.isFavorite) {
      this.favoriteService.removeFromFavorite(this.beer);
    }
    else {
      this.favoriteService.addToFavorite(this.beer);
    }
    this.isFavorite = !this.isFavorite;
  }

  openModal() {
    this.beerService.setCurrentBeer(this.beer)
  }

}
