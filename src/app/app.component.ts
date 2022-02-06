import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reloadly2';
  private isDark: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer2: Renderer2){}

  ngOnInit(): void {
      this.renderer2.setAttribute(this.document.body, 'class', 'theme-light')
  }

  @HostBinding('class')
  get themeMode(){
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

  switchMode(isDarkMode:boolean){
    this.isDark = isDarkMode;
    const hostClass = isDarkMode ? 'theme-dark' : 'theme-light';
    this.renderer2.setAttribute(this.document.body, 'class', hostClass);
  }
}
