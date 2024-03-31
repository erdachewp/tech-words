import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Word } from '../interfaces/word';
@Injectable({
  providedIn: 'root'
})
export class WordService {
  wordsUrl = "http://localhost:5100/words"
  constructor(private http: HttpClient) { }
  getWords(): Observable<Word[]>{
    return this.http.get<Word[]>(this.wordsUrl);
  }
}
