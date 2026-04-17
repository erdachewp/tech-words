import { Component } from '@angular/core';
import { WordService } from '../../services/word.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { first } from 'rxjs';
@Component({
  selector: 'app-word-update',
  standalone: true,
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './word-update.component.html',
  styleUrl: './word-update.component.css'
})
export class WordUpdateComponent {
  wordEditingForm : FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    meaning:  new FormControl(),
    other: new FormControl()
  }); 
  constructor(
    private wordService: WordService,
    private fBuild: FormBuilder,
    private route: ActivatedRoute
  ){}
  ngOnInit(){
    this.wordService.getWordById(this.route.snapshot.params['_id']).pipe(
      first()).subscribe({
        next: (word: any)=>{
          this.wordEditingForm =  new FormGroup({
            name: new FormControl(word.name),
            description: new FormControl(word.description),
            meaning:  new FormControl(word.meaning),
            other: new FormControl(word.other)
          })
        },
        error: () => {}
      })
  }
  get f(){ return this.wordEditingForm.controls; }
  addWordGroup(){}
  // get wordsArray(){
  //   return <FormArray> this.wordEditingForm;
  // }
  addWord(){}
  removeWord(){}
  onSubmit(){
    this.wordService.updateWord(
      this.route.snapshot.params['_id'],
      this.wordEditingForm.value).subscribe({
      next: ()=> {
        alert('Word is updated.');
      },
      error: (err)=> { alert('Unable to update the word '+ err.message)}
    })
  }
  closeAlert(){}
}
    // id?: string;
    // name:string;
    // description?: string;
    // meaning?: string;
    // article?: string; // an essay like note about the word
    // brief?: string;
    // source?: string | string[];
    // topic?: string | string[];
    // datePublished?: Date;
    // dateUpdated?:Date | Date[];
    //Artificial Intelligence