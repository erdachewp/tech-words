import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WordService } from '../../services/word.service';
import { Word } from '../../interfaces/word';
import { AddWordComponent } from '../add-words/add-word.component';

@Component({
  selector: 'app-words',
  standalone: true,
  imports: [CommonModule,AddWordComponent],
  templateUrl: './words.component.html',
  styleUrl: './words.component.css',
  providers:[WordService]
})
export class WordsComponent {
  words: Word[] = []
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
  addword(word: any){
    this.wordService.addWord(word).subscribe(
      word => {
         this.words.push(word);
      }
    );
    console.log("something is happening."+ word.name);
  }
}
