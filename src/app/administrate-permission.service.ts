import {Injectable} from '@angular/core';
import {User, Group} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AdministratePermissionService {
  PERMISSIONS = {1: 'View Dashboards', 2: 'Edit Dashboards', 3: 'Manage Datasources', 4: 'Manage Users'};
  users: Array<User> = [];
  groups: Group[];
  constructor() { }

  checkUserForAdd(user: User): any {
    return this.users.find(item => item.name === user.name);
  }

  addUser(user: User): void {
    if (this.checkUserForAdd(user) === undefined) {
      this.users.push(user);
    }
    console.log(this.users);
  }

  addGroup(group: Group): void {
    this.groups.push(group);
  }

  getUser(): any {
    return this.users;
  }

  getGroup(): any {
    return this.groups;
  }

  deleteUser(name: string): void {
    const userForDel = this.users.find(item => item.name === name);
    this.users.splice(this.users.indexOf(userForDel), 1);
    console.log(this.users);
  }

  deleteGroup(group: Group): void {
    this.groups.splice(this.groups.indexOf(group), 1);
  }

  setPermissions(user: User, permissions: Array<number>): void {
    this.users[this.users.indexOf(user)].permissions = permissions;
  }

}
