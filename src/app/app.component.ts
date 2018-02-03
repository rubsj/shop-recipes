import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selRecipe :boolean
  selShopping : boolean;

  selectRecipe(value : boolean){
     this.selRecipe = value;
  }

  selectShopping(value : boolean){
      this.selShopping = value;
  }
}
