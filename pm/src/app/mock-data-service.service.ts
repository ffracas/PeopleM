import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})

export class MockDataService {

  people : Person[] = [
    {
      id: 1,
      name: "John",
      surname: "Doe",
      address: "123 Main St",
      country: "United States",
      city: "Los Angeles",
      province: "California",
      email: "john.doe@example.com",
      note: "Prefers communication via email."
    },
    {
      id: 2,
      name: "Jane",
      surname: "Smith",
      address: "456 Maple Ave",
      country: "Canada",
      city: "Toronto",
      province: "Ontario",
      email: "jane.smith@example.com",
      note: "Allergic to peanuts."
    },
    {
      id: 3,
      name: "Mario",
      surname: "Rossi",
      address: "789 Elm St",
      country: "Italy",
      city: "Rome",
      province: "Lazio",
      email: "mario.rossi@example.com",
      note: "Likes to receive calls in the afternoon."
    },
    {
      id: 4,
      name: "Sophie",
      surname: "Dubois",
      address: "321 Oak Rd",
      country: "France",
      city: "Paris",
      province: "Île-de-France",
      email: "sophie.dubois@example.com",
      note: "Fluent in both French and English."
    },
    {
      id: 5,
      name: "Lars",
      surname: "Andersson",
      address: "654 Pine Dr",
      country: "Sweden",
      city: "Stockholm",
      province: "Stockholm",
      email: "lars.andersson@example.com",
      note: "Prefers meetings early in the morning."
    },
    {
      id: 6,
      name: "Yuki",
      surname: "Tanaka",
      address: "987 Cedar St",
      country: "Japan",
      city: "Tokyo",
      province: "Tokyo",
      email: "yuki.tanaka@example.com",
      note: "Has experience in international business."
    },
    {
      id: 7,
      name: 'Marco',
      surname: 'Rossi',
      email: 'marco.rossi@example.com',
      address: 'Via Roma 12',
      city: 'Milano',
      province: 'Milano',
      country: 'Italia',
      note: 'Preferisce comunicazioni via email.'
    },
    {
      id: 8,
      name: 'Giulia',
      surname: 'Bianchi',
      email: 'giulia.bianchi@example.com',
      address: 'Corso Italia 24',
      city: 'Torino',
      province: 'Torino',
      country: 'Italia',
      note: 'Ha richiesto un incontro la prossima settimana.'
    },
    {
      id: 9,
      name: 'Luca',
      surname: 'Verdi',
      email: 'luca.verdi@example.com',
      address: 'Piazza Duomo 8',
      city: 'Napoli',
      province: 'Napoli',
      country: 'Italia',
      note: 'Interessato a nuovi prodotti.'
    },
    {
      id: 10,
      name: 'Elena',
      surname: 'Neri',
      email: 'elena.neri@example.com',
      address: 'Via Dante 17',
      city: 'Firenze',
      province: 'Firenze',
      country: 'Italia',
      note: 'Richiede informazioni dettagliate.'
    },
    {
      id: 11,
      name: 'Francesco',
      surname: 'Esposito',
      email: 'francesco.esposito@example.com',
      address: 'Via Garibaldi 30',
      city: 'Bologna',
      province: 'Bologna',
      country: 'Italia',
      note: 'Preferisce telefonate dopo le 18.'
    },
    {
      id: 12,
      name: 'Martina',
      surname: 'Russo',
      email: 'martina.russo@example.com',
      address: 'Via Manzoni 15',
      city: 'Genova',
      province: 'Genova',
      country: 'Italia',
      note: 'Chiedere di inviare un preventivo.'
    }
  ];

  constructor() { }

  getPeople(): Person[] {
    return this.people;
  }

  getPersonById(id: number): Person | undefined {
    return this.people.find(person => person.id === id);
  }

  addPerson(person: Person): void {
    person.id = this.people.length + 1;
    this.people.push(person);
  }

  updatePerson(updatedPerson: Person): void {
    const index = this.people.findIndex(person => person.id === updatedPerson.id);
    if (index !== -1) {
      this.people[index] = updatedPerson;
    }
  }

  deletePerson(id: number): void {
    this.people = this.people.filter(person => person.id !== id);
  }

}
