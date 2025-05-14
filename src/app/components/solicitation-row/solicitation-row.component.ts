import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Solicitation {
  ticket: string;
  date: string;
  clientName: string;
  clientId: string;
  object: string;
  type: string;
  deadlineLabel: string;
  statusLabel: string;
}

@Component({
  selector: 'app-solicitation-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitation-row.component.html',
  styleUrls: ['./solicitation-row.component.scss']
})
export class SolicitationRowComponent {
  @Input() solicitation!: Solicitation;
}
