import { Injectable, OnDestroy } from '@angular/core';
import { Beer } from '../_models/beer';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public favoritesBeers: number[];
  public beers:Beer[] = []
  public totalItems: number;

  constructor(private lsService: LocalStorageService, private api: ApiService) {
    const beers = this.lsService.get("beers");
    if (beers) {
      this.favoritesBeers = JSON.parse(beers);
    }
    else {
      this.favoritesBeers = [];
    }
  }

  public addToFavorite(beer: Beer) {
    this.favoritesBeers.push(beer.id);
    this.lsService.set("beers", JSON.stringify(this.favoritesBeers));
    this.beers.push(beer);
  }

  public removeFromFavorite(beer: Beer) {
    this.favoritesBeers.splice(this.favoritesBeers.indexOf(beer.id), 1);
    this.lsService.set("beers", JSON.stringify(this.favoritesBeers));
    this.beers.splice(this.beers.findIndex((b: any) => b.id === beer.id), 1);
  }

  public removeAll() {
    this.favoritesBeers = [];
    this.lsService.set("beers", JSON.stringify(this.favoritesBeers));
  }

  public isFavorite(id: number) {
    return this.favoritesBeers.includes(id);
  }

  public async getFavorite(page: number, limit: number) {
    let start = (page - 1) * limit;
    let end = page * limit;

    if (end >= this.favoritesBeers.length) {
      end = this.favoritesBeers.length;
    }

    const beersPromises: Promise<any>[] = [];

    for (let i = start; i < end; i++) {
      beersPromises.push(this.api.get('beers/' + this.favoritesBeers[i]).toPromise());
    }

    await Promise.all(beersPromises).then((beers) => {      
      this.beers = beers.flat();
    });

    return this.beers;
  }

}
