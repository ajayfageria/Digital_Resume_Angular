import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillListsComponent } from './skill-lists.component';

describe('SkillListsComponent', () => {
  let component: SkillListsComponent;
  let fixture: ComponentFixture<SkillListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
