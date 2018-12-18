import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { TopGames } from 'src/app/models/topGames';
import { Datum } from 'src/app/models/topGames';
import { FormGroup, FormBuilder } from '@angular/forms';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @Input('parentData') public name;

  private topgames: TopGames;
  private filteredItems: Datum[] = [];
  private search = '';
  searchform: FormGroup;
  constructor(private home: HomeService, private fb: FormBuilder) {
    this.searchform = this.fb.group ({
      searchinput: ''
    });
   }

  ngOnInit() {
      this.home.getTopGames().subscribe(data => {
        this.topgames = data;
        this.filteritems();
      console.log(this.topgames.data[1].box_art_url);
      this.topgames.data.forEach(element => {
        element.box_art_url = element.box_art_url.replace('{width}', '300');
        element.box_art_url = element.box_art_url.replace('{height}', '350');
      });
    });
  }

  filteritems() {
    this.filteredItems = [];
    this.topgames.data.forEach(value => {
      if (value.name.toLowerCase().startsWith(this.search.toLowerCase())) {
        this.filteredItems.push(value);
      }
    });
  }

  applyFilter() {
    this.search = this.searchform.value.searchinput;
    this.filteritems();
  }
}
