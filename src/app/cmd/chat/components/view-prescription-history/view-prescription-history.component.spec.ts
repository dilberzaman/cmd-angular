import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrescriptionHistoryComponent } from './view-prescription-history.component';

describe('ViewPrescriptionHistoryComponent', () => {
  let component: ViewPrescriptionHistoryComponent;
  let fixture: ComponentFixture<ViewPrescriptionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrescriptionHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrescriptionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
