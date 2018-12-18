import { Component, OnInit } from '@angular/core';
import { Videos } from 'src/app/models/videos';
import { HomeService } from 'src/app/services/home.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-gamevideos',
  templateUrl: './gameVideos.component.html',
  styleUrls: ['./gameVideos.component.css']
})
export class GameVideosComponent implements OnInit {

  private video: Videos;
  private id: Number;

  constructor(private home: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(vid => {
      this.id = vid.id;
    });
    this.home.getGameVideos(this.id).subscribe(data => {
      this.video = data;
      console.log(this.video.data[1].thumbnail_url);
      this.video.data.forEach(element => {
        element.thumbnail_url = element.thumbnail_url.replace('{width}', '320');
        element.thumbnail_url = element.thumbnail_url.replace('{height}', '180');
      });
    });
  }
}
