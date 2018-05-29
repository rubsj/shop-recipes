import { Component } from '@angular/core';

@Component({
  selector : 'app-toggle',
  templateUrl : './toggle.component.html'
})
export class ToggleComponent{
  onToggle(on) {
    console.log('toggle', on);
  }
}
