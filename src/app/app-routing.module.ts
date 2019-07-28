import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyAccountComponent} from './components/my-account/my-account.component';
import {MyProfileComponent} from './components/my-profile/my-profile.component';
import {EditProfileComponent} from './components/my-profile/edit-profile/edit-profile.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './components/product/product.component';
import {HomeComponent} from './components/home/home.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {CheckOutComponent} from './components/check-out/check-out.component';
import {ShippingAddressComponent} from './components/shipping-address/shipping-address.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/home',
    pathMatch:'full'
  },
  {path:'home',component:HomeComponent},
  {path:'myAccount',component:MyAccountComponent},
  {path:'myProfile',component:MyProfileComponent},
  {path:'editProfile/:id',component:EditProfileComponent},

  {
    path:'productList',component:ProductListComponent
  },{
  path:'productDetail/:id',component:ProductComponent
  },{
    path:'viewShoppingCart',component:ShoppingCartComponent
  },
  {
   path:'checkOut',component:CheckOutComponent
  },
  {
    path:'shippingAddress',component:ShippingAddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
