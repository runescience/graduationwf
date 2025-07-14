import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wfrequests } from './wfrequests';

describe('Wfrequests', () => {
  let component: Wfrequests;
  let fixture: ComponentFixture<Wfrequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wfrequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wfrequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
