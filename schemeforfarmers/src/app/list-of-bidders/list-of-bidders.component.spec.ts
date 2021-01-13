import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBiddersComponent } from './list-of-bidders.component';

describe('ListOfBiddersComponent', () => {
  let component: ListOfBiddersComponent;
  let fixture: ComponentFixture<ListOfBiddersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfBiddersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBiddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
