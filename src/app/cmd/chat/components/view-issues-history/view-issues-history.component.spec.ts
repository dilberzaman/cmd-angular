import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIssuesHistoryComponent } from './view-issues-history.component';

describe('ViewIssuesHistoryComponent', () => {
  let component: ViewIssuesHistoryComponent;
  let fixture: ComponentFixture<ViewIssuesHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIssuesHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIssuesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
