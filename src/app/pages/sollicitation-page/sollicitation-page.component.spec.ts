import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SollicitationPageComponent } from './sollicitation-page.component';

describe('SollicitationPageComponent', () => {
  let component: SollicitationPageComponent;
  let fixture: ComponentFixture<SollicitationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SollicitationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SollicitationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
