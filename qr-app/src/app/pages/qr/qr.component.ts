import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
})
export class QrComponent implements OnInit {
  qrData: string = 'Texto o datos que quieres codificar'; // Cambia esto por los datos que desees

  constructor() {}

  ngOnInit() {}
}
