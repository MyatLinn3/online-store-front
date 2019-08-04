import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import {LoginService} from './services/login.service';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { EditProfileComponent } from './components/my-profile/edit-profile/edit-profile.component';
import { OrderListComponent } from './components/my-profile/order-list/order-list.component';
import { PaymentListComponent } from './components/my-profile/payment-list/payment-list.component';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {CheckOutComponent, DialogResultExampleDialog, TransferDialog} from './components/check-out/check-out.component';
import {ProductService} from './services/product.service';
import { HomeComponent } from './components/home/home.component';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { FooterComponent } from './components/footer/footer.component';
import {ShippingService} from './services/shipping.service';
import {NgxSpinnerModule} from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent,
    EditProfileComponent,
    OrderListComponent,
    PaymentListComponent,
    AddPaymentComponent,
    ProductListComponent,
    ProductComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    HomeComponent,
    ShippingAddressComponent,
    FooterComponent,
    DialogResultExampleDialog,
    TransferDialog

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgbModule,
    MatDialogModule,
    NgxSpinnerModule
  ],
  entryComponents:[
    DialogResultExampleDialog,
    TransferDialog
  ],
  providers: [LoginService,
              ProductService,
              UserService,
              ShippingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
