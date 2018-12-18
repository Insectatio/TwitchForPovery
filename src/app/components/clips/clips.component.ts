import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { Clips } from 'src/app/models/clips';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.css']
})
export class ClipsComponent implements OnInit {

  private clips: Clips;
  private id: Number;

  constructor(private home: HomeService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(cli => {
      this.id = cli.id;
    });
    this.home.getClips(this.id).subscribe(data => {
      this.clips = data;
      console.log(data);
    });
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
