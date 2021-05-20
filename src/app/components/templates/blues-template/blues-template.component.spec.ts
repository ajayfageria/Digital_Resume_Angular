import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluesTemplateComponent } from './blues-template.component';

describe('BluesTemplateComponent', () => {
  let component: BluesTemplateComponent;
  let fixture: ComponentFixture<BluesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluesTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
