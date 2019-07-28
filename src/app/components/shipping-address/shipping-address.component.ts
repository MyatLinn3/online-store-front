import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {

  @Input() isShippingAddress:EventEmitter<boolean>;
  constructor() { }

  ngOnInit() {
  }

}
