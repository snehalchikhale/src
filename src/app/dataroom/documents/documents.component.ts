import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent{

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateFolderPopup, {
      width: '400px',
      data: {name: this.name}
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(UploadFilePopup, {
      // width: '350px'
      width: '450px',
      data: {name: this.name}
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'create-folder-popup',
  templateUrl: 'create-folder-popup.html',
})
export class CreateFolderPopup {

  constructor(
    public dialogRef: MatDialogRef<CreateFolderPopup>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'upload-file-popup',
  templateUrl: 'upload-file-popup.html',
})
export class UploadFilePopup {

  constructor(
    public dialogRef: MatDialogRef<UploadFilePopup>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
