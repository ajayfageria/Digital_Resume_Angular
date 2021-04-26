import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaknessComponent } from './weakness.component';

describe('WeaknessComponent', () => {
  let component: WeaknessComponent;
  let fixture: ComponentFixture<WeaknessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaknessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaknessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
