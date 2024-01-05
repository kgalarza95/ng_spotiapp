import { Component } from '@angular/core';
import { map } from 'rxjs';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  isLoading: boolean = false;
  usuario: any;
  listasReproduccion: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.obtenerInformacionUsuario();
  }

  obtenerInformacionUsuarioObsoleto() {
    this.spotifyService.obtenerPerfilUsuario().subscribe(
      (data) => {
        this.usuario = data;
        this.obtenerListasReproduccionPublicas();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerInformacionUsuario() {
    this.isLoading = true;
    this.spotifyService
      .obtenerPerfilUsuario()
      .pipe(
        map((data) => {
          data.product = 'libre';
          return data;
        })
      )
      .subscribe(
        (usuarioTransformado) => {
          this.usuario = usuarioTransformado;
          this.obtenerListasReproduccionPublicas();
          this.isLoading = false;
        },
        (error) => {
          console.error(error);
          this.isLoading = false;
        }
      );
  }
  obtenerListasReproduccionPublicas() {
    this.spotifyService.obtenerListasReproduccionPublicas().subscribe(
      (data) => {
        this.listasReproduccion = data.items;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
