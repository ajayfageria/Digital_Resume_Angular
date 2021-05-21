import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAwardsComponent } from './template-awards.component';

describe('TemplateAwardsComponent', () => {
  let component: TemplateAwardsComponent;
  let fixture: ComponentFixture<TemplateAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAwardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
