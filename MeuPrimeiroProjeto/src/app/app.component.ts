import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'MeuPrimeiroProjeto';

  constructor(private service:TransferenciaService){

  }

  transferir($event: any){
    this.service.adicionar($event)
  }
}
