import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector : 'app-toggle01',
  templateUrl : './toggle01.component.html',
  styleUrls : ['./toggle01.component.css']
})
export class Toggle01Component{
    @Input() on : boolean ;
    @Output() toggle : EventEmitter<boolean> = new EventEmitter();

    onClick(){
      this.on = !this.on;
      this.toggle.emit(this.on);
    }

}
