import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderRequestComponent } from './bidder-request.component';

describe('BidderRequestComponent', () => {
  let component: BidderRequestComponent;
  let fixture: ComponentFixture<BidderRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
