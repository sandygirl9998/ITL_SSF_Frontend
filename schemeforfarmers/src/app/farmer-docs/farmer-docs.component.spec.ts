import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerDocsComponent } from './farmer-docs.component';

describe('FarmerDocsComponent', () => {
  let component: FarmerDocsComponent;
  let fixture: ComponentFixture<FarmerDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
