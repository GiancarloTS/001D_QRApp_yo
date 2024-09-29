import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/services/cuenta.service';
import { Router } from '@angular/router'; // Asegúrate de importar el Router para la navegación

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  studentName: string | null = null;
  studentId: string = '12345';
  studentCourse: string = '1º Medio'; // Puedes cambiarlo según sea necesario

  constructor(private cuentaService: CuentaService, private router: Router) {}

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

  logout() {
    // Realiza el cierre de sesión
    this.cuentaService.logout(); // Asegúrate de que CuentaService tenga una función de logout
    this.router.navigate(['/login']); // Redirige al login después de cerrar sesión
    console.log('Sesión cerrada');
  }
}
