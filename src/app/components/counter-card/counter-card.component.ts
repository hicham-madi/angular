import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrls: ['./counter-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CounterCardComponent {
  @Input() icon: string = '';
  @Input() count: number = 0;
  @Input() label: string = '';
  @Input() badge?: number;
  @Input() variant: 'red' | 'yellow' | 'blue' | 'purple' | 'turquoise' | 'default' = 'default';
  @Input() wide = false;
  @Input() small = false;
}
