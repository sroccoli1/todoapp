import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogexampleComponent } from '../dialogexample/dialogexample.component';


@Component({
  selector: 'app-all-list-sidenav',
  templateUrl: './all-list-sidenav.component.html',
  styleUrls: ['./all-list-sidenav.component.css']
})

export class AllListSidenavComponent implements OnInit {
  /** Injects the todo service. */
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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
    // TODO
  }
}
