import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WordService } from '../../services/word.service';
import { Word } from '../../interfaces/word';
import { AddWordComponent } from '../add-words/add-word.component';
import { WordDetailsComponent } from '../word-details/word-details.component';
import { WordItemComponent } from '../word-item/word-item.component';
@Component({
  selector: 'app-words',
  standalone: true,
  imports: [
    CommonModule, 
    AddWordComponent, 
    WordDetailsComponent, 
    WordItemComponent],
  templateUrl: './words.component.html',
  styleUrl: './words.component.css',
  providers:[WordService]
})
export class WordsComponent {
  words: Word[] = [];
  selectedWord?: Word;
  showWord: boolean = false;
  details_show: boolean = false;
  displayAdd: boolean = true;
  constructor(private wordService: WordService){}
  ngOnInit(){
    this.getWords();
  }
  getWords(): void{
    this.wordService.getWords().subscribe(
      words => {
         this.words = words;
      }
    );
  }
  getWord(term: Word): any{
    for(let i = 0; i < this.words.length; i++){
      if (term.name === this.words[i].name){
        this.details_show =  true;
        this.selectedWord = term; 
        console.log(this.selectedWord);
        return this.selectedWord;
      }else{
        return;
      }
    }
  }
  // showThis(word: Word){
  //   if (word == this.words.getWord(word){
  //     this.details_show =  true;
  //   }
  //   return this.showThis;
  // }
  addword(word: any){
    // term: Word = 
        this.wordService.addWord(word).subscribe(
        (word: Word) => {
            this.words.push(word);   
           });
    console.log("something is happening."+ word.name);
    word.reset("") ;
    word.meaning.reset("")
  }
}
