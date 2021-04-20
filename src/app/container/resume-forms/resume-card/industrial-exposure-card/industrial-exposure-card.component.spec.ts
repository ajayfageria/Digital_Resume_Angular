import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialExposureCardComponent } from './industrial-exposure-card.component';

describe('IndustrialExposureCardComponent', () => {
  let component: IndustrialExposureCardComponent;
  let fixture: ComponentFixture<IndustrialExposureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrialExposureCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialExposureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
