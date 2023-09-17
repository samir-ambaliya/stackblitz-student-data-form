import 'zone.js/dist/zone';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserFormComponent } from './form-data/form-data.component';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UserFormComponent,MatChipsModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
    <app-user-form></app-user-form>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
