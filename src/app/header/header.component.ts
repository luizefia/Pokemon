import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  urlLogo: string = 'https://fontmeme.com/images/Pokemon-Logo.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
