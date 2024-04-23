import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordItemComponent } from './word-item.component';

describe('WordItemComponent', () => {
  let component: WordItemComponent;
  let fixture: ComponentFixture<WordItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
