import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogexampleComponent } from '../dialogexample/dialogexample.component';

/** @title Create Todo Dialog */
@Component({
  selector: 'app-createtododialog',
  templateUrl: './createtododialog.component.html',
  styleUrls: ['./createtododialog.component.css']
})
export class CreatetododialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

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
