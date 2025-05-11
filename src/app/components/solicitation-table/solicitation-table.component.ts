import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitationRowComponent } from '../solicitation-row/solicitation-row.component';

@Component({
  standalone: true,
  selector: 'app-solicitation-table',
  templateUrl: './solicitation-table.component.html',
  styleUrls: ['./solicitation-table.component.scss'],
  imports: [CommonModule, SolicitationRowComponent],
})
export class SolicitationTableComponent {
  rows = [
    {
      ticket: 'TCK-001',
      maj: '08/05/2025',
      client: 'Jean Dupont',
      objet: 'Problème de virement',
      type: 'Réclamation',
      echeance: '10/05/2025',
      statut: 'En attente',
      urgent: true
    },
    // ...autres lignes fictives
  ];
}
