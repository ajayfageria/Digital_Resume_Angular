import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletemplatesComponent } from './singletemplates.component';

describe('SingletemplatesComponent', () => {
  let component: SingletemplatesComponent;
  let fixture: ComponentFixture<SingletemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
