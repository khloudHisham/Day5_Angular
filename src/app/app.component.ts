import { NavbarComponent } from './navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab';

  // currentComponent = 'home';

  // switchToComponent(component: string) {
  //   this.currentComponent = component;
  // }
  
}
