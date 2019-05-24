import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin/common/admin-header/admin-header.component';
import { MyTeamsComponent } from './admin/my-teams/my-teams.component';
import { MyContactsComponent } from './admin/my-contacts/my-contacts.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { OverviewComponent } from './dataroom/overview/overview.component';
import { QueAndAnsComponent } from './dataroom/que-and-ans/que-and-ans.component';
import { DocumentsComponent } from './dataroom/documents/documents.component';
import { UserAndPermissionComponent } from './dataroom/user-and-permission/user-and-permission.component';
import { UpdatesComponent } from './dataroom/updates/updates.component';
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


const routes: Routes = [
  // { path: '', component: AdminHeaderComponent},
  { path: 'my-team', component: MyTeamsComponent},
  { path: 'my-contacts', component: MyContactsComponent},
  { path: '', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: RegisterComponent},
  { path: 'forgot', component: ForgotPassComponent},
  { path: 'overview', component: OverviewComponent},
  { path: 'Q&A', component: QueAndAnsComponent},
  { path: 'documents', component: DocumentsComponent},
  { path: 'user&permission', component: UserAndPermissionComponent},
  { path: 'updates', component: UpdatesComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'watermark-setting', component: WatermarkSettingComponent},
  { path: 'all-users-list', component: UserListComponent},
  { path: 'manage-admin-group', component: ManageAdminComponent},
  { path: 'manage-la-permission', component: ManageLaPermissionComponent},
  { path: 'recent-document', component: RecentDocumentsComponent},
  { path: 'upload-status', component: UploadStatusComponent},
  { path: 'not-view-doc', component: NotViewDocumentsComponent},
  { path: 'not-print-doc', component: NotPrintDocumentsComponent},
  { path: 'download', component: NotDownloadDocumentsComponent},
  { path: 'indexs-report', component: IndexesReportComponent},
  { path: 'trash-doc', component: TrashDocComponent},
  { path: 'manage-categories', component: ManageCategoriesComponent},
  { path: 'disclaimer', component: DisclaimerComponent},
  { path: 'details', component: QueDetailsPageComponent},
  { path: 'folder_detail', component: FolderDetailsComponent},
  { path: 'activity-by-files', component: ActivityByFilesComponent},
  { path: 'users-group', component: UsersAndGroupsComponent},
  { path: 'activity-by-date', component: ActivityByDateComponent},
  { path: 'QAreports', component: QAReportsComponent},
  { path: 'download-reports', component: DownloadeReportsComponent},
  { path: 'user-status', component: UserStatusComponent},
  { path: 'index-reports', component: IndexReportsComponent},
  { path: 'usage-reports', component: UsageReportsComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
 }
