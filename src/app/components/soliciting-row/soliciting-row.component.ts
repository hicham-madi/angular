import { Component, Input } from '@angular/core';
import { Soliciting } from '../../models/soliciting.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-soliciting-row',
  templateUrl: './soliciting-row.component.html',
  styleUrls: ['./soliciting-row.component.scss'],
  standalone: true,
  imports: [CommonModule, DatePipe]
})
export class SolicitingRowComponent {
  @Input() soliciting!: Soliciting;
}
