import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdetailsformComponent } from './projectdetailsform.component';

describe('ProjectdetailsformComponent', () => {
  let component: ProjectdetailsformComponent;
  let fixture: ComponentFixture<ProjectdetailsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectdetailsformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
