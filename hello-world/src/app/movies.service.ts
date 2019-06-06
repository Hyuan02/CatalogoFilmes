import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genres } from './genres';
import { Movies } from './movies';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient) { }

  getGenres():Observable<Genres>{
    return this._http.get<Genres>('https://api.themoviedb.org/3/genre/movie/list?api_key=239659b9c855f962f4b70a570d8f71bd&language=pt-BR');
}

  getRecentMovies():Observable<Movies>{
    return this._http.get<Movies>('https://api.themoviedb.org/3/movie/popular?api_key=239659b9c855f962f4b70a570d8f71bd&language=pt-BR&page=1');
  }

  getConfig():Observable<Config>{
    return this._http.get<Config>('https://api.themoviedb.org/3/configuration?api_key=239659b9c855f962f4b70a570d8f71bd');
  }

  getGenreMovies(numberGenre):Observable<Movies>{
    return this._http.get<Movies>('https://api.themoviedb.org/3/discover/movie?api_key=239659b9c855f962f4b70a570d8f71bd&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + numberGenre);
  }

  getDesiredMovie(filmeBuscado):Observable<Movies>{
    return this._http.get<Movies>('https://api.themoviedb.org/3/search/movie?api_key=239659b9c855f962f4b70a570d8f71bd&language=pt-BR&query=' + filmeBuscado +'&page=1&include_adult=false');
  }
}
