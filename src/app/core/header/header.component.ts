import { Component, OnInit } from '@angular/core';
import {environment} from '@env/environment';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  version = environment.version;

  navItems = [
    { link: '/dashboard/home', title: 'Home' },
    { link: '/about', title: 'About' },
    { link: '/contact', title: 'Contact' }
  ];

  constructor() { }

  ngOnInit() {

  }


}
