import { Component,Input, OnInit } from '@angular/core';
import { Anime } from '../Anime';

@Component({
  selector: 'app-Anime-detail',
  templateUrl: './Anime-detail.component.html',
  styleUrls: ['./Anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  @Input()animeDetail!: Anime;
  constructor() { }

  ngOnInit() {
  }

}
