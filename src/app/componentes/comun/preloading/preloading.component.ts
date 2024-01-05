import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyUserProfile } from 'src/app/modelo/SpotifyPerfilUsuario';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-preloading',
  templateUrl: './preloading.component.html',
  styleUrls: ['./preloading.component.css'],
})
export class PreloadingComponent {
  isLoading: boolean = false;

  spotifyUserProfile: SpotifyUserProfile = new SpotifyUserProfile();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    console.log('preloading');
    // Obtener el código de la URL
    this.route.queryParams.subscribe((params) => {
      const code = params['code'];
      if (code) {
        console.log('Código obtenido:', code);
        this.spotifyService.getAccessToken(code).subscribe(
          (response) => {
            localStorage.clear();
            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('token_type', response.token_type);
            localStorage.setItem('expires_in', response.expires_in);
            localStorage.setItem('refresh_token', response.refresh_token);
            console.log('Respuesta del servidor:', response);
            this.spotifyService.getProfile(response.access_token).subscribe(
              (data) => {
                this.spotifyUserProfile = data;
                console.log(data);
                console.table(this.spotifyUserProfile);
                localStorage.setItem(
                  'spotifyUserProfile',
                  JSON.stringify(this.spotifyUserProfile)
                );
                this.router.navigate(['/main']);
              },
              (error) => {
                console.error('Error en la solicitud:', error);
              }
            );
            this.isLoading = false;
          },
          (error) => {
            console.error('Error en la solicitud:', error);
            this.isLoading = false;
          }
        );
      }
    });
  }
}
