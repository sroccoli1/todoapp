import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { ManagetodoService } from '../managetodo/managetodo.service';

@Component({
  selector: 'app-all-list-sidenav',
  templateUrl: './all-list-sidenav.component.html',
  styleUrls: ['./all-list-sidenav.component.css']
})

export class AllListSidenavComponent implements OnInit {
  /** Injects the todo service. */
  constructor(private manageTodoService: ManagetodoService) { }

  ngOnInit(): void {
  }

  /** Prompts a dialog for creating a new todo. 
   * The dialog uses the todo service to add the todo to the list. */
  addTodo(){
    //Prompts a dialog
    
    
    // TBD


    console.log('New todo created!');
  }
}
