import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders:any;

  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(){
    this.getPlaceOrders();
  }

  getPlaceOrders(){
    this.adminService.getPlacedOrders().subscribe(res =>{
      this.orders = res;
    })
  }

  changeOrderStatus(orderId:number, status:string){
    this.adminService.changeOrderStatus(orderId, status).subscribe(res =>{
      if(res.id != null){
        this.snackBar.open("Order Status changed successfully!", "Close",{duration: 5000});
        this.getPlaceOrders();
      }else{
        this.snackBar.open("Something went wrong", "Close", { duration: 5000});
      }
    })
  }
}
