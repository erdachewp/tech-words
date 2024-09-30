import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
import { WordService } from '../../services/word.service';
import { Word } from '../../interfaces/word';
import { AddWordComponent } from '../add-words/add-word.component';
import { WordDetailsComponent } from '../word-details/word-details.component';
import { WordItemComponent } from '../word-item/word-item.component';
@Component({
  selector: 'app-words',
  standalone: true,
  imports: [
    // orderBy
    CommonModule, 
    AddWordComponent, 
    WordDetailsComponent, 
    WordItemComponent],
  templateUrl: './words.component.html',
  styleUrl: './words.component.css',
  providers:[WordService]
})
export class WordsComponent {
  words: any[] = [];
  selectedWord?: Word;
  // showWord: boolean = false;
  // details_show: boolean = false;
  // displayAdd: boolean = true;
  showAddTask: boolean = false;
  constructor(private wordService: WordService){}
  ngOnInit(): void{
    this.getWords();
  }
  getWords(): void{
    this.wordService.getWords().subscribe(
      words => {
        words.sort((a,b)=>{
          if (a.name < b.name){
            return -1;
          } else if (a.name > b.name){
            return 1
          }else{
            return 0;
          }
        });
         this.words = words;
      }
    );
  }
  getWord(term: Word): any{
    for(let i = 0; i < this.words.length; i++){
      if (term.name === this.words[i].name){
        // this.details_show =  true;
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
        (word: any) => {
            this.words.push(word);   
           });
          alert("The word '"+word.name+"' has been added successfully!")
          console.log("Word is being added."+ word.name);
//    word.reset("") ;
//use word form to reset
  //  word.meaning.reset("")
  }
  // onSelect(word: Word){
  //   this.selectedWord = word;
  // }
}
