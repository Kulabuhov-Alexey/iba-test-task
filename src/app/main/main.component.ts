import { Component, OnInit } from '@angular/core';
import {AdministratePermissionService} from '../administrate-permission.service';
import {User} from '../app.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name: '';
  email: '';
  password: '';
  permissions: [];
  groupId = 1;

  constructor(private administrativePermissionService: AdministratePermissionService) { }
  onAdd() {
    this.administrativePermissionService.addUser(new User(this.name.trim(), this.email.trim(), this.password, this.permissions, this.groupId));
    this.name = this.email = this.password = '';
  }

  onDel() {
    this.administrativePermissionService.deleteUser(this.name);
  }
  ngOnInit() {
  }

}
