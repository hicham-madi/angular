import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';
import { DashboardCardData } from '../../models/dashboard-card.model';

@Component({
  selector: 'metabot-dashboard-summary',
  standalone: true,
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.scss'],
  imports: [CommonModule, DashboardCardComponent]
})
export class DashboardSummaryComponent {
  cards: DashboardCardData[] = [
    {
      icon: '../../assets/unread.svg',
      count: 4,
      label: 'non lues\nau total',
      small: true,
      wide: false,
      variant: 'small-red'
    },
    {
      icon: '../../assets/late.svg',
      count: 4,
      label: 'en retard',
      small: true,
      wide: false,
      variant: 'small-red'
    },
    {
      icon: '../../assets/affect.svg',
      count: 4,
      label: 'affecter\nà l\'équipe',
      small: true,
      wide: false,
      variant: 'small-red'
    },
    {
      icon: '../../assets/request.svg',
      count: 28,
      label: 'demandes',
      badges: [{ icon: '../../assets/unread.svg', value: 2 }],
      small: false,
      wide: false,
      variant: 'yellow'
    },
    {
      icon: '../../assets/claim.svg',
      count: 11,
      label: 'réclamations',
      badges: [{ icon: '../../assets/unread.svg', value: 0 }],
      small: false,
      wide: false,
      variant: 'red'
    },
    {
      icon: '../../assets/approval.svg',
      count: 13,
      label: 'approbations',
      badges: [{ icon: '../../assets/unread.svg', value: 2 }],
      small: false,
      wide: false,
      variant: 'purple'
    },
    {
      icon: '../../assets/discussion-group.svg',
      count: 28,
      label: 'groupes de discussion',
      badges: [{ icon: '../../assets/unread.svg', value: 0 }],
      small: false,
      wide: false,
      variant: 'blue'
    },
    {
      icon: '../../assets/request-expert-service.svg',
      count: 28,
      label: 'demandes services expert',
      wide: true,
      small: false,
      variant: 'turquoise',
      badges: [
        { icon: '../../assets/unread.svg', value: 0 },
        { icon: '../../assets/affect.svg', value: 0 },
        { icon: '../../assets/late.svg', value: 0 }
      ]
    }
  ];
}
