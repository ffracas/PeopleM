import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { MockDataService } from '../mock-data-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly NO_PERSON_SELECTED = -1;

  personOfInterest!: Number;
  people!: Array<Person>;

  searchTerm: string = '';
  filteredAndSortedPeople: Array<Person> = [];
  sortField: string = '';
  sortAscending: boolean = true;
  selectedField: string = 'id';  // Campo selezionato per la ricerca

  constructor(private personService: MockDataService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.people = this.personService.getPeople();
    this.filteredAndSortedPeople = this.people;
    this.route.queryParams.subscribe(params => {
      console.log('Params:', params);
      this.personOfInterest = params['newPersonId'] ? params['newPersonId'] : this.NO_PERSON_SELECTED;
      if (this.personOfInterest !== this.NO_PERSON_SELECTED) {
        this.scrollToNewPerson();
      }
    });
  }

  scrollToNewPerson(): void {
    setTimeout(() => {
      console.log(`person-${this.personOfInterest}`);
      const element = document.getElementById(`person-${this.personOfInterest}`);

      if (element) {
        element.classList.add('highlight');
        element.scrollIntoView({ behavior: 'smooth' });

        // Rimuovi la classe evidenziata dopo 5 secondi
        /*setTimeout(() => {
          element.classList.remove('highlight');
        }, 5000);*/
      }
    }, 0);
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

  editPerson(person: Person) {
    this.router.navigate(['/edit', person.id]);
  }

  deletePerson(id: number) {
    this.filteredAndSortedPeople = this.filteredAndSortedPeople.filter(person => person.id !== id);
    this.personService.deletePerson(id);
    this.people = this.personService.getPeople();
  }

  addPerson() {
    this.router.navigate(['/edit', 0]); // Vai alla pagina di aggiunta (nuovo ID = 0)
  }

  submit() {
    // Logica per inviare i dati, ad esempio a un server
    console.log('Data submitted:', this.filteredAndSortedPeople);
  }
}
