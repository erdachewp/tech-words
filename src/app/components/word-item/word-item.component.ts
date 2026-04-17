import { Component, Input } from '@angular/core';
import { Word } from '../../interfaces/word';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from "@angular/router";

// "@fortawesome/angular-fontawesome";
// "@fortawesome/fontawesome-svg-core"
// "@fortawesome/free-brands-svg-icons";
// "@fortawesome/free-regular-svg-icons";
//  import { fa-icon } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-word-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './word-item.component.html',
  styleUrl: './word-item.component.css'
})
export class WordItemComponent {
  @Input() theWord!: Word;
  faTimes = faTimes
}
