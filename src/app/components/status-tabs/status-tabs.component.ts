import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-tabs',
  templateUrl: './status-tabs.component.html',
  styleUrls: ['./status-tabs.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class StatusTabsComponent {
  @Input() tabs = [
    { label: 'En cours', value: 'ongoing', count: 66 },
    { label: 'Terminées', value: 'completed', count: 0 },
  ];

  selected = this.tabs[0].value;
}
