import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController, NavParams } from '@ionic/angular';
import { MovieListService } from 'src/app/services/movie-list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  listMovie: any;
  url: any;
  isHiddenTicketTime: boolean = true;
  isDisableTicketButton: boolean = false;

  constructor(
    public db: MovieListService,
    private navCtrl: NavController,
    private sanitizer: DomSanitizer
  ) { }

  test3(){
    alert("danh sach");
  }

  ngOnInit() {
    this.listMovie = this.db.getMovieDetail();
    this.url = this.sanitizer.bypassSecurityTrustUrl(this.listMovie.videoTrailer);
    if(!this.listMovie) {
      this.navCtrl.navigateBack('movie-list');
    }
  }

  showTicketTime() {
    this.isHiddenTicketTime = false;
    this.isDisableTicketButton = true;
  }

  navigate(page){
    switch(page){
      case 'movie':
        this.navCtrl.navigateForward('movie-list');
        break;
      case 'home':
        this.navCtrl.navigateForward('home');
        break;
      default:
        break;
    }
  }

  isPicked(time: string){
    let now = new Date();
    let minute = Number(time.split(':')[0]);
    let second = Number(time.split(':')[1]);
    return (minute*60 + second) < (now.getHours()*60 + now.getMinutes());
  }
}
