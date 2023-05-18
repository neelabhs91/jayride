import { Component } from '@angular/core';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
})
export class ListingsComponent {
 passengers: string[] = ['passenger1', 'passenger2', 'passenger3'];
}
