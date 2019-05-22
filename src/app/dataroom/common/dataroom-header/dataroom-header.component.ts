import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dataroom-header',
  templateUrl: './dataroom-header.component.html',
  styleUrls: ['./dataroom-header.component.css']
})
export class DataroomHeaderComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}
openDialog(): void {
  const dialogRef = this.dialog.open(EditDataroomPopup, {
    width: '70%',
    data: {name: this.name}
  });
  

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}

}

@Component({
  selector: 'edit-dataroom-popup',
  templateUrl: 'edit-dataroom-popup.html',
})
export class EditDataroomPopup {

  constructor(
    public dialogRef: MatDialogRef<EditDataroomPopup>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
