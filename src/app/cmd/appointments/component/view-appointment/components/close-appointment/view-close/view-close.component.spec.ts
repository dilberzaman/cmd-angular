import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCloseComponent } from './view-close.component';

describe('ViewCloseComponent', () => {
  let component: ViewCloseComponent;
  let fixture: ComponentFixture<ViewCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
