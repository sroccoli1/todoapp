import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  ValidationErrors, 
  ValidatorFn } from '@angular/forms';
import { ManagetodoService } from '../shared/managetodo.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MainContentComponent implements OnInit{
  constructor(private fb: FormBuilder, private mgtodo: ManagetodoService) { }
  
  editView:Boolean = false;
  appearance = "standard";
  @Input() todoDetails:{title:string, description:string, completed:boolean};
  // @Input() todoDetails = {title:'', description:'', completed:false};
  todoForm:FormGroup;

  ngOnInit(){
    this.todoForm = this.fb.group({
      title : [this.todoDetails.title],
      description: [this.todoDetails.description],
      completed:[this.todoDetails.completed]
    });
  }

  isCompleted:Boolean;

  /** Print the form in the console (when you press on submit button) */ 
  onSubmit(){
    console.log("Added: ", this.todoForm.value);
    this.mgtodo.addTodo(this.todoForm.value);
  }

  edit(){
    this.editView = true;
    this.appearance = "fill";
    console.log('isCompleted: ', this.isCompleted);
  }

  /** Delete the todo */
  delete(){
    console.log("deleted all and closing...");
    // this.todoDetails = null; //= {title:'', description:'', completed:false}
    // this.todoDetails = {title:'', description:'', completed:false}
    // this.todoForm.patchValue({
    //   title : [this.todoDetails.title],
    //   description: [this.todoDetails.description],
    //   completed:[this.todoDetails.completed]
    // });
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
