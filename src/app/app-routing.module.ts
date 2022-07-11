import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HoyComponent } from './components/hoy/hoy.component';
import { ListaOpComponent } from './components/lista-op/lista-op.component';
import { OpRangoComponent } from './components/op-rango/op-rango.component';
import { OpTipoRangoComponent } from './components/op-tipo-rango/op-tipo-rango.component';
import { RegistraComponent } from './components/registra/registra.component';
import { ResultsComponent } from './components/results/results.component';
import { TopComponent } from './components/top/top.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'registra/:Tipo', component: RegistraComponent},
  {path:'lista', component: ListaOpComponent},
  {path:'hoy', component: HoyComponent},
  {path:'lista/:desde/:hasta', component: ListaOpComponent},
  {path:'results/lista/:desde/:hasta', component: ListaOpComponent},
  {path:'rangoop', component: OpRangoComponent},
  {path:'results', component: ResultsComponent},
  {path:'opxtipo', component: OpTipoRangoComponent},
  {path:'top', component: TopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
