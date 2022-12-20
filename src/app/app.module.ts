import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {CanActiveProfessor} from "./shared/auth.guard"
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

  ],
  providers: [CanActiveProfessor],
  bootstrap: [AppComponent]
})
export class AppModule { }
