import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  selectedTodo:{id:string, title:string, description:string, completed:boolean};
  details:Boolean = false;

  displayDetails(v:{id:string, title:string, description:string, completed:boolean}){
    // console.log("displayDetails: ", v);
    this.selectedTodo = v;
    this.details = true;
  }
}