import { Component } from '@angular/core';
import { SpotifyUserProfile } from 'src/app/modelo/SpotifyPerfilUsuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  nomUsuario: string | undefined;
  correo: string | undefined;
  tipoCuenta: string | undefined;
  spotifyUserProfile: SpotifyUserProfile = new SpotifyUserProfile();
  constructor() { }

  ngOnInit(): void {
    console.log("llega al navbar");
    //let strPerfil = localStorage.getItem("spotifyUserProfile")
    //this.spotifyUserProfile = JSON.parse(strPerfil.t);

    const userProfileJSON = localStorage.getItem('spotifyUserProfile');

    // Convierte la cadena JSON de vuelta a un objeto
    const userProfile: SpotifyUserProfile | null = userProfileJSON ? JSON.parse(userProfileJSON) : null;

    this.nomUsuario = userProfile?.display_name;
    this.correo = userProfile?.email;
    this.tipoCuenta = userProfile?.product;
  }
}
