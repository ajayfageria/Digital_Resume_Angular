import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSkillCardComponent } from './template-skill-card.component';

describe('TemplateSkillCardComponent', () => {
  let component: TemplateSkillCardComponent;
  let fixture: ComponentFixture<TemplateSkillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateSkillCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSkillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
