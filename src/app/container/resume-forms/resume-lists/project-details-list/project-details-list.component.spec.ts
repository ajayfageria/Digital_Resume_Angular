import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsListComponent } from './project-details-list.component';

describe('ProjectDetailsListComponent', () => {
  let component: ProjectDetailsListComponent;
  let fixture: ComponentFixture<ProjectDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
