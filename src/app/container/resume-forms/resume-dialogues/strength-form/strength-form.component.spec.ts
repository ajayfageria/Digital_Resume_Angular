import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthFormComponent } from './strength-form.component';

describe('StrengthFormComponent', () => {
  let component: StrengthFormComponent;
  let fixture: ComponentFixture<StrengthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
