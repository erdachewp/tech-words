import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Word } from '../interfaces/word';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class WordService {
  // wordsUrlAll = "http://localhost:8400/words"
  wordsUrl = "http://localhost:8400/words"
  constructor(private http: HttpClient) { }
  getWords(): Observable<Word[]>{
    return this.http.get<Word[]>(this.wordsUrl);
  }
  getWordById(_id: string): Observable<Word>{
    const word = `${this.wordsUrl}/${_id}`;
    return this.http.get<Word>(word);
  }
  addWord(word: any): Observable<any>{
    return this.http.post<any>(this.wordsUrl, word, httpOptions);
  }
  updateWord(_id: string, word: Word): Observable<any>{
    const wordUrl = `${ this.wordsUrl }/${_id}`;
    return this.http.put<any>( wordUrl, word , httpOptions)
  }
}
