// import { Component, OnInit } from '@angular/core';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.css']
})

export class MyTeamsComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddMemberPopup, {
      width: '350px',
      data: {name: this.name}
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(CreateTeamPopup, {
      // width: '350px'
      width: '650px',
      data: {name: this.name}
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openDialog2(): void {
    const dialogRef = this.dialog.open(CreateNewDataroomPopup, {
      width: '55%',
      data: {name: this.name}
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(EditDataroomContent, {
      width: '55%',
      data: {name: this.name}
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}
@Component({
  selector: 'add-member-popup',
  templateUrl: 'add-member-popup.html',
})
export class AddMemberPopup {

  constructor(
    public dialogRef: MatDialogRef<AddMemberPopup>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'add-new-team-popup',
  templateUrl: 'add-new-team-popup.html',
})
export class CreateTeamPopup {

  constructor(
    public dialogRef: MatDialogRef<CreateTeamPopup>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'create-new-dataroom-popup',
  templateUrl: 'create-new-dataroom-popup.html',
})
export class CreateNewDataroomPopup {

  constructor(
    public dialogRef: MatDialogRef<CreateNewDataroomPopup>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'edit-dataroom',
  templateUrl: 'edit-dataroom.html',
})
export class EditDataroomContent {

  constructor(
    public dialogRef: MatDialogRef<EditDataroomContent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
