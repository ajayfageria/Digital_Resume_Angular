import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthListComponent } from './strength-list.component';

describe('StrengthListComponent', () => {
  let component: StrengthListComponent;
  let fixture: ComponentFixture<StrengthListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
