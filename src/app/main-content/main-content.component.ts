import { Component, ViewEncapsulation, OnInit } from '@angular/core';
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
export class MainContentComponent implements OnInit{
  constructor(private fb: FormBuilder) { }
  
  editView:Boolean = false;
  appearance = "standard";
  todoDetails = {title:'Call Kari', description:'History: Subject:', completed:false};

  todoForm = this.fb.group({
    todoName : [this.todoDetails.title],
    todoDescription: [this.todoDetails.description],
    todoCompleted:[this.todoDetails.completed]
  });

  ngOnInit(){
  }

  isCompleted:Boolean;

  /** Print the form in the console (when you press on submit button) */ 
  onSubmit(){
    console.log(this.todoForm);
    // console.log(this.todoForm.get('todoDescription'));
  }

  edit(){
    this.editView = true;
    this.appearance = "fill";
    console.log('isCompleted: ',this.isCompleted);
  }

  /** Delete the todo */
  delete(){
    console.log("deleted all and closing...");
    // this.todoDetails = null; //= {title:'', description:'', completed:false}
    this.todoDetails = {title:'', description:'', completed:false}
    this.todoForm.patchValue({
      todoName : [this.todoDetails.title],
      todoDescription: [this.todoDetails.description],
      todoCompleted:[this.todoDetails.completed]
    });
  }

  onCancel(){
    this.editView = false;
    this.appearance = "standard";     
  }

  onCompleted(e:boolean){
    console.log('e: ', e);
    this.todoDetails.completed = e;
    this.isCompleted = e;
    // console.log(this.todoForm.get('todoComplete'));
    // console.log("this todo completed ? ", this.todoDetails.completed);
    // console.log("isCompleted ? ", this.isCompleted);
  }
}
