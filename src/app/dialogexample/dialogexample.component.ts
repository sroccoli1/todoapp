import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ManagetodoService } from '../shared/managetodo.service';
import { Todo } from '../shared/todo.model';

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
    });
  }
 
  /** Get the form values and save them as a new Todo. */
  addTodo(){
    let fromInput = {
      title:this.createtodoForm.get('todoName').value, 
      description:this.createtodoForm.get('todoDescription').value,
      completed:false
    };
    this.todoService.addTodo(fromInput);
  }

  delete(){
    this.createtodoForm.reset();
  }
      
}
