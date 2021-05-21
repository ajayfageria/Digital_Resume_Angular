import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLanguageComponent } from './template-language.component';

describe('TemplateLanguageComponent', () => {
  let component: TemplateLanguageComponent;
  let fixture: ComponentFixture<TemplateLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
