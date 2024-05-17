import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './Anime-list/Anime-list.component';
import { AnimeDetailComponent } from './Anime-detail/Anime-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AnimeListComponent],
  declarations: [AnimeListComponent, AnimeDetailComponent]
})
export class AnimesModule { }
