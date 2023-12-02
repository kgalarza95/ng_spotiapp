import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MainComponent } from './componentes/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './componentes/comun/header/header.component';
import { FooterComponent } from './componentes/comun/footer/footer.component';
import { BarranavComponent } from './componentes/comun/barranav/barranav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PreloadingComponent } from './componentes/comun/preloading/preloading.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    BarranavComponent,
    PreloadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
