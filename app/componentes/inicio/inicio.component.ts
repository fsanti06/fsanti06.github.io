import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgobioComponent } from '../agobio/agobio.component';
import { AnsiedadComponent } from '../ansiedad/ansiedad.component';
import { AmorPropioComponent } from '../amor-propio/amor-propio.component';
import { SentimientoComponent } from '../sentimiento/sentimiento.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [AgobioComponent,AnsiedadComponent,AmorPropioComponent,SentimientoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

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
