import { Component, EventEmitter, Output } from "@angular/core";
import { Song } from "../services/model/song";
import { SongService } from "../services/song.service";

@Component({
    selector: 'song-details',
    templateUrl: './song-details.component.html'
})
export class SongDetailsComponent {

song: Song | null = null;

constructor(private songService: SongService){}

ngOnInit(){
    this.songService.clickedSong.subscribe(x => {
        this.song = x
    })
}

}
