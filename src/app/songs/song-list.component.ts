import { Component } from "@angular/core";
import { EditSong } from "../services/model/edit.song";
import { Song } from "../services/model/song";
import { SongService } from "../services/song.service";

@Component({
    selector: 'song-list',
    templateUrl: `./song-list.component.html`
})
export class SongListComponent {

    editSong!: EditSong;

songs: Song[] = []
searchSong: string = '';
artistName: string = '';
ratingFrom: string = '';
ratingTo: string = '';

constructor(private songService: SongService){}

ngOnInit(): void {
    this.songService.dataRefreshed.subscribe(data => {
        if(data){
            this.songService.getAllSongs().subscribe(data =>{
                console.log(data)
                this.songs = data
            })
        }
    })

    this.songService.getAllSongs().subscribe(data =>{
        console.log(data)
        this.songs = data
    })
}

public onDeleteButtonClick(id: number){
    this.songService.deleteSong(id)
}

public onClickSongItem(song: Song){
    this.songService.focusSong(song)
}

public onEditButtonClick(song: Song){
    this.songService.updatedSong.next(song) 
}

public onNewSongButtonClick(){
    this.songService.createSongSubject.next(true)
}

public onSearch(event: any){
    this.songService.searchSongs(this.searchSong, this.artistName, this.ratingFrom, this.ratingTo).subscribe((x: Song[]) => {
        this.songs = x
    })
}

}