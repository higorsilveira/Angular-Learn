import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'MeuPrimeiroProjeto';
  transferencias: any[] = [];

  transferir($event: any){
    console.log($event);
    const TRANSFERENCIA = {...$event, data: new Date()};
    this.transferencias?.push(TRANSFERENCIA);
  }
}
