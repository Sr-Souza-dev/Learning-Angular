import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


// CanActivated -> Caso retorne true ele irá para rota de destino, ao contrário ele voltará para tela anterior
/*
  Can Activated
  Interface que uma classe pode implementar para ser um guarda decidindo se uma rota pode ser ativada.
  se true   -> a navegação continua
  se false  -> a navegação é cancelada
*/

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(route.queryParams['account'] == "admin" && route.queryParams['password'] == "admin12"){
      return true;
    }
    return false;
  }
  
}
