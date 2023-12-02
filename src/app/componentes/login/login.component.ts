import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { SpotifyService } from 'src/app/servicios/spotify.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  value: string | undefined;
  usuario: string = "";
  pass: string = "";
  alerta: boolean = false;

  private CLIENT_ID: string = "ddc71be5acbb4c42b0acadde240af1f9";
  private redirectUri = 'http://localhost:4200/premain';
  //private redirectUri = 'http://localhost:4200/main';
  private state = 'kLsW7x9E2yZ4vR1p';
  private scope = 'user-read-private user-read-email';

  constructor(private router: Router,
    private loginService: LoginService) { }

  onLogin() {
    //const clientId = this.spotifyService.getClienteId();

    if (this.loginService.getLogin(this.usuario, this.pass)) {
      this.alerta = false;
      const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${this.CLIENT_ID}&scope=${this.scope}&redirect_uri=${this.redirectUri}&state=${this.state}`;
      window.location.href = spotifyAuthUrl;
      //this.router.navigate(['/main']);
    } else {
      this.alerta = true;
    }
  }
}
