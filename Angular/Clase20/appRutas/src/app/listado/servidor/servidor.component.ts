import { Component, OnInit, Input } from '@angular/core';
import { IServidor } from '../../interfaces';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css']
})
export class ServidorComponent implements OnInit {
  @Input() servidor: IServidor

  constructor() { }

  ngOnInit() {
  }

}
