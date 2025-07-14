import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wfconfigs } from './wfconfigs';

describe('Wfconfigs', () => {
  let component: Wfconfigs;
  let fixture: ComponentFixture<Wfconfigs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wfconfigs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wfconfigs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
