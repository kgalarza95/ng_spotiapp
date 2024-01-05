import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { PreloadingComponent } from './componentes/comun/preloading/preloading.component';
import { PrincipalComponent } from './componentes/paginas/principal/principal.component';
import { ArtistasComponent } from './componentes/paginas/artistas/artistas.component';
import { TopTracksComponent } from './componentes/paginas/top-tracks/top-tracks.component';
import { PerfilComponent } from './componentes/paginas/perfil/perfil.component';


const routes: Routes = [
  //princiales master
  { path: 'login', component: LoginComponent },
  { path: 'premain', component: PreloadingComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //{ path: 'main', component: MainComponent },//canActivate: [AuthGuard]

  /* //navbar dentro del main
  { path: 'home', component: PrincipalComponent },
  { path: 'artistas', component: ArtistasComponent },
  { path: 'top', component: PrincipalComponent },
  { path: 'faq', component: PrincipalComponent }, */

  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'home', component: PrincipalComponent },
      { path: 'artistas', component: ArtistasComponent },
      { path: 'top', component: TopTracksComponent },
      { path: 'perfil', component: PerfilComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
