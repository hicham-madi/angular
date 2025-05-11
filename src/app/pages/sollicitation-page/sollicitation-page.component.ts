import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { CounterCardsComponent } from '../../components/counter-cards/counter-cards.component';
import { FilterBarComponent } from '../../components/filter-bar/filter-bar.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SolicitationTableComponent } from '../../components/solicitation-table/solicitation-table.component';


@Component({
  standalone: true,
  selector: 'app-solicitation-page',
  templateUrl: './sollicitation-page.component.html',
  styleUrls: ['./sollicitation-page.component.scss'],
  imports: [
    CommonModule,
    TopBarComponent,
    PageHeaderComponent,
    CounterCardsComponent,
    FilterBarComponent,
    TabsComponent,
    SolicitationTableComponent
  ],
})
export class SolicitationPageComponent {}
