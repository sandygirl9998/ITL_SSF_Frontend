import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsInAuctionComponent } from './crops-in-auction.component';

describe('CropsInAuctionComponent', () => {
  let component: CropsInAuctionComponent;
  let fixture: ComponentFixture<CropsInAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropsInAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropsInAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
