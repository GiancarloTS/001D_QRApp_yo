import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  probar(){
    console.log(this.user);
    console.log(this.pass);
    console.log(this.nombrecompleto);
    console.log(this.type);
    console.log(this.carrera);
  }

  user: string = ''; // Campo de entrada para el usuario
  pass: string = '';
  nombrecompleto: string = '';
  type: string = '';
  carrera: string = '';
  constructor() {}
  isLoading: boolean = false;

  errorMessage: string = ''; // Para mostrar mensajes de error (si el usuario ya existe)
  successMessage: string = ''; // Para mostrar mensaje de éxito


  private authService = inject(AuthService);
  private router = inject(Router);
  private alertController = inject(AlertController);  // Inyecta el AlertController
  registroFallido: boolean = false;

  async validarUsuarioExistente(usuario: string): Promise<boolean> {
    try {
      const usuariosExistentes = await this.authService.obtenerUsuarios();
      return usuariosExistentes.some(u => u.user === usuario);
    } catch (error) {
      this.errorMessage = 'Error al validar el usuario';
      await this.mostrarAlerta('Error', 'Error al validar el usuario. Inténtalo de nuevo.');
      return true; // En caso de error, asumimos que el usuario existe para evitar fallos
    }
  }

  // Método para registrar un nuevo usuario
  async registrar() {
    // Limpiar mensajes anteriores
    this.errorMessage = '';
    this.successMessage = '';
    this.registroFallido = false;

    // Verificar si el usuario ya existe
    const usuarioExiste = await this.validarUsuarioExistente(this.user);

    if (usuarioExiste) {
      this.errorMessage = 'El nombre de usuario ya está en uso. Por favor, elige otro.';
      this.registroFallido = true;
      await this.mostrarAlerta('Error', this.errorMessage);  // Muestra alerta de error
      return;
    }

    // Si el usuario no existe, proceder con el registro
    const nuevoUsuario = {
      user: this.user,
      pass: this.pass,
      carrera: this.carrera,
      type:this.type,
      NombreCompleto:this.nombrecompleto,
    };

    try {
      await this.authService.registrarNuevoUsuario(nuevoUsuario);
      this.successMessage = 'Usuario registrado exitosamente!';
      await this.mostrarAlerta('Éxito', this.successMessage);  // Muestra alerta de éxito
      // this.router.navigate(['/login']);  // Redirige al login después del registro exitoso
    } catch (error) {
      this.errorMessage = 'Hubo un error al registrar el usuario. Inténtalo de nuevo.';
      this.registroFallido = true;
      await this.mostrarAlerta('Error', this.errorMessage);  // Muestra alerta de error
    }
  }

  // Método para mostrar alertas
  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();  // Muestra la alerta
  }

  ngOnInit() {}
}
