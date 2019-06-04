import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Genres } from './genres';
@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private _http: HttpClient) { }

  getGenres():Observable<Genres>{
    return this._http.get<Genres>('https://api.themoviedb.org/3/genre/movie/list?api_key=239659b9c855f962f4b70a570d8f71bd&language=en-US');
}
}
