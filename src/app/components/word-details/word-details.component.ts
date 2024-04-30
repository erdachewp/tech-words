import { Component, Input } from '@angular/core';
import { Word } from '../../interfaces/word';

@Component({
  selector: 'app-word-details',
  standalone: true,
  imports: [],
  templateUrl: './word-details.component.html',
  styleUrl: './word-details.component.css'
})
export class WordDetailsComponent {
   @Input() word: Word = { id:"",name:"", meaning:'', brief:"", getWord(){}};

}
