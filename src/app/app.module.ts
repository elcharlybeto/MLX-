import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RegistraComponent } from './components/registra/registra.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ListaOpComponent } from './components/lista-op/lista-op.component';
import { RangoComponent } from './components/rango/rango.component';
import { OpRangoComponent } from './components/op-rango/op-rango.component';
import { HoyComponent } from './components/hoy/hoy.component';
import { ReactiveFormsModule} from "@angular/forms";
import { ResultsComponent } from './components/results/results.component';
import { OpTipoRangoComponent } from './components/op-tipo-rango/op-tipo-rango.component';
import { TopComponent } from './components/top/top.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    RegistraComponent,
    HomeComponent,
    ListaOpComponent,
    RangoComponent,
    OpRangoComponent,
    HoyComponent,
    ResultsComponent,
    OpTipoRangoComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
