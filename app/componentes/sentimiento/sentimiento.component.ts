import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sentimiento',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './sentimiento.component.html',
  styleUrl: './sentimiento.component.css'
})
export class SentimientoComponent {
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
