import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeRoutingModule } from './change-routing.module';
import { ChangeComponent } from './change.component';


@NgModule({
  declarations: [
    ChangeComponent
  ],
  imports: [
    CommonModule,
    ChangeRoutingModule
  ]
})
export class ChangeModule { }
