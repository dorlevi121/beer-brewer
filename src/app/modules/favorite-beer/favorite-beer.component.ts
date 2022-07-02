import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/_models/beer';
import { FavoriteService } from 'src/app/_services/favorite.service';
import { ModalService } from 'src/app/_services/modal.service';

@Component({
  selector: 'beer-brewer-favorite-beer',
  templateUrl: './favorite-beer.component.html',
  styleUrls: ['./favorite-beer.component.scss']
})
export class FavoriteBeerComponent implements OnInit {

  public beers: Beer[];
  public page: number = 1;
  public limit: number = 8;

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.getBeers(this.page);
  }

  public async getBeers(page: number) {
    this.page = page;
    this.favoriteService.getFavorite(this.page, this.limit)
      .then((res: any) => {
        this.beers = res;
      });
  }
}
