import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../models/product-model';
import { CartService } from '../../services/cart.service';
import { ShippingAddress } from '../../models/shipping-address-model';
import { ShippingService } from '../../services/shipping.service';
import { OrderDto } from '../../models/order-model-dto';
import { CheckOutService } from '../../services/check-out.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CheckOutComponent implements OnInit {


  products: Product[] = [];
  totalPrice: number = 0;
  isAddress: boolean;
  shippingAddress: ShippingAddress = new ShippingAddress();
  cardNumber: string = "0075-2010-1008-7702";
  orderDTO: OrderDto = new OrderDto();


  constructor(private cartService: CartService,
    private shippingService: ShippingService,
    private checkOutService: CheckOutService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.products = this.cartService.getCarts();
    this.products.forEach(value => {
      this.totalPrice += value.price
    });
  }

  onDone(shippingAddress) {
    this.shippingAddress = shippingAddress
    this.isAddress = true;
  }

  edit() {
    this.shippingAddress = this.shippingService.getShipping();
    this.isAddress = false
  }

  onConfirm() {
    this.orderDTO.products = this.products;
    this.orderDTO.shippingAddress = this.shippingAddress;
    this.openTransferDialog();
  }


  openDialog() {
    let dialog = this.dialog.open(DialogResultExampleDialog);
    dialog.afterClosed().subscribe(result => {
      if (result == 'OK' || result == 'No') {
        console.log(this.orderDTO);
        this.checkOutService.createOrder(this.orderDTO).subscribe(res => console.log(res));
      } else {
        this.router.navigate(['/productList'])
      }
    });


  }

  openTransferDialog() {
    let dialog = this.dialog.open(TransferDialog);
    dialog.afterClosed().subscribe(
      result => {
        if (result == 'OK') {
          this.openDialog();
        }
      }
    )
  }



}


@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogResultExampleDialog>, private cartService: CartService) { }

  onCliOk() {
    this.cartService.clearCart();
    this.dialogRef.close('OK');
  }

  onCliNo() {
    this.cartService.clearCart();
    this.dialogRef.close('No');
  }
}



@Component({
  selector: 'transfer-dialog-result',
  templateUrl: './transfer-dialog-result.html'
})
export class TransferDialog {

  products: Product[] = [];
  totalPrice: number = 0;



  constructor(public dialogRef: MatDialogRef<TransferDialog>,
    private cartService: CartService) {

    this.products = this.cartService.getCarts();
    this.products.forEach(value => {
      this.totalPrice += value.price
    });
  }

}
