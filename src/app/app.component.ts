import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { WordsComponent } from './components/words/words.component';
import { WordDetailsComponent } from './components/word-details/word-details.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    WordsComponent,
    HttpClientModule,
     WordDetailsComponent,
     HeaderComponent,
     AboutComponent,
     FooterComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  plan_List = ["duplicate stop when adding new word",
    "I am thinking adding a property to the object Word "+
    "catch phrase or short phrase "+
    "This catch phrase used to shortly summerize the meaning of the Word "+
    "and it will be displayed next to each word ",
    "another",
    "reference where it is from "
  ];
}
