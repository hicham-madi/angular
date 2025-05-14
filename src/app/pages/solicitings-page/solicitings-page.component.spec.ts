import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitingsPageComponent } from './solicitings-page.component';



describe('SolicitingsPageComponent', () => {
  let component: SolicitingsPageComponent;
  let fixture: ComponentFixture<SolicitingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitingsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
