import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-tabs.component.html',
  styleUrls: ['./status-tabs.component.scss']
})
export class StatusTabsComponent {
  selected: 'ongoing' | 'completed' = 'ongoing';
}
