import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch:"full"},            // Definindo a rota da pagina principal
  {path:"sobre", component: SobreComponent, children:[              // Definindo um endereço com rotas filhas
    {path: ':id/:username', component: SobreComponent},             // Declarando uma rota filha que recebe parametros (o componente especificado deve estar preparado para receber parametros 'ActivatedRoute')
    {path: 'inf', component: SobreComponent}                        // Declarando uma rota filha comum (Ex: ".../sobre/inf")
  ]},
  {path:"dashboard", loadChildren:                                  // Definindo um 'Lazy Loading' (Vai carregar os componentes deste modulo somente quando forem ser utilizados)
    () => import('./modules/dashboard/dashboard.module')            // Importando o modulo desejado
    .then(m => m.DashboardModule)                                   // Quando acabar de importar retorna o modulo (visto que todo modulo deve ter seu 'route.module.ts)
  },
  {path:"404", component: PageErrorComponent},  
  {path:"**", redirectTo:"404"}                                     // Quando o usuario digitar alguma pagina errada ele será redirecionado para pagina 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],        // Define rotas Principais ("forRoot" So pode ser utilizado em um único lugar/arquivo) - ('useHash' setado com true adc um '#' na url da aplicação Ex's: 'localhost:4200/#', 'localhost:4200/#/servico' ...)
  exports: [RouterModule]
})
export class AppRoutingModule { }
