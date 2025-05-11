import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationTableComponent } from './solicitation-table.component';

describe('SolicitationTableComponent', () => {
  let component: SolicitationTableComponent;
  let fixture: ComponentFixture<SolicitationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
