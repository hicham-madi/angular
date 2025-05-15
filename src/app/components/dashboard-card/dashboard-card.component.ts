import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DashboardCardData } from '../../models/dashboard-card.model';

@Component({
  selector: 'metabot-dashboard-card',
  standalone: true,
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
  imports: [CommonModule]
})
export class DashboardCardComponent {
  @Input() card!: DashboardCardData;
}
