import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Todo } from '../todo.model';
import { ManagetodoService } from '../managetodo/managetodo.service';

export interface DialogData{
  todotitle: string;
  tododescription : string;
}

@Component({
  selector: 'app-dialogexample',
  templateUrl: './dialogexample.component.html',
  styleUrls: ['./dialogexample.component.css']
})
export class DialogexampleComponent implements OnInit{
  createtodoForm: FormGroup;

  constructor( 
    public dialogRef: MatDialogRef<DialogexampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    public todoService: ManagetodoService) { }
    
  ngOnInit(): void {
    this.createtodoForm = this.fb.group({
      todoName : [''],
      todoDescription: ['']
    })
  }

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
