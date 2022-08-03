import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


/*
  Can Load
  Decide se o modulo poderá ser carregado ou não
  se true   -> carrega o modulo desejado e realiza as funções seguintes
  se false  -> não consome pacote de dados e não carrega o modulo
*/

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      alert("Vocẽ não pode carregar o modulo (bloqueado por canLoad)")
    return false;
  }
}
