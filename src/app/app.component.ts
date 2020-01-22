import { Component } from '@angular/core';

export interface Group {
  name: string;
  permissions: Array<number>;
}
export class User {
  name: string;
  email: string;
  password: string;
  permissions: Array<number>;
  groupId: number;

  constructor(name: string, email: string, password: string, permissions: Array<number>, groupId: number ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.permissions = permissions;
    this.groupId = groupId;
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iba-test-task';
  users: Array<User> = [];
  groups: Array<Group> = [];
}

