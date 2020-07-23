import { Component, OnInit, ViewChild } from '@angular/core';
import {  MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css'],
})
export class UsertableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColumns = ['id', 'name', 'username', 'email'];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((results) => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
    });
  }
}
