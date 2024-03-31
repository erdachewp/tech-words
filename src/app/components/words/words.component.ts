import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WordService } from '../../services/word.service';
import { Word } from '../../interfaces/word';

@Component({
  selector: 'app-words',
  standalone: true,
  imports: [CommonModule],
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
}
