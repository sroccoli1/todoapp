import { Component } from '@angular/core';
import { 
  FormBuilder, 
  ValidationErrors, 
  ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent{
  constructor(private fb: FormBuilder) { }
  editView:Boolean = false;
  todoDetails = [ {title:'Call Kari', description:'History: \n Subject:'}];

  /** Generate create form dialog and controls. */ 
  // todoForm = this.fb.group({
  //   todoName : [''],
  //   todoDescription: ['']
  // },{ validators: this.createTodoValidator });

  todoForm = this.fb.group({
    todoName : [''],
    todoDescription: ['']
  });

  /** Returns this.projectForm in the console (when you press on submit button) */ 
  onSubmit(){
    console.log(this.todoForm);
    // console.log(this.todoForm.get('todoDescription'));
  }

  /** A custom validator which does not accept a certain expression. 
   * The returns looks like this: forbiddenName:{value: expression} or null */ 
  // createTodoValidator: ValidatorFn = (control: 
  //   FormControl):ValidationErrors | null => {
  //     const name = control.get('todoName'); 
  //     const description = control.get('todoDescription');
  //     return name.value | description.value !== "" ? {creationInfoMin : true} : null;
  // };

  edit(){
    this.editView = true;
  }

  /** Delete the todo */
  delete(){
    console.log("closing");
  }
}
