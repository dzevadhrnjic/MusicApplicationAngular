export class CreateSong{
    songname: string;
    artistname: string;
    songurl: string;
    songrating: number;

    constructor(songname: string, artistname: string, songurl: string, songrating: number){
        this.songname = songname;
        this.artistname = artistname;
        this.songurl = songurl;
        this.songrating = songrating;
    }
}