import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/_models/beer';
import { BeerService } from 'src/app/_services/beer.service';

@Component({
  selector: 'beer-brewer-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  public page: number = 1;
  public limit: number = 8;
  public beers: Beer[] = [];
  private food: string = '';

  constructor(private beerService: BeerService) { }

  async ngOnInit() {
    await this.getBeers(this.page);
  }

  public getBeers(page: number, food: string = this.food) {  
    this.page = page;

    if (this.food !== food) {
      this.page = 1;
      this.food = food.replaceAll(' ', '_');
      this.beers = [];
    }


    this.beerService.getBeers(this.page, this.limit, food ? { food: this.food } : {})
      .then((res: any) => {        
        this.beers = res;
      });
  }

}
