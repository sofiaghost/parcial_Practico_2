import { Component, OnInit } from '@angular/core';
import { Anime } from '../Anime';
import { AnimeService } from '../Anime.service';

@Component({
  selector: 'app-Anime-list',
  templateUrl: './Anime-list.component.html',
  styleUrls: ['./Anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedAnime!: Anime;
  selected: Boolean = false;
animes: Array<Anime> = []
  constructor(private animeService: AnimeService) { }

  onSelected(anime:Anime):void{
    this.selected=true;
    this.selectedAnime= anime;
  }
  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes)=>{this.animes=animes;

    });
  }
  ngOnInit() {
    this.getAnimes();
  }

}
