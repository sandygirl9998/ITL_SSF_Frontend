import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropSellRequestComponent } from './crop-sell-request.component';

describe('CropSellRequestComponent', () => {
  let component: CropSellRequestComponent;
  let fixture: ComponentFixture<CropSellRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropSellRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropSellRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
