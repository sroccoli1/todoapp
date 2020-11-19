import { Component, Input, OnInit, ViewEncapsulation, SimpleChanges } from '@angular/core';
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
  isFormHidden:Boolean = true;
  isCompleted:Boolean;
  appearance = "standard";
  @Input() todoDetails:{id:string, title:string, description:string, completed:boolean};
  todoForm: FormGroup;

  ngOnInit(){
    console.log("OnInit todoform");
    this.todoForm = this.fb.group({
      title : [this.todoDetails.title],
      description: [this.todoDetails.description],
      completed:[this.todoDetails.completed]
    });
    this.isCompleted = this.todoDetails.completed;
  }

  /** Updates the form if click on another todo. */
  ngOnChanges(changes: SimpleChanges){
    let newtodo: string;
    let previoustodo : string;
    let changeLog=[];
    for (const propName in changes) {
      const chng = changes[propName];
      newtodo  = JSON.stringify(chng.currentValue);
      previoustodo = JSON.stringify(chng.previousValue);
      changeLog.push(`${propName}: ${newtodo}`);
    }

    this.todoDetails = JSON.parse(changeLog[0].substring(12));
    
    if(previoustodo !== undefined){ //Prevents error 
      this.todoForm.setValue({
        title : [this.todoDetails.title],
        description: [this.todoDetails.description],
        completed:[this.todoDetails.completed]
      });
    }
    this.isFormHidden = false;
    this.editView = false ;
    this.isCompleted = this.todoDetails.completed;
  }

  onSubmit(){
    this.mgtodo.updateTodo(this.todoDetails.id, this.todoForm.value);
    this.editView = false;
  }

  edit(){ 
    this.editView = true;
    this.appearance = "fill";
    console.log('isCompleted: ', this.isCompleted);
  }

  /** Delete the todo */
  delete(id:string){
    this.mgtodo.deleteTodo(id);
    this.isFormHidden = true;
  }

  onCancel(){
    this.editView = false;
    this.appearance = "standard";     
  }

  onCompleted(e:boolean){
    this.mgtodo.updateStatus(this.todoDetails.id, e);
    this.isCompleted = e;
  }
}
