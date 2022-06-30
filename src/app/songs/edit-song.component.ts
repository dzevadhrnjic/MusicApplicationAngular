import { Component, EventEmitter, Output } from "@angular/core";
import { CreateSong } from "../services/model/create.song";
import { EditSong } from "../services/model/edit.song";
import { Song } from "../services/model/song";
import { SongService } from "../services/song.service";
import { SongListComponent } from "./song-list.component";

@Component({
    selector: 'edit-song',
    templateUrl: './edit-song.component.html'
})
export class EditSongComponent {

id: number = 0;
songName: string = '';
songArtist: string = '';
songUrl: string = '';
songRating: number = 0;

constructor(private songService: SongService){}

ngOnInit(){
    this.songService.updatedSong.subscribe(x => {
        this.id = x.id
        this.songName = x.songname
        this.songArtist = x.artistname
        this.songUrl = x.songurl
        this.songRating = x.songrating 
    })
}

onEdit(){
    var editSong = new EditSong(this.songName, this.songArtist, this.songUrl, this.songRating)
    this.songService.editSong(this.id, editSong)
    this.id = 0
}

}

