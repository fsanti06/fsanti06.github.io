import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agobio',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './agobio.component.html',
  styleUrl: './agobio.component.css'
})
export class AgobioComponent {
  constructor(private router: Router) {}

  redirectToAgobio() {
    this.router.navigate(['/agobio']);
  }
  redirigirAAnsiedad() {
    this.router.navigate(['/ansiedad']);
  }
  redirigirAAmorPropio() {
    this.router.navigate(['/amor/propio']);
  }
  redirigirASentimiento() {
    this.router.navigate(['/sentimiento']);
  }
}
