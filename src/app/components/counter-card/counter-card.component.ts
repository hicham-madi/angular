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
  @Input() icon = '';
  @Input() backgroundColor = '#f2f2f2';
  @Input() textColor = '#000';
}
