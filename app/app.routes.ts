import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AgobioComponent } from './componentes/agobio/agobio.component';
import { AmorPropioComponent } from './componentes/amor-propio/amor-propio.component';
import { AnsiedadComponent } from './componentes/ansiedad/ansiedad.component';
import { SentimientoComponent } from './componentes/sentimiento/sentimiento.component';

export const routes: Routes = [{
    path: '',
component:InicioComponent
},
{
    path:'agobio',
    component:AgobioComponent
},
{
    path:'amor/propio',
    component:AmorPropioComponent
},
{
    path:'ansiedad',
    component:AnsiedadComponent
},
{
    path:'sentimiento',
    component:SentimientoComponent
}
];

