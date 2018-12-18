import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TopGames } from '../models/topGames';
import { GameDetails } from '../models/gameDetails';
import { environment } from 'src/environments/environment';
import { Videos } from '../models/videos';
import { VideosOfTheGame } from '../models/videosOfTheGame';
import { Clips } from '../models/clips';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getStreamProfile(user_id: Number) {
    return this.http.get<User>('https://api.twitch.tv/helix/users?id=' + user_id, {
      headers: new HttpHeaders(
        { 'Client-ID': environment.clientid }
      )
    });
  }

  getClips(id: Number) {
    return this.http.get<Clips>('https://api.twitch.tv/helix/videos?id=' + id, {
      headers: new HttpHeaders(
        { 'Client-ID': environment.clientid }
      )
    });
  }

  getUser(id: Number) {
    return this.http.get<User>(`https://api.twitch.tv/helix/users?id=` + id, {
      headers: new HttpHeaders(
        { 'Client-ID': environment.clientid }
      )
    });
  }

  getVideosOfTheGame(id: Number) {
    return this.http.get<VideosOfTheGame>('https://api.twitch.tv/helix/videos?game_id=' + id, {
      headers: new HttpHeaders(
        { 'Client-ID': environment.clientid }
      )
    });
  }

  getGameVideos(id: Number) {
    return this.http.get<Videos>('https://api.twitch.tv/helix/streams?game_id=' + id, {
      headers: new HttpHeaders(
        { 'Client-ID': environment.clientid }
      )
    });
  }

  getGameDetails(id: Number) {
    return this.http.get<GameDetails>('https://api.twitch.tv/helix/games/?id=' + id, {
      headers: new HttpHeaders(
        { 'Client-ID': environment.clientid }
      )
    });
  }

  getTopGames() {
    return this.http.get<TopGames>(`https://api.twitch.tv/helix/games/top`, {
      headers: new HttpHeaders(
        { 'Client-ID': environment.clientid }
      )
    });
  }

}
