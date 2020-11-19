import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig  } from '@angular/material/dialog';
import { DialogexampleComponent } from '../dialogexample/dialogexample.component';
import { ManagetodoService } from '../shared/managetodo.service';
import { Todo } from '../shared/todo.model';


@Component({
  selector: 'app-all-list-sidenav',
  templateUrl: './all-list-sidenav.component.html',
  styleUrls: ['./all-list-sidenav.component.css']
})

export class AllListSidenavComponent implements OnInit {
  todolist=[];
  @Output() todoSelection = new EventEmitter<{id:string, title:string, description:string, completed:boolean}>();

  /** Injects the Todo data service and the MatDialog. */
  constructor(public dialog: MatDialog, private managetodo:ManagetodoService) { }

  ngOnInit(): void {
    this.todolist = this.managetodo.getTodos();
  }

  onSelect(v:{id:string, title:string, description:string, completed:boolean}){
    this.todoSelection.emit(v);
  }

  /** Prompts a dialog for creating a new todo. 
   * The dialog uses the todo service to add the todo to the list. */
  openDialog():void {
    // Setting dialog config options
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(DialogexampleComponent, dialogConfig);
    
    // Prints in the console when the dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
