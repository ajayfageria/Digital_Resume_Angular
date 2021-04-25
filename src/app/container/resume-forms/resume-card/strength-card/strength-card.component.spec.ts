import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthCardComponent } from './strength-card.component';

describe('StrengthCardComponent', () => {
  let component: StrengthCardComponent;
  let fixture: ComponentFixture<StrengthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
