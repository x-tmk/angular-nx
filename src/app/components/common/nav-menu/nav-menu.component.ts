import { Component } from '@angular/core';
import { NgForOf, UpperCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    NgForOf,
    UpperCasePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  modules = ['search', 'booking', 'change', 'checkin', 'profile'];
}
