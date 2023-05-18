import { Injectable } from '@angular/core';
import { TravelData } from '../interface/listings';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, switchMap, takeLast } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  constructor(private http: HttpClient) {}

  /* make sure only the latest value is emitted when the user clicks quickly,
     cancelling the previous value as observables are cancelled.
   */
  getListings(): Observable<TravelData | undefined> {
    return this.http.get<TravelData>('/api/QuoteRequest').pipe(
      switchMap((data: TravelData) => {
        return of(data).pipe(takeLast(1));
      }),

      // added catchError but since there is not a requirement for the assignment, hence ideally don't need it.
      catchError(() => {
        return of(undefined);
      })
    );
  }
}
