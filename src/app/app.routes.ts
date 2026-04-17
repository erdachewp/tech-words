import { Routes } from '@angular/router';
import { WordsComponent } from './components/words/words.component';
import { AboutComponent} from './components/about/about.component'
import { WordUpdateComponent} from './components/word-update/word-update.component';
export const routes: Routes = [
    {
        path: '', component: WordsComponent
    },
    {
        path: 'words/update/:_id', component: WordUpdateComponent
    
    },
    {
        path: 'about', component: AboutComponent
    },
];
