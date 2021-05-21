import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEducationComponent } from './template-education.component';

describe('TemplateEducationComponent', () => {
  let component: TemplateEducationComponent;
  let fixture: ComponentFixture<TemplateEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
