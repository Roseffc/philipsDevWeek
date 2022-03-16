import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
// import { MatTableModule } from '@angular/material/table';
// import { MatToolbarModule } from '@angular/material/toolbar';
import { ExamesRoutingModule } from './exames-routing.module';
import { ExamesComponent } from './exames/exames.component';
import { FaixaEtariaService } from './service/faixa-etaria.service';
import { OcorrenciaService } from './service/ocorrencia.service';
import { RegiaoService } from './service/regiao.service';

@NgModule({
  declarations: [
    ExamesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatSortModule,
    ExamesRoutingModule,
  ],
  providers: [
    OcorrenciaService,
    RegiaoService,
    FaixaEtariaService,
  ]
})
export class ExamesModule { }
