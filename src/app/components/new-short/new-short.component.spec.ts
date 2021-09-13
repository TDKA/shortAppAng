import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShortComponent } from './new-short.component';

describe('NewShortComponent', () => {
  let component: NewShortComponent;
  let fixture: ComponentFixture<NewShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
