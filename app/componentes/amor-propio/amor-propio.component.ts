import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amor-propio',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './amor-propio.component.html',
  styleUrl: './amor-propio.component.css'
})
export class AmorPropioComponent {
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
