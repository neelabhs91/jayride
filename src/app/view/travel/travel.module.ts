import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelComponent } from './travel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TravelRoutingModule } from './travel-routing.module';

@NgModule({
  declarations: [TravelComponent],
  imports: [CommonModule, ReactiveFormsModule, TravelRoutingModule],
  exports: [TravelComponent],
})
export class TravelModule {}
