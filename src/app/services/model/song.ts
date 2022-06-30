export class Song{
    id: number;
    songname: string;
    artistname: string;
    songurl: string;
    songrating: number;

    constructor(id: number, songname: string, artistname: string, songurl: string, songrating: number){
        this.id = id;
        this.songname = songname;
        this.artistname = artistname;
        this.songurl = songurl;
        this.songrating = songrating;
    }
}