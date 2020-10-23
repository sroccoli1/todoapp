import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-dialogexample',
  templateUrl: './dialogexample.component.html',
  styleUrls: ['./dialogexample.component.css']
})
export class DialogexampleComponent implements OnInit{

  constructor( 
    public dialogRef: MatDialogRef<DialogexampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo ) { }
    
  ngOnInit(): void {
  }
  
}
