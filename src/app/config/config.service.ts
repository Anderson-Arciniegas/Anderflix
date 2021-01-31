import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConfigService{
    public movies: string;
    public acclaimed: string;
    public series: string;
    public search: string;
    public genres: string;
    
    constructor(
        private _http: HttpClient
    ){
        this.movies = "https://api.themoviedb.org/3/trending/movie/week?api_key=9de3fbaa5cc8f7713e18d29ce21f7a11"
        this.acclaimed = "https://api.themoviedb.org/3/movie/top_rated?api_key=9de3fbaa5cc8f7713e18d29ce21f7a11&language=en-US&page=1"
        this.series = "https://api.themoviedb.org/3/tv/popular?api_key=9de3fbaa5cc8f7713e18d29ce21f7a11&language=en-US&page=1"
        this.search = "https://api.themoviedb.org/3/search/movie?api_key=9de3fbaa5cc8f7713e18d29ce21f7a11&language=en-US&page=1&include_adult=false&query="
        this.genres = "https://api.themoviedb.org/3/genre/movie/list?api_key=9de3fbaa5cc8f7713e18d29ce21f7a11&language=en-US" 
    }

    //Archivo config.service donde se hacen todas las peticiones a la Api 

    getMovies(): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.movies, {headers: headers});
    }

    getAclaimedMovies(): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.acclaimed, {headers: headers});
    }

    getSeries(): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.series, {headers: headers});
    }

    searchMovie(movie): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.search + movie, {headers: headers});
    }

    getGenres(): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.genres, {headers: headers});
    }

    getDetails(id): Observable<any>{
        let url = "https://api.themoviedb.org/3/movie/"+id+"?api_key=9de3fbaa5cc8f7713e18d29ce21f7a11&language=en-US"
        console.log(url)
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(url, {headers: headers});
    }


}