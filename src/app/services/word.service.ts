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
  getWords(): Observable<any[]>{
    return this.http.get<any[]>(this.wordsUrl);
  }
  addWord(word: any): Observable<any>{
    return this.http.post<any>(this.wordsUrl, word, httpOptions);
  }
}
