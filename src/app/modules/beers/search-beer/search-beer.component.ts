import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'beer-brewer-search-beer',
  templateUrl: './search-beer.component.html',
  styleUrls: ['./search-beer.component.scss']
})
export class SearchBeerComponent implements OnInit {

  @Output() food = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  submitFood(food: string) {
    this.food.emit(food);
  }
}
