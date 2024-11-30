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
import { CartComponent } from './components/cart/cart.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component'; // Importa MatDividerModule

import { MatTableModule } from '@angular/material/table'; // Importa MatTableModule
import { MatPaginatorModule } from '@angular/material/paginator'; // Para la paginación de tablas
import { MatSortModule } from '@angular/material/sort';
import { ViewOrderedProductsComponent } from './components/view-ordered-products/view-ordered-products.component'; // Para la funcionalidad de ordenamiento en tablas
import { ViewProductDetailComponent } from './components/view-product-detail/view-product-detail.component';
import { ReviewOrderedProductComponent } from './components/review-ordered-product/review-ordered-product.component';
import { ViewWishlistComponent } from './components/view-wishlist/view-wishlist.component';


@NgModule({
  declarations: [
    CustomerComponent,
    DashboardComponent,
    CartComponent,
    PlaceOrderComponent,
    MyOrdersComponent,
    ViewOrderedProductsComponent,
    ViewProductDetailComponent,
    ReviewOrderedProductComponent,
    ViewWishlistComponent
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class CustomerModule { }
