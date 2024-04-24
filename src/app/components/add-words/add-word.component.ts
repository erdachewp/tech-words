import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { WordService } from '../../services/word.service';
import { Word } from '../../interfaces/word';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-word',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-word.component.html',
  // styleUrl: './add-word.component.css',
  providers:[WordService]
})
export class AddWordComponent {
  @Output() newWord = { id:"",name:"", meaning:'', brief:""};
  @Output() addWordEvent = new EventEmitter();
  name: string = "";
  description: string = "";
  meaning: string = "";
  addWordForm! : FormGroup;
  // display: boolean = true;
  words: Word[] = []
  showAddTask: boolean  = false;
  subscription: Subscription
  constructor(
    private wordService: WordService,
     private fBuild: FormBuilder,
     private uiService: UiService
    ){
      this.subscription = this.uiService.onToggle().subscribe(
        value => this.showAddTask = value
      );
    }
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
    if( !this.name ){
      alert("please provide the word")
    }
    const newWord = {
      name: this.name,
      meaning: this.meaning,
      description: this.description
    };

    this.name = ''
    this.meaning = '';
    this.description = '';
    
    console.log("Added new Word to the list.");
    console.log(addWordForm);
     this.addWordEvent.emit(addWordForm)
  }
  // addWord(word: Word): void{
  //   this.wordService.addWord(word).subscribe(
  //     word => {
  //        this.words.push(word);
  //     }
  //   );
  // }
  addDetialedWord(){
  }
}
