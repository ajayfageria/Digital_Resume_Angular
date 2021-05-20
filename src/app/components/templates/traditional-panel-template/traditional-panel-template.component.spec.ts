import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalPanelTemplateComponent } from './traditional-panel-template.component';

describe('TraditionalPanelTemplateComponent', () => {
  let component: TraditionalPanelTemplateComponent;
  let fixture: ComponentFixture<TraditionalPanelTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraditionalPanelTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionalPanelTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
