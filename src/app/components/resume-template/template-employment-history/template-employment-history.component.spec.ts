import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEmploymentHistoryComponent } from './template-employment-history.component';

describe('TemplateEmploymentHistoryComponent', () => {
  let component: TemplateEmploymentHistoryComponent;
  let fixture: ComponentFixture<TemplateEmploymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateEmploymentHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEmploymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
