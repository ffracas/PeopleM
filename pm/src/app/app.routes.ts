import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditPersonComponent } from './edit-person/edit-person.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'add', component: EditPersonComponent }
];
