import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beer-brewer-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  public menuItems: { title: string, path: string }[];

  constructor() {
    this.menuItems = [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'Favorites',
        path: '/favorites'
      },

    ]
  }

  ngOnInit(): void {
  }

}
