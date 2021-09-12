import { MemberDetailedResolver } from "./_resolvers/member-detailed.resolvers";
import { PreventUnsavedChangesGuard } from "./_guards/prevendt-unsaved-changes.guard";
import { ServerErrorComponent } from "./errors/server-error/server-error.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { TestErrorsComponent } from "./errors/test-errors/test-errors.component";
import { AuthGuard } from "./_guards/auth.guard";
import { UserprofileComponent } from "./userprofile/userprofile.component";
import { CampaignsComponent } from "./campaigns/campaigns.component";
import { MessagesComponent } from "./messages/messages.component";
import { ListsComponent } from "./lists/lists.component";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { MemberEditComponent } from "./members/member-edit/member-edit.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Report1Component } from "./reports/report1/report1.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MemberListComponent},
      {path: 'members/:username', component: MemberDetailComponent, resolve: {member: MemberDetailedResolver}},
      {path: 'member/edit', component: MemberEditComponent, canDeactivate: [PreventUnsavedChangesGuard]},
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'campaigns', component: CampaignsComponent},
      {path: 'reports', component: Report1Component},
      {path: 'userprofile', component: UserprofileComponent},
    ]
  },
  {path: 'errors', component: TestErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
