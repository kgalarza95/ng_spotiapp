import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getLogin(usuario: string, contrasenia: string) {
    if (usuario === "demo" && contrasenia === "demo") {
      return true;
    } else {
      return false;
    }
  }
}
