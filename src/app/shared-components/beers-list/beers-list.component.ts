import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { Beer } from 'src/app/_models/beer';
import { LoadingService } from 'src/app/_services/loading.service';

@Component({
  selector: 'beer-brewer-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent implements OnInit, OnDestroy {

  public limit: number = 8;
  public loading: boolean = false;
  private loadingSub: Subscription;

  @Input() beers: Beer[];
  @Input() page: number;
  @Output() getBeers = new EventEmitter();

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingSub = this.loadingService.loadingSub
      .pipe(delay(0))
      .subscribe((loading) => {   
        this.loading = loading;
      });
  }

  changePage(event: any) {    
    this.getBeers.emit(event);
    this.page = event;
  }

  ngOnDestroy(): void {
    if (this.loadingSub)
      this.loadingSub.unsubscribe();
  }

}
