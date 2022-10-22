import { appRoutingModule } from './app-routing.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { ShareComponent } from './share/share.component';
import { FaceShareListComponent } from './face-share-list/face-share-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { SingleShareComponent } from './single-share/single-share.component';
import { AmiComponent } from './ami/ami.component';



@NgModule({
  declarations: [
    AppComponent,
    ShareComponent,
    FaceShareListComponent,
    HeaderComponent,
    LandingPageComponentComponent,
    SingleShareComponent,
    AmiComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
}
}
