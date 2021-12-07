import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { AppComponent } from './app.component';
import { AppService } from './services/app.service';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [AppService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
