import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user: User;
  private id: Number;

  constructor(private home: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(use => {
      this.id = use.id;
    });
    this.home.getUser(this.id).subscribe(data => {
      this.user = data;
    });
  }
}
