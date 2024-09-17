import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ansiedad',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './ansiedad.component.html',
  styleUrl: './ansiedad.component.css'
})
export class AnsiedadComponent {

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
