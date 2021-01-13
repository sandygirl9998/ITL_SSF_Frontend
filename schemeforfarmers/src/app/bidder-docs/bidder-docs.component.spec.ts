import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderDocsComponent } from './bidder-docs.component';

describe('BidderDocsComponent', () => {
  let component: BidderDocsComponent;
  let fixture: ComponentFixture<BidderDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
