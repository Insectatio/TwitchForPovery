import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-livestreams',
  templateUrl: './liveStreams.component.html',
  styleUrls: ['./liveStreams.component.css']
})
export class LiveStreamsComponent implements OnInit {

  private login: string;
  private id: Number;

  constructor(private home: HomeService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(str => {
      this.id = str.id;
    });
    this.home.getStreamProfile(this.id).subscribe(data => {
      this.login = data.data[0].login;
      console.log(data);
    });
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
