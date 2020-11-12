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
  todoDetails = {title:'Call Kari', description:'History: Subject:'};

  todoForm = this.fb.group({
    todoName : [''],
    todoDescription: ['']
  });

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
}
