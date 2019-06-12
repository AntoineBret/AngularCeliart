import {Component, OnInit} from '@angular/core';
import {environment} from '@env/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version = environment.version;

  // navItems = [
  //   { link: '/dashboard/home', title: 'Home' },
  //   { link: '/about', title: 'About' },
  //   { link: '/contact', title: 'Contact' }
  // ];

  constructor() { }

  ngOnInit() {

  }


}
