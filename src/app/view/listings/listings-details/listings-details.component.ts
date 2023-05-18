import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ListingsService } from '../../../services/listings.service';
import { Listing, TravelData } from '../../../interface/listings';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listings-details',
  templateUrl: './listings-details.component.html',
  styleUrls: ['./listings-details.component.css'],
})
export class ListingsDetailsComponent implements OnInit, OnDestroy {
  @Input() person!: string;
  listings!: Listing[];
  isLoading: boolean = true;
  averagePrice: number = 0;
  private listings$!: Subscription;

  constructor(private readonly listingsService: ListingsService) {}

  ngOnInit(): void {
    this.isLoading = true;

    // assuming that listings are available
    this.listings$ = this.listingsService
      .getListings()
      .subscribe((resp: TravelData | undefined) => {
        if (resp?.listings) {
          const sortedListings = [...resp.listings].sort(
            (a, b) => a.pricePerPassenger - b.pricePerPassenger
          );
          this.listings = sortedListings;
          this.averagePrice =
            sortedListings.reduce(
              (sum, price) => sum + price.pricePerPassenger,
              0
            ) / sortedListings.length;

          this.isLoading = false;
        } else {
          throw new Error('Oops.... some internal error');
        }
      });
  }
  ngOnDestroy(): void {
    // though there is no need to unsubscribe, since it will emit only once.
    this.listings$.unsubscribe();
  }
}
