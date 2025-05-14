import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  imports: [CommonModule]
})
export class TopBarComponent {
  readonly homeLabel = 'Accueil';
  readonly solicitingLabel = 'Sollicitation';
}
