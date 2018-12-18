import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeService } from './services/home.service';
import { AppRoutes } from './app.routing';
import { GameDetailComponent } from './components/gameDetail/gameDetail.component';
import { HeaderComponent } from './components/header/header.component';
import { GameVideosComponent } from './components/gameVideos/gameVideos.component';
import { VideosOfTheGameComponent } from './components/videosOfTheGame/videosOfTheGame.component';
import { UserComponent } from './components/user/user.component';
import { ClipsComponent } from './components/clips/clips.component';
import { SearchBarComponent } from './components/searchBar/searchBar.component';
import { ReactiveFormsModule} from '@angular/forms';
import { LiveStreamsComponent } from './components/liveStreams/liveStreams.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameDetailComponent,
    HeaderComponent,
    GameVideosComponent,
    VideosOfTheGameComponent,
    UserComponent,
    ClipsComponent,
    SearchBarComponent,
    LiveStreamsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes,
    ReactiveFormsModule
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
