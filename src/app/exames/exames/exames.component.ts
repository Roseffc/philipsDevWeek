import { Component, OnInit } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';
import { Ocorrencia } from '../model/ocorrencia';
import { Regiao } from '../model/regiao';
import { FaixaEtariaService } from '../service/faixa-etaria.service';
import { OcorrenciaService } from '../service/ocorrencia.service';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
    styleUrls:['./exames.component.scss']
})

export class ExamesComponent implements OnInit {

  ocorrencia_exame: Ocorrencia[] = [];
  regioes: Regiao[] = [];
  faixaetarias: Faixaetaria[] = [];

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private regioesService: RegiaoService,
    private faixaEtariaService: FaixaEtariaService
  ) { }

  ngOnInit(): void {
    this.regioesService.listRegioes().subscribe(regioes => {this.regioes = regioes});
    this.ocorrenciaService.listOcorrencias().subscribe(ocorrencias => {this.ocorrencia_exame= ocorrencias}); 
    this.faixaEtariaService.listFaixaEtaria().subscribe(faixaetarias => {this.faixaetarias=faixaetarias});
  }

  
}
