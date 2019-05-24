import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card'; 
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';











//Material section
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import { MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './common/header/header.component';
import { AdminHeaderComponent } from './admin/common/admin-header/admin-header.component';
import { DataroomHeaderComponent, EditDataroomPopup } from './dataroom/common/dataroom-header/dataroom-header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditDataroom } from './admin/dashboard/dashboard.component';
import { MyContactsComponent } from './admin/my-contacts/my-contacts.component';
import { FooterComponent } from './common/footer/footer.component';
import { MyTeamsComponent, AddMemberPopup, CreateTeamPopup, CreateNewDataroomPopup, EditDataroomContent} from './admin/my-teams/my-teams.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { OverviewComponent } from './dataroom/overview/overview.component';
import { QueAndAnsComponent } from './dataroom/que-and-ans/que-and-ans.component';
import { DocumentsComponent, CreateFolderPopup,UploadFilePopup} from './dataroom/documents/documents.component';
import { UserAndPermissionComponent } from './dataroom/user-and-permission/user-and-permission.component';
import { UpdatesComponent , SendNotificationPopup} from './dataroom/updates/updates.component';
import { ReportsComponent } from './dataroom/reports/reports.component';
import { WatermarkSettingComponent } from './dataroom/watermark-setting/watermark-setting.component';
import { UserListComponent } from './dataroom/user-and-permission/user-list/user-list.component';
import { ManageAdminComponent } from './dataroom/user-and-permission/manage-admin/manage-admin.component';
import { ManageLaPermissionComponent } from './dataroom/user-and-permission/manage-la-permission/manage-la-permission.component';
import { ManageCategoriesComponent } from './dataroom/que-and-ans/manage-categories/manage-categories.component';
import { RecentDocumentsComponent } from './dataroom/documents/recent-documents/recent-documents.component';
import { UploadStatusComponent } from './dataroom/documents/upload-status/upload-status.component';
import { NotViewDocumentsComponent } from './dataroom/documents/not-view-documents/not-view-documents.component';
import { NotPrintDocumentsComponent } from './dataroom/documents/not-print-documents/not-print-documents.component';
import { NotDownloadDocumentsComponent } from './dataroom/documents/not-download-documents/not-download-documents.component';
import { IndexesReportComponent } from './dataroom/documents/indexes-report/indexes-report.component';
import { TrashDocComponent } from './dataroom/documents/trash-doc/trash-doc.component';
import { DisclaimerComponent } from './dataroom/overview/disclaimer/disclaimer.component';
import { QueDetailsPageComponent } from './dataroom/que-and-ans/que-details-page/que-details-page.component';
import { FolderDetailsComponent } from './dataroom/documents/folder-details/folder-details.component';
import { ActivityByFilesComponent } from './dataroom/reports/activity-by-files/activity-by-files.component';
import { UsersAndGroupsComponent } from './dataroom/reports/users-and-groups/users-and-groups.component';
import { ActivityByDateComponent } from './dataroom/reports/activity-by-date/activity-by-date.component';
import { QAReportsComponent } from './dataroom/reports/qa-reports/qa-reports.component';
import { DownloadeReportsComponent } from './dataroom/reports/downloade-reports/downloade-reports.component';
import { UserStatusComponent } from './dataroom/reports/user-status/user-status.component';
import { IndexReportsComponent } from './dataroom/reports/index-reports/index-reports.component';
import { UsageReportsComponent } from './dataroom/reports/usage-reports/usage-reports.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminHeaderComponent,
    DataroomHeaderComponent,
    DashboardComponent,
    EditDataroom,
    MyContactsComponent,
    FooterComponent,
    MyTeamsComponent,
    AddMemberPopup,
    CreateTeamPopup,
    CreateNewDataroomPopup,
    LoginComponent,
    RegisterComponent,
    ForgotPassComponent,
    OverviewComponent,
    QueAndAnsComponent,
    DocumentsComponent,
    UserAndPermissionComponent,
    UpdatesComponent,
    ReportsComponent,
    EditDataroomPopup,
    WatermarkSettingComponent,
    SendNotificationPopup,
    UserListComponent,
    ManageAdminComponent,
    ManageLaPermissionComponent,
    ManageCategoriesComponent,
    CreateFolderPopup,
    UploadFilePopup,
    RecentDocumentsComponent,
    UploadStatusComponent,
    NotViewDocumentsComponent,
    NotPrintDocumentsComponent,
    NotDownloadDocumentsComponent,
    IndexesReportComponent,
    TrashDocComponent,
    DisclaimerComponent,
    QueDetailsPageComponent,
    EditDataroomContent,
    FolderDetailsComponent,
    ActivityByFilesComponent,
    UsersAndGroupsComponent,
    ActivityByDateComponent,
    QAReportsComponent,
    DownloadeReportsComponent,
    UserStatusComponent,
    IndexReportsComponent,
    UsageReportsComponent
    
    
  
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    PerfectScrollbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule
   
    
    
  ],
  providers: [ 
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],  
  entryComponents: [EditDataroom, DashboardComponent, AddMemberPopup, CreateTeamPopup, CreateNewDataroomPopup, 
    EditDataroomPopup, SendNotificationPopup,CreateFolderPopup,UploadFilePopup,EditDataroomContent],

  bootstrap: [AppComponent]
})
export class AppModule { }
