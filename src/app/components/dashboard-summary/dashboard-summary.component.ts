import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';
import { DashboardCardData } from '../../models/dashboard-card.model';

@Component({
  selector: 'metabot-dashboard-summary',
  standalone: true,
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.scss'],
  imports: [CommonModule, DashboardCardComponent],
})
export class DashboardSummaryComponent {
  smallCards: DashboardCardData[] = [
    {
      icon: '../../assets/unread.svg',
      count: 4,
      label: 'non lues\nau total',
      small: true,
      variant: 'small-red',
    },
    {
      icon: '../../assets/late.svg',
      count: 4,
      label: 'en retard',
      small: true,
      variant: 'small-red',
    },
    {
      icon: '../../assets/affect.svg',
      count: 4,
      label: 'affecter\nà l\'équipe',
      small: true,
      variant: 'small-red',
    },
  ];

  largeCards: DashboardCardData[] = [
    {
      icon: '../../assets/request.svg',
      count: 28,
      label: 'demandes',
      variant: 'yellow',
      badges: [{ icon: '../../assets/unread.svg', value: 2 }],
    },
    {
      icon: '../../assets/claim.svg',
      count: 11,
      label: 'réclamations',
      variant: 'sea-salt-sherbet',
      badges: [{ icon: '../../assets/unread-badge.svg', value: 0 }],
    },
    {
      icon: '../../assets/approval.svg',
      count: 13,
      label: 'approbations',
      variant: 'cloud-break',
      badges: [{ icon: '../../assets/unread.svg', value: 2 }],
    },
    {
      icon: '../../assets/discussion-group.svg',
      count: 28,
      label: 'groupes de discussion',
      variant: 'blue',
      badges: [{ icon: '../../assets/unread-badge.svg', value: 0 }],
    },
    {
      icon: '../../assets/request-expert-service.svg',
      count: 28,
      label: 'demandes services expert',
      variant: 'turquoise',
      wide: true,
      badges: [
        { icon: '../../assets/unread-badge.svg', value: 0 },
        { icon: '../../assets/unread-badge.svg', value: 0 },
        { icon: '../../assets/unread-badge.svg', value: 0 },
      ],
    },
  ];
}
