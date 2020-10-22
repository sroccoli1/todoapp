import { Component, OnInit } from '@angular/core';
import { FormControl, AbstractControl, FormBuilder, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  ngOnInit(): void {
  }

  /** Inject a FormBuilder service. */  
  constructor(private fb: FormBuilder) { }

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

  close(){
    console.log("closing");
  }

}
