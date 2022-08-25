import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'MeuPrimeiroProjeto';
  transferencia: any;

  transferir($event: any){
    console.log($event);
    this.transferencia = $event;
  }
}
