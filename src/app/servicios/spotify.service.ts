import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private API_URL: string = "https://accounts.spotify.com";
  private CLIENT_ID: string = "ddc71be5acbb4c42b0acadde240af1f9";
  private CLIENT_SECRET: string = "4372a912f3de4cb3bfe3a88934361589";
  private readonly redirectUri: string = 'http://localhost:4200/premain';
  private apiUrl = 'https://api.spotify.com/v1';


  constructor(private http: HttpClient) { }

  getAccessToken(code: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET),
    });

    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', this.redirectUri);

    return this.http.post<any>('https://accounts.spotify.com/api/token', body.toString(), { headers });
  }

  getProfile(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    //return this.http.get<any>(`${this.API_URL}/v1/me`, { headers });
    return this.http.get<any>(`https://api.spotify.com/v1/me`, { headers });
  }


  buscarArtistas(nombreArtista: string): Observable<any> {
    const url = 'https://api.spotify.com/v1/search';
    const token = localStorage.getItem("access_token");
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    const params = new HttpParams()
      .set('q', nombreArtista)
      .set('type', 'artist');

    return this.http.get<any>(url, { headers, params });
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');

    if (!token) {
      throw new Error('Token de acceso no encontrado en el almacenamiento local.');
    }

    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
  }

  obtenerTopTracks(): Observable<any> {
    const apiUrl = 'https://api.spotify.com/v1/me';
    //const url = `${apiUrl}/top-tracks`;
    //const url = `${apiUrl}/top/tracks?time_range=long_term&limit=10`;
    const url = `${apiUrl}/top/tracks`;
    const headers = this.getHeaders();

    return this.http.get<any>(url, { headers });
  }


  obtenerListasReproduccion(): Observable<any> {
    const url = `${this.apiUrl}/me/playlists`;

    return this.http.get<any>(url, { headers: this.getHeaders() });
  }

  obtenerArtistasDestacados(): Observable<any> {
    const url = `${this.apiUrl}/me/top/artists`;

    return this.http.get<any>(url, { headers: this.getHeaders() });
  }

  obtenerAlbumesPopulares(): Observable<any> {
    const url = `${this.apiUrl}/me/top/artists`;

    return this.http.get<any>(url, { headers: this.getHeaders() });
  }

  buscarMusica(termino: string): Observable<any> {
    const url = `${this.apiUrl}/search`;
    const headers = this.getHeaders();

    const params = new HttpParams()
      .set('q', termino)
      .set('type', 'track');

    return this.http.get<any>(url, { headers, params });
  }

  play(trackUri: string): Observable<any> {
    const url = `${this.apiUrl}/me/player/play`;
    const body = {
      uris: [trackUri],
    };
    const headers = this.getHeaders();

    return this.http.put(url, body, { headers });
  }

  obtenerPerfilUsuario(): Observable<any> {
    const url = `${this.apiUrl}/me`;
    const headers = this.getHeaders();

    return this.http.get<any>(url, { headers });
  }

  obtenerListasReproduccionPublicas(): Observable<any> {
    const url = `${this.apiUrl}/me/playlists`;
    const headers = this.getHeaders();

    return this.http.get<any>(url, { headers });
  }
}
