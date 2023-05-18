import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'travel',
    loadChildren: () =>
      import('./view/travel/travel.module').then((m) => m.TravelModule),
  },
  {
    path: 'listings',
    loadChildren: () =>
      import('./view/listings/listings.module').then(
        (m) => m.ListingDetailsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./view/travel/travel.module').then((m) => m.TravelModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
