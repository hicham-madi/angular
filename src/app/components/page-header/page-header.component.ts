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
  readonly tabs: string[] = [
    'Mes sollicitations',
    'Mon équipe',
    'Ma caisse régionale',
    'Toutes les sollicitations'
  ];

  activeTab: string = this.tabs[0];

  selectTab(tab: string): void {
    this.activeTab = tab;
  }
}
