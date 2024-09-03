import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { MockDataService } from '../mock-data-service.service';
import { STATUS_ADD, STATUS_EDIT, STATUS_ERROR } from './edit-person.constants';

@Component({
  selector: 'app-edit-person',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-person.component.html',
  styleUrl: './edit-person.component.scss'
})


export class EditPersonComponent {
  readonly STATUS_ADD = STATUS_ADD;
  readonly STATUS_EDIT = STATUS_EDIT;
  readonly STATUS_ERROR = STATUS_ERROR;
  statusCode!: number;
  route: ActivatedRoute = inject(ActivatedRoute);
  personId = 0;
  personForm!: FormGroup;

  constructor(private fb: FormBuilder, private personService: MockDataService, private router: Router) {}

  ngOnInit() {
    this.personForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      city: [''],
      province: [''],
      country: [''],
      note: ['']
    });

    this.personId = Number(this.route.snapshot.params['id']);
    if (this.personId != 0) {
      var person = this.personService.getPersonById(this.personId)
      if (person) {
        this.personForm.patchValue(person);
        this.statusCode = STATUS_EDIT;
      } else { this.statusCode = STATUS_ERROR; }
    }
    else { this.statusCode = STATUS_ADD; }
  }

  submitPerson() {
    console.log('Data submitted:', this.personForm.value);
    this.router.navigate(['/'], { queryParams: { newPersonId: this.personId } }); // quando fai inserimento / modifica rettificare il parametro
  }

  goHome() {
    this.router.navigate(['/']);
  }
}

