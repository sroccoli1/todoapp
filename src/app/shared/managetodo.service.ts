import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class ManagetodoService {
  /** A list of Todos. */    
  // todos = [
  //   {title:'Call Kari', description:'History: \n Subject:', completed:true},
  //   {title:'Find course', description:'Browse: OAMK Tek courses :', completed:false},
  //   {title:'Check month strategy', description:'Evaluate 3 options', completed:false},
  // ];

  todos = [
    new Todo('Call Kari','History: \n Subject:'),
    new Todo('Find course','Browse: OAMK Tek courses :'),
    new Todo('Check month strategy', 'Evaluate 3 options')
  ]

  constructor() { }

  /** Add a todo to this.todos - the todo-list. */
  addTodo(valueFromInput: { title: string, description: string, completed:boolean}){ 
    this.todos.push(
      new Todo(
        valueFromInput.title, 
        valueFromInput.description, 
        valueFromInput.completed));
    console.table(this.todos);
  }

  /** @returns this.todos - the todo-list. */
  getTodos(){
    return this.todos;
  }

  // getTodosInArray(){
  //   return this.todos.forEach(element => {
      
  //   });;
  // }

  toConsole(){
    console.table(this.todos);
  }

  // updateTodo(valueFromInput:{title:string, description:string, completed:boolean}){
  //   console.log("Updating ", valueFromInput);
  //   this.todos.forEach((value, index)=>{
  //     if(value.title == valueFromInput.title){
  //       // console.log("index: ", index, "todo: ", this.todos[index]);
  //       this.todos[index] = valueFromInput;
  //     }
  //   });
  // }

  /** Clears this.todos - the todo-list and @returns an empty array of todos. */
  deleteAllTodos(){
    this.todos = [];
    return this.todos;
  }

  /** Delete this todo. */
  deleteTodo(valueFromInput:{title:string, description:string, completed:boolean}){
    console.log("Delete ",valueFromInput);
    this.todos.forEach((value, index)=>{
      if( value.title == valueFromInput.title &&
          value.description == valueFromInput.description) {
        this.todos.splice(index,1);
      }
    });
    // let index = this.todos.indexOf(valueFromInput);
    // console.log("Delete ",valueFromInput.title, " at index ", index);
    // this.todos.splice(0, 1);
    console.table(this.todos);
  }
}
