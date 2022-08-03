import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountComponent } from '../account/account.component';


/*
  Can Deactive 
  Verifica se o usuario está tentando sair da rota (mudar de pagina)
  se true   -> Ele permite que o usuario saia
  se false  -> O usuario não consegue sair da pagina 
*/ 


@Injectable({
  providedIn: 'root'
})
export class CanDeactiveGuard implements CanDeactivate<AccountComponent> {
  canDeactivate(
    component: AccountComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return component.exit();
  }  
}
