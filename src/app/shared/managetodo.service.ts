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

  todos:Todo[] = [];

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

  updateTodo(todoId:string, valueFromInput:{title:string, description:string, completed:boolean}){
    console.log("Updating", valueFromInput);
    this.todos.forEach((value, index)=>{
      if(value.id == todoId){
        // console.log("index: ", index, "todo: ", this.todos[index]);
        this.todos[index].title = valueFromInput.title;
        this.todos[index].description = valueFromInput.description;
        this.todos[index].completed = valueFromInput.completed;
      }
    });
  }

  updateStatus(todoId:string, status:boolean){
    console.log("Updating completed property...", status);
    this.todos.forEach((value, index)=>{
      if(value.id == todoId){
        // console.log("index: ", index, "todo: ", this.todos[index]);
        this.todos[index].completed = status;
      }
    });
  }

  /** Clears this.todos - the todo-list and @returns an empty array of todos. */
  deleteAllTodos(){
    this.todos = [];
    return this.todos;
  }

  /** Delete this todo. */
  deleteTodo(id:string){
    console.log("Delete ", id);
    this.todos.forEach((value, index)=>{
      if(value.id == id) {
        this.todos.splice(index,1);
      }
    });
    // let index = this.todos.indexOf(valueFromInput);
    // console.log("Delete ",valueFromInput.title, " at index ", index);
    // this.todos.splice(0, 1);
    console.table(this.todos);
  }
}
