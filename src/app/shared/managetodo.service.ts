import { Injectable } from '@angular/core';
import { Todo } from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class ManagetodoService {
  /** A list of Todos */
  //todos: Todo[]=[new Todo('Call Kari', 'History: \n Subject:')];    
  todos = [
    {title:'Call Kari', description:'History: \n Subject:'},
    {title:'Find course', description:'Browse: OAMK Tek courses :'},
    {title:'Check month strategy', description:'Evaluate 3 options'},
  
  ];

  constructor() { }

   /** Add a todo to this.todos - the todo-list. */
  // addTodo(newTodo:Todo){
  //   this.todos.push(newTodo);
  //   console.log('todo added');
  //   console.table(this.todos);
  // }

  /** Add a todo to this.todos - the todo-list. */
  addTodo(valueFromInput: { title: string, description: string}){
    // let newTodo = new Todo(valueFromInput.title, valueFromInput.description);
    // console.log('addTodo, from input :', newTodo);
    this.todos.push(valueFromInput);
    console.table(this.todos);
  }

  /** @returns this.todos - the todo-list. */
  getTodos(){
    return this.todos;
  }

  toConsole(){
    console.table(this.todos);
  }

  /** Clears this.todos - the todo-list and @returns an empty array of todos. */
  clearTodo(){
    this.todos = [];
    return this.todos;
  }
}
