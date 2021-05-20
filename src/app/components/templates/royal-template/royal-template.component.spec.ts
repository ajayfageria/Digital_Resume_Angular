import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalTemplateComponent } from './royal-template.component';

describe('RoyalTemplateComponent', () => {
  let component: RoyalTemplateComponent;
  let fixture: ComponentFixture<RoyalTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyalTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
