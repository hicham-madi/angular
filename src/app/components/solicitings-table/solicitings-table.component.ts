import { Component } from '@angular/core';
import { Soliciting } from '../../models/soliciting.model';
import { CommonModule } from '@angular/common';
import { SolicitingRowComponent } from '../soliciting-row/soliciting-row.component';

@Component({
  selector: 'metabot-solicitings-table',
  templateUrl: './solicitings-table.component.html',
  styleUrls: ['./solicitings-table.component.scss'],
  standalone: true,
  imports: [CommonModule, SolicitingRowComponent]
})
export class SolicitingsTableComponent {
 solicitings: Soliciting[] = Array.from({ length: 11 }, (_, i) => ({
    id: `${i + 1}`,
    ticketNumber: `TCK-${i.toString().padStart(4, '0')}`,
    lastUpdate: new Date(2024, 10, 21, 17, 30),
    client: `Client ${i + 1}`,
    subject: 'Nom de la sollicitation',
    type: 'Demande',
    deadline: new Date(2024, 10, 21, 17, 30),
    status: 'Clôturé',
  }));
}
