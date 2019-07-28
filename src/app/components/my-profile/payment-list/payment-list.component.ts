import { Component, OnInit } from '@angular/core';
import {UserPayment} from '../../../models/user-payment';
import {UserBilling} from '../../../models/user-billing';
import {PaymentService} from '../../../services/payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  private userPayment: UserPayment;
  private selectedBillingTab: number=0;
  private userBilling: UserBilling;

  constructor(private paymentService:PaymentService) { }

  ngOnInit() {
  }


  onUpdatePayment (payment: UserPayment) {
    this.userPayment = payment;
    this.userBilling = payment.userBilling;
    this.selectedBillingTab = 1;
  }

  onRemovePayment(id:number) {
    this.paymentService.removePayment(id).subscribe(
      res => {

      },
      error => {
        console.log(error.text());
      }
    );
  }

}
