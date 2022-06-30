import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CreateSong } from "./model/create.song";
import { EditSong } from "./model/edit.song";
import { Song } from "./model/song";

@Injectable({
    providedIn: 'root'
})
export class SongService{

    dataRefreshed = new Subject<boolean>();
    clickedSong = new Subject<Song>(); 
    updatedSong = new Subject<Song>(); 
    createSongSubject = new Subject<boolean>();

    constructor (private httpClient: HttpClient) {}

    getAllSongs(){
        var songs = this.httpClient.get<Song[]>("http://localhost:9000/api/songs")
        return songs;
    }

    searchSongs(search: string, artist: string, ratingFrom: string, ratingTo: string){
        if(search == '')return this.getAllSongs()
        let songs = this.httpClient.get<Song[]>("http://localhost:9000/api/songs?search=" + search)
        return songs
    }

    createSong(createSong: CreateSong){
        this.httpClient.post("http://localhost:9000/api/songs", createSong).subscribe(x => {
            // kad se dobije response iz create, posalji event true da se treba promjenit lista
             this.dataRefreshed.next(true);
        })
    }

    deleteSong(id: number){
        this.httpClient.delete("http://localhost:9000/api/songs/" + id).subscribe(x => {
            this.dataRefreshed.next(true);
        })
    }

    editSong(id: number, editSong: EditSong){
        this.httpClient.put("http://localhost:9000/api/songs/" + id, editSong).subscribe(x => {
            this.dataRefreshed.next(true)
        })
    }

    focusSong(song: Song){
        this.clickedSong.next(song)
    }

    
}