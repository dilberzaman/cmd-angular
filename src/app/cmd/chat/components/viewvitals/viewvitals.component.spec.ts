import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvitalsComponent } from './viewvitals.component';

describe('ViewvitalsComponent', () => {
  let component: ViewvitalsComponent;
  let fixture: ComponentFixture<ViewvitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewvitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
