import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [CommonModule],
})
export class TabsComponent {
  tabs = [
    { label: 'En cours', count: 66 },
    { label: 'Terminées', count: 0 }
  ];

  activeTab = this.tabs[0].label;

  selectTab(tabLabel: string): void {
    this.activeTab = tabLabel;
  }
}
