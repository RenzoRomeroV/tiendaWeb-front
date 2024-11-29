import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule
import { MatInputModule } from '@angular/material/input';         // Importa MatInputModule
import { MatButtonModule } from '@angular/material/button';       // Importa MatButtonModule si usas botones de Angular Material
import { MatSnackBarModule } from '@angular/material/snack-bar';  // Para el snackBar que usas en tu lógica
import { MatIconModule } from '@angular/material/icon'; // Importa MatIconModule
import { MatSelectModule } from '@angular/material/select'; // Importa MatSelectModule
import { MatCardModule } from '@angular/material/card'; // Importa MatCardModule
import { MatDividerModule } from '@angular/material/divider';
import { CartComponent } from './components/cart/cart.component'; // Importa MatDividerModule


@NgModule({
  declarations: [
    CustomerComponent,
    DashboardComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule, // Agregado aquí
    MatInputModule,     // Agregado aquí
    MatButtonModule,    // Agregado aquí
    MatSnackBarModule,   // Agregado aquí
    MatIconModule, // Asegúrate de exportarlo si es un módulo compartido
    MatSelectModule, // Exporta si es necesario
    MatCardModule, // Exporta si usas módulos compartidos
    MatDividerModule, // Exporta si estás usando un módulo compartido
  ]
})
export class CustomerModule { }
