import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Words in Technology';
  showAddTask: boolean = false;
  subscription: Subscription;
  constructor(private uiService: UiService, private router: Router){
    this.subscription =  this.uiService.onToggle().subscribe(
      value => this.showAddTask = value
    );
  }
  //to ensure no memory leaks
  ngOnDestroy(){
      //to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  toggleAddTask(){
    console.log('Event emitted from Button com')
    this.uiService.toggleAddTask();
  }
  hasRoute(route: string){
    return this.router.url === route;
  }
}
