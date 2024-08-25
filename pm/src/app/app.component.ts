import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Person } from './person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pm';
  emptyDB: Person[] = [];
  db : Person[] = [
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
    }
  ];
}
