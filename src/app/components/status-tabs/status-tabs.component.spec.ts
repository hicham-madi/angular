import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTabsComponent } from './status-tabs.component';

describe('StatusTabsComponent', () => {
  let component: StatusTabsComponent;
  let fixture: ComponentFixture<StatusTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
