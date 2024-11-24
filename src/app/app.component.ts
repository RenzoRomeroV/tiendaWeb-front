import { Component, OnInit } from '@angular/core';
import { UserStorageService } from './services/storage/user-storage.service';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd  } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tiendaWeb-front';

  isCustomerLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    // Suscribirse solo a los eventos de navegación finalizada
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.updateLoginStatus();
    });

    // Inicializar el estado de inicio de sesión
    this.updateLoginStatus();
  }
  
  //Es clave para mantener el estado de autenticación sincronizado entre la interfaz de usuario y los datos almacenados en el navegador
  updateLoginStatus(): void {
    this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
    this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
  }

  logout(): void {
    UserStorageService.singOut();
    this.updateLoginStatus();
    this.router.navigateByUrl('/login');
  }
}
