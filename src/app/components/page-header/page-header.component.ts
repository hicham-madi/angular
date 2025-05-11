import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  imports: [CommonModule],
})
export class PageHeaderComponent {
  tabs = [
    'Mes sollicitations',
    'Mon équipe',
    'Ma caisse régionale',
    'Toutes les sollicitations'
  ];
  activeTab = this.tabs[0];

  selectTab(tab: string): void {
    this.activeTab = tab;
  }
}
