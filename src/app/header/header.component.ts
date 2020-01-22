import {Component, Input, OnInit} from '@angular/core';
import {AdministratePermissionService} from '../administrate-permission.service';
import {Import} from '@angular/core/schematics/utils/typescript/imports';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
