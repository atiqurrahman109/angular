import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Aboutus } from './aboutus/aboutus';
import { Home } from './home/home';
import { Contactus } from './contactus/contactus';
import { Dropdown } from './dropdown/dropdown';

@NgModule({
  declarations: [
    App,
    Aboutus,
    Home,
    Contactus,
    Dropdown
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
