import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/services/cuenta.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  studentName: string | null = null;
  studentId: string = '12345';
  studentCourse: string = '1º Medio'; // Puedes cambiarlo según sea necesario

  constructor(private cuentaService: CuentaService) {}

  ngOnInit() {
    this.studentName = this.cuentaService.GetUsername();
  }

  editProfile() {
    // Lógica para editar el perfil
    console.log('Modificar perfil');
  }

  registerAttendance() {
    console.log(`Asistencia registrada para ${this.studentName}`);
  }
}
