import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewissueshistoryComponent } from './viewissueshistory.component';

describe('ViewissueshistoryComponent', () => {
  let component: ViewissueshistoryComponent;
  let fixture: ComponentFixture<ViewissueshistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewissueshistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewissueshistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
