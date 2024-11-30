import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostProductComponent } from './components/post-product/post-product.component';

import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule
import { MatInputModule } from '@angular/material/input';         // Importa MatInputModule
import { MatButtonModule } from '@angular/material/button';       // Importa MatButtonModule si usas botones de Angular Material
import { MatSnackBarModule } from '@angular/material/snack-bar';  // Para el snackBar que usas en tu lógica
import { MatIconModule } from '@angular/material/icon'; // Importa MatIconModule
import { MatSelectModule } from '@angular/material/select'; // Importa MatSelectModule
import { MatCardModule } from '@angular/material/card'; // Importa MatCardModule
import { MatDividerModule } from '@angular/material/divider';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component'; // Importa MatDividerModule

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatTableModule } from '@angular/material/table';
import { OrdersComponent } from './components/orders/orders.component';

// Importar módulos de Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { PostProductFaqComponent } from './components/post-product-faq/post-product-faq.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { OrderByStatusComponent } from './components/analytics/order-by-status/order-by-status.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostCategoryComponent,
    PostProductComponent,
    PostCouponComponent,
    CouponsComponent,
    OrdersComponent,
    PostProductFaqComponent,
    UpdateProductComponent,
    AnalyticsComponent,
    OrderByStatusComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule, // Agregado aquí
    MatInputModule,     // Agregado aquí
    MatButtonModule,    // Agregado aquí
    MatSnackBarModule,   // Agregado aquí
    MatIconModule, // Asegúrate de exportarlo si es un módulo compartido
    MatSelectModule, // Exporta si es necesario
    MatCardModule, // Exporta si usas módulos compartidos
    MatDividerModule, // Exporta si estás usando un módulo compartido
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatMenuModule
  ]
})
export class AdminModule { }
