import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../../services/security/token-storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(
    public user:TokenStorageService
  ) { }

  ngOnInit(): void {
  }

}
