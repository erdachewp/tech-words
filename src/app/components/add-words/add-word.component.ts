import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { WordService } from '../../services/word.service';
import { Word } from '../../interfaces/word';

@Component({
  selector: 'app-add-word',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-word.component.html',
  // styleUrl: './add-word.component.css',
  providers:[WordService]
})
export class AddWordComponent {
  @Output() newWord: Word = { id:"",name:"", meaning:''};
  @Output() addWordEvent = new EventEmitter();
  addWordForm! : FormGroup;
  words: Word[] = []
  constructor(
    private wordService: WordService,
     private fBuild: FormBuilder){}
  ngOnInit(){
    // this.getWords();
    this.addWordForm = this.fBuild.group(
      {
        name: new FormControl(""),
        meaning: new FormControl()
      }
    );
  }
  // look(){
  //   console.log("it is look method.")
  // }
  onSubmit(addWordForm:any){
    console.log("Added new Word to the list.");
    console.log(addWordForm);
     this.addWordEvent.emit(addWordForm)
  }
  addWord(word: Word): void{
    this.wordService.addWord(word).subscribe(
      word => {
         this.words.push(word);
      }
    );
  }
  addDetialedWord(){
  }
}
