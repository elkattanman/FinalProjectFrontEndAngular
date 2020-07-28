import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  isTeacher: string;
  constructor(
    public gl: GlobalService
  ) { }

  ngOnInit(): void {
    this.isTeacher = 'Mustafa';
  }

}
