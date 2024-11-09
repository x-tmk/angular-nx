import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import('./components/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./components/booking/booking.module').then(
        (m) => m.BookingModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./components/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'change',
    loadChildren: () =>
      import('./components/change/change.module').then((m) => m.ChangeModule),
  },
  {
    path: 'checkin',
    loadChildren: () =>
      import('./components/checkin/checkin.module').then(
        (m) => m.CheckinModule
      ),
  },
];
