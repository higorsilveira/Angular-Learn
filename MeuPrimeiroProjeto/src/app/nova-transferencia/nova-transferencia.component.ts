import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.sass'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number | undefined;
  destino: number | undefined;

  transferir() {
    // console.log('Solicitada nova transferências');
    // console.log('Valor: ', this.valor);
    // console.log('Destino: ', this.destino);

    const VALOR_EMITIR = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(VALOR_EMITIR);
    this.limparCampos();

    }

  limparCampos(){

    this.valor = 0;
    this.destino = 0;

  }
}
