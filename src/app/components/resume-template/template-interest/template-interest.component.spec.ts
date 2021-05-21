import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateInterestComponent } from './template-interest.component';

describe('TemplateInterestComponent', () => {
  let component: TemplateInterestComponent;
  let fixture: ComponentFixture<TemplateInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
