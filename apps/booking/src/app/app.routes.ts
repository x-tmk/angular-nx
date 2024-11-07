import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'booking',
    loadChildren: () =>
      import('./components/booking.module').then((m) => m.BookingModule),
  },
];
