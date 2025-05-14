import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterCardComponent } from '../counter-card/counter-card.component';
import { CounterCard } from '../../models/countercard.model';

@Component({
  selector: 'app-counter-cards',
  templateUrl: './counter-cards.component.html',
  styleUrls: ['./counter-cards.component.scss'],
  standalone: true,
  imports:  [CommonModule, CounterCardComponent]
})
export class CounterCardsComponent {
  cards: CounterCard[] = [
  { icon: '📨', count: 4, label: 'non lues\na u total', small: true, wide: false, variant: 'default' },
  { icon: '⏰', count: 4, label: 'en retard', small: true, wide: false, variant: 'default' },
  { icon: '👥', count: 4, label: 'affecter\nà l\'équipe', small: true, wide: false, variant: 'default' },
  { icon: '💬', count: 28, label: 'demandes', badge: 2, small: false, wide: false, variant: 'yellow' },
  { icon: '🔔', count: 11, label: 'réclamations', badge: 0, small: false, wide: false, variant: 'red' },
  { icon: '☑️', count: 13, label: 'approbations', badge: 2, small: false, wide: false, variant: 'purple' },
  { icon: '💬', count: 28, label: 'groupes de discussion', badge: 0, small: false, wide: false, variant: 'blue' },
  { icon: '📋', count: 28, label: 'demandes services expert', wide: true, small: false, variant: 'turquoise' }
];
}

