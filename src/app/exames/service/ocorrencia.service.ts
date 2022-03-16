import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ocorrencia } from '../model/ocorrencia';


@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  constructor() { }

  listOcorrencias(): Ocorrencia[]{
    return [
      { id: 1, regiao_id: 2, mes: 5, faixa_id: 1, qnt_exames:44,regiao:'sudeste', total_exames:10 }
    ];
  }
}
