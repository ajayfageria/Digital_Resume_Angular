import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStrengthComponent } from './template-strength.component';

describe('TemplateStrengthComponent', () => {
  let component: TemplateStrengthComponent;
  let fixture: ComponentFixture<TemplateStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateStrengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
