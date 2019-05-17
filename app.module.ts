import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightpanelComponent } from './rightpanel/rightpanel.component';
import { LeftComponent } from './left/left.component';
import { FootballComponent } from './football/football.component';
import { CricketComponent } from './cricket/cricket.component';
import {SpsortService} from './spsort.service';

@NgModule({
  declarations: [
    AppComponent,
    RightpanelComponent,
    LeftComponent,
    FootballComponent,
    CricketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpsortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
