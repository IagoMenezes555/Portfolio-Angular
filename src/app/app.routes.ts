import { Routes } from '@angular/router';
import { HabilidadesPageComponent } from './pages/habilidades-page/habilidades-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio.component';
import { EducacaoPageComponent } from './pages/educacao-page/educacao-page.component';
import { ProjetosPageComponent } from './pages/projetos-page/projetos-page.component';
import { ContatoPageComponent } from './pages/contato-page/contato-page.component';

export const routes: Routes = [
    {path: '', component: InicioPageComponent},
    {path: 'habilidades', component: HabilidadesPageComponent},
    {path: 'educacao', component: EducacaoPageComponent},
    {path: 'projetos', component: ProjetosPageComponent},
    {path: 'contato', component: ContatoPageComponent}
];
