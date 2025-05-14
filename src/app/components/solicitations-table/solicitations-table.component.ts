import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitationRowComponent } from '../solicitation-row/solicitation-row.component';

@Component({
  selector: 'app-solicitations-table',
  standalone: true,
  imports: [CommonModule, SolicitationRowComponent],
  templateUrl: './solicitations-table.component.html',
  styleUrls: ['./solicitations-table.component.scss']
})
export class SolicitationsTableComponent {
  solicitations = [
    {
      ticket: '00003748',
      date: '21 nov. 2024 à 17h30',
      clientName: 'Nom Prénom',
      clientId: '000 2999494',
      object: 'Nom de la sollicitation',
      type: 'Demande',
      deadlineLabel: 'urgent',
      statusLabel: 'à clôturer'
    },
    // ... autres lignes
  ];
}
