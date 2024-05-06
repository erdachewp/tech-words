import { Injectable, Type } from '@angular/core';
import { DictionaryProfileComponent } from './dictionary-profile.component';
import { DictionaryAdComponent } from './dictionary-ad.component';

@Injectable({ providedIn: 'root' })
export class AdService {
  getAds() {
    return [
      {
        component: DictionaryProfileComponent,
        inputs: { name: 'Dr. IQ', bio: 'Smart as they come' },
      },
      {
        component: DictionaryProfileComponent,
        inputs: { name: 'Bombasto', bio: 'Brave as they come' },
      },
      {
        component: DictionaryAdComponent,
        inputs: {
          headline: 'Hiring for several positions',
          body: 'Submit your resume today!',
        },
      },
      {
        component: DictionaryAdComponent,
        inputs: {
          headline: 'Openings in all departments',
          body: 'Apply today',
        },
      },
    ] as {component: Type<any>, inputs: Record<string, unknown>}[];
  }
}