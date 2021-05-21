import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateIndustrialExposureComponent } from './template-industrial-exposure.component';

describe('TemplateIndustrialExposureComponent', () => {
  let component: TemplateIndustrialExposureComponent;
  let fixture: ComponentFixture<TemplateIndustrialExposureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateIndustrialExposureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateIndustrialExposureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
