export interface Group {
  id: Number;
  name:string;
  permissions:Array<Number>;
}
export interface User {
  id: Number;
  name:string;
  permissions:Array<Number>;
  groupId:Number;
}

export class AdministratePermissionService {
  PERMISSIONS = {1: 'View Dashboards', 2: 'Edit Dashboards', 3: 'Manage Datasources', 4: 'Manage Users'}
  users = []
  groups = []
  constructor() { }

  addUser(user: User):void {
    this.users.push(user)
  }

  addGroup(group: Group):void {
    this.groups.push(group)
  }

  getUser():any{
    return this.users
  }

  getGroup():any{
    return this.groups
  }

  deleteUser(user: User):void {
    this.users.splice(this.users.indexOf(user), 1)
  }

  deleteGroup(group: Group):void {
    this.groups.splice(this.groups.indexOf(group), 1)
  }

  setPermissions(user: User, permissions: Array<number>):void {
    this.users[this.users.indexOf(user)].permissions = permissions
  }

}
