import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.sass'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number | undefined;
  destino: number | undefined;

  constructor(private service: TransferenciaService, private router:Router) {}

  transferir() {
    // console.log('Solicitada nova transferências');
    // console.log('Valor: ', this.valor);
    // console.log('Destino: ', this.destino);

    const VALOR_EMITIR: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionar(VALOR_EMITIR).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
