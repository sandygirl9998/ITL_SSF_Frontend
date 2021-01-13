import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFarmersComponent } from './list-of-farmers.component';

describe('ListOfFarmersComponent', () => {
  let component: ListOfFarmersComponent;
  let fixture: ComponentFixture<ListOfFarmersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfFarmersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfFarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
