import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SpotifyService } from 'src/app/servicios/spotify.service';
declare const Spotify: any;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  isLoading: boolean = false;
  listasReproduccion: any[] = [];
  artistasDestacados: any[] = [];
  albumesPopulares: any[] = [];
  resultados: any[] = [];
  terminoBusqueda = 'Arcangel';
  songs: any[] = [];

  constructor(private spotifyService_: SpotifyService) {
  }

  ngOnInit() {
    this.spotifyService_.obtenerListasReproduccion().subscribe(playlists => this.listasReproduccion = playlists.items);
    this.spotifyService_.obtenerArtistasDestacados().subscribe(artists => this.artistasDestacados = artists.items);
    this.spotifyService_.obtenerAlbumesPopulares().subscribe(albums => this.albumesPopulares = albums.items);
    this.buscarMusica();
  }

  /*  buscarMusica(termino: string) {
     if (termino.trim() !== '') {
       this.spotifyService.buscarMusica(termino).subscribe(resultados => this.resultados = resultados.tracks.items);
     } else {
       this.resultados = [];
     }
   } */

  buscarMusica() {
    const termino = this.terminoBusqueda;


    if (termino !== '') {
      this.spotifyService_.buscarMusica(termino).subscribe(resultados => this.resultados = resultados.tracks.items);
    } else {
      this.resultados = [];
    }
  }

  reproducirCancion(cancion: any) {
    this.spotifyService_.play(cancion.uri).subscribe(
      (response) => console.log('Canción reproducida con éxito'),
      (error) => console.error(error)
    );
  }
}
