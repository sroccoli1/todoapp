import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ManagetodoService } from '../managetodo/managetodo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-dialogexample',
  templateUrl: './dialogexample.component.html',
  styleUrls: ['./dialogexample.component.css']
})
export class DialogexampleComponent implements OnInit{
  createtodoForm: FormGroup;

  constructor( 
    private fb: FormBuilder,
    public todoService: ManagetodoService) { }

  ngOnInit(): void {
    this.createtodoForm = this.fb.group({
      todoName : [''],
      todoDescription: ['']
    })
  }

  // /** Add the todo  */ 
  // addTodo(){
  //   // Print the from in the console
  //   // console.log(this.createtodoForm);
  //   // Get the input values and create an instance of Todo

  //   // Create an instance of Todo 
  //   let aNewTodo = new Todo('Prepare Travel', 'TBD! :-)');
  //   // Add it to the todo list 
  //   this.todoService.addTodo(aNewTodo);
  //   // Print it
  //   //console.log(this.todoService.getTodos().values);
  // }

  /** Add the todo  */ 
  addTodo(){
    // Print the from in the console
    // console.log(this.createtodoForm);
    // Get the input values and create an instance of Todo

    // Create an instance of Todo 
    let fakeValuesFromInput = {title:'Prepare Travel', description:'TBD! :-)'};
    // Add it to the todo list ad print it
    this.todoService.addTodo(fakeValuesFromInput);
  }

  delete(){
    // this.createtodoForm.reset();
  }
      
}
