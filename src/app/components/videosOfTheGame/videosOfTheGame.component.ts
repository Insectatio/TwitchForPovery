import { Component, OnInit } from '@angular/core';
import { VideosOfTheGame } from 'src/app/models/videosOfTheGame';
import { HomeService } from 'src/app/services/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videosofthegame',
  templateUrl: './videosOfTheGame.component.html',
  styleUrls: ['./videosOfTheGame.component.css']
})
export class VideosOfTheGameComponent implements OnInit {

  private gamevideos: VideosOfTheGame;
  private id: Number;

  constructor(private home: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(gvid => {
      this.id = gvid.id;
    });
    this.home.getVideosOfTheGame(this.id).subscribe(data => {
      this.gamevideos = data;
      this.gamevideos.data.forEach(element => {
        element.thumbnail_url = element.thumbnail_url.replace('{width}', '320');
        element.thumbnail_url = element.thumbnail_url.replace('{height}', '180');
        if (element.thumbnail_url.search('%')) {
          element.thumbnail_url = element.thumbnail_url.replace(/%/g, '');
        }
      });
    });
  }
}
