import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.css'],
})
export class TopTracksComponent {
  isLoading: boolean = false;
  topTracks: any[] = [];
  listasReproduccion: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.spotifyService.obtenerTopTracks().subscribe((topTracks) => {
      this.topTracks = topTracks.items;
    });
    this.spotifyService
      .obtenerListasReproduccion()
      .subscribe((playlists) => (this.listasReproduccion = playlists.items));
  }
}
