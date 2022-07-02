import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/_models/beer';
import { BeerService } from 'src/app/_services/beer.service';
import { FavoriteService } from 'src/app/_services/favorite.service';
import { ModalService } from 'src/app/_services/modal.service';

@Component({
  selector: 'beer-brewer-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {

  @Input() beer!: Beer;
  public isFavorite: boolean = false;

  constructor(private favoriteService: FavoriteService, private beerService: BeerService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.isFavorite = this.favoriteService.isFavorite(this.beer.id);
  }

  onHeartClick() {
    if (this.isFavorite) {
      this.openModal("favorite-modal" +  + this.beer.id);
    }
    else {
      this.favoriteService.addToFavorite(this.beer);
      this.isFavorite = true;
    }
  }

  removeFromFavorite() {
    this.favoriteService.removeFromFavorite(this.beer);
    this.closeModal("favorite-modal" +  + this.beer.id);
    this.isFavorite = false;
  }

  openBeerModal() {
    this.beerService.setCurrentBeer(this.beer)
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
