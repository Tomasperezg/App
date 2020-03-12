import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorSComponent } from './separator-s.component';

describe('SeparatorSComponent', () => {
  let component: SeparatorSComponent;
  let fixture: ComponentFixture<SeparatorSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparatorSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatorSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
