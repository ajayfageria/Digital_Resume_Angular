import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateWeaknessComponent } from './template-weakness.component';

describe('TemplateWeaknessComponent', () => {
  let component: TemplateWeaknessComponent;
  let fixture: ComponentFixture<TemplateWeaknessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateWeaknessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateWeaknessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
