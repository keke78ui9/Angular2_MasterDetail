import { Component } from '@angular/core';

import { User } from './user';
import { DetailComponent } from './detail.component';

const USERS: User[] = [
  { id: 111, firstName: 'aaa', lastName: 'bbbsfd', age: 10, email: "asf12@asd.com"},
  { id: 112, firstName: 'aaabb', lastName: 'bbbsdf', age: 11, email: "asfasdf12@asd.com"},
  { id: 113, firstName: 'aaadd', lastName: 'bbsdfsb', age: 20, email: "asf1asdfa2@asd.com"},
  { id: 114, firstName: 'aaacc', lastName: 'bssbb', age: 30, email: "a111sf12@asasdfd.com"},
  { id: 115, firstName: 'aaavv', lastName: 'bffbb', age: 40, email: "asf234212@asd.com"},
  { id: 116, firstName: 'aaaaa', lastName: 'bsssbb', age: 50, email: "asfsadfasdf12@asd.com"}
];

@Component({
  selector: 'my-app',
  template: `
  <h1>My User Manager</h1>
  <ul>
    <li *ngFor="let user of users" (click)="onSelect(user)">
      {{user.id}}
    </li>
  </ul>
  <hero-detail [user]="selectedUser"></hero-detail>
  `,
  directives: [DetailComponent]
})
export class AppComponent { 
  users = USERS;
  selectedUser : User;
  onSelect(user: User) {
    this.selectedUser = user;
  }
}