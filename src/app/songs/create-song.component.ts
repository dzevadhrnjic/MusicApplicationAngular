import { Component, EventEmitter, Output } from "@angular/core";
import { CreateSong } from "../services/model/create.song";
import { EditSong } from "../services/model/edit.song";
import { Song } from "../services/model/song";
import { SongService } from "../services/song.service";

@Component({
    selector: 'create-song',
    templateUrl: './create-song.component.html'
})
export class CreateSongComponent {

songName: string = '';
songArtist: string = '';
songUrl: string = '';
songRating: number = 0;

showForm: boolean = false;

constructor(private songService: SongService){}

onSaveButtonClick(){
   var createSong = new CreateSong(this.songName, this.songArtist, this.songUrl, this.songRating)
   this.songService.createSong(createSong)
   this.showForm = false;
}

ngOnInit(){
    this.songService.createSongSubject.subscribe(x => {
        this.showForm = x; 
    })
}

}