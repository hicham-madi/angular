import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class FilterBarComponent {
  searchQuery = '';
  selectedStatus = 'Tous';

  statusOptions = ['Tous', 'En cours', 'Terminées'];

  onSearchChange() {
    // émettre l’événement plus tard si nécessaire
  }

  onStatusChange() {
    // émettre l’événement plus tard si nécessaire
  }
}
