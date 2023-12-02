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
}
