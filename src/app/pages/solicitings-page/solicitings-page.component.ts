import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { CounterCardsComponent } from '../../components/counter-cards/counter-cards.component';
import { FilterBarComponent } from '../../components/filter-bar/filter-bar.component';
import { SolicitationsTableComponent } from '../../components/solicitations-table/solicitations-table.component';
import { StatusTabsComponent } from '../../components/status-tabs/status-tabs.component';


@Component({
  standalone: true,
  selector: 'app-solicitation-page',
  templateUrl: './solicitings-page.component.html',
  styleUrls: ['./solicitings-page.component.scss'],
  imports: [
    CommonModule,
    TopBarComponent,
    PageHeaderComponent,
    CounterCardsComponent,
    FilterBarComponent,
    StatusTabsComponent,
    SolicitationsTableComponent
  ],
})
export class SolicitingsPageComponent {}
