import { AuthGuard } from "./_guards/auth.guard";
import { UserprofileComponent } from "./userprofile/userprofile.component";
import { CampaignsComponent } from "./campaigns/campaigns.component";
import { MessagesComponent } from "./messages/messages.component";
import { ListsComponent } from "./lists/lists.component";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
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
      {path: 'member/:id', component: MemberDetailComponent},
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'campaigns', component: CampaignsComponent},
      {path: 'reports', component: Report1Component},
      {path: 'userprofile', component: UserprofileComponent},
    ]
  },

  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
