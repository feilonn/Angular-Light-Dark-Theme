import { Etheme } from './../enums/Etheme.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon: string = Etheme.ICON_MOON;
  public currentTheme: string = Etheme.DARK;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme')
    if(theme) {
      this.icon = Etheme.ICON_SUN;
      this.currentTheme = Etheme.LIGHT;
    } else {
      this.icon = Etheme.ICON_MOON;
      this.currentTheme = Etheme.DARK;
    }
  }

}
