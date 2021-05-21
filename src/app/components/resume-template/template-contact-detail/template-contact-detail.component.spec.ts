import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContactDetailComponent } from './template-contact-detail.component';

describe('TemplateContactDetailComponent', () => {
  let component: TemplateContactDetailComponent;
  let fixture: ComponentFixture<TemplateContactDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateContactDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
