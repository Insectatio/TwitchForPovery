import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameDetailComponent } from './components/gameDetail/gameDetail.component';
import { GameVideosComponent } from './components/gameVideos/gameVideos.component';
import { VideosOfTheGameComponent } from './components/videosOfTheGame/videosOfTheGame.component';
import { UserComponent } from './components/user/user.component';
import { ClipsComponent } from './components/clips/clips.component';
import { LiveStreamsComponent } from './components/liveStreams/liveStreams.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gamedetails/:id', component: GameDetailComponent },
  { path: 'gamevideos/:id', component: GameVideosComponent },
  { path: 'videosofthegame/:id', component: VideosOfTheGameComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'clips/:id', component: ClipsComponent },
  { path: 'live/:id', component: LiveStreamsComponent },
  { path: '**', component: HomeComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
