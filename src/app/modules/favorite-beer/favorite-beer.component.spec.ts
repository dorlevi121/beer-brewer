import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBeerComponent } from './favorite-beer.component';

describe('FavoriteBeerComponent', () => {
  let component: FavoriteBeerComponent;
  let fixture: ComponentFixture<FavoriteBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteBeerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
