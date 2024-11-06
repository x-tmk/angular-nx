import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeComponent } from './change.component';

const routes: Routes = [
  {
    path: '',
    component: ChangeComponent,
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./confirmation/confirmation.module').then(m => m.ConfirmationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeRoutingModule {
}
