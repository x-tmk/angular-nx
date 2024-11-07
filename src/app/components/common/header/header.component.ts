import { Component } from '@angular/core';
import { NgForOf, UpperCasePipe } from '@angular/common';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    UpperCasePipe,
    NavMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
