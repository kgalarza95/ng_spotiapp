import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyUserProfile } from 'src/app/modelo/SpotifyPerfilUsuario';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  spotifyUserProfile: SpotifyUserProfile = new SpotifyUserProfile();
  nombreArtista = '';
  artistas: any[] = [];

  constructor(private route: ActivatedRoute,
    private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.buscarArtistas();
  }

  buscarArtistas() {
    // this.spotifyService.buscarArtistas(this.nombreArtista)
    this.spotifyService.buscarArtistas("Arcangel")
      .subscribe(data => {
        this.artistas = data.artists.items;
        console.table(data);
      });
  }
}
