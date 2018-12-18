import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TopGames } from 'src/app/models/topGames';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'twitchgames';

  // @Input() HomeComponent: TopGames[];

  // @Output() filteritems: EventEmitter<TopGames>;
}
