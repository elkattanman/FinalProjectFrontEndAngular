import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from "../token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(private user: TokenStorageService, private route: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let roles=this.user.getUser().roles;
      let uRole ='';
      for(let role of roles){
        if(role.indexOf("ROLE")!=-1){
          uRole=role;
        }
      }
      if(uRole === "ROLE_STUDENT"){
        return true;
      }else{
        this.route.navigate(["/error"]);
        return false;
      }
  }

}
