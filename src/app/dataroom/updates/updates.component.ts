import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent{

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}
openDialog(): void {
  const dialogRef = this.dialog.open(SendNotificationPopup, {
    width: '60%',
    data: {name: this.name}
  });
  

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}

}

@Component({
  selector: 'send-notification-popup',
  templateUrl: 'send-notification-popup.html',
})
export class SendNotificationPopup {

  constructor(
    public dialogRef: MatDialogRef<SendNotificationPopup>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}