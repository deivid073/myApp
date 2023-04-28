import { Component } from '@angular/core';
import { FormNewMemberComponent } from './form-new-member/form-new-member.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(FormNewMemberComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }
  openDialogProduct() {
    const dialogRef = this.dialog.open(FormNewMemberComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }
}
