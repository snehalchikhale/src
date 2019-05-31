// import { Component, OnInit } from '@angular/core';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent{

  constructor(public dialog: MatDialog) { }
  public config: PerfectScrollbarConfigInterface = {};
  openDialog() {
    
    const dialogRef = this.dialog.open(EditDataroom , {
      width: '650px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  displayedColumns = ['loggedin', 'ipadd'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

}

@Component({
  selector: 'edit-dataroom',
  templateUrl: 'edit-dataroom.html',
})
export class EditDataroom {
  constructor(
    public dialogRef: MatDialogRef<EditDataroom>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


export interface PeriodicElement {
  loggedin: string;
  ipadd: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {loggedin: "21/02/2019 10:43:51", ipadd: '223.229.128.49'}, 
  {loggedin: "21/02/2019 10:43:51", ipadd: '223.229.159.70'},
  {loggedin: "21/02/2019 10:43:51", ipadd: '223.229.159.70'},
  {loggedin: "21/02/2019 10:43:51", ipadd: '223.229.159.70'},
  {loggedin: "21/02/2019 10:43:51", ipadd: '182.70.64.168'},
  {loggedin: "21/02/2019 10:43:51", ipadd: '182.70.64.168'},
  {loggedin: "21/02/2019 10:43:51", ipadd: '182.70.28.57'},
  {loggedin: "21/02/2019 10:43:51", ipadd: '122.170.114.53'},
  {loggedin: "21/02/2019 10:43:51", ipadd: '122.170.114.53'}, 
  {loggedin: "21/02/2019 10:43:51", ipadd: '122.170.114.53'},
];

