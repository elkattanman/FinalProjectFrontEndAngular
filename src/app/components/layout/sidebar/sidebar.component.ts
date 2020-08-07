import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../../services/security/token-storage.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  role: string;
  constructor(private user : TokenStorageService) { }

  ngOnInit(): void {
    let roles=this.user.getUser().roles;
    for(let r of roles){
      if(r.indexOf("ROLE")!=-1){
        this.role=r;
      }
    }
    console.log(this.role);
  }

}
