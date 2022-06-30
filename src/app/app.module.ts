import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongListComponent } from './songs/song-list.component';
import { HttpClientModule} from '@angular/common/http';
import { SongService } from './services/song.service';
import { CreateSongComponent } from './songs/create-song.component';
import { FormsModule } from '@angular/forms';
import { SongDetailsComponent } from './songs/song-details.component';
import { EditSongComponent } from './songs/edit-song.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    CreateSongComponent,
    SongDetailsComponent,
    EditSongComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
