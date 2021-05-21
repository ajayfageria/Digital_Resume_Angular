import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateObjectiveComponent } from './template-objective.component';

describe('TemplateObjectiveComponent', () => {
  let component: TemplateObjectiveComponent;
  let fixture: ComponentFixture<TemplateObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateObjectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
