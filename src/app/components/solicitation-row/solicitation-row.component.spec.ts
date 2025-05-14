import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationRowComponent } from './solicitation-row.component';

describe('SolicitationRowComponent', () => {
  let component: SolicitationRowComponent;
  let fixture: ComponentFixture<SolicitationRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitationRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
