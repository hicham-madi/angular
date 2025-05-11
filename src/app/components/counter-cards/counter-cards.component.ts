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
  {
    count: 4,
    label: 'Non lues',
    icon: 'mail',
    backgroundColor: '#1473e6',
    textColor: '#fff'
  },
  {
    count: 4,
    label: 'En retard',
    icon: 'clock',
    backgroundColor: '#f24b56',
    textColor: '#fff'
  },
  {
    count: 4,
    label: 'À affecter',
    icon: 'users',
    backgroundColor: '#ffb74d',
    textColor: '#fff'
  },
  {
    count: 28,
    label: 'Toutes',
    icon: 'list',
    backgroundColor: '#e0e0e0',
    textColor: '#000'
  }
];
}
