import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.sass'],
})
export class NovaTransferenciaComponent {

  valor: number | undefined;
  destino: number | undefined;

  transferir() {
    console.log('Solicitada nova transferências');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }
}
