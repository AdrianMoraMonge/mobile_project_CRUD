import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateProductPageRoutingModule } from './update-product-routing.module';

import { UpdateProductPage } from './update-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateProductPageRoutingModule
  ],
  declarations: [UpdateProductPage]
})
export class UpdateProductPageModule {}
