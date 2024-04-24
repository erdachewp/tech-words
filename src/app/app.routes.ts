import { Routes } from '@angular/router';
import { WordsComponent } from './components/words/words.component';
import { AboutComponent} from './components/about/about.component'
export const routes: Routes = [
    {
        path: '', component: WordsComponent
    },
    {
        path: 'about', component: AboutComponent
    },
];
