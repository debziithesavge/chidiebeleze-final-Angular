import { Component, input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  Header = input<string>();
  Text = input<string>();
  Info = input<string>();
  
  @Output() explore = new EventEmitter<void>();

  onExploreClick(): void {
    this.explore.emit();
  }
  
  imgUrl ='https://prium.github.io/Posh/v2.1.0/assets/images/showcase-01.jpg';
 
}
