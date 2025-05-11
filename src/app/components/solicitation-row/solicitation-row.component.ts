import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-solicitation-row',
  templateUrl: './solicitation-row.component.html',
  styleUrls: ['./solicitation-row.component.scss'],
  imports: [CommonModule],
})
export class SolicitationRowComponent {
  @Input() row: any;

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'en attente': return '#ec407a';
      case 'à clôturer': return '#ff7043';
      case 'en cours': return '#42a5f5';
      default: return '#bdbdbd';
    }
  }
}
