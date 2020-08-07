import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {TokenStorageService} from "../token-storage.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{

  constructor(private user: TokenStorageService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let roles=this.user.getUser().roles;
    let uRole ='';
    for(let role of roles){
      if(role.indexOf("ROLE")!=-1){
        uRole=role;
      }
    }
    if(uRole === "ROLE_ADMIN"){
      return true;
    }else{
      this.route.navigate(["/error"]);
      return false;
    }
  }
}
