import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Beer } from '../_models/beer';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  public beers = new Map<number, Beer[]>();
  public currentBeer: Subject<Beer | null> = new Subject();
  private currentFoodParam = '';

  constructor(private api: ApiService) { }

  public async getBeers(page: number, per_page: number, filters: any = {}) {    
    if (filters.food !== this.currentFoodParam) {
      this.beers.clear();
      this.currentFoodParam = filters.food;
    }

    if (this.beers.has(page))
      return this.beers.get(page);

    const params = Object.assign(filters, { page, per_page });
    await this.api.get('beers', params).toPromise()
      .then(res => {
        if (page === 1) {
          this.beers.set(1, [...res]);
        }
        else {
          this.beers.set(page, [...res]);
        }
      })
    return this.beers.get(page);
  }

  public setCurrentBeer(beer: Beer | null) {
    this.currentBeer.next(beer)
  }
}
