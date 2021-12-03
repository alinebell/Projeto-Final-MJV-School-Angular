import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {


  constructor(private router: Router) {


  }


  canActivate(): boolean{
    const memberStorage = sessionStorage.getItem('member');
    if(memberStorage) {
      return true;
    } else {
      return false;
    }
    
  }
  
}
