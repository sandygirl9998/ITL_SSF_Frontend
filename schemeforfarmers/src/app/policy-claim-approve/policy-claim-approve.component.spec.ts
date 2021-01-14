import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyClaimApproveComponent } from './policy-claim-approve.component';

describe('PolicyClaimApproveComponent', () => {
  let component: PolicyClaimApproveComponent;
  let fixture: ComponentFixture<PolicyClaimApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyClaimApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyClaimApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
