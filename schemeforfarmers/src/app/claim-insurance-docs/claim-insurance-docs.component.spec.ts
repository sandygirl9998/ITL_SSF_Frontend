import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimInsuranceDocsComponent } from './claim-insurance-docs.component';

describe('ClaimInsuranceDocsComponent', () => {
  let component: ClaimInsuranceDocsComponent;
  let fixture: ComponentFixture<ClaimInsuranceDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimInsuranceDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimInsuranceDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
