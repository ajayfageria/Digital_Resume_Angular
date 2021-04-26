import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaknessCardComponent } from './weakness-card.component';

describe('WeaknessCardComponent', () => {
  let component: WeaknessCardComponent;
  let fixture: ComponentFixture<WeaknessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaknessCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaknessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
