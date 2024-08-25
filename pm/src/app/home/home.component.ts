import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person } from '../person';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() people!: Array<Person>;
  searchTerm: string = '';
  filteredAndSortedPeople: Array<Person> = [];
  sortField: string = '';
  sortAscending: boolean = true;
  selectedField: string = 'name';  // Campo selezionato per la ricerca

  ngOnInit() {
    this.filteredAndSortedPeople = this.people;
  }

  applyFilterAndSort() {
    this.filterPeople();
    this.sortData(this.sortField, false); // False per evitare di invertire l'ordinamento ad ogni filtro
  }

  filterPeople() {
    if (!this.searchTerm) {
      this.filteredAndSortedPeople = this.people;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredAndSortedPeople = this.people.filter(person =>
        person[this.selectedField as keyof Person].toString().toLowerCase().includes(term)
      );
    }
  }

  sortData(field: string, toggleSort: boolean = true) {
    if (toggleSort) {
      this.sortAscending = this.sortField === field ? !this.sortAscending : true;
      this.sortField = field;
    }

    this.filteredAndSortedPeople.sort((a, b) => {
      let comparison = 0;

      if (a[field as keyof Person] > b[field as keyof Person]) {
        comparison = 1;
      } else if (a[field as keyof Person] < b[field as keyof Person]) {
        comparison = -1;
      }

      return this.sortAscending ? comparison : -comparison;
    });
  }
}
