import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  ValidationErrors, 
  ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ManagetodoService } from '../shared/managetodo.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MainContentComponent implements OnInit{
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder, 
    private mgtodo: ManagetodoService,
    private router: Router) { }
  
  editView:Boolean = false;
  isFormHidden:Boolean = true;
  //isCompleted:Boolean;
  appearance = "standard";
  todoDetails: Todo;
  todoForm: FormGroup;

  ngOnInit(){
    console.log("OnInit todoform");

    this.route.params.subscribe(
      (params: Params)=>{
        console.log(this.mgtodo.getTodo(params.id).title);
        this.todoDetails = this.mgtodo.getTodo(params.id);
        this.todoForm = this.fb.group({
          title : [this.todoDetails.title],
          description: [this.todoDetails.description],
          completed:[this.todoDetails.completed]
        });
      }
    );

    // this.todoForm.valueChanges.subscribe(
    //   () => { this.todoForm.get('title').setValue(this.todoDetails.title);
    //     this.todoForm.get('description').setValue(this.todoDetails.description);
    //     this.todoForm.get('completed').setValue(this.todoDetails.completed);  
    //     }
    //   // error => {},
    //   // () => {console.log('valueChanges');}
    // );

    this.isFormHidden = false;
    //this.isCompleted = this.todoDetails.completed;
  }

  /** Updates the form if click on another todo. */
  // ngOnChanges(changes: SimpleChanges){
  //   let newtodo: string;
  //   let previoustodo : string;
  //   let changeLog=[];
  //   for (const propName in changes) {
  //     const chng = changes[propName];
  //     newtodo  = JSON.stringify(chng.currentValue);
  //     previoustodo = JSON.stringify(chng.previousValue);
  //     changeLog.push(`${propName}: ${newtodo}`);
  //   }

  //   this.todoDetails = JSON.parse(changeLog[0].substring(12));
    
  //   if(previoustodo !== undefined){ //Prevents error 
  //     this.todoForm.setValue({
  //       title : [this.todoDetails.title],
  //       description: [this.todoDetails.description],
  //       completed:[this.todoDetails.completed]
  //     });
  //   }
  //   this.isFormHidden = false;
  //   this.editView = false ;
  //   //this.isCompleted = this.todoDetails.completed;
  // }

  onSubmit(){
    this.mgtodo.updateTodo(this.todoDetails.id, this.todoForm.value);
    this.editView = false;
  }

  edit(){ 
    this.editView = true;
    this.appearance = "fill";
    //console.log('isCompleted: ', this.isCompleted);
  }

  /** Delete the todo */
  delete(id:string){
    this.mgtodo.deleteTodo(id);
    // this.isFormHidden = true;
    this.router.navigate(['/home']);
  }

  onCancel(){
    this.editView = false;
    this.appearance = "standard";     
  }

  onCompleted(e:boolean){
    this.mgtodo.updateStatus(this.todoDetails.id, e);
    // this.isCompleted = e;
  }
}
