import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Student } from './student/student';
import { Teacher } from './teacher/teacher';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Addstudent } from './addstudent/addstudent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateStudent } from './update-student/update-student';
import { Location } from './location/location';
import { Addlocation } from './location/addlocation/addlocation';
import { UpdateLocation } from './location/update-location/update-location';
import { ViewAllLocation } from './location/view-all-location/view-all-location';
import { Administration } from './administration/administration';

@NgModule({
  declarations: [
    App,
    Teacher,
    ViewAllStudent,
    Addstudent,
    UpdateStudent,
    Location,
    Addlocation,
    UpdateLocation,
    ViewAllLocation,
    Administration
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
