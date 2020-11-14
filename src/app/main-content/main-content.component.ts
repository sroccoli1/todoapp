import { Component, ViewEncapsulation } from '@angular/core';
import { 
  FormBuilder, 
  ValidationErrors, 
  ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MainContentComponent{
  constructor(private fb: FormBuilder) { }
  editView:Boolean = false;
  todoDetails = {title:'Call Kari', description:'History: Subject:', completed:false};

  todoForm = this.fb.group({
    todoName : [this.todoDetails.title],
    todoDescription: [this.todoDetails.description],
    todoCompleted:[this.todoDetails.completed]
  });

  isCompleted:Boolean;

  /** Print the form in the console (when you press on submit button) */ 
  onSubmit(){
    console.log(this.todoForm);
    // console.log(this.todoForm.get('todoDescription'));
  }

  edit(){
    this.editView = true;
  }

  /** Delete the todo */
  delete(){
    console.log("closing");
  }

  onCancel(){
    this.editView = false;        
  }

  onCompleted(){
    this.todoDetails.completed = !this.todoDetails.completed;
    this.isCompleted = this.todoDetails.completed;
    // console.log(this.todoForm.get('todoComplete'));
    // this.completed = this.todoForm.get('todoComplete').value;
    console.log("this todo completed ? ", this.todoDetails.completed);
    console.log("isCompleted ? ", this.isCompleted);
  }
}
