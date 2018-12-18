import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { GameDetails } from 'src/app/models/gameDetails';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './gameDetail.component.html',
  styleUrls: ['./gameDetail.component.css']
})
export class GameDetailComponent implements OnInit {

  private gamedetail: GameDetails;
  private id: Number;

  constructor(private home: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(det => {
      this.id = det.id;
    });
    this.home.getGameDetails(this.id).subscribe(data => {
      this.gamedetail = data;
      console.log(data);
      console.log(this.gamedetail);
      this.gamedetail.data.forEach(element => {
        element.box_art_url = element.box_art_url.replace('{width}', '350');
        element.box_art_url = element.box_art_url.replace('{height}', '450');
      });
    });
  }
}
