import { Injectable } from '@angular/core';
import { Todo } from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class ManagetodoService {
  /** A list of Todos */
  todos: Todo[]=[
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
    this.todos.push(valueFromInput.title, valueFromInput.description);
    console.table(this.todos);
  }

  /** @returns this.todos - the todo-list. */
  getTodos(){
    return this.todos;
  }

  /** Clears this.todos - the todo-list and @returns an empty array of todos. */
  clearTodo(){
    this.todos = [];
    return this.todos;
  }
}
