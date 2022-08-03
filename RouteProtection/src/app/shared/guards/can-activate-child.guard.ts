import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/*
  Can Activate Child      (Utilizado para modulos com lazyLoad - rotas em modulos dif)
  Interface que uma classe pode implementar para ser um guarda decidindo se uma rota filha pode ser ativada
  se true   -> a navegação continua
  se false  -> a navegação é cancelada
*/

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
