import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class ManagetodoService {
  /** A list of Todos. */    
  todos = [
    {title:'Call Kari', description:'History: \n Subject:'},
    {title:'Find course', description:'Browse: OAMK Tek courses :'},
    {title:'Check month strategy', description:'Evaluate 3 options'},
  ];

  constructor() { }

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

  /** Delete this todo. */
  delete(valueFromInput:{title:string, description:string}){
    this.todos.splice(this.todos.indexOf(valueFromInput));
  }
}
