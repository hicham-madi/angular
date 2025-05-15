import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCardsComponent } from './dashboard-summary.component';

describe('CounterCardsComponent', () => {
  let component: CounterCardsComponent;
  let fixture: ComponentFixture<CounterCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
