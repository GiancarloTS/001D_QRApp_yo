// src/app/pages/qr/qr.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
})
export class QrComponent implements OnInit {
  qrData: string; // Propiedad para almacenar los datos del QR
  classId: string; // Propiedad para almacenar el ID ingresado

  constructor() { }

  ngOnInit() {
    // Inicialmente, qrData puede estar vacío o tener un valor predeterminado
    this.qrData = '';
  }

  generateQr(newData: string) {
    if(newData && newData.trim() !== '') {
      this.qrData = newData.trim();
    }
  }

  onScanQr() {
    // Esta funcionalidad aún no se implementa, solo mostramos el botón
    console.log('Funcionalidad de escaneo aún no implementada.');
  }
}
