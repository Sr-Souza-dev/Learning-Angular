import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,                 // Definindo uma variavel que fica esperando parametros de rota
    private router: Router                                  // Definindo uma variavel que é capaz de fazer direcionamentos pelo site (entre as paginas internas e externas)
  ) { }   

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(                   // Retorna um objeto com somente os dados especificados na rota "app-routin (Ex: url = '4200/sobre/15/gabriellindao?nome=gab&sobre=rosa' => object{id:15, nome:'gabriellindao'} )"
      res => console.log(res)                           
    )
    this.activatedRoute.queryParams.subscribe(              // Retorna um objeto de informações adcionais (Ex: url = '4200/sobre/15/gabriellindao?nome=gab&sobre=rosa' => object{nome:'gab', sobre:'rosa'})
      res => console.log(res)
    )

    setInterval(
      ()=>{
        this.router.navigate(['404']);                      // Vai redirecionar para a pagina especificada sem fazer o reload de tudo
        this.router.navigateByUrl("404");                   // Vai redirecionar para pagina especidicada fazendo todo reload ("A bolinha do browser carrega dnv")
    }, 5000)
  }

}
