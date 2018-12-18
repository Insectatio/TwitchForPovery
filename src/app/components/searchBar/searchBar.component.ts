import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { ActivatedRoute } from '@angular/router';
import { TopGames } from 'src/app/models/topGames';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.css']
})
export class SearchBarComponent implements OnInit {



  searchbar: TopGames;

  constructor(private home: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
