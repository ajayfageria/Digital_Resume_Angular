import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateProjectDetailComponent } from './template-project-detail.component';

describe('TemplateProjectDetailComponent', () => {
  let component: TemplateProjectDetailComponent;
  let fixture: ComponentFixture<TemplateProjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateProjectDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
