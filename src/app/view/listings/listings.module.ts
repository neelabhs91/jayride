import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingsRoutingModule } from './listings-routing.module';
import { ListingsDetailsComponent } from './listings-details/listings-details.component';
import { ListingsComponent } from './listings.component';

@NgModule({
  declarations: [ListingsDetailsComponent, ListingsComponent],
  imports: [CommonModule, ListingsRoutingModule],
})
export class ListingDetailsModule {}
