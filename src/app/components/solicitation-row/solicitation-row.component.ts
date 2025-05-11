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
}
