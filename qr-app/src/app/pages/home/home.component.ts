import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nombreUsuario: string;
  userType: 'docente' | 'alumno' | null; // Tipo de usuario
  asignaturasDocente: string[] = ['Matemáticas', 'Ciencias']; // Lista de asignaturas del docente
  asignaturasAlumno: string[] = ['Historia', 'Geografía']; // Lista de asignaturas del alumno

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.usuario$.subscribe((usuario) => {
      this.nombreUsuario = usuario;
    });

    this.authService.type$.subscribe((type) => {
      this.userType = type;
      this.cargarAsignaturas(); // Cargar asignaturas al cambiar el tipo de usuario
    });
  }

  cargarAsignaturas() {
    if (this.userType === 'docente') {
      // Asignaturas para el docente (puedes modificar esto según tu lógica)
      this.asignaturasDocente = ['Matemáticas', 'Ciencias', 'Historia'];
    } else if (this.userType === 'alumno') {
      // Asignaturas para el alumno (puedes modificar esto según tu lógica)
      this.asignaturasAlumno = ['Biología', 'Literatura', 'Física'];
    }
  }
}
