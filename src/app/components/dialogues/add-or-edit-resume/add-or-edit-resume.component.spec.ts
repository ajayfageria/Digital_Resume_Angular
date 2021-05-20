import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditResumeComponent } from './add-or-edit-resume.component';

describe('AddOrEditResumeComponent', () => {
  let component: AddOrEditResumeComponent;
  let fixture: ComponentFixture<AddOrEditResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
