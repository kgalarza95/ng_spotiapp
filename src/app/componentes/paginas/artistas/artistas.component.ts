import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyUserProfile } from 'src/app/modelo/SpotifyPerfilUsuario';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent {
  isLoading: boolean = false;
  spotifyUserProfile: SpotifyUserProfile = new SpotifyUserProfile();
  nombreArtista = '';
  artistas: any[] = [];
  artistaSeleccionado: any = null;
  constructor(private route: ActivatedRoute,
    private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.buscarArtista();
  }

  buscarArtista() {
    this.spotifyService.buscarArtistas(this.nombreArtista).subscribe((data) => {
      this.artistas = data.artists.items;
    });
  }

  mostrarDetalles(artista: any) {
    this.artistaSeleccionado = artista;
  }

  volverAtras() {
    this.artistaSeleccionado = null;
  }
}
