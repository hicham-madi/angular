import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrls: ['./counter-card.component.scss'],
  imports: [CommonModule],
})
export class CounterCardComponent {
  @Input() count = 0;
  @Input() label = '';
  @Input() icon = ''; // nom UIKit ou SVG inline
  @Input() colorClass = ''; // pour couleur dynamique (bg ou texte)
}
