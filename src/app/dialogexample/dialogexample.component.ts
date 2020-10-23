import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Todo } from '../todo.model';
import { ManagetodoService } from '../managetodo/managetodo.service';

@Component({
  selector: 'app-dialogexample',
  templateUrl: './dialogexample.component.html',
  styleUrls: ['./dialogexample.component.css']
})
export class DialogexampleComponent implements OnInit{

  constructor( 
    public dialogRef: MatDialogRef<DialogexampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    private fb: FormBuilder,
    public todoService: ManagetodoService) { }
    
  ngOnInit(): void {}

  createtodoForm = this.fb.group({
    todoName : [''],
    todoDescription: ['']
  })

  /** Add the todo  */ 
  addTodo(){
    // Print the from in the console
    console.log(this.createtodoForm);
    // Get the input values and create an instance of Todo
    let newTodoName = this.createtodoForm.get('todoName').value;
    let newTodoDescription = this.createtodoForm.get('todoDescription').value;
    let newTodo = new Todo(newTodoName, newTodoDescription);
    // Add the todo instance 
    this.todoService.addTodo(newTodo);
  }

  delete(){
    this.createtodoForm.reset();
  }

  
}
