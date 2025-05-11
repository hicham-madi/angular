import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterCardComponent } from '../counter-card/counter-card.component';

@Component({
  standalone: true,
  selector: 'app-counter-cards',
  templateUrl: './counter-cards.component.html',
  styleUrls: ['./counter-cards.component.scss'],
  imports: [CommonModule, CounterCardComponent],
})
export class CounterCardsComponent {
  cards = [
    { count: 4, label: 'Non lues', icon: 'mail', colorClass: 'uk-card-primary' },
    { count: 4, label: 'En retard', icon: 'clock', colorClass: 'uk-card-danger' },
    { count: 4, label: 'À affecter', icon: 'users', colorClass: 'uk-card-warning' },
    { count: 28, label: 'Toutes', icon: 'list', colorClass: 'uk-card-muted' }
  ];
}
