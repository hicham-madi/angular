import { Component, Input } from '@angular/core';
import { Soliciting } from '../../models/soliciting.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'metabot-solicitings-table',
  templateUrl: './solicitings-table.component.html',
  styleUrls: ['./solicitings-table.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SolicitingsTableComponent {
  @Input() solicitings: Soliciting[] = [];
}
