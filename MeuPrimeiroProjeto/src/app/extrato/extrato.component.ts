import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.sass']
})
export class ExtratoComponent implements OnInit {

  @Input() transferencia: any;

  constructor() { }

  ngOnInit(): void {
  }

}
