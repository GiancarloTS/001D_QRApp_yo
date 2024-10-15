// src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nombreUsuario: string = '';
  userType: 'admin' | 'Estudiante' | 'Profesor' | null = null;
  asignaturasDocente: string[] = [];
  asignaturasAlumno: string[] = [];
  qrData: string | null = null; // Variable para almacenar el dato del QR
  scanning: boolean = false; // Estado de escaneo

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Suscripción al nombre del usuario
    this.authService.usuario$.subscribe((usuario: string) => {
      this.nombreUsuario = usuario;
      console.log('Nombre del usuario:', usuario);
    });

    // Suscripción al tipo de usuario
    this.authService.type$.subscribe((type: 'admin' | 'Estudiante' | 'Profesor' | null) => {
      this.userType = type;
      console.log('Tipo de usuario:', type);
      this.cargarAsignaturas();
    });
  }

  cargarAsignaturas() {
    if (this.userType === 'Profesor') {
      // Lógica para obtener asignaturas del profesor
      this.asignaturasDocente = ['Matemáticas', 'Historia', 'Física']; // Ejemplo estático
      console.log('Asignaturas del profesor:', this.asignaturasDocente);
    } else if (this.userType === 'Estudiante') {
      // Lógica para obtener asignaturas del alumno
      this.asignaturasAlumno = ['Biología', 'Literatura', 'Química']; // Ejemplo estático
      console.log('Asignaturas del alumno:', this.asignaturasAlumno);
    } else if (this.userType === 'admin') {
      // Opcional: lógica para admin
      console.log('Usuario es admin. Redirigir o mostrar contenido especial.');
      // Puedes redirigir a una página de admin o mostrar contenido específico
    }
  }

  generarQR(asignatura: string) {
    // Genera un identificador único para la clase o asignatura
    // Por simplicidad, usaremos una combinación de asignatura y timestamp
    const uniqueId = `${asignatura}-${new Date().getTime()}`;
    this.qrData = uniqueId;
    console.log('QR generado:', this.qrData);
  }

  escaneoQR() {
    // Por ahora, solo muestra un mensaje ya que la funcionalidad no está implementada
    console.log('Botón de escaneo de QR presionado.');
    // Puedes agregar un mensaje emergente o navegar a una página de escaneo en el futuro
  }

  logout() {
    this.authService.logout();
    // Opcional: redirigir al login
  }
}
