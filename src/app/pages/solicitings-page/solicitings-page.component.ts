import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Feature Components
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { DashboardSummaryComponent } from '../../components/dashboard-summary/dashboard-summary.component';
import { FilterBarComponent } from '../../components/filter-bar/filter-bar.component';
import { StatusTabsComponent } from '../../components/status-tabs/status-tabs.component';
import { SolicitationsTableComponent } from '../../components/solicitations-table/solicitations-table.component';

@Component({
  standalone: true,
  selector: 'metabot-solicitings-page',
  templateUrl: './solicitings-page.component.html',
  styleUrls: ['./solicitings-page.component.scss'],
  imports: [
    CommonModule,
    PageHeaderComponent,
    DashboardSummaryComponent,
    FilterBarComponent,
    StatusTabsComponent,
    SolicitationsTableComponent
]
})
export class SolicitingsPageComponent {}
